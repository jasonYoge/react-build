import fetch from 'isomorphic-fetch';

//  Type
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const RECEIVED_CONTENT = 'RECEIVED_CONTENT';

//  Creators
export const receivedContent = (content) => ({ type: RECEIVED_CONTENT, content });
export const fetchArticleCreator = (articleId) => (dispatch, getState) => {
    return fetch(`http://www.yangwenjie.net.cn/api/article/${articleId}`)
                .then(res => {
                    return res.text();
                }).then(text => {
                    if (!text.length) {
                        throw new Error('Fetched a wrong data which length is null from server.');
                    }
                    dispatch(receivedContent(text));
                });
}
