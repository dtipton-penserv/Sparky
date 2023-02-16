import React, { Component } from "react";
//import express from 'express';
//import bodyParser from 'body-parser';
//const sql = require('sql');
//const app = express();
//var connection = require('express-myconnection');

const Menu = function() {

/*    app.use(bodyParser.json());

    connection(sql, {
        host: 'localhost',
        user: 'userEHX',
        password: 'password',
        port: 3306,
        database: 'sampledb'
    })*/

    return (
        <div align="center">
            <h1>Sparky</h1>

            <form>
                <select name="months" id="months">
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sept">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                </select>
                <br/>
                Select a vendor for which to print invoices:

                <select name="vendors" id="vendors">
                    <option value="asdf">asdf</option>
                </select>

            </form>
         </div>
    );
}

export default Menu;