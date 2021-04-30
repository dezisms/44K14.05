import express from "express";

//config view engine for an express app
let configviewEngine = (app) => {
    app.use(express.static('./source/public'));
    app.set("view engine", "ejs");
    app.set("views", "./source/views");
};

module.exports = configviewEngine;
