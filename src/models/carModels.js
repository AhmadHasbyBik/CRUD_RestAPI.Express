const pool = require('../config/database')

const getAllCars = () => {
    const SQLquery = 'SELECT * FROM car';
    return pool.execute(SQLquery);
}

const getCarById = (id) => {
    const SQLquery = `SELECT * FROM car WHERE id='${id}'`;
    return pool.execute(SQLquery);
}

const createCar = (body) => {
    const SQLquery = `INSERT INTO car (name,brand,model) 
                        VALUES ('${body.name}','${body.brand}','${body.model}')`;
    return pool.execute(SQLquery);
}

const updateCar = (body, id) => {
    const SQLquery = `UPDATE car 
                        SET name='${body.name}', brand='${body.brand}', model='${body.model}' 
                        WHERE id='${id}'`;
    return pool.execute(SQLquery);
}

const deleteCar = (id) => {
    const SQLquery = `DELETE FROM car WHERE id='${id}'`;
    return pool.execute(SQLquery);
}

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}