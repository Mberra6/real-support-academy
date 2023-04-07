const db = require('../config/db');



class User {
    constructor(firstName, lastName, email, password, username){
        this.firstName  = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.username = username;
    }

    save = () => {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        let sql = `
        INSERT INTO users(
            first_name,
            last_name,
            email,
            password,
            username,
            created_at
        )
        VALUES(
            '${this.firstName}',
            '${this.lastName}',
            '${this.email}',
            '${this.password}',
            '${this.username}',
            '${createdAtDate}'
        );
        `;

        return db.execute(sql);
    }

    static findByEmail = (email) => {
        let sql = `SELECT * FROM users WHERE email = '${email}';`;

        return db.execute(sql);
    }

    static findByUsername = (username) => {
        let sql = `SELECT * FROM users WHERE username = '${username}';`;

        return db.execute(sql);
    }

    static findById = (id) => {
        let sql = `SELECT * FROM users WHERE user_id = '${id}';`;

        return db.execute(sql);
    }

    static getIdByEmail = (email) => {
        let sql = `SELECT user_id FROM users where email = '${email}';`

        return db.execute(sql);
    }

    static getIdByUsername = (username) => {
        let sql = `SELECT user_id FROM users where username = '${username}';`

        return db.execute(sql);
    }
}




module.exports = User;