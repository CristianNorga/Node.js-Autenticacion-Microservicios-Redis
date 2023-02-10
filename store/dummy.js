const db = {
  user: [
    {id: 1, name: 'cristian'}
  ]
};

async function list(table){
  return await db[table];
}

async function get(table, id) {
  let col = await list(table);
  return col.filter(item => item.id == id)[0] || null;
}

async function upsert(table, data){
  db[table].push(data);
  return 'created'
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list, get, upsert, remove
}