const { TinyDB } = require('./tinydb');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const db = new TinyDB();

app.use(express.json());
app.use(cors());

app.post("/set", (req, res) => {
    db.insert("data", req.body);
    res.json({ message: 'done' });
});

app.post("/delete", (req, res) => {
    db.delete("data");
    res.json({ message: 'done' });
});

app.get("/", (req, res) => {
    res.json({
        message: 'working',
        data: db.retrieve("data"),
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});