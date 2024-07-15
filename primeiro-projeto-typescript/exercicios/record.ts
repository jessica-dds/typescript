// Record<keys, type>

type Carro = {
    ano: number,
    cor: string
};

type Propriedades = 'gol' | 'palio' | 'fusca';

const carros: Record<Propriedades, Carro> = {
    gol: {
        ano: 2021,
        cor: 'prata'
    },
    palio: {
        ano: 2019,
        cor: 'preto'
    },
    fusca: {
        ano: 1999,
        cor: 'branco'
    }
};