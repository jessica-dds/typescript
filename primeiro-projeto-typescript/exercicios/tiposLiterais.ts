let nome: 'Jéssica';
nome = "Jéssica";

type Transacao = {
    numero: number,
    validade: string,
    cvv: number,
    nome: string,
    tipo: 'credito' | 'debito'
};

const transacao = (transacao: Transacao) => {
    transacao.tipo = 'debito';
};