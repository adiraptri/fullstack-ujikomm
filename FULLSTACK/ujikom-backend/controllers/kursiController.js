import Kursi from "../models/kursiModel.js";

export const createKursi = async (req, res) => {
    try {
        const { id_bioskop, nomor_kursi, tipe_kursi, status } = req.body;
        const kursi = await Kursi.create({
            id_bioskop, nomor_kursi, tipe_kursi, status
        });
        res.status(201).json(kursi);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getKursi = async (req, res) => {
    try {
        const kursi = await Kursi.findAll();
        res.status(200).json(kursi);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getKursiById = async (req, res) => {
    try {
        const { id } = req.params;
        const kursi = await Kursi.findByPk(id);
        if (!kursi) return res.status(404).json({ message: "Kursi tidak ditemukan" });
        res.status(200).json(kursi);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateKursi = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_bioskop, nomor_kursi, tipe_kursi, status } = req.body;
        const [updated] = await Kursi.update(
            { id_bioskop, nomor_kursi, tipe_kursi, status },
            { where: { id } }
        );
        if (updated) {
            const updatedKursi = await Kursi.findByPk(id);
            res.status(200).json(updatedKursi);
        } else {
            res.status(404).json({ message: "Kursi tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteKursi = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Kursi.destroy({ where: { id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Kursi tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
