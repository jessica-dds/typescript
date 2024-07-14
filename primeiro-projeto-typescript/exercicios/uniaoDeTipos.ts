let algumaCoisa: number | string | boolean;

algumaCoisa = 'Jéssica';

const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {
    return usuarios;
}

const usuario1 = {
    nome: 'Jéssica'
};

const usuarios1 = [
    {
        nome: "Gui"
    },
    {
        nome: "Joca"
    }
];

cadastroUsuarios(usuarios1);