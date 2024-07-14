const cadastro1 = (numero: string | number) => {
    let resultado: string | number;

    if (typeof numero === 'string') {
        resultado = numero.toUpperCase();
    } else {
        resultado = numero.toFixed(2);
    }
    console.log(resultado);
};

cadastro1('Jéssica');
cadastro1((2500 / 100));