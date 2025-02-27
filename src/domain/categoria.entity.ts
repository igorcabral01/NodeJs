
export type CategoriaProps{
    categoria_id:string;
    nome: string;
    descricao?: string | null
    ativo?: boolean
    data_criacao?: Date
};

export class Categoria{
    categoria_id:string;
    nome: string;
    descricao: string | null
    ativo: boolean
    data_criacao: Date

    constructor(props: CategoriaProps) {
        this.categoria_id = props.categoria_id;
        this.nome = props.nome;
        this.descricao = props.descricao ?? null;
        this.ativo = props.ativo ?? true;
        this.data_criacao = props.data_criacao ?? new Date();
    }
}