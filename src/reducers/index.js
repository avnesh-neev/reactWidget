import { combineReducers } from 'redux';
import { SetTableRow } from './TableRowContainer'

const rootReducer = combineReducers({
  tableRows: SetTableRow
});

export default rootReducer;
