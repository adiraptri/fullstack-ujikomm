 /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../styles/MovieAd.css'

const movies = [
  {
    id: 1,
    title: 'Bloodhounds',
    description: 'Dua petinju muda yang melawan rentenir kejam.',
    image: 'https://cnc-magazine.oramiland.com/parenting/images/Bloodhounds.width-800.format-webp.webp',
    watchLink: 'https://youtu.be/eyiR8pO50JE?si=XFKeHIqIRaK57ElX',
  },
  {
    id: 2,
    title: 'Squid Game 2',
    description: 'Permainan anak-anak yang mematikan, yang diikuti oleh orang-orang yang mengalami kesulitan ekonomi.',
    image: 'https://awsimages.detik.net.id/community/media/visual/2024/11/27/squid-game-2.jpeg?w=800',

  },
  {
    id: 3,
    title: 'Mencuri Raden Saleh',
    description: 'Perjalanan sekelompok anak muda yang berminat mencuri lukisan Hal itu dilakukan dengan tujuan yang sama, yakni terlepas dari permasalahan keuangan yang dialami keempat pemuda tersebut.',
    image: 'https://cdn0-production-images-kly.akamaized.net/iU9pyWLegfhnryegoIdokQ4pJSA=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4130911/original/089981300_1661091903-Mencuri_Raden_Saleh_2.jpg',
  },
  {
    id: 3,
    title: 'Dua Garis Biru',
    description: 'Kehidupan remaja yang melakukan penyimpangan.',
    image: 'https://upload.wikimedia.org/wikipedia/id/a/aa/Poster_Dua_Garis_Biru.jpg',
  },
  {
    id: 4,
    title: 'Military Prosecutor Doberman',
    description: 'Dua jaksa militer yang memilih pekerjaan itu karena alasan yang sangat berbeda. Tetapi akhirnya mereka bersatu untuk memerangi kejahatan di militer',
    image: 'https://upload.wikimedia.org/wikipedia/id/0/0a/Military_Prosecutor_Doberman.jpg',
  },
  {
    id: 5,
    title: 'True Beauty',
    description: 'Seorang gadis SMA yang dirundung karena penampilannya',
    image: 'https://upload.wikimedia.org/wikipedia/id/6/6b/True_Beauty_main_poster.jpg',
  },
];

const MovieSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={movies[currentIndex].image} alt={movies[currentIndex].title} className="slideshow-image" />
      <div className="slideshow-info">
        <h1>{movies[currentIndex].title}</h1>
        <p>{movies[currentIndex].description}</p>
        <a href={movies.watchLink} className="watch-button">Tonton Sekarang</a>
      </div>
    </div>
  );
};

export default MovieSlideshow;