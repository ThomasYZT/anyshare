import mysql from 'mysql';
let db = mysql.createPool({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '123456',
    database : 'test'
});

db.getConnection((err, connection) => {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT * FROM user', function (error, results, fields) {
        console.log(results);
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});

export default db;
