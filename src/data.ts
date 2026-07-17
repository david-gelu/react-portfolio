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
      title: 'Interactive Portfolio',
      imgDesc: 'Interactive Portfolio built with ReactJs and Typescript',
      projectLink: 'https://davidgelu.netlify.app',
      projectGit: 'https://github.com/david-gelu/react-portfolio',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-sass'],
      tehUsed: ['ReactJs', 'Typescript', 'Vite', 'Sass', 'Framer Motion', 'Bootstrap', 'Cypress', 'Git / GitHub / GitLab'],
      desc: 'Designed and developed a scalable personal portfolio usingReactJsand Typescript, focused on performance, clean architecture, and user experience. Implemented reusable component patterns and optimized rendering to ensure fast load times and smooth navigation.'
    },
    {
      key: 'css',
      imgUrl: images['cv'],
      title: 'Interactive CV App',
      imgDesc: 'Interactive CV App',
      projectLink: 'https://davidgelu-cv.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect4',
      teh: ['fab fa-react', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square'],
      tehUsed: ['ReactJs', 'HTML', 'CSS', 'Javascript', 'Git / GitHub / GitLab'],
      desc: 'A modern, interactive CV application designed to present professional experience in a dynamic and downloadable format. Reimagines a traditional CV as a web application, focusing on user experience, accessibility, and real-time interaction.'
    },
    {
      key: 'js',
      imgUrl: images['dailys'],
      title: 'Daily tasks project',
      imgDesc: 'Daily tasks project',
      projectLink: 'https://time-manager-frontend.vercel.app/',
      projectGit: 'https://github.com/david-gelu/time-manager',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-node-js'],
      tehUsed: ['ReactJs', 'Typescript', 'React-query', 'DayJs', 'NodeJs', 'Express', 'MongoDB', 'Vite', 'Sass', ' Framer Motion ', 'Shadcn', 'REST API design', 'Git / GitHub / GitLab', 'Firebase'],
      desc: 'Full-stack task management application with Kanban board, calendar, dashboard, and time zones. Built with React, React-Query, Node.js, MongoDB, and Typescript. Implements dynamic updates and optimized component rendering.'
    },
    {
      key: 'js',
      imgUrl: images['time-pass'],
      title: 'Time passed since',
      imgDesc: 'Time passed since',
      projectLink: 'https://time-passed.netlify.app/',
      projectGit: 'https://github.com/david-gelu/time-passed',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-sass'],
      tehUsed: ['ReactJs', 'Typescript', 'Sass', 'Shadcn', 'DayJs'],
      desc: 'A time-tracking utility that dynamically calculates and displays time differences in real time. Focused on accurate date handling, efficient updates, and optimized rendering for smooth, responsive UI behavior.'
    },
    {
      key: 'js',
      imgUrl: images['check'],
      title: 'Difference checker',
      imgDesc: 'Tasks project made to find the difference between data sets',
      projectLink: 'https://checker-js.netlify.app/',
      projectGit: 'https://github.com/david-gelu/checker',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass'],
      tehUsed: ['ReactJs', 'Typescript', 'Tailwind', 'Sass', 'Shadcn'],
      desc: 'Validation-focused application for comparing JSON objects and arrays. Handles user input and conditional logic with a structured and maintainable approach, clear validation flows, and real-time user feedback.'
    },
    {
      key: 'js',
      imgUrl: images['tasks'],
      title: 'Tasks project',
      imgDesc: 'Tasks project made in Next.js',
      projectLink: 'https://tasks-dv.vercel.app/',
      projectGit: 'https://github.com/david-gelu/tasks',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-node-js'],
      tehUsed: ['NextJs', 'Typescript', 'Prisma', 'MongoDB', 'NextAuth', 'REST API design', 'Git / GitHub / GitLab',],
      desc: 'Full-stack task management system built with Next.js, Prisma, and MongoDB. Features infinite scrolling and grouped data rendering for optimized UI performance and efficient backend querying.'
    },
    {
      key: 'js',
      imgUrl: images['img-transformer'],
      title: 'Image Transformer',
      imgDesc: 'Image transformer project made in Next.js',
      projectLink: 'https://image-transformer-app.vercel.app/',
      projectGit: 'https://github.com/david-gelu/image-transformer-app',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-sass'],
      tehUsed: ['NextJs', 'Typescript', 'Shadcn ', 'Sass', 'Jimp', 'Framer Motion', 'Git / GitHub / GitLab'],
      desc: 'Image processing tool with real-time transformations and live preview. Built withNextJsand Cloudinary integration. Optimized rendering flow ensures smooth interaction and minimal performance overhead.'
    },
    {
      key: 'js',
      imgUrl: images['book'],
      title: 'Books project',
      imgDesc: 'Books project',
      projectLink: 'https://booksproject.netlify.app/',
      projectGit: 'https://github.com/david-gelu/books-project',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-sass'],
      tehUsed: ['ReactJs', 'Typescript', 'Sass', 'Bootstrap', 'Git / GitHub / GitLab'],
      desc: 'Web application for browsing and managing book content, built with ReactJs and Typescript. Implements dynamic UI rendering and structured data handling, focusing on usability and clean interface design.'
    },
    {
      key: 'css',
      imgUrl: images['it'],
      title: 'ItSchool homepage',
      imgDesc: 'Copy ItSchool homepage project',
      projectLink: 'https://proiect16.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect16',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap'],
      tehUsed: ['HTML', 'CSS', 'Bootstrap', 'Git / GitHub / GitLab'],
      desc: 'Responsive and accessible recreation of the ItSchool homepage using HTML, CSS, and Bootstrap. Focused on visual hierarchy, cross-device compatibility, and clean, maintainable styling.'
    },
    {
      key: 'js',
      imgUrl: images['poke'],
      title: 'Pokemon project',
      imgDesc: 'Pokemon project',
      projectLink: 'https://proiect18.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect18',
      teh: ['fab fa-react', 'fab fa-js-square', 'fab fa-css3-alt'],
      tehUsed: ['ReactJs', ' Javascript ', 'CSS', 'PokeAPI', 'Shadcn', 'Tailwind', 'Git / GitHub / GitLab'],
      desc: 'API-driven application consuming the PokéAPI, focusing on asynchronous data handling and UI consistency. Implements efficient data fetching strategies and error handling for a smooth user experience.'
    },
    {
      key: 'css',
      imgUrl: images['metal'],
      title: 'Metal vision',
      imgDesc: 'Metal vision project',
      projectLink: 'https://project-metal.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect2',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap', 'fab fa-js-square'],
      tehUsed: ['HTML', 'CSS', 'Bootstrap ', 'Javascript'],
      desc: 'Responsive website built with HTML, CSS, Bootstrap, and Javascript. Focused on visual hierarchy, cross-device compatibility, and clean, maintainable styling.'
    },
    {
      key: 'css',
      imgUrl: images['pl'],
      title: 'Personal blog',
      imgDesc: 'Walking through Romania project',
      projectLink: 'https://proiect-11.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect11',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square'],
      tehUsed: ['HTML', 'CSS', 'Javascript'],
      desc: 'Content-focused travel blog built with structured HTML, CSS, and Javascript. Designed for readability and scalability, with clean UI architecture and responsive layout for an optimal reading experience.'
    },
    {
      key: 'css',
      imgUrl: images['ano'],
      title: 'Animation of seasons',
      imgDesc: 'Year seasons animation',
      projectLink: 'http://proiect12.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect12',
      teh: ['fab fa-html5', 'fab fa-css3-alt'],
      tehUsed: ['HTML', 'CSS'],
      desc: 'Interactive seasonal animation experience built entirely with advanced CSS animations and transitions. No Javascript dependencies — focused on smooth keyframe animations, performance, and engaging visual storytelling.'
    },
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
      'Concurrently developed and maintained multiple enterprise-grade React/Typescript/Node.js/MongoDB applications, including real-time analytics dashboards and a cross-platform PWA installable on desktop, tablet, and mobile — supporting media viewing, user annotations, backend-triggered actions, and data export capabilities across different business contexts.',
      'Refactored legacy processing pipeline, reducing export generation time from ~10 minutes to under 20 seconds — a 97% performance improvement.',
      'Built a reusable UI component library adopted across the platform, cutting new-feature development time and reducing UI inconsistencies across teams.',
      'Optimized front-end rendering and load times on data-heavy views through code-splitting and memoization, improving perceived performance on core dashboard screens.',
      'Collaborated closely with UX/UI designers in a cross-functional team of 3–5 developers to deliver responsive, user-focused interfaces.',
      'Worked in an Agile environment using Jira, Confluence, and GitLab — managing feature branches, rebasing, opening merge requests, and conducting code reviews as part of sprint planning and delivery.',
      'Tested and validated API routes using Postman, and containerized development environments with Docker to ensure consistent setups across the team',
    ]
  }
]
export const softSkills = [
  'Problem-solving mindset.',
  'Clean code & maintainability focus ',
  'Strong team collaboration',
  'Fast learner & adaptable ',
]