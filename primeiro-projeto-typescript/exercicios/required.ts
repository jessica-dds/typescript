type Usuario3 = {
    nome: string,
    idade?: number,
    email: string
};

// Required - requer todos os objetos do tipo
// const cadastrarUsuario1 = (user: Required<Usuario3>) => {
//     return user;
// };


// cadastrarUsuario1({
//     nome: 'Jéssica',
//     email: 'jessica@email.com',
//     idade: 35
// });


// Partial - aceita parte dos objetos do tipo
const cadastrarUsuario1 = (user: Partial<Usuario3>) => {
    return user;
};

cadastrarUsuario1({
    nome: 'Jéssica',
});

// Readonly  - apenas leitura
const jessica1: Readonly<Usuario3> = {
    nome: 'Jéssica',
    email: 'jessica@email.com'
};