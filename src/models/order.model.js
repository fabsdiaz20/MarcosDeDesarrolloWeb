import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client', // Relación con un cliente
        required: true,
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Relación con los productos
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    }],
    status: {
        type: String,
        enum: ['Pendiente', 'Procesado', 'Completado', 'Cancelado'],
        default: 'Pendiente',
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Relación con el usuario que creó el pedido
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Order', orderSchema);
