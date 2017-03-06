export const addReducer = (() => {
    let reducers = {};
    return  (oldOne) => {
        if (oldOne) {
            reducers = {
                ...reducers, ...oldOne
            };
        }
        return reducers;
    }
})();
