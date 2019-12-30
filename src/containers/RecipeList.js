import { connect } from 'react-redux';

import { addRecipe } from '../actions';
import RecipeList from '../components/RecipeList';

export default connect(
  ({ draft: recipes }) => ({ recipes }),
  { addRecipe },
)(RecipeList);
