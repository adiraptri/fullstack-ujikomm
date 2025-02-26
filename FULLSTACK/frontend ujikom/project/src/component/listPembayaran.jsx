/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import '../styles/listPembayaran.css'

const PembayaranList = () => {
  const [Pembayaran, setPembayaran] = useState([]);

  useEffect(() => {
    getPembayaran();
    deletePembayaran();
  }, []);

  const getPembayaran = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pembayaran");
      setPembayaran(response.data);
    } catch (error) {
      console.error("Error fetching Pembayaran:", error);
    }
  };

  const deletePembayaran = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/pembayaran/${id}`);
      getPembayaran();
    } catch (error) {
      console.error("Error deleting pembayaran", error);
    }
  };

  return (
    <div className="container-pembayaran">
      <Navbar/>
      <div className="header">
        <div className="header-pembayaran">
          <h1>Pembayaran List</h1>
          <Link to="/pembayaran/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="pembayaran-table">
          <thead>
            <tr>
              <th>id tiket</th>
              <th>harga tiket</th>
              <th>metode</th>
              <th>status</th>
              <th>tanggal transaksi</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default PembayaranList;
