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
        className='bg-tertiary rounded-[20px] py-2 px-4 min-h-[220px] flex justify-evenly items-center flex-col'
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

     <motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[18px] max-w-6xl leading-[40px] flex flex-wrap'
>
  <div className='w-1/2 pr-4'>
    <p>
      I am a passionate software developer with a love for crafting clean, 
      efficient code and building innovative digital solutions.    
      <br/>
      My journey in software development has been driven by a curiosity to explore emerging 
      technologies and a dedication to delivering impactful solutions that meet user needs.
      <br/>
      Throughout my career, I've had the opportunity to work on a diverse range of projects, developing 
      scalable web applications, creating intuitive user interfaces and optimizing backend systems. 
    </p>
  </div>
  <div className='w-1/2 pl-4'>
    <p>
      Each project has honed my technical skills and deepened my understanding of the 
      importance of collaboration, problem-solving, and continuous learning in the fast-paced world 
      of software development.
      <br/>
      In addition to my technical expertise, I'm committed to fostering a culture of inclusivity, 
      diversity, and lifelong learning within the tech community.     <br/>
      I invite you to connect and share my passion for software development.  <br/>
    </p>
  </div>
</motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");