 /* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
// import Home from './pages/Home.jsx';
import BackgroundSection from './component/BackgroundSection.jsx';
import TicketList from './component/tiketList.jsx';
// import MovieList from './component/Movie.jsx';
import TicketAdd from './component/tiketAdd.jsx';
import PaymentForm from './component/Pembayaran.jsx';
import SeatSelection from './component/Seat.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import PembayaranList from './component/listPembayaran.jsx';
import PembayaranAdd from './component/addPembayaran.jsx';
// import Login from './component/Login.jsx';



const App = () => {
    // const layout = () =>{
    //     <>
    //     <Navbar/>
    //     <Outlet/>
    //     </>
    // }
    return (
        <>
        <Router>
            <Navbar />
            {/* <Movie/> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<BackgroundSection />} />
                {/* <Route path="/movie" element={<MovieList />} /> */}
                <Route path="/ticket/list" element={<TicketList />} />
                <Route path="/ticket/add" element={<TicketAdd />} />
                <Route path="/pembayaran" element={<PaymentForm />} />
                <Route path="/pembayaran/list" element={<PembayaranList/>} />
                <Route path="/pembayaran/add" element={<PembayaranAdd/>} />
                <Route path="/seat" element={<SeatSelection />} />
                {/* <Route path="/movie/list" element={<MovieAd />} /> */}
                {/* <Login/> */}
            </Routes>
        </Router>
        {/* <MovieList/> */}
        {/* <MovieAd/>
        <Footer/> */}
        {/* <TicketBooking/> */}
        <div className='tr'>
        {/* <Trending /> */}
        </div>
        </>
    );
};

export default App;