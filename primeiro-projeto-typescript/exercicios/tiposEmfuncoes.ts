
// tipagem de retorno das funções - precisam estar explícitos

function imprimir(nome: string): string {
    return `Olá ${nome}`;
};

const imprimirMaiorIdade = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }

    return true;
};

function imprimirUsuario(usuario: { nome: string, idade: number }): string {
    return `${usuario.nome}`;
}

function imprimirArray(array: string[]): string {
    return array[0];
}

imprimirArray(['123', 'abc']);

imprimirUsuario({ nome: 'Jésica', idade: 35 });

const somar = (a: number, b: number): number => {
    return a + b;
}

console.log(somar(1, 2));
