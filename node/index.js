import Express from 'express';
import cors from 'cors';
import data from './data.js';

const app = Express();
app.use(cors());
const port = 8000;

app.get("/maps/:location", (req, res) => {
    res.json(data.find((map) => {
        return req.params.location === map.location
    }))
});

app.listen(port, () => console.log("listening on port " + port))