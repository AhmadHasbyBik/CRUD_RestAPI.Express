require('dotenv').config()
const port = process.env.PORT || 4000;

const express = require('express');
const carRoutes = require('./routes/carRoutes')
const middlewareLogReq = require('./middleware/logs');

const app = express();

app.use(middlewareLogReq);
app.use(express.json());

app.use('/api', carRoutes);

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})