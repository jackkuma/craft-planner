import { connect } from 'react-redux';

import { setRecipe, removeRecipe } from '../actions';
import RecipeItem from '../components/RecipeItem';

export default connect(
  null,
  (dispatch, { recipe }) => ({
    setRecipe: value => dispatch(setRecipe({ recipe, value })),
    removeRecipe: () => dispatch(removeRecipe({ recipe })),
  }),
)(RecipeItem);
