
import { useSearchParams } from "react-router-dom";

const Param2 = () => {

    const [params] = useSearchParams();

    return (
      <div className="param2-page page">
        <h2>Param2.jsx</h2>
        <p>파라미터2: {params.get("q")}</p>
        <p>페이지: {params.get("page")}</p>
      </div>
    );
  };
  
  export default Param2;
  