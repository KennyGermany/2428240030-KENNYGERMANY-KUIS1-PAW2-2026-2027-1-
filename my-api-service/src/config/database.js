import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB terhubung');
  } catch (error) {
    console.error('Gagal koneksi MongoDB:', error.message);
    process.exit(1);
  }
};