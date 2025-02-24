import { Tecnologia } from "./tecnologia";

export interface Trabalho {
    nome: string,
    descricao: string,
    dataInicio: string,
    dataFim: string,
    tecnologiasUtilizadas: Tecnologia[]
}
