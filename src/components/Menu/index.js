import React, { Component } from "react";

const sql = require('sql');
const app = express();
var connection = require('express-myconnection');

const Menu = function() {

    app.use(bodyParser.json());

    connection(sql, {
        host: 'localhost',
        user: 'userEHX',
        password: 'password',
        port: 3306,
        database: 'sampledb'
    })

    String[] months = {
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"};

    return (
        <div align="center">
            <h1>Sparky</h1>

            <form>
                Select a vendor for which to print invoices:
                <select name="vendors" id="vendors">
                    <option value="asdf">asdf</option>
                </select>
            </form>
         </div>
    );
}

export default Menu;