import fetch from 'isomorphic-fetch';

//  Type
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const RECEIVED_CONTENT = 'RECEIVED_CONTENT';

//  Creators
export const receivedContent = (content) => ({ type: RECEIVED_CONTENT, content });
export const fetchArticleCreator = (articleId) => (dispatch, getState) => {
    return fetch(`http://www.yangwenjie.net.cn/api/article/${articleId}`)
                .then((res) => {
                    console.log('article content: ', res);
                    console.log(res.body);
                    console.log(res.body.getReader());
                    console.log(res.text());
                    var reader = res.body.getReader();
                    reader.read().then(function processResult (reault) {
                        console.log(result);

                        if (result.done) {
                            return;
                        }

                        return reader.read().then(processResult);
                    });
                });
}
