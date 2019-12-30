import { connect } from 'react-redux';

import { setMaterial, removeMaterial } from '../actions';
import MaterialItem from '../components/MaterialItem';

export default connect(
  null,
  (dispatch, { material }) => ({
    setMaterial: value => dispatch(setMaterial({ material, value })),
    removeMaterial: () => dispatch(removeMaterial({ material })),
  }),
)(MaterialItem);
