let onScroll = (state = 0, action) => {
    switch (action.type) {
        case 'ON_SCROLL':
            return action.scrollHeight;
        default:
            return state;
    }
}

export default onScroll;
