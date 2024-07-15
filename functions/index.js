import express from "express";
import request from "request";
import serverless from "serverless-http";

const app = express();
const API_URL =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"; // Replace this URL with your own

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api", (_req, res) => {
  request({ url: `${API_URL}` }, (_error, _response, body) => {
    res.send(body);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

export default serverless(app);
