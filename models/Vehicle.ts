import mongoose from 'mongoose'
const Schema = mongoose.Schema 

const vehicleSchema = new Schema({
    name: { type: String, required: true },
    series: { type: String, required: true },
    manufacturer: { type: String, required: true },
    active: { type: Boolean, required: true, default: true }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema, 'vehicles')

export { Vehicle }