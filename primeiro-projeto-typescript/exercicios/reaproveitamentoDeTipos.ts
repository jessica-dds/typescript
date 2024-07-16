type Usuario2 = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
};

type UsuarioSemRg = Omit<Usuario2, 'rg'>;
type UsuarioCamposObrigatorios = Required<UsuarioSemRg>;


const cadastrarUsuario2 = (info: Usuario2): Usuario2 => {
    return info;
};