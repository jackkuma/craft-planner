import React from 'react';

const multiply = (materials = [], multiplier = 1) =>
  materials.map(({ name, count }) => ({ name, count: count * multiplier }));

const expand = (request = [], recipes = []) =>
  request.map(({ name, count }) => {
    const recipe = recipes.find(r => r.name === name);
    return {
      name,
      count,
      materials: recipe && expand(multiply(recipe.materials, count), recipes),
    };
  }, {});

const flatten = (list = []) =>
  list.reduce(
    (acc, { materials = [] }) => [...acc, ...flatten(materials)],
    list,
  );

const merge = (list = []) =>
  list.reduce(
    (acc, item) =>
      acc.every(r => r.name !== item.name)
        ? [...acc, item]
        : acc.map(r =>
            r.name !== item.name ? r : { ...r, count: r.count + item.count },
          ),
    [],
  );

const Item = ({ name, count }) => (
  <div>
    <label>{name}</label>
    <label className="badge badge-primary ml-2">{count}</label>
  </div>
);

export default ({ request = [], recipes = [] }) => {
  const result = expand(request, recipes);
  const merged = merge(flatten(result));
  const craftable = merged.filter(m => m.materials);
  const raw = merged.filter(m => !m.materials);

  return (
    <table className="table table-dark">
      <thead>
        <th>Craftable Products</th>
        <th>Raw Materials</th>
      </thead>
      <tbody>
        <td>
          {craftable.map(item => (
            <Item key={item.name} {...item} />
          ))}
        </td>
        <td>
          {raw.map(item => (
            <Item key={item.name} {...item} />
          ))}
        </td>
      </tbody>
    </table>
  );
};
