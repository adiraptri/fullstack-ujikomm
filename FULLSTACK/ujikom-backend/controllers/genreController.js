import Genre from "../models/genreModel.js";

export const createGenre = async (req, res) => {
    const { nama, deskripsi } = req.body;
    const genre = await Genre.create({
        nama, deskripsi
    });
    res.status(200).json(genre);
};

export const getGenre = async (req, res) => {
    try {
        const genre = await Genre.findAll();
        res.status(200).json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getGenreById = async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await Genre.findByPk(id);
        if (!genre) return res.status(404).json({ message: "Genre not found" });
        res.status(200).json(genre);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, deskripsi } = req.body;
        const [updated] = await Genre.update(
            { nama, deskripsi },
            { where: { id } }
        );
        if (updated) {
            const updatedGenre = await Genre.findByPk(id);
            res.status(200).json(updatedGenre);
        } else {
            res.status(404).json({ message: "Genre not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Genre.destroy({ where: { id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Genre not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
