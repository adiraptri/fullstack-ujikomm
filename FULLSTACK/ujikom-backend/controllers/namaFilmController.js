import NamaFilm from "../models/namaFilmModel.js";

export const createNamaFilm = async (req, res) => {
    try {
        const { deskripsi, judul, durasi, rating, genre_id } = req.body;
        const namaFilm = await NamaFilm.create({
            deskripsi, judul, durasi, rating, genre_id
        });
        res.status(201).json(namaFilm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNamaFilm = async (req, res) => {
    try {
        const namaFilm = await NamaFilm.findAll();
        res.status(200).json(namaFilm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getNamaFilmById = async (req, res) => {
    try {
        const { id } = req.params;
        const namaFilm = await NamaFilm.findByPk(id);
        if (!namaFilm) return res.status(404).json({ message: "Nama Film not found" });
        res.status(200).json(namaFilm);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateNamaFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const { deskripsi, judul, durasi, rating, genre_id } = req.body;
        const [updated] = await NamaFilm.update(
            { deskripsi, judul, durasi, rating, genre_id },
            { where: { id } }
        );
        if (updated) {
            const updatedNamaFilm = await NamaFilm.findByPk(id);
            res.status(200).json(updatedNamaFilm);
        } else {
            res.status(404).json({ message: "Nama Film not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteNamaFilm = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await NamaFilm.destroy({ where: { id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Nama Film not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
