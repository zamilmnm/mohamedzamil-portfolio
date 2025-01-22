const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mohamed Zamil | Portfolio",
  description:
    "A data analytics enthusiast committed to extracting valuable insights from data, creating intuitive visualizations, and enabling smarter business strategies.",
  og: {
    title: "Zamil Portfolio",
    type: "website",
    url: "http://rohankokkula.ml/",
  },
};

//Home Page
const greeting = {
  title: "Welcome!",
  sub: "Mohamed Zamil",
  logo_name: "Mohamed Zamil",
  resumeLink: "https://drive.google.com/file/d/14a6u4Zjfckfn2z9830ll8OxeMphnJeU8/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/zamilmnm",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/zamilmnm",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/zamilmnm",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@zamilmnm/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/zamil-naleem/",
    },
    
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Extract insights from structured and unstructured data, translating them into actionable recommendations for decision-making",
        "⚡ Create interactive dashboards and visualizations using Tableau, Power BI, and Python, making complex data easy to understand for all stakeholders",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Track and analyze KPIs, providing insights to improve operations and meet organizational objectives",
        "⚡ Automate repetitive tasks in data analysis, freeing up time for strategic decision-making",
        "⚡ Dive deep into datasets to uncover hidden trends and patterns that drive innovation and growth",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:database",
          style: {
            backgroundColor: "transparent",
          },
        },
        
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos-opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "fa-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    // {
    //   title: "Web Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
    //     "⚡ Creating application backend in Node, Flask & Streamlit",
    //     "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "BootStrap",
    //       fontAwesomeClassname: "logos-bootstrap",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "simple-icons:node-dot-js",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //   ],
    // },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Analytics projects.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    // {
    //   title: "TEATH",
    //   img_path: "project-06.png",
    //   description:
    //     "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "TextBlob",
    //       color: "#820032",
    //     },
    //     {
    //       lang: "OpenCV",
    //       color: "#00a100",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://teath.herokuapp.com ",
    //   code: "https://github.com/rohankokkula/TEATH",
    //   linkcolor: "white",
    // },

    // {
    //   title: "Voice Gender Detection",
    //   img_path: "voice.gif",
    //   description:
    //     "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "tensorflow",
    //       color: "#4257f5",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "NeuralViz",
    //   img_path: "neural.gif",
    //   description:
    //     "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "numpy",
    //       color: "#8700b0",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://neuralviz.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/neuralviz",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    // {
    //   title: "Newsearcher",
    //   img_path: "news.gif",
    //   description:
    //     "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "newspaper3k",
    //       color: "#303030",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "nltk",
    //       color: "#051c61",
    //     },
    //   ],
    //   link: "https://newsearcher.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/Newsearcher",
    //   linkcolor: "white",
    // },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Intern Data Analytics",
        subtitle: "John Keells Holdings Transportation, Sri Lanka.",
        date: "2024 July - 2024 Dec",
        content: [
          
        ],
      },
      {
        title: "--",
        subtitle: "--",
        date: "2023 August - 2024 May",
        content: [
          
        ],
      },
      {
        title: "IT Admin & Analytics",
        subtitle: "S&T Brothers, Sri Lanka.",
        date: "2022 Feb - 2023 July",
        content: [
         
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "BSc (Hons) Computer Science and Software Engineering",
          subtitle: "University of Bedfordshire, UK",
          date: "2023 Sep - 2024 Sep",
          content: ["GPA: 3.5/4"],
        },
        {
          title: "HND in Computing (Software Engineering)",
          subtitle: "Pearson College London",
          date: "2021 May - 2023 Feb",
          content: ["Grade: Merit"],
        },
      ],
    },
    // {
    //   title: ["Ranks and Achivements"],
    //   data: [
    //     {
    //       title: "Ranks",
    //       content: [
    //         "#135/854 in Summer Analytics Kaggle Competition by IITG",
    //         "#113/5064 in CV-NLP Hackathon by HackerEarth",
    //       ],
    //     },
    //     {
    //       title: "Achievements",
    //       content: [
    //         "Designing Team Head at ACM-VIT",
    //         "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
    //         "Tableau Analyst & Consumer Badge by Tableau Official",
    //       ],
    //     },
    //   ],
    // },
    
  ],
};

//certificate cards
const certifications = {
  certifications: [
    // {
    //   title: "Tableau Analyst",
    //   subtitle: "Tableau",
    //   logo_path: "tabana-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Tableau Consumer",
    //   subtitle: "Tableau",
    //   logo_path: "tabcon-01.png",
    //   certificate_link:
    //     "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
    //   alt_name: "Tableau",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Problem solving",
    //   subtitle: "HackerRank",
    //   logo_path: "problem-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Python",
    //   subtitle: "HackerRank",
    //   logo_path: "python-01.png",
    //   certificate_link: "https://www.hackerrank.com/rohankokkula",
    //   alt_name: "HackerRank",
    //   color_code: "#000000",
    // },
    // {
    //   title: "Certificate of Merit",
    //   subtitle: "Summer Analytics | IIT Guwahati",
    //   logo_path: "iitg-01.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "IITG",
    //   color_code: "#000000",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dubai, UAE",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+971 558591616",
  },
  emailSection:{
    title: "Email",
    subtitle: "mohamedzamil19@gmail.com",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/zamilmnm",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zamil-naleem/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@zamil_mnm",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mohamedzamil19@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#EA4335", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/zamil_mnm/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Twitter",
    link: "https://x.com/zamil_mnm",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#f7f7f7", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
