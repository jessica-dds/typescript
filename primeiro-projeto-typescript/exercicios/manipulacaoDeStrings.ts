// Uppercase<literalType>
// Lowercase<literalType>

type TipoTransacao = 'credito' | 'debito';

type TipoTransacaoUpper = Uppercase<TipoTransacao>;
type TipoTransaoLower = Lowercase<TipoTransacao>;

const t2: TipoTransacaoUpper = "CREDITO";
const t1: TipoTransacao = 'credito';
