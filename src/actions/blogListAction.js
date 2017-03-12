import fetch from 'isomorphic-fetch';

//  Type
export const FETCH_BLOG_LIST = 'FETCH_BLOG_LIST';
export const RECEIVED_DATA = 'RECEIVED_DATA';

//  Creators
export const receivedData = (data) => ({ type: RECEIVED_DATA, data });
export const fetchBlogList = () => (dispatch, getState) => {
    return fetch('http://www.yangwenjie.net.cn/api/bloglist')
                .then((res) => {
                    return res.json();
                }).then((json) => {
                    if (!json.length) {
                        throw new Error('Fetched a wrong data which length is null from server.');
                    }
                    dispatch(receivedData(json));
                }).catch((err) => {
                    throw new Error(err);
                });
}
