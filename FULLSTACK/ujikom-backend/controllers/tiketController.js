import Tiket from "../models/tiketModel.js";

export const createTiket = async (req, res) => {
    try {
        const { id_waktu, id_pembayaran, jumlah, harga_total, nama_user, nomor_kursi } = req.body;
        const tiket = await Tiket.create({
         id_waktu, id_pembayaran, jumlah, harga_total, nama_user, nomor_kursi
        });
        res.status(201).json(tiket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTiket = async (req, res) => {
    try {
        const tiket = await Tiket.findAll();
        res.status(200).json(tiket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTiketById = async (req, res) => {
    try {
        const { id } = req.params;
        const tiket = await Tiket.findByPk(id);
        if (!tiket) return res.status(404).json({ message: "Tiket not found" });
        res.status(200).json(tiket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTiket = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_waktu, id_pembayaran, jumlah, harga_total, nama_user, nomor_kursi } = req.body;
        const [updated] = await Tiket.update(
            { id_waktu, id_pembayaran, jumlah, harga_total, nama_user, nomor_kursi },
            { where: { id } }
        );
        if (updated) {
            const updatedTiket = await Tiket.findByPk(id);
            res.status(200).json(updatedTiket);
        } else {
            res.status(404).json({ message: "Tiket not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTiket = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Tiket.destroy({ where: { id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Tiket not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
