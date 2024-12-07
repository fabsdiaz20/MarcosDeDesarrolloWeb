import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Garantiza que no haya correos duplicados
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Relación con el usuario que registró el cliente
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Client', clientSchema);
