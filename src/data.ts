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
      key: 'css',
      imgUrl: images['cv'],
      title: 'My CV',
      imgDesc: 'My CV made in HTML and CSS',
      projectLink: 'https://davidgelu-cv.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect4',
      teh: ['fab fa-html5', 'fab fa-css3-alt']
    },
    {
      key: 'js',
      imgUrl: images['dailys'],
      title: 'Daily tasks project',
      imgDesc: 'Daily tasks project',
      projectLink: 'https://time-manager-frontend.vercel.app/',
      projectGit: 'https://github.com/david-gelu/time-manager',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass']
    },
    {
      key: 'js',
      imgUrl: images['tasks'],
      title: 'Tasks project',
      imgDesc: 'Tasks project made in Next.js',
      projectLink: 'https://tasks-dv.vercel.app/',
      projectGit: 'https://github.com/david-gelu/tasks',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass']
    },
    {
      key: 'js',
      imgUrl: images['img-transformer'],
      title: 'Image Transformer',
      imgDesc: 'Image transformer project made in Next.js',
      projectLink: 'https://image-transformer-app.vercel.app//',
      projectGit: 'https://github.com/david-gelu/image-transformer-app',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass']
    },
    {
      key: 'js',
      imgUrl: images['book'],
      title: 'Book project',
      imgDesc: 'Books project',
      projectLink: 'https://booksproject.netlify.app/',
      projectGit: 'https://github.com/david-gelu/books-project',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-sass']
    },
    {
      key: 'css',
      imgUrl: images['it'],
      title: 'ItSchool homepage',
      imgDesc: 'Copy ItSchool homepage project',
      projectLink: 'https://proiect16.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect16',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap']
    },
    {
      key: 'js',
      imgUrl: images['poke'],
      title: 'Pokemon project',
      imgDesc: 'Pokemon project',
      projectLink: 'https://proiect18.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect18',
      teh: ['fab fa-js-square', 'fab fa-react', 'fab fa-css3-alt']
    },
    {
      key: 'js',
      imgUrl: images['metal'],
      title: 'Metal vision',
      imgDesc: 'Metal vision project',
      projectLink: 'https://project-metal.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect2',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-bootstrap', 'fab fa-js-square']
    },
    {
      key: 'js',
      imgUrl: images['pl'],
      title: 'Personal blog',
      imgDesc: 'Walking through Romania project',
      projectLink: 'https://proiect-11.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect11',
      teh: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square']
    },
    {
      key: 'css',
      imgUrl: images['ano'],
      title: 'Animation of seasons',
      imgDesc: 'Year seasons animation',
      projectLink: 'http://proiect12.netlify.app',
      projectGit: 'https://github.com/david-gelu/proiect12',
      teh: ['fab fa-html5', 'fab fa-css3-alt']
    },
    {
      key: 'css',
      imgUrl: images['inv'],
      title: 'Invitation card',
      imgDesc: 'Trying to make a paper folding',
      projectLink: 'https://invitatie.netlify.app/',
      projectGit: 'https://github.com/david-gelu/invitatie-test',
      teh: ['fab fa-html5', 'fab fa-css3-alt']
    }
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
      'Full-Stack Development: Built reusable components and features using React, TypeScript, SCSS, Bootstrap on the frontend, while leveraging Node.js, Express, and MongoDB on the backend. Ensured cross-browser compatibility, consistent performance, and seamless integration between client and server.',
      'Teamwork: A collaborative and results-driven team player who excels in dynamic environments by combining frontend and backend expertise. Consistently contributes to project success through effective communication, shared problem-solving, and cross-functional collaboration.',
      'UI/UX Collaboration: Worked closely with UX/UI designers to transform design concepts into functional, user-friendly interfaces. Through ongoing collaboration, contributed to iterative design improvements and implemented backend APIs to support the designed user experiences.',
      'Agile Development: Experienced in Agile methodologies, utilizing tools such as Jira and Confluence for efficient collaboration and project management. Proficient with GitLab for version control, code reviews, and maintaining code integrity across the full stack.',
      'Scalable Interface Development: Skilled in building and optimizing scalable interfaces that deliver a seamless user experience, addressing diverse user needs and supporting business growth objectives.',
    ]
  }
]