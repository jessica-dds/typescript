// ReturnTye<funcao>;

type Ex7 = () => string

type Ex8 = ReturnType<Ex7>;

type Ex9 = () => { nome: string }

type Ex10 = ReturnType<Ex9>;