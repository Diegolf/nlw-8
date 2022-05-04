import express from "express";

const app = express();

app.get('/', (req, res) => {
   return res.status(200).send();
});

app.listen(3333, () => {
   console.log("HTTP Server Running.");
});