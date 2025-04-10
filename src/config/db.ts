import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('✅ Conectado ao MongoDB');
    } catch (err) {
        console.error('❌ Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    }
};
