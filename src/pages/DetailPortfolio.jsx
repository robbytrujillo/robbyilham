import { useParams } from "react-router-dom";

function DetailPortfolio() {
  const { id } = useParams();
  return (
    <div>
      DetailPortfolio {id}
    </div>
  )
}

export default DetailPortfolio
