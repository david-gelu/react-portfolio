type ImageModule = { default: string }

const importAll = async (r: Record<string, () => Promise<ImageModule>>) => {
  const images: Record<string, string> = {}

  await Promise.all(
    Object.entries(r).map(async ([path, importFn]) => {
      const key = path.replace('./assets/img/', '').replace('.webp', '')
      const module = await importFn()
      images[key] = module.default
    })
  )

  return images
}
const loadImages = async () => {
  const images = await importAll(
    import.meta.glob('./assets/img/*.webp') as Record<string, () => Promise<ImageModule>>
  )
  return [
    {
      key: 'js',
      imgUrl: images['portfolio'],
      title: 'Interactive Portfiolio',
      imgDesc: 'Interactive Portfiolio built with React and TypeScript',
      projectLink: 'https://davidgelu.netlify.app',
      projectGit: 'https://github.com/david-gelu/react-portfolio',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Designed and developed a scalable personal portfolio using React and TypeScript, focused on performance, clean architecture, and user experience. Implemented reusable component patterns and optimized rendering to ensure fast load times and smooth navigation. Structured the project for easy extensibility and long-term maintainability. Reduced unnecessary re-renders through optimized component structure. Structured codebase for scalability and long-term maintainability. Improved UI responsiveness through efficient state management.'
    },
    {
      key: 'css',
      imgUrl: images['cv'],
      title: 'Interactive CV App',
      imgDesc: 'Interactive CV App (React)',
      projectLink: 'https://davidgelu-cv.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect4',
      teh: ['fab fa-html5', 'fab fa-css3-alt'],
      desc: 'A modern, interactive CV application built with React, designed to present professional experience in a dynamic and downloadable format. This project reimagines a traditional CV as a web application, focusing on user experience, accessibility, and real-time interaction.'
    },
    {
      key: 'js',
      imgUrl: images['dailys'],
      title: 'Daily tasks project',
      imgDesc: 'Daily tasks project',
      projectLink: 'https://time-manager-frontend.vercel.app/',
      projectGit: 'https://github.com/david-gelu/time-manager',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Built a task management application with a focus on efficient state handling and scalable UI architecture using React, React-query, MongoDB, Nodejs, Typescript. Implemented dynamic updates and optimized component rendering to ensure a responsive and consistent user experience. Designed reusable logic to support future feature expansion. Designed reusable components to improve development efficiency.'
    },
    {
      key: 'js',
      imgUrl: images['time-pass'],
      title: 'Time passed since',
      imgDesc: 'Time passed since',
      projectLink: 'https://time-passed.netlify.app/',
      projectGit: 'https://github.com/david-gelu/time-passed',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Built a time-tracking utility that dynamically calculates and displays time differences in real time. Focused on accurate date handling, efficient updates, and optimized rendering to ensure smooth and responsive UI behavior.'
    },
    {
      key: 'js',
      imgUrl: images['check'],
      title: 'Diference checker project',
      imgDesc: 'Tasks project made to find the difference between data sets',
      projectLink: 'https://checker-js.netlify.app/',
      projectGit: 'https://github.com/david-gelu/checker',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Developed a validation-focused application handling user input and conditional logic with a structured and maintainable approach. Focused on clean logic separation, predictable state handling, and ensuring reliability through clear validation flows and user feedback.'
    },
    {
      key: 'js',
      imgUrl: images['tasks'],
      title: 'Tasks project',
      imgDesc: 'Tasks project made in Next.js',
      projectLink: 'https://tasks-dv.vercel.app/',
      projectGit: 'https://github.com/david-gelu/tasks',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Developed a full-stack task management system using Next.js, Prisma, and MongoDB, focusing on scalable data handling and performance. Implemented infinite scrolling and grouped data rendering to optimize UI performance and improve user interaction. Designed backend data structures to support efficient querying and future scalability.'
    },
    {
      key: 'js',
      imgUrl: images['img-transformer'],
      title: 'Image Transformer',
      imgDesc: 'Image transformer project made in Next.js',
      projectLink: 'https://image-transformer-app.vercel.app//',
      projectGit: 'https://github.com/david-gelu/image-transformer-app',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Built an image processing tool with real-time transformations and preview capabilities. Optimized rendering flow to ensure smooth interaction and minimal performance overhead, focusing on efficient updates and user responsiveness.'
    },
    {
      key: 'js',
      imgUrl: images['book'],
      title: 'Books project',
      imgDesc: 'Books project',
      projectLink: 'https://booksproject.netlify.app/',
      projectGit: 'https://github.com/david-gelu/books-project',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      desc: 'Web application for browsing and managing book content, built with React and TypeScript.Implements dynamic UI rendering and structured data handling, focusing on usability and clean interface design.'
    },
    {
      key: 'css',
      imgUrl: images['it'],
      title: 'ItSchool homepage',
      imgDesc: 'Copy ItSchool homepage project',
      projectLink: 'https://proiect16.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect16',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap'],
      desc: 'Built responsive and accessible user interfaces using modern HTML, CSS, and layout techniques. Focused on visual hierarchy, cross-device compatibility, and clean, maintainable styling.'
    },
    {
      key: 'js',
      imgUrl: images['poke'],
      title: 'Pokemon project',
      imgDesc: 'Pokemon project',
      projectLink: 'https://proiect18.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect18',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-css3-alt'],
      desc: 'Developed an API-driven application consuming external data sources, focusing on asynchronous data handling and UI consistency. Implemented efficient data fetching strategies and error handling to ensure reliability and smooth user experience.'
    },
    {
      key: 'js',
      imgUrl: images['metal'],
      title: 'Metal vision',
      imgDesc: 'Metal vision project',
      projectLink: 'https://project-metal.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect2',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap', 'fab fa-js-square'],
      desc: 'Built responsive and accessible user interfaces using modern HTML, CSS, and layout techniques.Focused on visual hierarchy, cross-device compatibility, and clean, maintainable styling.'
    },
    {
      key: 'js',
      imgUrl: images['pl'],
      title: 'Personal blog',
      imgDesc: 'Walking through Romania project',
      projectLink: 'https://proiect-11.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect11',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square'],
      desc: 'Created a content-focused web application with structured data rendering and responsive layout. Designed for readability and scalability, with a focus on clean UI architecture and maintainable styling.'
    },
    {
      key: 'css',
      imgUrl: images['ano'],
      title: 'Animation of seasons',
      imgDesc: 'Year seasons animation',
      projectLink: 'http://proiect12.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect12',
      teh: ['fab fa-html5', 'fab fa-css3-alt'],
      desc: 'Developed interactive UI experiences using advanced CSS animations and JavaScript logic. Focused on smooth transitions, performance optimization, and creating engaging visual interactions without compromising usability.'
    },
    // {
    //   key: 'css',
    //   imgUrl: images['inv'],
    //   title: 'Invitation card',
    //   imgDesc: 'Trying to make a paper folding',
    //   projectLink: 'https://invitatie.netlify.app/',
    //   projectGit: 'https://github.com/david-gelu/invitatie-test',
    //   teh: ['fab fa-html5', 'fab fa-css3-alt']
    // }
  ]
}

