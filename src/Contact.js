import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap2 from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { useRef } from "react";
import { Prompt } from "react-router";
import Particle from "./Particle";
import "./Common.css";
import { particlesJS } from "tsparticles";
const Contact = () => {
  const nameValue = useRef("");
  const emailValue = useRef("");
  const Message = useRef("");
  const getValue = (e) => {
    e.preventDefault();
    console.log(nameValue.current.value, emailValue.current.value, Message.current.value);
    alert("Auther will reply shortly.Thankyou!");
  };
  return (
    <>
      <Particle />
      <div
        className="container contact mt-3 w-50"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        <div className="row">
          <form onSubmit={getValue}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                ref={nameValue}
                required
              />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                ref={emailValue}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                ref={Message}
              ></textarea>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
