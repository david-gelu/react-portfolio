export type LinkData = {
  id: string,
  link: string
}

export type DataProjects = {
  imgUrl: string,
  imgDesc: string,
  projectLink: string,
  projectGit: string
}

export type Studies = {
  study?: string,
  certificate?: string,
  link?: string,
  date?: string,
  imgBig?: string,
  imgSmall?: string,
}
export type Responsability = {
  responsability: string
}
export type Work = {
  everseen?: {
    responsability: Responsability
  }
}