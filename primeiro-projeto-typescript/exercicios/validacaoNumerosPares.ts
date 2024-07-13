const validarNumerosPares = (numeros: number[]): String => {
    const resultado: boolean = numeros.every((numero) => {
        return numero % 2 === 0
    });

    if (resultado) {
        return `Array válido`;
    }

    return 'Array inválido';
}

const arrayNumeros: number[] = [0, 122, 4, 6, 7, 8, 44];

console.log(validarNumerosPares(arrayNumeros));