import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cm_logo,
    carrent,
    jobit,
    tripguide,
    threejs, 
    sap,
    Infosight,
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Location Strategist (Data Analysis)",
      company_name: "SAP SE, Germany",
      icon: sap,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Conducting research on factors that influence location decisions such as market trends", 
        "Investigating tax policies, labor availability and assessing geo-political factors",
        "Analyzing data using Excel, identify patterns and trends, drawing insights that inform location decisions ",
        "Providing recommendations for new locations and developing strategies for managing existing locations",
        "Natural language processing, text clustering and sentiment analysis for customer tickets",
        
      ],
    },
    {
      title: "Data Analyst (retail)",
      company_name: "Classic Holdings, KE",
      icon: cm_logo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - July 2022",
      points: [
        "Basket analysis: checking items that are most likely to be bought together and coming up with offers and promotions based on the analysis.",
        "Association analysis: Identifying items that are likely to be bought once one another product has been bought.",
        "Anomaly detection: Purchase spikes, theft.",
        "Predictive analytics: Using sales data to predict and optimize stocking levels."
        
      ],
    },
    {
      title: "Robotic Process Automation (RPA) Developer",
      company_name: "Infosight Technologies, KE",
      icon: Infosight,
      iconBg: "#383E56",
      date: "June 2020 - Dec 2020",
      points: [
        "Analyzing business processes – Identifying mundane tasks that could be automated like creating Purchase Orders.",
        "Designing and developing automation workflows such as pre-scheduling emails",
        "Testing and debugging automation workflows",
        "Documentation and training on how to leverage Automation Anywhere",
        "OCR and Image recognition for a document verification system",
      ],
    },
    {
      title: "General Manager",
      company_name: "Classic Holdings, KE",
      icon: cm_logo,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Sep 2019",
      points: [
        "Assisted with customer inquiries, resolved complaints, and maintained a high level of customer satisfaction.",
        "Conducted training sessions, provided guidance and feedback, and promoted a positive work environment.",            
        "Assisted in managing inventory levels, monitoring stock availability, and conducting regular stock checks.",             
        "Actively engaged in achieving sales targets and promoting sales growth.",
        "Assisted in implementing sales strategies and initiatives, identified opportunities for improvement.",       
        "Helped to implement loss prevention measures, including monitoring cash handling procedures and minimizing shrinkage.",        
        "Supported the Store Manager with payroll processing, staff evaluations, and other administrative duties as required.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/vivianusdjpy/books.",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/vivianusdjpy/threejs",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };