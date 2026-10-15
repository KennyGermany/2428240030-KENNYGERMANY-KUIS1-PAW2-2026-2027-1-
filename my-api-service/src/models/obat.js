import mongoose from 'mongoose';

const obatSchema = new mongoose.Schema(
  {
    nama_obat: {
      type: String,
      required: [true, 'nama_obat wajib diisi'],
      trim: true,
    },
    harga: {
      type: Number,
      required: [true, 'harga wajib diisi'],
      min: [0, 'harga tidak boleh negatif'],
    },
    stok: {
      type: Number,
      required: [true, 'stok wajib diisi'],
      min: [0, 'stok tidak boleh negatif'],
    },
  },
  { versionKey: false }
);

// argumen ke-3 = nama collection
export default mongoose.model('Obat', obatSchema, 'obat_apotek');