import React from 'react';

import RecipeItem from '../containers/RecipeItem';
import ActionButton from './ActionButton';

export default ({ recipes = [], addRecipe = () => {} }) => (
  <table className="table table-dark">
    <thead>
      <tr>
        <th>Product</th>
        <th>Materials</th>
      </tr>
    </thead>
    <tbody>
      {recipes.map((recipe, idx) => (
        <RecipeItem key={idx} recipe={recipe} />
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={2}>
          <ActionButton type="add" onClick={addRecipe} />
        </td>
      </tr>
    </tfoot>
  </table>
);
