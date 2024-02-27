const express = require("express");
const app = express();
const cors = require("cors");
const port = 4090;
const bodyParser = require("body-parser");
const { fact } = require("./fact.js");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Server is running on port " + port));

function sum(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
        a += i;
    }
    return a;
}

app.post("/sum", (req, res) => {
    const v = req.body.value;
    const result = `Sum of ${v} : ` + sum(v);
    res.status(200).json({ result: result });
});


app.get("/fact", (req, res) => {
    let f = req.query.value;
    res.send(fact(f));
});

const {rev}=require("./rev.js");

app.get("/rev",(req,res)=>{
    const r=req.headers.value;
    res.send(rev(r));
})




app.listen(port, () => console.log(`\n\t Server is running on port ${port}`));
