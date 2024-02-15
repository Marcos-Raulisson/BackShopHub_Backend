# E-Commerce API

Este é meu projeto pessoal como freelancer, onde a API cuida do gerenciamento de produtos, simplifica o checkout, organiza o fluxo do carrinho de compras da loja online e se conecta às APIs Melhor Envio e Pagbank para logística e processamento de pagamento. Aqui, eu crio e moldo a experiência do meu comércio online.

## Sumário

- [Endpoints](#endpoints)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Contribuição](#contribuição)

## Endpoints

- `GET http://localhost:3000/users/create-account`: criar conta.

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
# Configurações do Servidor
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
MAIL_FROM=
```

Preencha as variáveis acima de acordo com os dados do seu inbox no Mailtrap e do seu banco de dados.

### 4. Configurar o banco de dados

Certifique-se de ter um servidor MySQL instalado. Se ainda não tiver, você pode baixá-lo [aqui](https://dev.mysql.com/downloads/mysql/).

- Execute o script SQL fornecido na pasta database para criar as tabelas necessárias.

## Contribuição

Sua contribuição é bem-vinda! Se você deseja melhorar a BackShopHub API ou corrigir problemas, siga estas etapas:

- **Faça Fork do Repositório:** Clique no botão "Fork" no canto superior direito desta página para criar uma cópia do projeto no seu perfil.

- **Clone o Repositório:** No terminal, clone o repositório do seu fork utilizando o comando:
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

Agradecemos a sua contribuição para tornar a BackShopHub API ainda melhor!
