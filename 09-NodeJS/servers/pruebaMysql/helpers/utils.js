const executeQuery = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    executeQuery
}