const json = JSON.stringify(["Jéssica", "Guilherme", "Joaquim", "Núbia"]);

function converterJSON(info: string): unknown {
    return JSON.parse(info);
};

const jsonConvertido = converterJSON(json) as string[];

console.log(jsonConvertido[0]);
