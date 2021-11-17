// Redux authorization 
let store;
export const injectStore = _store => {
  store = _store
}

export default authLink = store.subscribe(() => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
