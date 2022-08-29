import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import {locationsRoutes} from './location.routes.js'
import {chargersRoutes} from './charger.routes.js'

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/locations', locationsRoutes);
app.use('/charger', chargersRoutes);
app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});