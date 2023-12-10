/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akhand's Portfolio",
  description:
    "An enthusiastic individual driven to contribute to comprehensive product development, specializing in the creation of sustainable and scalable social and technical systems that generate meaningful impact.",
  og: {
    title: "Akhand Pratap Portfolio",
    type: "website",
    url: "http://google.com/",
  },
};

//Home Page
const greeting = {
  title: "Akhand Pratap",
  logo_name: "Akhand Pratap",
  nickname: "",
  subTitle:
    "An enthusiastic individual driven to contribute to comprehensive product development, specializing in the creation of sustainable and scalable social and technical systems that generate meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1d9n7ZR-UqhAtTKgazDN5HARUHzqrFABY/view?usp=sharing",
  portfolio_repository: "https://github.com/AkhandPratapSingh1",
  githubProfile: "https://github.com/AkhandPratapSingh1",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AkhandPratapSingh1",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akhandpratap-singh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:akhandpratap6397@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Automation and Scrapping",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various automation, scraping, and data analysis use cases",
        "⚡ Experience in working on Automation and Scraping projects with a focus on efficiency and precision",
        "⚡ Advanced quantitative modeling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos-selenium",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Automation",
          imageSrc: "automation.png",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Beautiful Soap",
          imageSrc: "bs4.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "power-automate",
          imageSrc: "Power-automate-logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Constructing a dynamic and responsive front-end for websites with React-Redux.",
        "⚡ Crafting mobile applications using technologies such as React Native, and standalone Android apps with Java.",
        " ⚡ Developing robust application backends utilizing Node.js and Flask.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          imageSrc: "node.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in working with multiple cloud platforms, particularly experienced with Jira and Firebase (Basic).",
        "⚡ Skilled in hosting and maintaining websites on virtual machine instances, including database integration.",
        "⚡ Actively learning more about various cloud technologies beyond Jira and Firebase.",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "blue",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/akhandPratap/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akhandpratap6397",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/akhandpratap29",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/akhandsingh6397",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PK University of Shivpuri",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "pk_shivpuri.png",
      alt_name: "PK university Shivpuri",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Engaged in foundational software engineering subjects, encompassing DS, Algorithms, DBMS, OS, CA, AI.",
        "⚡ Expanded expertise through courses in Deep Learning, Data Science, Cloud Computing, and Full Stack Development.",
        "⚡ Collaborated on real-world projects, applying theoretical knowledge to practical scenarios.",
      ],
      website_link: "http://pkuniversity.edu.in/",
    },
    {
      title: "Dayalbagh Educational Institute",
      subtitle: "Diploma in Software Developement",
      logo_path: "dei_logo.png",
      alt_name: "dei agra",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Actively engaged in college practicals and innovation initiatives, fostering continuous participation.",
        "⚡ Contributed to blood donation camps, emphasizing the importance of saving lives..",
        "⚡ Volunteered for Unnat Bharat Abhiyan and participated in the 26th January march past, showcasing dedication to community development and national celebrations.",
      ],
      website_link: "https://www.dei.ac.in/dei/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React Js",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/6e696220d076",
      alt_name: "HackerRank",
      color_code: "#050c18",
    },
    {
      title: "SQL",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/f13df0485aa4",
      alt_name: "hackerrank",
      color_code: "#050c18",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/062c47ad5800",
      alt_name: "hackerrank",
      color_code: "#050c18",
    },
    {
      title: "Power BI",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn.jpeg",
      certificate_link: "#",
      alt_name: "Simplilearn",
      color_code: "#003853",
    },
    {
      title: "Engineering",
      subtitle: "- Undergraduate & Masters Asia Virtual Experience ",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1yGJQ3BfdDbUN26mw1YoVcjEDNahNpeya/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Coursera",
      subtitle: "Develop a Company Website with Wix",
      logo_path: "Coursera-Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/UYVQ3NSE2FLK",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "MySQL Database Development Mastery",
      subtitle: "-  Trevoir Williams",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-192eb1c8-5cd4-4257-9f4f-1c558648bcd3/",
      alt_name: "udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "C programming",
      subtitle: "- SoloLearn",
      logo_path: "sololearn.png",
      certificate_link: "https://www.sololearn.com/en/certificates/CT-RRJPJ1GX",
      alt_name: "sololearn",
      color_code: "#00000099",
    },
    {
      title: "Typescript",
      subtitle: "- Nrupul Dev",
      logo_path: "masai.jpg",
      certificate_link:
        "https://certificates.masaischool.com/learn/652ca411af340f03c1513f38",
      alt_name: "Masai",
      color_code: "white",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Engaged in college practicals and innovation initiatives, demonstrating continuous participation. Explored foundational software engineering subjects, complemented by courses in AI, Graph ML, and Computer Vision. As a Junior Software Developer at Trip101.com, enhanced user functionality using Ruby on Rails and Angular. Served as a Project Assistant at Pixeltruth, automating workflows and designing management systems for a 70% increase in efficiency. Additionally, contributed to the multimedia department and participated in national events, showcasing a diverse skill set and commitment to both technical and community-oriented roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Junior Software Developer",
          company: "Trip Pte Ltd",
          company_url: "https://trip101.com/",
          logo_path: "trip101.jpeg",
          duration: "Aug 2023 - Nov 2023",
          location: "The Central, Singapore (Remote)",
          description:
            "As a Junior Software Developer at Trip101.com, I played a pivotal role in enhancing user functionality and experience. Utilizing my skills in Ruby on Rails and Angular, I developed new features for web applications, ensuring improved responsiveness and interaction. My responsibilities extended to identifying and promptly resolving bugs to guarantee application stability. Embracing test-driven development (TDD) practices, I focused on maintaining code reliability and reducing potential issues. This experience not only honed my technical proficiency but also fostered a proactive approach in ensuring a seamless user experience on the Trip101.com platform.",
          color: "#0879bf",
        },
        {
          title: "Project Assistant",
          company: "Pixeltruth",
          company_url: "https://www.pixeltruth.com/",
          logo_path: "pixeltruth.png",
          duration: "May 2022 - Jul 2023",
          location: "Agra, Uttar Pradesh",
          description:
            "As a Project Assistant at Pixeltruth, I made substantial contributions to workflow automation and the design of effective management systems. This role involved the development and deployment of customized software solutions, significantly reducing manual workloads by 70% and boosting overall operational efficiency by 50%. I took on the responsibility of serving as a reporting manager for web risk analysis, collaborating with BNPL clients such as Simpl, Phone Pe, and HDFC. Additionally, I crafted a management system in PHP to streamline the collection of daily work data from employees. Further demonstrating my versatility, I created interactive Power BI dashboards to convey business insights and monitor key performance indicators. My role at Pixeltruth underscored my ability to drive efficiency through technology and automate critical processes for optimal organizational performance..",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Campus Ambassador and Marketing Intern",
          company: "Codekart Solutions Pvt. Ltd",
          company_url: "https://thecodekart.com/",
          logo_path: "codekart.jpeg",
          duration: "May 2021 - Dec 2021",
          location: "Bhubaneswar, Odisha",
          description:
            "As a Campus Ambassador and Marketing Intern at Codekart, I actively supported campus events to enhance student engagement and promote campus-wide initiatives. This multifaceted role allowed me to contribute to the vibrancy of campus life by fostering a sense of community and participation. Through my involvement, I gained valuable experience in event coordination and marketing strategies, honing my interpersonal and organizational skills. This opportunity not only enriched my understanding of community engagement but also provided a platform to apply my creativity and contribute to the overall success of campus events.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },

    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure. (Working On backend to fetch all project from github --- after this all poroject will showing here along with their live link and programming language used)",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "image(4).png",
    description:
      "I'm accessible across various social media platforms, ensuring a prompt response within 24 hours. My expertise spans Automation, Scrapping, React, PHP, Python, and Open Source Development. Feel free to reach out for assistance or collaboration.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Subhas Gali Moh Khirki Awagarh Etah- Uttar Pradesh - 207301",
    locality: "Etah",
    country: "IN",
    region: "Uttar Pradesh",
    postalCode: "207301",
    streetAddress: "Moh Khirki",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NjuCToBiTtHhGu3A7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
