import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("Players.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS Players (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL, puntos INTEGER NOT NULL);",
          [],
          () => resolve(),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
    
  };

  export const SavePlayerDB = (nombre, puntos) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO Players (nombre, puntos) VALUES (?, ?);",
          [nombre, puntos],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });

    return promise;
};

export const SaveDataDB = (nombre, puntos, name2) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE Players SET nombre=(?), puntos=(?) WHERE nombre=(?)`,
        [nombre, puntos, name2],
        (_, result) => resolve(result),
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const LoadPlayerDB = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Players",
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err)
        );
      });
    });
  
    return promise;
  };
