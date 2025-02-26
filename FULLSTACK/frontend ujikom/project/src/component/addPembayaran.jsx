/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/PembayaranAdd.css'

const PembayaranAdd = () => {
  const [idTiket, setIdtiket] = useState("");
  const [hargaTiket, sethargaTiket] = useState("");
  const [metode, setMetode] = useState("");
  const [status, setStatus] = useState("");
  const [tanggalTransaksi, setTanggalTransaksi] = useState("")
  const navigate = useNavigate();

  const saveTiket = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/pembayaran", {
        id_tiket: idTiket,
        harga_tiket: hargaTiket,
        metode: metode,
        status: status,
        tanggal_transaksi: tanggalTransaksi,
      });
      alert("Pembayaran berhasil ditambahkan");
      navigate("/pembayaran");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={saveTiket} className="form">
          <div className="form-group">
            <label>ID Tiket</label>
            <input
              type="text"
              value={idTiket}
              onChange={(e) => setIdtiket(e.target.value)}
              placeholder="ID Tiket"
              required
            />
          </div>
          <div className="form-group">
            <label>Harga Tiket</label>
            <input
              type="text"
              value={hargaTiket}
              onChange={(e) => sethargaTiket(e.target.value)}
              placeholder="Harga Tiket"
              required
            />
          </div>
          <div className="form-group">
            <label>Metode</label>
            <input
              type="number"
              value={metode}
              onChange={(e) => setMetode(e.target.value)}
              placeholder="metode"
              required
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input
              type="number"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status"
              required
            />
          </div>
          <div className="form-group">
            <label>Tanggal Transaksi</label>
            <input
              type="text"
              value={tanggalTransaksi}
              onChange={(e) => setTanggalTransaksi(e.target.value)}
              placeholder="Tanggal Transaksi"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/pembayaran/list")}
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

export default PembayaranAdd;
