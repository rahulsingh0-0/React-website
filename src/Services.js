import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap2 from "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Card from "./Card.js";
import "./Common.css";
const Services = () => {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-hZvxqcbl_SGf9HOzf50JUZweQtuy4WcvbmMIYOiqSll_kqojR0Tu20uPFugfN-qdiA&usqp=CAU",
      title: "App Development",
    },
    {
      image:
        "https://ares.decipherzone.com/blog-manager/uploads/banner_webp_bea99db8-7dba-41e7-941c-de4b61cc1650.webp",
      title: "Web Development",
    },
    {
      image:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces",
      title: "Web Design",
    },
    {
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/SE-2-Winds-of-Change-Oct28-6_1.jpeg?grP2P9O5ETJQUYFRCS_hUxcSGrNHzoin&size=770:433",
      title: "Android Development",
    },
    {
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/SE-2-Winds-of-Change-Oct28-6_1.jpeg?grP2P9O5ETJQUYFRCS_hUxcSGrNHzoin&size=770:433",
      title: "Ethical Hacking",
    },
    {
      image: "https://images.financialexpress.com/2021/08/cyber-security.jpg",
      title: "Cyber Security",
    },
    {
      image:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces",
      title: "Web Design",
    },
    {
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/SE-2-Winds-of-Change-Oct28-6_1.jpeg?grP2P9O5ETJQUYFRCS_hUxcSGrNHzoin&size=770:433",
      title: "Android Development",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <h1 className="blue text-center mb-5 mt-2">Our Services</h1>
        <div className="row">
          <div className="col-12 d-flex service-card  align-items-center flex-wrap justify-content-between">
            {data.map((value, i) => (
              <Card key={i} image={value.image} title={value.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
