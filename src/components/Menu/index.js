import React, { Component } from "react";

const Menu = function() {

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