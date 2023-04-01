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
        let sql = `
        INSERT INTO users(
            first_name,
            last_name,
            email,
            password,
            username
        )
        VALUES(
            '${this.firstName}',
            '${this.lastName}',
            '${this.email}',
            '${this.password}',
            '${this.username}'
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
}




module.exports = User;