
const TABLE = 'user';

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }
  function list() {
    return store.list(TABLE);
  }
  function get(id) {
    return store.get(TABLE, id);
  }
  function upsert(id) {
    return store.get(TABLE, id);
  }

  return {
			list,
			get,
			upsert,
		};
}