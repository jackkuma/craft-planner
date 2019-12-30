import { connect } from 'react-redux';

import { setPlan, addPlan, removePlan } from '../actions';
import CraftPlanner from '../components/CraftPlanner';

export default connect(
  ({ plans }) => ({ plans }),
  { setPlan, addPlan, removePlan },
)(CraftPlanner);
