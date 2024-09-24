const importAll = (r: any) => {
  let images: any = {};
  r.keys().forEach((item: string) => { images[item.replace('./', '').replace('.webp', '').replace('-', '')] = r(item) });
  return images
}
const images = importAll(require.context('./assets/img', false, /\.(webp)$/));

export const linkData = [
  { id: 'main', icon: 'fa-house-user' },
  { id: 'projects', icon: 'fa-laptop-code' },
  { id: 'about', icon: 'fa-address-card' },
  { id: 'jobs', icon: 'fa-briefcase' },
  // { id: 'study', icon: 'fa-graduation-cap' },
  { id: 'contact', icon: 'fa-solid fa-at' },
]

export const dataProjects = [
  {
    key: 'js',
    imgUrl: images.book,
    imgDesc: 'Books project',
    projectLink: 'https://booksproject.netlify.app/',
    projectGit: 'https://github.com/david-gelu/books-project',
    teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass']
  },
  {
    key: 'css',
    imgUrl: images.it,
    imgDesc: 'Copy ItSchool homepage project',
    projectLink: 'https://proiect16.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect16',
    teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap']
  },
  {
    key: 'js',
    imgUrl: images.poke,
    imgDesc: 'Pokemon project',
    projectLink: 'https://proiect18.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect18',
    teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-css3-alt']
  }, {
    key: 'css',
    imgUrl: images.cv,
    imgDesc: 'My CV made in html and css',
    projectLink: 'https://davidgelu-cv.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect4',
    teh: ['fab fa-html5', 'fab fa-css3-alt']
  },
  {
    key: 'js',
    imgUrl: images.metal,
    imgDesc: 'Metal vision project',
    projectLink: 'https://project-metal.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect2',
    teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap', 'fab fa-js-square']
  },
  // {
  //   key: 'css',
  //   imgUrl: images.ps,
  //   imgDesc: 'Project made after PSD file',
  //   projectLink: 'https://proiect14.netlify.app',
  //   projectGit: 'https://github.com/david-gelu/proiect14',
  //   teh: ['fab fa-html5', 'fab fa-css3-alt']
  // },
  // {
  //   key: 'js',
  //   imgUrl: images.pf,
  //   imgDesc: 'Forum project',
  //   projectLink: 'https://proiect15.netlify.app/home',
  //   projectGit: 'https://github.com/david-gelu/proiect15',
  //   teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap', 'fab fa-js-square']
  // },
  // {
  //   key: 'css',
  //   imgUrl: images.sevens,
  //   imgDesc: 'Walking through 7 stairs canyon in Romania project',
  //   projectLink: 'https://proiect7.netlify.app',
  //   projectGit: 'https://github.com/david-gelu/proiect7',
  //   teh: ['fab fa-html5', 'fab fa-css3-alt']
  // },
  {
    key: 'js',
    imgUrl: images.pl,
    imgDesc: 'Walking through Romania project',
    projectLink: 'https://proiect-11.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect11',
    teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square']
  },
  {
    key: 'css',
    imgUrl: images.ano,
    imgDesc: 'Year seasons animation',
    projectLink: 'http://proiect12.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect12',
    teh: ['fab fa-html5', 'fab fa-css3-alt']
  },
  {
    key: 'css',
    imgUrl: images.inv,
    imgDesc: 'Trying to make an paper folding',
    projectLink: 'https://invitatie.netlify.app/',
    projectGit: 'https://github.com/david-gelu/invitatie-test',
    teh: ['fab fa-html5', 'fab fa-css3-alt']
  }
]


