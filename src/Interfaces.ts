export interface ProjectsInterface{
    projects:ProjectInterface[]
}
  
export interface ProjectInterface{
    name: string,
    hostingLink: string,
    githubLink: string
    date: number,
    categories: string[],
    description: string
}
  