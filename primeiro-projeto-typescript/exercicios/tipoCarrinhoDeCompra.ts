type Item = {
    nome: string,
    descricao: string,
    valor: number
};

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
};

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
};

type IncluirEndereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
};

// também está correto
// type NovoCarrinho = {
//     item: Item,
//     qtd: number,
//     desconto: number,
//     frete: number,
//     tipoTransacao: Lowercase<'credito' | 'Debito'>,
//     cartao: Cartao,
//     endereco: IncluirEndereco
// };


// operador de interseção
type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: IncluirEndereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
};


const venda: NovoCarrinho = {
    item: {
        nome: 'string',
        descricao: 'string',
        valor: 123
    },
    qtd: 3,
    desconto: 12,
    frete: 100,
    tipoTransacao: 'debito',
    cartao: {
        numero: 123,
        validade: 'string',
        nome: 'string',
        cvv: 123
    },
    endereco: {
        cep: 'string',
        rua: 'string',
        bairro: 'string',
        cidade: 'string',
        estado: 'string'
    }
};