// Pick<type, keys>

type User = {
    nome: string,
    idade: number,
    email: string,
};

type NovoUsuario = Pick<User, 'nome' | 'idade'>;
const jessica2: NovoUsuario = {
    nome: 'Jéssica',
    idade: 35
};


//Omit<type, keys>

type NovoUsuario1 = Omit<User, 'email'>
const jessica3: NovoUsuario1 = {
    nome: 'Jéssica',
    idade: 35
};
