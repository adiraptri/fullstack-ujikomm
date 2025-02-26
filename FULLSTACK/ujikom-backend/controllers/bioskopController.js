import Bioskop from "../models/bioskopModel.js";

export const createBioskop = async (req, res) => {
    const { nama, lokasi, kapasitas } = req.body;
    const bioskop = await Bioskop.create({
        nama, lokasi, kapasitas
    });
    res.status(200).json(bioskop);
};

export const getBioskop = async (req, res) => {
    try {
        const bioskop = await Bioskop.findAll();
        res.status(200).json(bioskop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBioskopById = async (req, res) => {
    try {
        const { id } = req.params;
        const bioskop = await Bioskop.findByPk(id);
        if (!bioskop) return res.status(404).json({ message: "Bioskop not found" });
        res.status(200).json(bioskop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBioskop = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, lokasi, kapasitas } = req.body;
        const [updated] = await Bioskop.update(
            { nama, lokasi, kapasitas },
            { where: { id } }
        );
        if (updated) {
            const updatedBioskop = await Bioskop.findByPk(id);
            res.status(200).json(updatedBioskop);
        } else {
            res.status(404).json({ message: "Bioskop not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBioskop = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Bioskop.destroy({ where: { id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Bioskop not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
