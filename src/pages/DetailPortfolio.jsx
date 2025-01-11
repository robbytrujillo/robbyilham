import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailPortfolio.css";
import { portfolioList } from "../data/DataPortfolio"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DetailPortfolio() {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id === id);
  if (data == undefined) {
    return <Navigate to='/page-not-found' />
  }

  // console.log(data);
  return (
    // bungkus dengan fragmen
    <> 
     <Navbar />
    <section id="detail-portfolio">
      <div className="wrapper">
        <h1>{data.title}</h1>
        <img src={data.image} />
        <p className="skill"><b>Skills:</b> {data.skill}</p>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default DetailPortfolio
