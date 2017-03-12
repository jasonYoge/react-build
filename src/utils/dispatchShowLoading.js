import { showLoadingCreator } from '../actions/showLoadingAction';

const dispatchShowLoading = (nextState, replaceState) => {
    if (this.dispatch)
        this.dispatch(showLoadingCreator(true));
    else
        throw new Error('no such dispatcher in func:dispatchShowLoading.');
}

export default dispatchShowLoading;
