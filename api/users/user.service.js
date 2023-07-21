const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into customer(fullname, email, password, phone, isadmin) 
            values(?,?,?,?,?)`,
            [
                data.full_name,
                data.email,
                data.password,
                data.phone,
                data.is_admin
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};