const carModel = require('../models/carModels')

const getAllCars = async (req,res) => {
    try {
        const [data] = await carModel.getAllCars();

        res.json({
            message: "Get All Cars Success",
            data: data
        }) 
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        }) 
    }
}

const getCarById = async (req,res) => {
    const {id} = req.params;

    try {
        const [data] = await carModel.getCarById(id);
        res.json({
            message: "Get Car By Id Success",
            data: data
        }) 
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        }) 
    }
}

const createCar = async (req,res) => {
    const {body} = req;

    try {
        await carModel.createCar(body);
        res.json({
            message: "Create Success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        }) 
    }
}

const updateCar = async (req,res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await carModel.updateCar(body, id);
        res.json({
            message: "Update Success",
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        }) 
    }
    
}

const deleteCar = async (req,res) => {
    const {id} = req.params;

    try {
        await carModel.deleteCar(id);
        res.json({
            message: "Delete Success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        }) 
    }
}

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
};