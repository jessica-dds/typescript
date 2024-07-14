const fs1 = require('fs');

const lerArquivo1 = (): unknown => {
    return JSON.parse(fs.readFileSync('../bd.json'));
};

const escreverArquivo2 = (dados: any): void => {
    fs.writeFileSync('../bd.json', JSON.stringify(dados));
};

type Endereco1 = {
    cep: string,
    rua: string,
    complemento?: string,
    bairro: string,
    cidade: string
};

type Usuario1 = {
    nome: string,
    email: string,
    cpf: string,
    profissao?: string,
    endereco1: Endereco1 | null
};

const cadastrarUsuario = (dados: Usuario1): Usuario1 => {
    const bd = lerArquivo1() as Usuario1[];
    bd.push(dados);
    escreverArquivo2(bd);
    return dados;
};

const listarUsuarios = (): Usuario1[] => {
    return lerArquivo1() as Usuario1[];
};

const jessica = cadastrarUsuario({
    nome: 'Jéssica',
    email: 'jessica@email.com',
    cpf: '12345678900',
    endereco1: {
        cep: '12345-678',
        rua: 'Rua A',
        bairro: 'Bairro A',
        cidade: 'Salvador'
    }
});

const bd = lerArquivo1();
console.log(jessica, bd);
