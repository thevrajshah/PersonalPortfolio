import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import template from "./template";

const server = express();

server.use("/build", express.static("assets"));

server.get("/", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    template({ body: appString, title: "Hello World from the Server." })
  );
});

server.listen(6969);
