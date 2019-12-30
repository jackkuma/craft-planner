import React from 'react';

import MaterialList from '../containers/MaterialList';
import Input from './Input';
import ActionButton from './ActionButton';

export default ({
  recipe = {},
  setRecipe = () => {},
  removeRecipe = () => {},
}) => (
  <tr>
    <td>
      <form className="form-inline">
        <Input
          value={recipe.name}
          onChange={e => setRecipe({ name: e.target.value })}
          list="products"
        />
        <ActionButton type="remove" onClick={removeRecipe}>
          &times;
        </ActionButton>
      </form>
    </td>
    <td>
      <MaterialList materials={recipe.materials} />
    </td>
  </tr>
);
