import { IS_FETCHING, RECEIVED_DATA, COMPONENT_FINISHED, DATA_TOTAL_SIZE } from '../../actions/fetchDataList';
/**
  * update blog list state
  * @param {Object} state list data of blog
  * @param {Object} action state type object
  * @return {Object} state new state of function
  */
function updateListitems (state = [], action) {
    switch (action.type) {
        case RECEIVED_DATA:
            return action.data;
        default:
            return state;
    }
}
/**
  * show progress bar
  * @param {Boolean} state show state of progress bar
  * @param {Object} action state type object
  * @return {Object} state new state of function
  */
function showProgressBar (state = true, action) {
    switch (action.type) {
        case IS_FETCHING:
            return action.fetchState;
        default:
            return state;
    }
}
/**
  * counting finished state of list
  * @param {Object} state object of total size and finished
  * @param {Object} action state type object
  * @return {Object} state new state of function
  */
  function handleFinishedCount (state = { finished: 0, size: 0 }, action) {
    let newState;
    switch (action.type) {
        case COMPONENT_FINISHED:
            newState = Object.assign({}, state);
            newState.finished = state.finished + 1;
            if (newState.finished > state.size) {
                throw new Error('Finished size bigger than total size.Please cheak out.');
            }
            return newState;
        case DATA_TOTAL_SIZE:
            newState = Object.assign({}, state);
            newState.size = action.size;
            newState.finished = 0;
            return newState;
        default:
            return state;
    }
  }

//  export
export default {
    data: updateListitems,
    fetchState: showProgressBar,
    count: handleFinishedCount
}
