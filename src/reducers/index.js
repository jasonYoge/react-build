import { combineReducers } from 'redux';
import blogList from './blogListReducer';
import onScroll from './onScrollReducer';
import fetchArticle from './fetchArticleReducer';
import showLoading from './showLoadingReducer';

export default combineReducers({
    blogList,
    onScroll,
    content: fetchArticle,
    showLoading: showLoading
});
