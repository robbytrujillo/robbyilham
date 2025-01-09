import { useParams } from "react-router-dom";
import "../styles/DetailPortfolio.css";

function DetailPortfolio() {
  const { id } = useParams();
  return (
    <div>
      DetailPortfolio {id}
    </div>
  )
}

export default DetailPortfolio
