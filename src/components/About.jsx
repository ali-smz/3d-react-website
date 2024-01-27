import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-[12rem]">
        <p className={styles.sectionSubText}>introduction</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] mt-4 max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default About;
