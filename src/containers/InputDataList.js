import { connect } from 'react-redux';

import InputDataList from '../components/InputDataList';

export default connect(({ draft: recipes }) => ({ recipes }))(InputDataList);
