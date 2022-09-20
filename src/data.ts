const importAll = (r: any) => {
  let images: any = {};
  r.keys().forEach((item: string) => { images[item.replace('./', '').replace('.webp', '').replace('-', '')] = r(item) });
  return images
}
const images = importAll(require.context('./assets/img', false, /\.(webp)$/));
console.log(images.ano)

export const linkData = [
  { id: 'main', icon: 'fa-house-user' },
  { id: 'projects', icon: 'fa-laptop-code' },
  { id: 'about', icon: 'fa-address-card' },
  { id: 'jobs', icon: 'fa-briefcase' },
  { id: 'study', icon: 'fa-graduation-cap' },
]

export const dataProjects = [
  {
    key: 'js',
    imgUrl: images.book,
    imgDesc: 'Books project',
    projectLink: 'https://booksproject.netlify.app/',
    projectGit: 'https://github.com/david-gelu/books-project',
    teh: ['js', 'react', 'typescript', 'scss']
  },
  {
    key: 'js',
    imgUrl: images.poke,
    imgDesc: 'Pokemon project',
    projectLink: 'https://proiect18.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect18',
    teh: ['js', 'react', 'css']
  },
  {
    key: 'js',
    imgUrl: images.metal,
    imgDesc: 'Metal vision project',
    projectLink: 'https://project-metal.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect2',
    teh: ['js', 'css']
  },
  {
    key: 'js',
    imgUrl: images.pf,
    imgDesc: 'Forum project',
    projectLink: 'https://proiect15.netlify.app/home',
    projectGit: 'https://github.com/david-gelu/proiect15',
    teh: ['js', 'css']
  },
  {
    key: 'js',
    imgUrl: images.pl,
    imgDesc: 'Walking through Romania project',
    projectLink: 'https://proiect-11.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect11',
    teh: ['js', 'css']
  }, {
    key: 'css',
    imgUrl: images.cv,
    imgDesc: 'My CV madein html and css',
    projectLink: 'https://proiect4.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect4',
    teh: ['html', 'css']
  },
  {
    key: 'css',
    imgUrl: images.it,
    imgDesc: 'Copy ItSchool homepage project',
    projectLink: 'https://proiect16.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect16',
    teh: ['html', 'css', 'bootstrap']
  },
  {
    key: 'css',
    imgUrl: images.ps,
    imgDesc: 'Project made after PSD file',
    projectLink: 'https://proiect14.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect14',
    teh: ['html', 'css']
  },
  {
    key: 'css',
    imgUrl: images.sevens,
    imgDesc: 'Walking through 7 stairs canyon in Romania project',
    projectLink: 'https://proiect7.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect7',
    teh: ['html', 'css']
  },
  {
    key: 'css',
    imgUrl: images.ano,
    imgDesc: 'Year seasons animation',
    projectLink: 'http://proiect12.netlify.app',
    projectGit: 'https://github.com/david-gelu/proiect12',
    teh: ['html', 'css']
  }
]


export const itSchoolStudy = [
  {
    study: 'HTML 5',
    certificate: 'Front-end Web Design',
    link: '"http://site.anc.edu.ro/',
    date: '(Date: July 2019 - December 2019)',
    imgBig: images.itbig,
  },
  {
    study: 'CSS 3',
  },
  {
    study: 'Bootstrap',
  },
  {
    study: 'JavaScript',
  },
  {
    study: 'moment.js',
  }
]
export const freeCodeCampStudy = [
  {
    study: 'HTML 5',
    certificate: 'Responsive Web Design',
    link: 'https://www.freecodecamp.org/certification/davidgelu/responsive-web-design',
    date: '(Date: December 2019)',
    imgBig: images.resbig,
  },
  {
    study: 'CSS 3',
    certificate: 'Front End Libraries',
    link: 'https://www.freecodecamp.org/certification/davidgelu/front-end-libraries',
    date: '( Date: January 2020)',
    imgBig: images.jsbig,
  },
  {
    study: 'Bootstrap',
    certificate: 'JavaScript Algorithms and Data Structures',
    link: 'https://www.freecodecamp.org/certification/davidgelu/javascript-algorithms-and-data-structures',
    date: '(Date: January 2020)',
    imgBig: images.libbig,
  },
  {
    study: 'JavaScript',
    certificate: 'Data Visualization D3.Js',
    link: 'https://www.freecodecamp.org/certification/davidgelu/data-visualization',
    date: '(Date: February 2020)',
    imgBig: images.d3big,
  },
  {
    study: 'Sass / Scss',
  },
  {
    study: 'Reactbeginner',
  }
]
export const udemyStudy = [
  {
    study: 'HTML 5'
  },
  {
    study: 'CSS 3'
  },
  {
    study: 'JavaScript'
  },
  {
    study: 'Json',
    certificate: 'Json beginner ',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f87c2851-16d9-4ef5-82e3-fe292e08eb8a.jpg',
    date: '(Date: February 2020)',
    imgBig: images.jsonbig,
  },
  {
    study: 'Photoshopbeginner',
    certificate: 'Photoshop for Web Design Beginners',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-384533ff-a9f4-45e9-aedc-391c1fe86103.jpg',
    date: '(Date: February 2020)',
    imgBig: images.psbig,
  },
  {
    study: 'Sassbeginner',
    certificate: 'Sass for Beginners',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-5286b0a4-b7ef-47ee-8960-3c0d48594077.jpg',
    date: '(Date: February 2020)',
    imgBig: images.sassbig,
  },
  {
    study: 'Gitbeginner',
    certificate: 'Git started with GitHub',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f3f4b61f-5158-40c6-b6cd-97931e1dadbe.jpg',
    date: '(Date: February 2020)',
    imgBig: images.gitbig,
  },
  {
    study: 'Agile, Scum and Product deliverybeginner',
    certificate: 'Basic of Scrum',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-bbef744b-b1e3-4af4-9b9c-a5b1765727ab.jpg',
    date: '(Date: February 2020)',
    imgBig: images.scrumbig,
  },
  {
    study: 'Node Js API Developmentbeginner',
    certificate: 'Node Js API Development Beginner',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f366e802-7a42-4084-9cda-05b4b80cb62c.jpg',
    date: '(Date: April 2020)',
    imgBig: images.nodebig,
  },
  {
    study: 'React',
    certificate: 'React JS Front end web development for beginners',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6b03db04-a689-4bef-bd25-1f53e69302d7.jpg',
    date: '(Date: May 2020)',
    imgBig: images.reactbig,
  }
]

export const work = [
  {
    everseen: [
      'Collaborate with UX/UI designer for implementing new layouts',
      'Using React, Typescrit, Scss, Bootrstrap to create new components or to add new functionalities with cross-browser compatibility',
      'Building and enhancing available and scalable interfaces for the end users',
      'Working along with development team for achieving high quality results',
      'Debugging for improving functionalities',
      'Agile workflow using Jira/ Confluence',
      'Gitlab - version control',
    ]
  }
]