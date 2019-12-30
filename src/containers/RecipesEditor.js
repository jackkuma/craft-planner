import { connect } from 'react-redux';

import { commitDraft, discardDraft } from '../actions';
import RecipesEditor from '../components/RecipesEditor';

export default connect(
  ({ draft, recipes }) => ({
    isDirty: JSON.stringify(draft) !== JSON.stringify(recipes),
  }),
  { commitDraft, discardDraft },
)(RecipesEditor);
