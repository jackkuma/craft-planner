import React from 'react';

const uniq = (elm, idx, arr) => arr.indexOf(elm) === idx;

export default ({ recipes }) => {
  const products = recipes.map(r => r.name).filter(uniq);

  const materials = recipes
    .reduce(
      (acc, { materials }) => [...acc, ...materials.map(m => m.name)],
      products,
    )
    .filter(uniq);

  return (
    <>
      <datalist id="products">
        {products.map(key => (
          <option key={key} value={key} />
        ))}
      </datalist>
      <datalist id="materials">
        {materials.map(key => (
          <option key={key} value={key} />
        ))}
      </datalist>
    </>
  );
};
