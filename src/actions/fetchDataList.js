import fetch from 'isomorphic-fetch';

export const SHOW_LOADING = 'SHOW_LOADING';
export const RECEIVED_DATA = 'RECEIVED_DATA';
export const DATA_TOTAL_SIZE = 'DATA_TOTAL_SIZE';
export const COMPONENT_FINISHED = 'COMPONENT_FINISHED';
//  show loading image
export function showLoading (display) {
    return { type: SHOW_LOADING, display };
}
//  change display state of blog-loading component
export function changeFetchState(fetchState) {
    return { type: IS_FETCHING, fetchState };
}
//  received data from server
export function changeData(data) {
    return { type: RECEIVED_DATA, data };
}
//  if blog-list-item is rendered, then plus 1
export function finishedOne () {
    return { type: COMPONENT_FINISHED };
}
//  set total size of data list
export function setTotalSize (size) {
    return { type: DATA_TOTAL_SIZE, size };
}

export function getData () {
    //  return a thunk function
    //  this function get two params by redux-thunk module
    //  dispatch and getState
    return function (dispatch, getState) {
        //  return a promise object as a result of outer dispatch function
        return fetch('http://www.yangwenjie.net.cn/api/bloglist')
            .then((res) => {
                return res.json();
            }).then((json) => {
                if (!json.length) {
                    throw new Error('Fetched a wrong data which length is null from server.');
                }
                dispatch(changeData(json));
                dispatch(showLoading(true));
            }).catch((err) => {
                throw new Error(err);
            });
    }
}

export default const blogList = {

}
