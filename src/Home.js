import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap2 from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Common from "./Common";
import "./Common.css";
import Particle from "./Particle";
import yoga from "./img/undraw_yoga_248n.png";
const Home = () => {
  return (
    <>
      <Particle />
      <Common title=" Welcome to my First {React} Webpages" photo={yoga} />
    </>
  );
};
export default Home;
