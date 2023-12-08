import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import DestinationData from "./SchoolInfo";
import "./SchoolInfo.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>
        Academia Wave: <br /> Your Gateway to Academic Success
      </h1>
      <p>
        Welcome to Academia Wave, a cutting-edge platform dedicated to
        empowering students in their academic journey. At Academia Wave, we
        understand the pivotal role that transparency plays in the learning
        process. Our platform offers a range of features tailored to meet the
        specific needs of students, ensuring a seamless experience for accessing
        grades and reporting any missing information.
      </p>
      <DestinationData
        className="first-des"
        heading="Effortless Grade Monitoring:"
        text="Effortlessly navigate through your current grades"
        img1={Image1}
        img2={Image2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Paris  Babbbbyy🥰🥰🥰!!"
        text="One of thee most Iconic Lorem Ipsum Dor"
        img1={Image3}
        img2={Image4}
      />
    </div>
  );
};

export default Destination;
