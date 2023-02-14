const db = {
  user: [
    {id: 1, name: 'cristian', username: 'admin'}
  ]
};

async function list(table){
  return await db[table] || [];
}

async function get(table, id) {
  let col = await list(table);
  return col.filter(item => item.id == id)[0] || null;
}

async function upsert(table, data){
  if(!db[table]){
    db[table] = [];
  }
  db[table].push(data);
  // console.log(db)
  return 'created'
}

async function remove(table, id) {
  return true;
}

async function query(table, query) {
  let col = await list(table);
  let keys = Object.keys(query);
  let key = keys[0];
  return col.filter((item) => item[key] == query[key])[0] || null;
}

module.exports = {
  list, get, upsert, remove, query
}