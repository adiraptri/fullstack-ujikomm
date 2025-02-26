/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/Seat.css'

const SeatSelection = () => {
    const [seats, setSeats] = useState([
        { id_bioskop: 1, nomor_kursi: 'A1', tipe_kursi: 'Reguler', status: 'kosong' },
        { id_bioskop: 1, nomor_kursi: 'A2', tipe_kursi: 'Reguler', status: 'kosong' },
        { id_bioskop: 1, nomor_kursi: 'A3', tipe_kursi: 'VIP', status: 'penuh' },
        { id_bioskop: 1, nomor_kursi: 'A4', tipe_kursi: 'VIP', status: 'kosong' },
        { id_bioskop: 1, nomor_kursi: 'B1', tipe_kursi: 'Reguler', status: 'penuh' },
        { id_bioskop: 1, nomor_kursi: 'B2', tipe_kursi: 'Reguler', status: 'kosong' },
        { id_bioskop: 1, nomor_kursi: 'B3', tipe_kursi: 'VIP', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'B4', tipe_kursi: 'VIP', status:'penuh'  },
        { id_bioskop: 1, nomor_kursi: 'C1', tipe_kursi: 'Reguler', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'C2', tipe_kursi: 'VIP', status:'penuh'  },
        { id_bioskop: 1, nomor_kursi: 'C3', tipe_kursi: 'VIP', status: 'penuh'  },
        { id_bioskop: 1, nomor_kursi: 'C4', tipe_kursi: 'Reguler', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'D1', tipe_kursi: 'VIP', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'D2', tipe_kursi: 'Reguler', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'D3', tipe_kursi: 'VIP', status:'penuh'  },
        { id_bioskop: 1, nomor_kursi: 'D4', tipe_kursi: 'Reguler', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'E1', tipe_kursi: 'Reguler', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'E2', tipe_kursi: 'Reguler', status:'penuh'  },
        { id_bioskop: 1, nomor_kursi: 'E3', tipe_kursi: 'VIP', status:'kosong'  },
        { id_bioskop: 1, nomor_kursi: 'E4', tipe_kursi: 'Reguler', status:'penuh'  },
    ]);

    const handleSeatClick = (index) => {
        const newSeats = [...seats];
        if (newSeats[index].status === 'kosong') {
            newSeats[index].status = 'dipilih';
        } else if (newSeats[index].status === 'dipilih') {
            newSeats[index].status = 'kosong';
        }
        setSeats(newSeats);
    };

    return (
        <div className="container">
            <h1>Kursi Yang Teriisi</h1>
            <div className="seat-grid">
                {seats.map((seat, index) => (
                    <div
                        key={index}
                        className={`seat ${seat.status}`}
                        onClick={() => handleSeatClick(index)}
                    >
                        {seat.nomor_kursi} ({seat.tipe_kursi})
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeatSelection;