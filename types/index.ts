export interface Project {
    title: string
    img: string
    description: string
    slug?: string
    accomplishments: string[]
    tags: string[]
}

export interface Skill {
    name: string
    level?: number
    icon?: string
}
