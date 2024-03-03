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

## Configuração do Ambiente

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

### 3. Criar uma conta na Backblaze

- Acesse o site da [Backblaze](https://www.backblaze.com/).
- Clique em "Get Started" para criar uma nova conta.
- Preencha as informações necessárias e siga as instruções para verificar sua conta.
- Faça login na sua conta da Backblaze.
- No painel, vá para "Buckets" e clique em "Create a Bucket".
- Siga as instruções para configurar seu novo bucket.

Anote as seguintes informações do seu Bucket:

- `BUCKET_ID`: Id do bucket.
- `BUCKET_NAME`: Nome do Bucket.
- `APP_KEY`: Chave de aplicação.
- `KEY_ID`: Id da chave de aplicação.

### 4. Configuração do Arquivo `.env`

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

# Configurações da Backblaze B2
BUCKET_ID=
BUCKET_NAME=
APP_KEY=
KEY_ID=
```

Preencha as variáveis acima de acordo com os dados do seu inbox no Mailtrap, do seu banco de dados e do seu Bucket da sua conta Backblaze. Configure uma senha para assinar e verificar tokens JWT em **SECRET_KEY** (Pode ser qualquer senha da sua preferência, mas eu recomendo que seja uma senha forte).

### 5. Configuração do Banco de Dados com Docker

Certifique-se de ter o Docker instalado em sua máquina. Se ainda não tiver, você pode baixá-lo [aqui](https://www.docker.com/get-started).

- Execute o seguinte comando para baixar a imagem do MySQL (se ainda não a tiver) e criar um contêiner MySQL:

```bash
docker pull mysql:8.0
docker run -d \
  --name=backshophub-mysql \
  -e MYSQL_ROOT_PASSWORD=mysecretpassword \
  -e MYSQL_DATABASE=backshophub \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=mysecretpassword \
  -p 3306:3306 \
  mysql:8.0
```

Este comando baixará a imagem do MySQL (se ainda não estiver baixada) e criará um contêiner MySQL com as configurações especificadas. Certifique-se de ajustar as variáveis conforme necessário.

Lembre-se de atualizar as configurações do .env com as informações do seu banco de dados MySQL.

## Autenticação do Usuário

### 1. Autenticar

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
    - Se estiver prestes a expirar, chame o endpoint de renovação de tokens (/token/refresh) com o refreshToken.
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
