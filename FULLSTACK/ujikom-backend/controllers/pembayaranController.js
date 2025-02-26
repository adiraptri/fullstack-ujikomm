import Pembayaran from "../models/pembayaranModel.js";

export const createPembayaran = async (req, res) => {
    try {
        const { id_tiket, harga_tiket, metode, status, tanggal_transaksi } = req.body;
        const pembayaran = await Pembayaran.create({
            id_tiket, harga_tiket, metode, status, tanggal_transaksi
        });
        res.status(201).json(pembayaran);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPembayaran = async (req, res) => {
    try {
        const pembayaran = await Pembayaran.findAll();
        res.status(200).json(pembayaran);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPembayaranById = async (req, res) => {
    try {
        const { id } = req.params;
        const pembayaran = await Pembayaran.findByPk(id);
        if (!pembayaran) return res.status(404).json({ message: "Pembayaran not found" });
        res.status(200).json(pembayaran);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePembayaran = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_tiket, harga_tiket, metode, status, tanggal_transaksi } = req.body;
        const [updated] = await Pembayaran.update(
            { id_tiket, harga_tiket, metode, status, tanggal_transaksi },
            { where: { id } }
        );
        if (updated) {
            const updatedPembayaran = await Pembayaran.findByPk(id);
            res.status(200).json(updatedPembayaran);
        } else {
            res.status(404).json({ message: "Pembayaran not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePembayaran = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Pembayaran.destroy({ where: { id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Pembayaran not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
