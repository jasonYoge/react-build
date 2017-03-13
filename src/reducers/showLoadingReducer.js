//  show loading page
let showLoading = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_LOADING':
            return action.showLoading;
        default:
            return state;
    }
}

export default showLoading;
