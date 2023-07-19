require('dotenv').config()
const port = process.env.PORT || 4000;

const express = require('express');
const carRoutes = require('./routes/carRoutes')
const middlewareLogReq = require('./middleware/logs');
const upload = require('./middleware/multer');

const app = express();

app.use(middlewareLogReq);
app.use(express.json());
app.use(express.static('public/images'))

app.use('/api', carRoutes);
app.post('/upload',upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload Success'
    })
})
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
})