const mysql = require('mysql');

module.exports = class ConexaoMySQL {

    constructor() {
        this.options = {
            connectionLimit: 10,
            host: 'us-cdbr-east-04.cleardb.com',
            user: 'b15ca47b5ae60c',
            password: '784ce5a2',
            database: 'heroku_ea408c0af5a5def'
        }

        this.connection = mysql.createPool(this.options)
    }

    query(sql) {
        return new Promise((res, rej) => {

            this.connection.query(sql, (error, results) => {

                if (error)
                    rej(error)

                res(JSON.parse(JSON.stringify(results)))

                this.connection.end((err) => {
                    if (error)
                        console.log('errro');
                })

            })

        })
    }

}


