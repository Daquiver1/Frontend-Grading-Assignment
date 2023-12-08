import Soli from "../images/mr_soli-removebg-preview.png";
import Mark from "../images/mark_atta-removebg-preview.png";
import Benedict from "../images/Benedict-Normenyo-removebg-preview.png";
import Nancy from "../images/dr_nacy-removebg-preview.png";

const lectures = [
  {
    name: "Dr. Tettey Michael Soli",
    course: "DCIT 205",
    position: "Lecturer",
    departement: "DCS",
    image: Soli,
  },
  {
    name: "Dr. Mark Atta Mensah",
    course: "DCIT 103",
    position: "Lecturer/Course Advisor",
    departement: "DCS",
    image: Mark,
  },
  {
    name: "Dr. Paul Nii Tackie",
    course: "DCIT 201",
    position: "Lecturer",
    departement: "DCS",
  },
  {
    name: "Dr. Abdullai Aziz",
    course: "DCIT 203",
    position: "Lecturer",
    departement: "DCS",
  },
  {
    name: "Prof. Myles Gyamfi",
    course: "UGRC 150",
    position: "Lecturer",
    departement: "UGRC",
    image : Nancy,
  },
  {
    name: "Dr. BV Normenyo",
    course: "Math 122",
    position: "Lecturer",
    departement: "TMS",
    image: Benedict,
  },
];
export default lectures;
console.log(lectures.length);
