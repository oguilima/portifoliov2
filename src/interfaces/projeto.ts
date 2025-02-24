import { Tecnologia } from "./tecnologia"

export interface Projeto{
    img: string,
    title: string,
    cliente: string,
    description: string,
    github?: string,
    tecnologias: Tecnologia[]
}
