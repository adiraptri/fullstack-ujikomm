/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/tiketList.css'
import Navbar from "./Navbar";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  const getTickets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tiket/");
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await axios.delete(`/${id}`);
      getTickets();
    } catch (error) {
      console.error("Error deleting ticket", error);
    }
  };

  return (
    <div className="container-tickets">
      <Navbar/>
      <div className="header">
        <div className="header-tickets">
          <h1>Ticket List</h1>
          <Link to="/ticket/add" className="add-btn">Add New</Link>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="ticket-table">
          <thead>
            <tr>
              <th>id users</th>
              <th>id waktu</th>
              <th>id pembayaran</th>
              <th>jumlah</th>
              <th>harga total</th>
              <th>nama users</th>
              <th>nomor kursi</th>
            </tr>
          </thead>
          {/* <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.id}>
                <td>{index + 1}</td>
                <td>{ticket.id_waktu}</td>
                <td>{ticket.id_pembayaran}</td>
                <td>{ticket.jumlah}</td>
                <td>{ticket.harga_total}</td>
                <td>{ticket.nama_users}</td>
                <td>{ticket.nomor_kursi}</td>
                <td>
                  <button className="edit-btn">
                    <Link to={`/tickets/edit/${ticket.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => deleteTicket(ticket.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default TicketList;
