export type LinkData = {
  id: string,
  icon: string
}

export type DataProjects = {
  key: string,
  imgUrl: string,
  imgDesc: string,
  projectLink: string,
  projectGit: string,
  teh: string[]
}

export type Studies = {
  study?: string,
  certificate?: string,
  link?: string,
  date?: string,
  imgBig?: string,
  imgSmall?: string,
}

export type Work = {
  everseen: string[];
}