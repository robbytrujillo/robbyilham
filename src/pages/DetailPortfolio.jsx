import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailPortfolio.css";
import { portfolioList } from "../data/DataPortfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
// import { Link } from "react-router-dom"; // Link tidak digunakan lagi, bisa dihapus jika tidak ada di tempat lain
// import "../styles/ButtonLink.css";

function DetailPortfolio() {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id === id);
  if (data == undefined) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <>
      <Navbar />
      <section id="detail-portfolio">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} alt={data.title} />{" "}
          {/* Tambahkan alt text untuk aksesibilitas */}
          <p className="skill">
            <b>Skills:</b> {data.skill}
          </p>
          <p className="site">
            <a
              href={data.site}
              target="_blank"
              rel="noopener noreferrer"
              className="button-style"
            >
              Website Link
            </a>
          </p>
          <p className="information">{data.information}</p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DetailPortfolio;
