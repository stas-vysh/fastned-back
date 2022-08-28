const express = require("express");
const cors = require("cors")

const PORT = process.env.PORT || 3001;
const app = express();

const userRouter = require('./routes/location.routes');

app.use(cors())
app.use(express.json());
app.use('/locations', userRouter);


app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});