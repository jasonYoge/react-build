import { combineReducers } from 'redux';
import UpdateList from './reducer_childs/update_list_reducer';
import { addReducer } from './reducer_util';
//  add reducers
addReducer(UpdateList);
// export result reducer
const result = combineReducers(addReducer());

export default result;
