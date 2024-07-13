const filtroCidades = (cidades: string[]): string[] => {
    const resultado = cidades.filter((cidade) => {
        return cidade.length <= 8;
    });

    return resultado;
};

const cidades: string[] = [
    "Salvador",
    "São Paulo",
    "Brasília",
    "Recife",
    "Rio de janeiro"
];

console.log(filtroCidades(cidades));
