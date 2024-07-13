const buscarLivro = (livros: string[], nomeLivro: string): string => {
    const posicao: number = livros.indexOf(nomeLivro);

    if (posicao === -1) {
        return `Livro não encontrado.`;
    }

    return `O livro está na posição ${posicao}`;
}

const livros: string[] = [
    "Guerra e Paz",
    "A montanha mágica",
    "Cem anos de solidão",
    "Dom Quixote",
    "A divina comédia"
];

console.log(buscarLivro(livros, 'A divina comédia'));
