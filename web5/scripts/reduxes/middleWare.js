var reactMddleware;
(function (reactMddleware) {
    //D:\react\redux-tutorial-master\12_src\src\promise-middleware.js
    function promiseMiddleware() {
        return function (next) { return function (action) {
            var promise = action.promise, types = action.types;
            if (!promise)
                return next(action);
            var REQUEST = types[0], SUCCESS = types[1], FAILURE = types[2];
            next({ type: REQUEST });
            return promise().then(function (result) { return next({ result: result, type: SUCCESS }); }, function (error) { return next({ error: error, type: FAILURE }); });
        }; };
    }
    reactMddleware.promiseMiddleware = promiseMiddleware;
})(reactMddleware || (reactMddleware = {}));
