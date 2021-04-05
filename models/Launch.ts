import mongoose from 'mongoose'
const Schema = mongoose.Schema

const launchSchema = new Schema({
    name: { type: String, required: true },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true }
})

const Launch = mongoose.model('Launch', launchSchema, 'launches')

export { Launch }