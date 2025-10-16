import { useState, useEffect } from "react"; // 1. Import useEffect
import "../styles/Portfolio.css";
import { portfolioList } from "../data/DataPortfolio";
import { Link } from "react-router-dom";

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  // 2. Buat state untuk mendeteksi ukuran layar mobile
  // Inisialisasi state berdasarkan lebar window saat ini
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // 3. Gunakan useEffect untuk memantau perubahan ukuran layar
  useEffect(() => {
    // Fungsi yang akan dijalankan saat ukuran layar berubah
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Set true jika layar < 600px
    };

    // Tambahkan event listener saat komponen pertama kali dimuat
    window.addEventListener("resize", handleResize);

    // Cleanup function: Hapus event listener saat komponen tidak lagi digunakan
    // Ini penting untuk mencegah memory leak
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Array kosong [] berarti efek ini hanya berjalan sekali saat mount dan cleanup saat unmount

  // 4. Tentukan jumlah item awal secara dinamis
  const initialItemCount = isMobile ? 3 : 6;

  // Mengurutkan portfolio dari yang terbaru (descending)
  const reversedPortfolioList = [...portfolioList].reverse();

  // 5. Gunakan initialItemCount untuk memotong array
  const displayedProjects = showAll
    ? reversedPortfolioList
    : reversedPortfolioList.slice(0, initialItemCount);

  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {displayedProjects.map((item) => {
            return (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* 6. Kondisi tombol juga menjadi dinamis */}
        {reversedPortfolioList.length > initialItemCount && (
          <div className="read-more-container">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="read-more-btn"
              >
                Read More
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="read-more-btn"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
