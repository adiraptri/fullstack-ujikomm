import backgroundImage from '../assets/bioskopp.jpg';
import '../styles/BackgroundSection.css'

const movies = [
    {
      id: 1,
      title: 'Perayaan Mati Rasa',
      description: 'kisah seorang anak pertama bernama Ian Antono (Iqbaal Ramadhan), yang bercita-cita menjadi musisi.',
      image : 'https://m.media-amazon.com/images/M/MV5BNWJmYmMxNTYtNjJiMC00NDQwLThhYjktNWIyYWYxY2FmM2VmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    
    {
      id: 2,
      title: 'Nosferatu',
      description: 'Kisah gotik tentang obsesi antara seorang wanita muda yang dihantui dan vampir mengerikan yang tergila-gila padanya, yang menyebabkan kengerian yang tak terungkapkan.',
      image: 'https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_SX300.jpg',
    },
    {
      id: 3,
      title: 'Petaka Gunung Gede',
      description: 'cerita pendakian Maya dan Ita pada tahun 2007 saat keduanya mendaki ke Gunung Gede yang sudah banyak diketahui masyarakat.',
      image: 'https://asset.tix.id/wp-content/uploads/2025/01/ba3c5819-956e-4847-bd9f-0081edb80b67-600x885.webp',
    },
    {
      id: 4,
      title: 'Miracle In Cell No.7',
      description: 'kisah Kartika yang tinggal bersama Hendro dan Linda. Di mana mereka tinggal setelah sang ayah yang dihukum mati.',
      image: 'https://upload.wikimedia.org/wikipedia/id/8/8a/Miracle_in_Cell_No_7_Indonesian_remake_film_2022_Official_poster.jpeg',
    },
    {
      id: 5,
      title : 'Utusan Iblis',
      description : 'seorang ibu muda yang membunuh keluarganya setelah mendengar bisikan gaib.',
      image : 'https://m.media-amazon.com/images/M/MV5BYmFkYmNmODYtYWZjNi00YjRiLTkxNjAtZGNjNTNiMzY3ZDQ2XkEyXkFqcGc@._V1_.jpg'
    },
    {
      id: 6,
      title : 'THE BAYOU',
      description : ' menceritakan tentang Kyle (Athena Strates), seorang mahasiswi biologi yang diajak pergi berlibur oleh teman-temannya. Selain untuk liburan, Kyle juga ingin sekalian melarung abu mendiang kakaknya yang tewas dibunuh perampok.',
      image : 'https://asset.tix.id/wp-content/uploads/2025/02/24BAYU.jpg'
      },
    {
        id: 7,
        title : 'Waktu Maghrib',
        description : 'Cerita "Waktu Maghrib" berpusat pada kehidupan di sebuah desa terpencil, di mana anak-anak di desa tersebut diwanti-wanti untuk tidak keluar rumah pada saat maghrib..',
        image : 'https://cnc-magazine.oramiland.com/parenting/images/Waktu_Maghrib_tbt5GID.width-800.format-webp.webp'
    },
    {
      id: 8,
      title : 'Monkey Man',
      description : 'Kid, pemuda anonim yang mencari kehidupan di klub pertarungan bawah tanah.',
      image : 'https://alternativemovieposters.com/wp-content/uploads/2024/04/Haley-Turnbull-_monkeyman.jpg'
  },
  {
    id: 9,
    title : 'Laskar Pelangi',
    description : 'pIkal (Zulfanny), anak asli Belitong yang berusaha keras mengejar mimpi dengan bersekolah di salah satu SD yang hampir roboh bernama SD Muhammadiyah Gantong.',
    image : 'https://upload.wikimedia.org/wikipedia/id/1/17/Laskar_Pelangi_film.jpg'
},
{
  id: 9,
  title : 'The Amazing Spider-Man',
  description : 'Peter Parker, seorang remaja yang mendapatkan kekuatan super setelah digigit laba-laba. Peter kemudian menggunakan kekuatannya untuk memerangi kejahatan sebagai Spider-Man.',
  image : 'https://upload.wikimedia.org/wikipedia/id/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg'
},
{
  id: 10,
  title : 'Dilan Wo Ai Ni 1983',
  description : '“Dilan 1990” bukan hanya sekedar kisah cinta remaja biasa. Ini adalah kisah tentang pertumbuhan, pengorbanan, dan perjuangan untuk mempertahankan hubungan di tengah tekanan dan konflik.',
  image : 'https://m.media-amazon.com/images/M/MV5BMjEyYTc3ZWUtYzg0Ny00YTRiLWE4MTEtNDNiNDk0MGY2YWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
},
{
  id: 11,
  title : 'Avatar',
  description : 'Seorang Marinir lumpuh dikirim ke bulan Pandora untuk menjalani misi khusus namun, ia justru dilema antara mengikuti perintah atau melindungi dunia baru yang iya rasakan seperti rumah.',
  image : 'https://puriindahmall.co.id/assets/img/news/1670915741_77_0_avatar.jpg'
},
{
  id: 12,
  title : 'Captain Amerika',
  description : 'Steve Rogers, ditolak masuk militer karena tidak layak. Kecewa, ia kemudian menjadi relawan untuk sebuah program rahasia, yang membuatnya menjelma menjadi seorang prajurit luar biasa, Captain America.',
  image : 'https://asset.tix.id/wp-content/uploads/2025/02/25CABW.jpg'
},
{
  id: 13,
  title : 'Badarawuhi Di Desa Penari',
  description : 'Badarawuhi merupakan ratu penguasa roh Desa Penari, mengincar Mila untuk menjadi dhawuh atau penari desa.',
  image : 'https://upload.wikimedia.org/wikipedia/id/d/d4/Poster_Badarawuhi.jpg'
},
{
  id: 14,
  title : 'Warkop DKI Reborn',
  description : 'Dono, Kasino dan Indro yang dijatuhi hukuman gantung di pusat kota, berhasil melarikan diri ke Maroko. Mereka kemudian bertemu dengan seorang penjahat yang mengendalikan kejahatan anak-anak.',
  image : 'https://upload.wikimedia.org/wikipedia/id/5/55/WDKI_reborn.jpg'
},
{
  id: 15,
  title : 'Habibi & Ainun',
  description : 'Rudy Habibie seorang genius ahli pesawat terbang yang punya mimpi besar: berbakti kepada bangsa Indonesia dengan membuat pesawat terbang untuk menyatukan Indonesia.',
  image : 'https://upload.wikimedia.org/wikipedia/id/7/74/Habibie_Ainun_Poster.jpg'
},
{
  id: 16,
  title : 'Den of Thieves 2: Pantera',
  description : 'Big Nick (Gerard Butler) kembali berburu di Eropa dengan misi mencari Donnie (O Shea Jackson Jr) seorang mafia yang terlibat dalam dunia pencurian berlian. Mereka merencanakan pencurian besar-besaran di bursa berlian terbesar di dunia.',
  image : 'https://akcdn.detik.net.id/community/media/visual/2025/01/02/film-hollywood-den-of-thieves-2-pantera-foto-palma-pictures.jpeg?w=620&q=90'
},
{
  id: 17,
  title : 'Dog Man',
  description : 'Dog Man adalah film animasi keluarga yang mengisahkan seorang polisi dan anjing patroli yang selalu bertugas bersama. Namun, mereka mengalami insiden fatal saat sedang menangani kasus bom.',
  image : 'https://akcdn.detik.net.id/community/media/visual/2025/01/02/film-hollywood-dog-man-foto-universal-pictures.jpeg?w=620&q=90'
},
{
  id: 18,
  title : 'Ipar Aadalah Maut',
  description : 'ilm ini menceritakan Nisa (Michelle Ziudith), seorang istri yang mengalami keretakan rumah tangga akibat perselingkuhan suaminya, Aris (Deva Mahenra), dengan adik kandungnya sendiri, Rani (Davina Karamoy). Awalnya, kehidupan Nisa dan Aris harmonis.',
  image : 'https://upload.wikimedia.org/wikipedia/id/7/79/Poster_IAM.jpg'
},
{
  id: 19,
  title : 'Keluarga Cemara',
  description : 'berkisah tentang kehidupan keluarga di Jakarta yang sebelumnya berkecukupan dan kemudian berubah ketika mereka mengalami masa sulit akibat paman yang meminjam sertifikat rumah milik Abah (Ringgo Agus Rahman) yang membuat Abah bangkrut',
  image : 'https://upload.wikimedia.org/wikipedia/id/7/74/Keluarga_Cemara_%28poster%29.jpg'
}
];

const BackgroundSection = () => {
    return (
        <div className="background-section" style={{ backgroundImage: `url(${backgroundImage})` }}>   
        <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
      </div>
    );
  };

export default BackgroundSection