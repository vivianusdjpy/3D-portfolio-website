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
    git,
    figma,
    threejs, 
    reactDashboard,
    TableauDashboard,
    confusionMatrix,
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
    {
      title: "Cloud Practitioner",
      icon: mobile,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  // const experiences = [
  //   {
  //     title: "Location Strategist (Data Analysis)",
  //     company_name: "SAP SE, Germany",
  //     icon: sap,
  //     iconBg: "#383E56",
  //     date: "Oct 2022 - Present",
  //     points: [
  //       "Conducting research on factors that influence location decisions such as market trends", 
  //       "Investigating tax policies, labor availability and assessing geo-political factors",
  //       "Analyzing data using Excel, identify patterns and trends, drawing insights that inform location decisions ",
  //       "Providing recommendations for new locations and developing strategies for managing existing locations",
  //       "Natural language processing, text clustering and sentiment analysis for customer tickets",
        
  //     ],
  //   },
  //   {
  //     title: "Data Analyst (retail)",
  //     company_name: "Classic Holdings, KE",
  //     icon: cm_logo,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - July 2022",
  //     points: [
  //       "Basket analysis: checking items that are most likely to be bought together and coming up with offers and promotions based on the analysis.",
  //       "Association analysis: Identifying items that are likely to be bought once one another product has been bought.",
  //       "Anomaly detection: Purchase spikes, theft.",
  //       "Predictive analytics: Using sales data to predict and optimize stocking levels."
        
  //     ],
  //   },
  //   {
  //     title: "Robotic Process Automation (RPA) Developer",
  //     company_name: "Infosight Technologies, KE",
  //     icon: Infosight,
  //     iconBg: "#383E56",
  //     date: "June 2020 - Dec 2020",
  //     points: [
  //       "Analyzing business processes – Identifying mundane tasks that could be automated like creating Purchase Orders.",
  //       "Designing and developing automation workflows such as pre-scheduling emails",
  //       "Testing and debugging automation workflows",
  //       "Documentation and training on how to leverage Automation Anywhere",
  //       "OCR and Image recognition for a document verification system",
  //     ],
  //   },
  //   {
  //     title: "General Manager",
  //     company_name: "Classic Holdings, KE",
  //     icon: cm_logo,
  //     iconBg: "#E6DEDD",
  //     date: "Sep 2018 - Sep 2019",
  //     points: [
  //       "Assisted with customer inquiries, resolved complaints, and maintained a high level of customer satisfaction.",
  //       "Conducted training sessions, provided guidance and feedback, and promoted a positive work environment.",            
  //       "Assisted in managing inventory levels, monitoring stock availability, and conducting regular stock checks.",             
  //       "Actively engaged in achieving sales targets and promoting sales growth.",
  //       "Assisted in implementing sales strategies and initiatives, identified opportunities for improvement.",       
  //       "Helped to implement loss prevention measures, including monitoring cash handling procedures and minimizing shrinkage.",        
  //       "Supported the Store Manager with payroll processing, staff evaluations, and other administrative duties as required.",
  //     ],
  //   },
  // ];
  
  // const testimonials = [
  //   {
  //     testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Admin Dashboard UI",
      description:
        "Web-based React.js portfolio dashboard that offers a sleek and responsive interface to manage your orders, customers and distribution.",
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
      image: reactDashboard,
      source_code_link: "https://github.com/vivianusdjpy/admin-dashboard",
    },
    {
      name: "Tableau Project",
      description:
        "The Tableau dashboard displays crop yield analysis and a color-coded map depicting agricultural productivity in a Uganda.",
      tags: [
        {
          name: "Tableau",
          color: "blue-text-gradient",
        },
      ],
      image: TableauDashboard,
      source_code_link: "https://public.tableau.com/views/UGANDAKARAMOJASUB-COUNTYINDEPENDENTPROJECTWEEKONE/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    {
      name: "Game Prediction ML",
      description:
        "Game prediction project utilizing Polynomial and Logistic regression algorithms to forecast outcomes.",
      tags: [
        {
          name: "Jupyter Notebook",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: confusionMatrix,
      source_code_link: "https://github.com/vivianusdjpy/SUPERVISED-LEARNING-WITH-EDA",
    },
  ];
  
  export { services, technologies, projects };