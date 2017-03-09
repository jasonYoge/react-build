import { combineReducers } from 'redux';
import blogList from './blogListReducer';
import onScroll from './onScrollReducer';

export default combineReducers({
    blogList,
    onScroll
});
