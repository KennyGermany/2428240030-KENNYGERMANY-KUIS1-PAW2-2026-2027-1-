import mongoose from 'mongoose';
import Obat from '../models/obat.js';

const idValid = (id) => mongoose.Types.ObjectId.isValid(id);

export const createObat = async (req, res) => {
  try {
    const { nama_obat, harga, stok } = req.body;
    const obat = await Obat.create({ nama_obat, harga, stok });
    res.status(201).json({ message: 'Data obat berhasil ditambahkan', data: obat });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Input tidak valid', error: error.message });
    }
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

export const getAllObat = async (req, res) => {
  try {
    const data = await Obat.find();
    res.status(200).json({ message: 'Berhasil mengambil data obat', data });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

export const getObatById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!idValid(id)) return res.status(400).json({ message: 'ID tidak valid' });

    const obat = await Obat.findById(id);
    if (!obat) return res.status(404).json({ message: 'Data obat tidak ditemukan' });

    res.status(200).json({ data: obat });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

export const updateObat = async (req, res) => {
  try {
    const { id } = req.params;
    if (!idValid(id)) return res.status(400).json({ message: 'ID tidak valid' });

    const { nama_obat, harga, stok } = req.body;
    const obat = await Obat.findByIdAndUpdate(
      id,
      { nama_obat, harga, stok },
      { new: true, runValidators: true }
    );
    if (!obat) return res.status(404).json({ message: 'Data obat tidak ditemukan' });

    res.status(200).json({ message: 'Data obat berhasil diperbarui', data: obat });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Input tidak valid', error: error.message });
    }
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};

export const deleteObat = async (req, res) => {
  try {
    const { id } = req.params;
    if (!idValid(id)) return res.status(400).json({ message: 'ID tidak valid' });

    const obat = await Obat.findByIdAndDelete(id);
    if (!obat) return res.status(404).json({ message: 'Data obat tidak ditemukan' });

    res.status(200).json({ message: 'Data obat berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server', error: error.message });
  }
};