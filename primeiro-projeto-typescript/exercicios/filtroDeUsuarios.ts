const filtrarUsuarios = (
    usuarios: {
        nome: string,
        idade: number,
        status: boolean
    }[],
    usuario: string
): {
    nome: string,
    idade: number,
    status: boolean
}[] => {
    const resultado = usuarios.filter((usuarioLista) => {
        return usuarioLista.nome.toLowerCase().includes(usuario.toLowerCase())
    });

    return resultado;
}

const lista = [
    {
        nome: "Jéssica",
        idade: 35,
        status: true,
    },
    {
        nome: "Joaquim",
        idade: 2,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 11,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "Carlos",
        idade: 28,
        status: false,
    },
]

console.log(filtrarUsuarios(lista, 'jo'));