//  fetch article content

let fetchArticle = (state = '', action) => {
    switch (action.type) {
        case 'RECEIVED_CONTENT':
            return action.content;
        default:
            return state;
    }
}

export default fetchArticle;
