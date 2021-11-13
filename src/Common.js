import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap2 from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./Common.css";

const Common = (props) => {
  return (
    <>
      <div className="container-fluid  position-absolute common">
        <div className="row p-5">
          <div className="col-md-6  d-flex  justify-content-center flex-column mt-5">
            <h2 className="blue">{props.title}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <button type="button" className="btn btn-primary  w-25">
              Visit more &#8595;
            </button>
          </div>
          <div className="col-md-6 d-flex  align-items-center justify-content-center ">
            <img className="photo" src={props.photo} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;
