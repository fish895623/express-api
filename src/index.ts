import express from "express";

import aaa from "./aaa";

const app = express();
app.use("/aaa", aaa);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

switch (process.env.PROD) {
  case "test":
    break;
  /* istanbul ignore next */
  default:
  case "development":
  case "production":
    app.listen(3000);
}

export = app;
