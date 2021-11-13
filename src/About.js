import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap2 from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Common from "./Common";
import Particle from "./Particle";
import pic1 from "./img/undraw_typewriter_i8xd.png";

const About = () => {
  return (
    <>
      <Particle />
      <Common title="This is About Page {Data passed using Props}" photo={pic1} />
    </>
  );
};
export default About;