export const dataProjects = loadImages().then((test) => test)

export const linkData = [
  { id: 'main', icon: 'fa-house-user' },
  { id: 'projects', icon: 'fa-laptop-code' },
  { id: 'about', icon: 'fa-address-card' },
  { id: 'jobs', icon: 'fa-briefcase' },
  { id: 'contact', icon: 'fa-solid fa-at' },
]

export const studies = [
  {
    institution: 'MongoDb',
    study: 'Introduction to MongoDB - database',
    year: '2024'
  },
  {
    institution: 'Faculty of Economic Sciences and Business Administration',
    study: 'Marketing study programme',
    year: '2022 - 2025'
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
      'Built scalable web applications using React, TypeScript, Node.js, and MongoDB.',
      'Developed components and improved code maintainability by reduceing code duplication through reusable component patterns.',
      'Optimized performance and rendering behavior to enhance user experience by optimizing component rendering.',
      'Collaborated with designer to deliver responsive UIs and seamless user experiences across devices.',
      'Worked in Agile teams using Jira and GitLab  for project management and version control and participated in code reviews to maintain code quality and share knowledge.'
    ]
  }
]
export const softSkills = [
  'Problem-solving mindset.',
  'Clean code & maintainability focus ',
  'Strong team collaboration',
  'Fast learner & adaptable ',
]