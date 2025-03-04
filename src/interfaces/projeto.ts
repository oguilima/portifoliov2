import { Tecnologia } from "./tecnologia"

export interface Projeto{
    imagemUrl: string,
    title: string,
    cliente: string,
    description: string,
    github?: string,
    tecnologias: Tecnologia[]
}
