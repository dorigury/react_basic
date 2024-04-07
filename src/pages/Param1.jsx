import { useParams } from "react-router-dom";

const Param1 = () => {

    const { id } = useParams();

    return (
      <div className="param1-page page">
        <h2>Param1.jsx</h2>
        <p>파라미터1: {id}</p>
      </div>
    );
  };
  
  export default Param1;
  