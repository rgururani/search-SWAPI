
export const requireAuth = (store) => {
  return  (nextState, replace, callback) => {
    if (!store.getState().user) {
      replace({
        pathname: '/NotValid',
        query: Object.assign({}, nextState.location.query, {
          redirect: nextState.location.pathname,
        }),
      });
    }
    callback();
  };
};

