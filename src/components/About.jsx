import React from "react";
import { Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to my portfolio! 
        I'm thrilled to share my journey as a dedicated and passionate junior developer specializing in software development, and cloud computing. 
        Within these realms, I've honed my skills to not only analyze complex datasets but also derive invaluable insights crucial for informed decision-making.

        In software development, my expertise spans across various programming languages and frameworks. 
        Whether it's crafting captivating front-end experiences using HTML, CSS, and JavaScript or diving into the depths of back-end programming with Python and Node.js, I bring a meticulous approach to every project I undertake.

        Moreover, my proficiency in cloud computing allows me to architect and deploy applications 
        that are not only scalable but also resilient in the face of dynamic demands. 
        With hands-on experience in leveraging cloud services such as EC2, S3, Lambda, and more, 
        I'm equipped to tackle the challenges of modern application development head-on.

        Through this platform, I aim to showcase not just my skills and experiences, 
        but also to provide valuable insights into my professional journey. 
        Join me as I navigate through the ever-evolving landscape of technology, 
        continuously striving for excellence in every endeavor.
        <br/>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");