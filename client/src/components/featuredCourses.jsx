import ntu_img from "../images/ntu.jpg";
import smu_img from "../images/smu.jpg";
import nus_img from "../images/nus.jpg";
import sit_img from "../images/sit.jpg";
import suss_img from "../images/suss.jpg";
import sutd_img from "../images/sutd.jpg";

const FeaturedCourses = [
  {
    imageUrl: smu_img,
    school: "Singapore Management University",
    title: "Accountancy",
    description:
      "The programme provides a holistic education that is broad-based with a strong accounting core, covering business, technology, entrepreneurship, leadership skills, communications and social responsibility. All students are guaranteed a Second Major, which they can choose from any School across SMU.",
    faculty: "School of Accountancy",
  },
  {
    imageUrl: sit_img,
    school: "Singapore Institute of Technology",
    title: "Accountancy",
    description:
      "This degree programme will hone students’ critical and analytical skills in addition to the requisite knowledge needed for a professional accounting career in commerce, industry, government or public practice. Graduates will be specialists with deep skill-sets ready for the accounting sector.",
    faculty: "SIT@Dover",
  },
  {
    imageUrl: suss_img,
    school: "Singapore University of Social Sciences",
    title: "Accountancy",
    description:
      "The Accountancy professional major trains students to be qualified, competent and confident accountants. It equips them with strong academic and professional knowledge and skills in key subjects such as accounting, assurance and attestation, law, taxation and information technology.",
    faculty: "School of Business",
  },
  {
    imageUrl: sutd_img,
    school: "Singapore University of Technology and Design",
    title: "Computer Science and Design",
    description:
      "You will be the drivers of the future’s digital development in both software and hardware, with a strong focus on computing, systems and augmented intelligence. We  aim to equip students with basic computational and mathematical tools needed for problem solving using computers and to instil algorithmic thinking.",
    faculty: "Information Systems Technology and Design",
  },
  {
    imageUrl: ntu_img,
    school: "Nanyang Technological University",
    title: "Computer Science",
    description:
      "The focus of this Computer Science programme is on practice-oriented application of computer science foundations. This is evident in the mandatory industrial attachment, group innovation and design projects, capstone projects in the final year and several other mini-projects throughout the programme.",
    faculty: "School of Computer Science and Engineering",
  },
  {
    imageUrl: nus_img,
    school: "National University of Singapore",
    title: "Computer Science",
    description:
      "The Bachelor of Computing (Honours) in Computer Science or BComp (CS) programme aims to nurture students for a rewarding computing career in various industry sectors. Suitable for those who love hands-on work and keen to apply computing technologies to solve real-world problems, the programme will equip students with the critical knowledge and capacity to take on the world with confidence.",
    faculty: "NUS Computing",
  },
];

export default FeaturedCourses;
