import { connect } from 'react-redux';

import CraftPlannerResult from '../components/CraftPlannerResult';

export default connect(({ recipes }) => ({ recipes }))(CraftPlannerResult);
