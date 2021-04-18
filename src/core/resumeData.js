import pernGif from "../images/demo.gif";

const resumeData = {
  name: "Ahmed Ali",
  linkedinId: "",
  email: "ahmedali.96@hotmail.com",
  roleDescription:
    " Looking for a front-end developer with a specialty in React Js ⚛️ and a intermediate understanding of back-end technologies 🧙🏾‍♂️, one that could also double as a UI/UX designer 🤹🏾‍♂️, or perhaps just an eager and passionate programmer 👨🏾‍💻. If this sounds like someone you're looking for, look no further!",
  socialLinks: [
    {
      name: "github",
      url: "https://github.com/AhmedAlihashi",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "Hey there 👋🏾, I'm a web developer based out of Toronto looking for his next project. My skill set / interests are primarily centered around JavaScript, React & React Native. I'd classify myself as a Front-End developer but as my projects show I'm not afraid to jump into the backend. Currently I'm working towards sharpening my skills with regards to developing desktop applications. If you're looking for a developer who will go the distance to get the job done and grow with your team, feel free to contact me.",
  address: "Toronto, On",

  work: [
    {
      CompanyName: "Your Fuse Inc",
      jobTitle: "Intern Software Engineer",
      specialization:
        "Primarily developed using React, Redux and Google Firebase.",
      specialization2:
        "Developed solutions based on the expectations of clients and the guide of senior developers.",
      specialization3:
        "Assisted in the integration of client approved design schemes using the design & prototyping tool Invision",
      MonthOfStarting: "Dec",
      YearOfStarting: "2019",
      MonthOfLeaving: "Jun",
      YearOfLeaving: "2020",
      Achievements: "Some Achievements",
    },
    {
      CompanyName: "Freelance",
      jobTitle: "Web Developer",
      specialization:
        "Created web sites and apps up to the industry standard for clients.",
      specialization2:
        "Used Adobe suite skills to create mock-ups for clients as well as trained them how to use it.",
      specialization3:
        "Developed easily readable documentation that a programmer of any level can understand.",
      MonthOfStarting: "Sept",
      YearOfStarting: "2018",
      MonthOfLeaving: "Nov",
      YearOfLeaving: "2019",
      Achievements: "Some Achievements",
    },
  ],
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "JavaScript",
    },
    {
      skillname: "MongoDB",
    },
    {
      skillname: "Express",
    },
    {
      skillname: "React",
    },
    {
      skillname: "Nodejs",
    },
    {
      skillname: "Electron",
    },
    {
      skillname: "Adobe Illustrator / XD",
    },
  ],
  portfolio: [
    {
      name: "Our Ends",
      description:
        "I was given the opportunity to develop all of the web based tools needed by their blog. This included a website, an android & ios app and a windows app for CRUD operations.",
      url: null,
      repourl: null,
      website: {
        imgurl: "https://media.giphy.com/media/jmSi1xSHBJuDfQTiEN/giphy.gif",
        repourl: null,
        url: "https://ourends.ca/",
      },
      android: {
        imgurl: `https://media.giphy.com/media/Y4bzv6DYbYzy8jDnoW/giphy.gif`,
        repourl: null,
        url:
          "https://play.google.com/store/apps/details?id=com.ourends.ourendsapp",
      },
      ios: {
        imgurl: `https://media.giphy.com/media/3og0IPZcpT7hyEZ7nW/giphy.gif`,
        repourl: null,
        url: "https://apps.apple.com/us/app/our-ends/id1537892808",
      },
    },
    {
      name: "The New York Times Snapshot",
      description:
        "This is an app that displays the most viewed, shared and emailed articles of the last 30 days from The New York Times using their developer api. The alternate version is the same app but using the animation library Framer motin. ",
      imgurl: `https://media3.giphy.com/media/kI91JqYXz3I8DFs5fx/giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/nytimes",
      url: "https://ahmedalihashi.github.io/nytimes/",
      altUrl: "https://ahmedalihashi.github.io/nytimes_framer",
      prePackagedUrl:
        "https://drive.google.com/file/d/1T3rpNWmfgOPKD_5EBAT9rD0j9iJVBn9l/view?usp=sharing",
    },
    {
      name: "Global Covid-19 Tracker",
      description:
        "This website shows a snapshot of the current global pandemic (Covid-19) by country.",
      imgurl: `https://media3.giphy.com/media/Wpwq3jVvIBK9pVbQ5c/giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/covid-19-tracker",
      url: "https://ahmedalihashi.github.io/covid-19-tracker/",
      prePackagedUrl:
        "https://drive.google.com/file/d/1SROxaMdi_fokQ-FBZtNTICWwCq8osU_K/view?usp=sharing",
    },
    {
      name: "Pokedex",
      description:
        "This is an index of all the characters within the popular video game/tv series Pokémon.",
      imgurl: `https://media0.giphy.com/media/WytSQL7115G6uPwDwK/giphy.gif?cid=ecf05e47d7bod3x4hh3rz44a9ecq07c1k5v527sppviek7ph&rid=giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/pokedex",
      url: "https://ahmedalihashi.github.io/pokedex/",
      prePackagedUrl:
        "https://drive.google.com/file/d/1_tnUK_Zsm0JTbYhZ0o5Sq28RZJ72NkRm/view?usp=sharing",
    },
    {
      name: "PERN Stack Note Taker",
      description:
        "This is a simple note taking app that uses PostgreSQL, Express, React and Node.js ",
      imgurl: pernGif,
      repourl: "https://github.com/AhmedAlihashi/PostgreSQL-Note-Taker",
      url: null,
    },
    {
      name: "Blog App",
      description:
        "This project uses React Native to display the contents of a blog and Electron to act as the content managemnet system.",
      imgurl: `https://i.imgur.com/1irEscM.gif`,
      repourl: "https://github.com/AhmedAlihashi/blog",
      url: null,
    },
    {
      name: "Noted",
      description:
        "This project is a note taking application that uses Google Firebase Auth to provide user authentication and Firestore as a database solution.",
      imgurl: `https://media3.giphy.com/media/JmJlebKKwiJYmmpQGZ/giphy.gif?cid=ecf05e47uochwyhgvl4pqz1yg882t1clco02jbkwa36m29xt&rid=giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/noted",
      url: "https://noted-55f73.web.app",
      prePackagedUrl:
        "https://drive.google.com/file/d/1D6UhwbHirGhFXa-5_PUjJLSFWn1XPTT2/view?usp=sharing",
    },
    {
      name: "Podcast App",
      description:
        "This is a fullstack React Native application made for both IOS & Android. The app uses Google Firebase as a database and storage solution.",
      imgurl: `https://media3.giphy.com/media/VbboyCHmoUh1ulG41I/giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/Podcast-App",
      url: null,
    },
    {
      name: "Simple Store",
      description:
        "This web app was built/deployed to demonstrate the functionality of the MERN (MongoDB, Express, React, Node.js) stack.",
      imgurl: `https://media3.giphy.com/media/8cdbH0l0s4gShDhLzl/giphy.gif?cid=ecf05e473b00jv82coinwmbd4e67k0rwjkhtbyvwr72zr2r5&rid=giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/Simple-Storefront",
      url: "https://reactstore.herokuapp.com/#/",
    },
    {
      name: "Billboard Rankings Tracker",
      description:
        "This desktop Application queries billboard for either its Top 200 Greatest Albums of All-Time, or its weekly Hot 100 (based on week entered).",
      imgurl: `https://media1.giphy.com/media/xlMtfovxvoDlkTWQYz/giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/billboarders",
      url: null,
      prePackagedUrl:
        "https://drive.google.com/file/d/1-oPqrF7NPneBdBkOYk29uO589Rm1irwb/view?usp=sharing",
    },
    // {
    //   name: "Power Lv",
    //   description:
    //     "The purpose of this app is to track the fitness progress of a user and compare current progress with friends.",
    //   imgurl: `https://media.giphy.com/media/1eEH74omQufGNLIywJ/source.gif`,
    //   repourl: "https://github.com/AhmedAlihashi/PowerLV",
    //   url: null,
    // },
    {
      name: "React Desktop App",
      description:
        "The purpose of the app is to provide a YouTube like experience without opening a browser.",
      imgurl: `https://media3.giphy.com/media/kAuLRq4MpsVzyIWNpN/giphy.gif?cid=ecf05e4773ips7ikcjvvlpdlak02hq6cm74te4vs54f8opmd&rid=giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/Slang",
      url: null,
      prePackagedUrl:
        "https://drive.google.com/file/d/1cdKLCo8rocOPNxMi_ki67kp-hBwYmZYX/view?usp=sharing",
    },
    {
      name: "Contact List",
      description:
        "This is just a simple showcase of the functionality of Redux within React",
      imgurl: `https://media0.giphy.com/media/fw316AXmjO0fQuecVV/giphy.gif`,
      repourl: "https://github.com/AhmedAlihashi/contact-list",
      url: "https://ahmedalihashi.github.io/contact-list/",
    },
  ],
};

export default resumeData;
