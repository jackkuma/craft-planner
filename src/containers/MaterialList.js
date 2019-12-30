import { connect } from 'react-redux';

import { addMaterial } from '../actions';
import MaterialList from '../components/MaterialList';

export default connect(
  null,
  (dispatch, { materials }) => ({
    addMaterial: () => dispatch(addMaterial({ materials })),
  }),
)(MaterialList);
