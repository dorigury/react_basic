import { Link } from "react-router-dom";
import Prop from "./pages/Prop";
import {nation, nations} from "./data/data";

const Home = () => {
  return (
    <div className="home">
      <h2>Home.jsx</h2>
      <div>
        <Link to={
          {
            pathname: "/param/1",
          }
        }>pathname(path variable)</Link>      
        <Link to={
          {
            pathname: "/param",
            search: "?q=aa&page=5",
          }
        }>pathname(query string)</Link>      
        <Link to="/param?q=bb&page=7">pathname(query string2)</Link>    
        <div>
          {nations.map((item,index) => {
            return (
              <Link key={index} to={
                  {
                    pathname: `/param/${item.name}`,
                  }
                }>{item.name}</Link>
              );
            }
          )}
        
        </div>
        <Prop name="홍길동" age="11" nation="대한민국" />
      </div>
    </div>
  );
};

export default Home;
