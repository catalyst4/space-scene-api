import { truncate } from 'fs/promises'
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const updateSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: false },
    serialNumber: { type: String, required: true },
    timestamp: { type: Number, required: true },
    vehicles: [{ vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true } }]
})

const Update = mongoose.model('Update', updateSchema, 'updates')

export { Update }