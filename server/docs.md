# Requisitos de autenticação

# Login

    - Rota será "/login"
    - Que devera receber: {
        email,
        senha
    }

    - a senha devera ser criptografada utilizando o bcryptjs

    - validar se email e senha confere, caso tenha problemas sempre retornar um feedback ao usuario, informando o error em si.

    - Caso o login sucesso voce devera devolver um status 204

# Forma de reset de senha

    - Rota /forgot_password que devera receber o email cadastrado.
    - Em seguinda confirmar o email é valido
    - Enviar um email com um token
    - Usuario devera usar o token para cadastrar uma nova senha.
    - Rota /reset_password valida os dados de email e o token,
    se estiver tudo certo, cadastra nova senha
