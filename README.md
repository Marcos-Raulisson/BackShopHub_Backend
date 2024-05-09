# Visão geral

Este é meu projeto pessoal chamado Backshophub, ele é uma API que cuida do gerenciamento de produtos, simplifica o checkout, organiza o fluxo do carrinho de compras da loja online e se conecta às APIs Melhor Envio e Pagbank para logística e processamento de pagamento. Eu espero que esta documentação ajude você a configurar e executar o projeto em sua máquina. Caso surgir alguma dúvida eu disponibilizei uma seção em Issues que você pode utilizar para sanar todas as suas dúvidas (oﾟvﾟ)ノ.

## Sumário

- [Endpoints](#endpoints)
- [Requisitos](#requisitos)
- [Configurações do Ambiente](#configurações)
- [Autenticação do Usuário](#autenticação)
- [Contribuição](#contribuição)

## Endpoints

### Publicos

- `POST http://localhost:3000/users/create-account`: Rota para criar uma conta para usuários.
- `POST http://localhost:3000/users/auth`: Rota para autenticar o usuário.
- `GET http://localhost:3000/products`: Rota para listar todos os produtos.
- `GET http://localhost:3000/products/category/:category`: Rota para listar produtos por categorias.

### privados

- `POST http://localhost:3000/token/refresh`: Rota para renovar token de accesso.
- `POST http://localhost:3000/products/create`: Rota para criar produtos.
- `PUT 'http://localhost:3000/products/update`: Rota para atualizar produtos.
- `DELETE http://localhost:3000/products/delete/:id`: Rota para deletar um produto.
- `POST http://localhost:3000/products/assessment`: Rota para criar avaliações de produtos.
- `POST http://localhost:3000//products/assessment/addPhoto`: Rota para adicionar fotos em avaliações de produtos.


## Requisitos

- Node.js 18.18.0 ou superior
- MySQL 8.0 ou superior

## Configurações

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

Lembre-se de atualizar as configurações do .env com as informações do seu inbox Mailtrap.

### 3. Criar uma conta na Backblaze

A BackShopHub API utiliza o serviço Backblaze para armazenar imagens dos usuários. Siga as etapas abaixo para criar uma conta na Backblaze:

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

Lembre-se de atualizar as configurações do .env com as informações do seu Bucket.

### 4. Configuração do Banco de Dados com Docker

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

### Executar o script SQL para criar as tabelas

Após iniciar o contêiner MySQL, você precisará executar o script SQL fornecido para criar as tabelas necessárias para a aplicação.

- Abra o arquivo `script.sql` localizado na pasta `database`.
- Copie todo o conteúdo do arquivo `script.sql`.`
- Abra o terminal ou cliente MySQL e conecte-se ao seu servidor MySQL.
- Cole o conteúdo do arquivo `script.sql` no terminal ou cliente MySQL e execute-o.

Isso criará as tabelas e definirá a estrutura necessária para o banco de dados da aplicação.

Lembre-se de que este script SQL cria a estrutura do banco de dados e suas tabelas, portanto, deve ser executado apenas uma vez, preferencialmente durante a configuração inicial do ambiente de desenvolvimento ou implantação.

Após seguir estas etapas, seu banco de dados estará configurado e pronto para ser usado com a aplicação. Certifique-se de atualizar as configurações do arquivo `.env` com as informações do seu banco de dados MySQL, conforme mencionado anteriormente na seção de Configurações do Ambiente.

### 5. Configuração do Arquivo `.env`

Crie um arquivo .env na raiz do projeto e preencha as variáveis de ambiente com as informações do Mailtrap e do banco de dados:

```ini
# porta em que o servidor será executado
SERVER_PORT=3000

# Configurações do Banco de Dados
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=

# Configurações do inbox Mailtrap
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

## Autenticação

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

## Como realizar solicitações para as rotas

Abaixo, são fornecidos exemplos de como fazer solicitações para cada endpoint disponível.

### Criar uma conta de usuário

Para criar uma conta de usuário, faça uma solicitação POST para o endpoint `/users/create-account`, incluindo os seguintes parâmetros no corpo da solicitação:

- `name` (string): O nome do usuário.
- `email` (string): O email do usuário.
- `password` (string): A senha do usuário.
- `confirmPasword` (string) A confirmação da senha do usuário.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function createUserAccount(name, email, password, confirmPassword) {
  try {
    const response = await fetch('http://localhost:3000/users/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, confirmPassword })
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error creating user account:', error);
  }
}
```

### Autenticar um usuário

Para autenticar um usuário, faça uma solicitação POST para o endpoint `/users/auth`, incluindo os seguintes parâmetros no corpo da solicitação:

- `email` (string) O email de acesso do usuário.
- `password` (string) A senha de acesso do usuário.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function AuthenticateUser(email, password) {
  try {
    const response = await fetch('http://localhost:3000/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password})
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error authenticating user:', error);
  }
}
```

### Renovar tokens de acesso

Para renovar tokens de acesso, faça uma solicitação POST para o endpoint `/token/refresh`, incluindo os seguintes parâmetro no corpo da requisição:

- `refreshToken` (string) O token de renovação do usuário.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function renewToken(refreshToken) {
  try {
    const response = await fetch('http://localhost:3000/token/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken })
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error renewing access tokens:', error);
  }
}
```

### Criar um produto

Para criar um produto, faça uma solicitação POST para o endpoint `/products/create`, incluindo os seguintes parâmetros  no corpo da requisição:

- `name` (string) Nome do produto.
- `description` (string) Descrição do produto.
- `price` (string) Preço para o produto.
- `category` (string) Categoria do produto.
- `brand` (string) Marca do produto.
- `stock` (string) Estoque do produto.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function createProduct(name, file, description, price, category, brand, stock) {
  try {
    const response = await fetch('http://localhost:3000/products/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Seu token de autorização aqui',
      },
      body: JSON.stringify({ name, file, description, price, category, brand, stock, })
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error creating product:', error);
  }
}
```

### Atualizar um produto

Para atualizar um produto, faça uma solicitação PUT para o endpoint `/products/update`, incluindo os seguintes parâmetros  no corpo da requisição:

- `name` (string) Nome do produto.
- `description` (string) Descrição do produto.
- `price` (string) Preço para o produto.
- `category` (string) Categoria do produto.
- `brand` (string) Marca do produto.
- `stock` (string) Estoque do produto.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function updateProduct(name, file, description, price, category, brand, stock) {
  try {
    const response = await fetch('http://localhost:3000/products/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Seu token de autorização aqui',
      },
      body: JSON.stringify({ name, file, description, price, category, brand, stock, })
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error when updating product:', error);
  }
}
```

### Deletar um produto

Para deletar um produto, faça uma solicitação DELETE para o endpoint `/products/delete/:id`, incluindo os seguintes parâmetros na url:

- `id` (string) ID do produto à ser deletado.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function deleteProduct(id) {
  try {
    const response = await fetch(`http://localhost:3000/products/delete/:${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Seu token de autorização aqui',
      },
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}
```

### Listar todos os produtos

Para listar todos os produtos, faça uma solicitação GET para o endpoint `/products`:

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function listAllProducts() {
  try {
    const response = await fetch('http://localhost:3000/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error listing all products:', error);
  }
}
```

### Listar produtos por categoria

Para listar produtos por categoria, faça uma solicitação GET para o endpoint `/products/category/:category`, incluindo os seguintes parâmetros na url:

- `category` (string) Nome da categoria à ser listada.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function listProductsByCategory(category) {
  try {
    const response = await fetch(`http://localhost:3000/products/category/:${category}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}
```

### Criar avaliação para um produto

Para criar uma avaliação para um produto, faça uma solicitação POST para o endpoint `/products/assessment`, incluindo os seguintes parâmetros no corpo da requisição:

!productId || !userId || !text || !stars

- `productID` (string) ID do produto a ser avaliado.
- `userId` (string) ID do usuário que está avaliando o produto.
- `text` (string) Comentário que o usuário.
- `stars` (string) estrelas que o usuário está dando ao produto.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function createAssessment(productID, userId, text, stars) {
  try {
    const response = await fetch('http://localhost:3000/products/assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Seu token de autorização aqui',
      },
      body: JSON.stringify({ productID, userId, text, stars, }),
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error creating assessment:', error);
  }
}
```

### adicionando imagens á avaliações

Para adicionar imagens á avaliações, faça uma solicitação POST para o endpoint `/products/assessment/addPhoto`, incluindo os seguintes parâmetros no corpo da requisição:

- `avaliationId` (string) ID da avaliação.
- `file` (file) imagem que será adicinada na avaliação.

Exemplo de solicitação usando `fetchAPI`:

```javascript
async function addPhotoToAssessment(avaliationId, file) {
  try {
    const response = await fetch('http://localhost:3000/products/assessment/addPhoto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Seu token de autorização aqui',
      },
      body: JSON.stringify({ avaliationId, file, }),
    });

    const data = await response.json();
    console.log('Server response:', data);
    return data;
  } catch (error) {
    console.error('Error adding image to assessment:', error);
  }
}
```

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
