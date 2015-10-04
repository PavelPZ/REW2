namespace reactMddleware {
  //D:\react\redux-tutorial-master\12_src\src\promise-middleware.js
  export function promiseMiddleware() {
    return next => action => {
      const { promise, types } = action

      if (!promise) return next(action)

      const [REQUEST, SUCCESS, FAILURE] = types

      next({ type: REQUEST })

      return promise().then(
        result => next({ result, type: SUCCESS }),
        error => next({ error, type: FAILURE })
      );
    }
  }
}