// export const mongoStudy = [
//   {
//     study: 'Atlas',
//     certificate: 'Introduction to MongoDB',
//     link: 'https://learn.mongodb.com/c/lN1NOKATQXeuuhXTcJ5IjA',
//     date: '(Date: February 2024)',
//     imgBig: images.mongoBig,
//   },
//   {
//     study: ' Document Model',
//   },
//   {
//     study: 'Connecting to a MongoDB Database',
//   },
//   {
//     study: 'Insert and Find Documents',
//   },
//   {
//     study: 'Replace and Delete Documents',
//   },
//   {
//     study: 'Modifying Query Results',
//   },
//   {
//     study: 'Aggregation',
//   },
//   {
//     study: 'Indexes',
//   },
//   {
//     study: 'Atlas Search',
//   },
//   {
//     study: 'Data Modeling Intro',
//   },
//   {
//     study: 'Transactions',
//   }
// ]
// export const itSchoolStudy = [
//   {
//     study: 'HTML 5',
//     certificate: 'Front-end Web Design',
//     link: '"http://site.anc.edu.ro/',
//     date: '(Date: July 2019 - December 2019)',
//     imgBig: images.itbig,
//   },
//   {
//     study: 'Css 3',
//   },
//   {
//     study: 'Bootstrap',
//   },
//   {
//     study: 'JavaScript',
//   },
//   {
//     study: 'moment.js',
//   }
// ]
// export const freeCodeCampStudy = [
//   {
//     study: 'HTML 5',
//     certificate: 'Responsive Web Design',
//     link: 'https://www.freecodecamp.org/certification/davidgelu/responsive-web-design',
//     date: '(Date: December 2019)',
//     imgBig: images.resbig,
//   },
//   {
//     study: 'Css 3',
//     certificate: 'Front End Libraries',
//     link: 'https://www.freecodecamp.org/certification/davidgelu/front-end-libraries',
//     date: '( Date: January 2020)',
//     imgBig: images.jsbig,
//   },
//   {
//     study: 'Bootstrap',
//     certificate: 'JavaScript Algorithms and Data Structures',
//     link: 'https://www.freecodecamp.org/certification/davidgelu/javascript-algorithms-and-data-structures',
//     date: '(Date: January 2020)',
//     imgBig: images.libbig,
//   },
//   {
//     study: 'JavaScript',
//     certificate: 'Data Visualization D3.Js',
//     link: 'https://www.freecodecamp.org/certification/davidgelu/data-visualization',
//     date: '(Date: February 2020)',
//     imgBig: images.d3big,
//   },
//   {
//     study: 'Sass / Scss',
//   },
//   {
//     study: 'React ',
//   }
// ]
// export const udemyStudy = [
//   {
//     study: 'HTML 5'
//   },
//   {
//     study: 'Css 3'
//   },
//   {
//     study: 'JavaScript'
//   },
//   {
//     study: 'Json',
//     certificate: 'Json  ',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f87c2851-16d9-4ef5-82e3-fe292e08eb8a.jpg',
//     date: '(Date: February 2020)',
//     imgBig: images.jsonbig,
//   },
//   {
//     study: 'Photoshop ',
//     certificate: 'Photoshop for Web Design s',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-384533ff-a9f4-45e9-aedc-391c1fe86103.jpg',
//     date: '(Date: February 2020)',
//     imgBig: images.psbig,
//   },
//   {
//     study: 'Sass ',
//     certificate: 'Sass for s',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5286b0a4-b7ef-47ee-8960-3c0d48594077.jpg',
//     date: '(Date: February 2020)',
//     imgBig: images.sassbig,
//   },
//   {
//     study: 'Git - version control',
//     certificate: 'Git started with GitHub',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f3f4b61f-5158-40c6-b6cd-97931e1dadbe.jpg',
//     date: '(Date: February 2020)',
//     imgBig: images.gitbig,
//   },
//   {
//     study: 'Agile, Scrum and Product delivery ',
//     certificate: 'Basic of Scrum',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-bbef744b-b1e3-4af4-9b9c-a5b1765727ab.jpg',
//     date: '(Date: February 2020)',
//     imgBig: images.scrumbig,
//   },
//   {
//     study: 'Node Js API Development',
//     certificate: 'Node Js API Development ',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f366e802-7a42-4084-9cda-05b4b80cb62c.jpg',
//     date: '(Date: April 2020)',
//     imgBig: images.nodebig,
//   },
//   {
//     study: 'React',
//     certificate: 'React JS Front end web development for s',
//     link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6b03db04-a689-4bef-bd25-1f53e69302d7.jpg',
//     date: '(Date: May 2020)',
//     imgBig: images.reactbig,
//   }
// ]

export const studies = [
  {
    institution: 'MongoDb',
    study: 'Introduction to MongoDB - database',
    year: '2024'
  },
  {
    institution: 'Faculty of Economic Sciences and Business Administration',
    study: 'Marketing study programme',
    year: '2022 - currently'
  },
  {
    institution: 'Udemy',
    study: 'Frontend Development - online courses',
    year: '2020'
  },
  {
    institution: 'freeCodeCamp',
    study: 'Frontend Development - online courses',
    year: '2019 - 2020'
  },
  {
    institution: 'ItSchool',
    study: 'Frontend Development - ANC accreditations',
    year: '2019'
  },
  {
    institution: 'Youtube',
    study: 'Frontend and Backend Development - online videos',
    year: '2019 - currently'
  },

]

export const work = [
  {
    everseen: [
      'Component Development: Employed React, TypeScript, SCSS, Bootstrap, and Styled Components within a Node.js environment to develop reusable components and implement innovative features, ensuring cross-browser compatibility and consistent performance across platforms.',
      'UI/UX Collaboration: Worked closely with UX/UI designers to transform design concepts into functional, user-friendly interfaces. Through ongoing collaboration, contributed to iterative design improvements, enhancing the overall user experience.',
      'Agile Development: Experienced in Agile methodologies, utilizing tools such as Jira and Confluence to foster efficient collaboration and project management in fast-paced development environments. Proficient with GitLab for version control, ensuring code integrity, maintainability, and seamless team collaboration.',
      'Scalable Interface Development: Skilled in building and optimizing scalable interfaces that deliver a seamless user experience, addressing diverse user needs and supporting business growth objectives.',
      'Teamwork: A collaborative and results-driven team player, excels in dynamic team environments by leveraging collective expertise to achieve high-quality outcomes. Consistently contributes to project success through effective communication and shared problem-solving.',
    ]
  }
]