/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/tiketAdd.css'

const TiketAdd = () => {
  const [idWaktu, setIdWaktu] = useState("");
  const [idPembayaran, setIdPembayaran] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [hargaTotal, setHargaTotal] = useState("");
  const [namaUser, setNamaUser] = useState("");
  const [nomorKursi, setNomorKursi] = useState("");
  const navigate = useNavigate();

  const saveTiket = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tiket/post", {
        id_waktu: idWaktu,
        id_pembayaran: idPembayaran,
        jumlah: jumlah,
        harga_total: hargaTotal,
        nama_user: namaUser,
        nomor_kursi: nomorKursi,
      });
      alert("Tiket berhasil ditambahkan");
      navigate("/tiket");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={saveTiket} className="form">
          <div className="form-group">
            <label>ID Waktu</label>
            <input
              type="text"
              value={idWaktu}
              onChange={(e) => setIdWaktu(e.target.value)}
              placeholder="ID Waktu"
              required
            />
          </div>
          <div className="form-group">
            <label>ID Pembayaran</label>
            <input
              type="text"
              value={idPembayaran}
              onChange={(e) => setIdPembayaran(e.target.value)}
              placeholder="ID Pembayaran"
              required
            />
          </div>
          <div className="form-group">
            <label>Jumlah</label>
            <input
              type="number"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              placeholder="Jumlah"
              required
            />
          </div>
          <div className="form-group">
            <label>Harga Total</label>
            <input
              type="number"
              value={hargaTotal}
              onChange={(e) => setHargaTotal(e.target.value)}
              placeholder="Harga Total"
              required
            />
          </div>
          <div className="form-group">
            <label>Nama User</label>
            <input
              type="text"
              value={namaUser}
              onChange={(e) => setNamaUser(e.target.value)}
              placeholder="Nama User"
              required
            />
          </div>
          <div className="form-group">
            <label>Nomor Kursi</label>
            <input
              type="text"
              value={nomorKursi}
              onChange={(e) => setNomorKursi(e.target.value)}
              placeholder="Nomor Kursi"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/ticket/list")}
              className="btn back-btn"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TiketAdd;
