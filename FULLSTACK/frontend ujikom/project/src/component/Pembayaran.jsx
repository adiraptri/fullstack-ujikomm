/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pembayaran.css'

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        id_tiket: '',
        harga_tiket: '',
        metode: '',
        status: '',
        tanggal_transaksi: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Data Pembayaran:', formData);
    };

    return (
        <div className="container">
            <h1>Form Pembayaran</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id_tiket">ID Tiket:</label>
                    <input type="text" id="id_tiket" name="id_tiket" value={formData.id_tiket} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="harga_tiket">Harga Tiket:</label>
                    <input type="number" id="harga_tiket" name="harga_tiket" value={formData.harga_tiket} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="metode">Metode Pembayaran:</label>
                    <select id="metode" name="metode" value={formData.metode} onChange={handleChange} required>
                        <option value="">Pilih Metode</option>
                        <option value="transfer">Transfer Bank</option>
                        <option value="kredit">Kartu Kredit</option>
                        <option value="e-wallet">E-Wallet</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select id="status" name="status" value={formData.status} onChange={handleChange} required>
                        <option value="">Pilih Status</option>
                        <option value="pending">Pending</option>
                        <option value="lunas">Lunas</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="tanggal_transaksi">Tanggal Transaksi:</label>
                    <input type="date" id="tanggal_transaksi" name="tanggal_transaksi" value={formData.tanggal_transaksi} onChange={handleChange} required />
                </div>
                <button type="submit">Kirim Pembayaran</button>
                <Link to="/pembayaran/list" className="add-btn">List Pembayaran</Link>
            </form>
        </div>
    );
};

export default PaymentForm;