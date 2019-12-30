import React from 'react';

import CraftPlannerResult from '../containers/CraftPlannerResult';
import Input from './Input';
import ActionButton from './ActionButton';

const Item = ({ name, count, setName, setCount, remove }) => (
  <tr>
    <td>
      <Input
        list="products"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </td>
    <td>
      <Input
        type="number"
        value={count}
        onChange={e => setCount(parseInt(e.target.value, 10))}
      />
    </td>
    <td>
      <ActionButton type="remove" onClick={remove} />
    </td>
  </tr>
);

export default ({
  plans = [],
  setPlan = () => {},
  addPlan = () => {},
  removePlan = () => {},
}) => (
  <div>
    <table className="table table-dark">
      <thead>
        <th>Product</th>
        <th>Count</th>
        <th />
      </thead>
      <tbody>
        {plans.map((plan, idx) => (
          <Item
            key={idx}
            name={plan.name}
            count={plan.count}
            setName={name => setPlan({ plan, value: { name } })}
            setCount={count => setPlan({ plan, value: { count } })}
            remove={() => removePlan({ plan })}
          />
        ))}
      </tbody>
      <tfoot>
        <ActionButton type="add" onClick={addPlan} />
      </tfoot>
    </table>
    <CraftPlannerResult request={plans} />
  </div>
);
