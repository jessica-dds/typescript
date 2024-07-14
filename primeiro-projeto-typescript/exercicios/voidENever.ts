// void 
const teste = () => {
    console.log('Olá, usuário');
    return;
};

// never
const validarNome = () => {
    throw new Error('O nome precisa ter 5 ou mais caracteres');
};