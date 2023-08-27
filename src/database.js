const fs = require('fs/promises');
const path = require('path');

const databasePath = path.join(__dirname, '../db.json');

class Database {
  constructor() {
    this._database = {}; 
    fs.readFile(databasePath, 'utf8')
      .then((data) => {
        this._database = JSON.parse(data);
      })
      .catch(() => {
        this._persist();
      });
  }

  _persist() {
    fs.writeFile(databasePath, JSON.stringify(this._database));
  }

  select(table) {
    const data = this._database[table] ?? [];
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this._database[table])) {
      this._database[table].push(data);
    } else {
      this._database[table] = [data];
    }

    this._persist();
    return data;
  }

  update(table, id ,title, description, completed) {
    const task = this._database[table].find((task) => task.id === id); 
    if (task) {
      
      if(title != undefined){
        task.title = title;
      }
      if(description != undefined){
        task.description = description;
      }
      if(completed != undefined){
        task.completed = completed;
      }
      this._persist();
      return task;
    }
    return null;
  }
  delete(table, id) {
    const taskIndex = this._database[table].findIndex((task) => task.id === id); 
    if (taskIndex !== -1) {
      const deletedTask = this._database[table].splice(taskIndex, 1)[0]; 
      this._persist();
      return deletedTask;
    }
    return null;
  }
}



module.exports = {
  Database,
};
