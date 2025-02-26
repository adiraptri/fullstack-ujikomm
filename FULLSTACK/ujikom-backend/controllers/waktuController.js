import Waktu from "../models/waktuModel.js";

export const createWaktu = async (req,res) =>{
    const {nama_film, id_bioskop, id_pembayaran, waktu_mulai, jam, tanggal} = req.body;
    const waktu = await Waktu.create({
         nama_film, id_bioskop, id_pembayaran, waktu_mulai, jam, tanggal
    });
    res.status(200).json(waktu);

}

export const getWaktu = async (req, res) => {
    try {
        const waktu = await Waktu.findAll();
        res.status(200).json(waktu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getWaktuById = async (req, res) => {
    try {
      const { id } = req.params;
      const waktu = await Waktu.findByPk(id);
      if (!waktu) return res.status(404).json({ message: "Waktu not found" });
      res.status(200).json(waktu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateWaktu= async (req, res) => {
    try {
      const { id} = req.params;
      const { id_film, id_bioskop, id_waktu, waktu_mulai, jam, tanggal} = req.body;
      const [updated] = await Waktu.update(
        { id, id_film, id_bioskop, id_waktu, waktu_mulai, jam, tanggal },
        { where: { id } }
      );
      if (updated) {
        const updateWaktu = await Waktu.findByPk(id);
        res.status(200).json(updateWaktu);
      } else {
        res.status(404).json({ message: "Waktu not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  export const deleteWaktu = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Waktu.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Waktu not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
