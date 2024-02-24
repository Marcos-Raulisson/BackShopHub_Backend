# Visão geral

Este é meu projeto pessoal como freelancer, onde a API cuida do gerenciamento de produtos, simplifica o checkout, organiza o fluxo do carrinho de compras da loja online e se conecta às APIs Melhor Envio e Pagbank para logística e processamento de pagamento. Aqui, eu crio e moldo a experiência do meu comércio online.

## Sumário

- [Endpoints](#endpoints)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Autenticação](#autenticação)
- [Contribuição](#contribuição)

## Endpoints

- `POST http://localhost:3000/users/create-account`: Rota para criar uma conta para usuários.
- `POST http://localhost:3000/users/auth`: Rota para autenticar o usuário.
- `POST http://localhost:3000/token/refresh`: Rota para renovar token de accesso.
- `POST http://localhost:3000/products/create`: Rota para criar produtos.

## Requisitos

- Node.js 18.18.0 ou superior
- MySQL 8.0 ou superior

## Configuração

Anter de iniciar o projeto, siga as instruções abaixo para configurar o ambiente.

### 1. Clone o projeto em sua máquina

```bash
  git clone https://github.com/Carlos-Eduardo5Qs/BackShopHub_Backend.git
```

### 2. Criar uma conta no Mailtrap

A BackShopHub API utiliza o serviço Mailtrap para testar o envio de e-mails. Siga as etapas abaixo para criar uma conta no Mailtrap:

- Acesse [Mailtrap](https://mailtrap.io/).
- Crie uma conta gratuitamente.
- Após o login, crie uma nova inbox.

Anote as seguintes informações do seu inbox no Mailtrap:

- `MAIL_HOST`: Endereço do servidor SMTP.
- `MAIL_PORT`: Porta do servidor SMTP.
- `MAIL_USER`: Nome de usuário para autenticação no servidor SMTP.
- `MAIL_PASS`: Senha para autenticação no servidor SMTP.

### 3. Configurar o Arquivo `.env`

Crie um arquivo .env na raiz do projeto e preencha as variáveis de ambiente com as informações do Mailtrap e do banco de dados:

```ini
# porta em que o servidor será executado
SERVER_PORT=3000

# Configurações do Banco de Dados
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=

# Configurações do Servidor SMTP
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
MAIL_FROM= # Email remetente

# Senha para assinar e verificar tokens JWT
SECRET_KEY=
```

Preencha as variáveis acima de acordo com os dados do seu inbox no Mailtrap, do seu banco de dados e configure uma senha para assinar e verificar tokens JWT.

### 4. Configurar o banco de dados

Certifique-se de ter um servidor MySQL instalado. Se ainda não tiver, você pode baixá-lo [aqui](https://dev.mysql.com/downloads/mysql/).

- Execute o script SQL fornecido na pasta database para criar as tabelas necessárias.

## Autenticação

### 1. Autenticar Usuário

Autentica um usuário e retorna dois tokens: um para acesso e outro para renovação.

- Endpoint: `POST http://localhost:3000/users/auth`
- Parâmetros da Requisição:
  - `email` (string): Email do usuário.
  - `password` (string): Senha do usuário.

- Resposta de Sucesso (Status 200 OK):

```json
{
  "data": {
    "accessToken": "token_de_acesso",
    "refreshToken": "token_de_renovacao"
  }
}
```

### 2. Renovação de Tokens

Renova os tokens de acesso e renovação.

- Endpoint: `POST http://localhost:3000/token/refresh`
- Parâmetros da Requisição:
  - `refreshToken` (string): Token de renovação.
- Resposta de Sucesso (Status 200 OK):

```json
{
  "data": {
    "newAccessToken": "novo_token_de_acesso",
    "newRefreshToken": "novo_token_de_renovacao"
  }
}
```

### 3. Gerenciamento de Tokens no Frontend

1. **Login do Usuário:**
    - Ao receber a resposta da autenticação, armazene os tokens (accessToken e refreshToken) no localStorage.
2. **Renovação Automática de Tokens:**
    - Configure um temporizador para verificar periodicamente se o token de acesso está prestes a expirar.
    - Se estiver prestes a expirar, chame o endpoint de renovação de tokens (/api/refresh) com o refreshToken.
    - Atualize os tokens no localStorage com os novos tokens recebidos na resposta.

3. **Requisições em Rotas Privadas:**
    - Para acessar rotas privadas que requerem autenticação, inclua o token de acesso no cabeçalho das requisições HTTP.
    - Adicione o seguinte cabeçalho à sua requisição:

      ```plaintext
      Authorization: SEU_TOKEN_DE_ACESSO
      ```

      Certifique-se de substituir `SEU_TOKEN_DE_ACESSO` pelo token real armazenado no localStorage após o login.

## Contribuição

Sua contribuição é bem-vinda! Se você deseja melhorar a BackShopHub API ou corrigir problemas, siga estas etapas:

- **Faça Fork do Repositório:** Clique no botão "Fork" no canto superior direito desta página para criar uma cópia do projeto no seu perfil.

- **Clone o Repositório:** No terminal, clone o repositório do seu fork.
- **Crie uma Branch:** Crie uma nova branch para trabalhar nas suas alterações:

```bash
  git checkout -b nome-da-sua-branch
```

- **Faça as alterações:** Faça as modificações desejadas no código.
- **Commit e Envie:** Após realizar as alterações, faça o commit e envie para o seu fork:

```bash
  git add .
  git commit -m "Sua mensagem de commit aqui"
  git push origin nome-da-sua-branch
```

- **Abra um Pull Request:** No seu repositório no GitHub, abra um Pull Request para a branch principal do projeto. Certifique-se de incluir uma descrição clara das alterações que você fez.

## Como reportar problemas

Se você encontrar algum problema ou tiver sugestões, por favor, abra uma issue. Certifique-se de incluir detalhes sobre como reproduzir o problema e seu ambiente.

Agradecemos a sua contribuição para tornar a BackShopHub ainda melhor!
