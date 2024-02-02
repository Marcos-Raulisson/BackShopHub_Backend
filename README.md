# E-Commerce API

API para gerenciar produtos, pedidos e usuários em plataforma de e-commerce.

## Sumário

- [Endpoints](#endpoints)
- [Requisitos](#requisitos)
- [Configuração](#configuração)
- [Autenticação](#autenticação)
- [Exemplos de uso](#exemplos-de-uso)
- [Respostas de Erro](#respostas-de-erro)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Endpoints

- `GET /produtos`: Retorna a lista com todos os produtos disponíveis.
- `POST /produtos`: Retorna a lista com todos os produtos disponíveis.
- `PUT /produtos`: Retorna a lista com todos os produtos disponíveis.
- `DELETE /produtos`: Retorna a lista com todos os produtos disponíveis.

## Requisitos

- Node.js 12.0 ou superior
- MySQL 8.0 ou superior

## Configuração

1. Clone o repositório.
2. Instale todas as dependências rodando o comando `npm install` no seu terminal.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor rodando o comando `npm run dev` no seu terminal.

## Autenticação

Ainda será decidido como será o sistema de autenticação da API

## Exemplos de uso

#### Listar produtos
```bash
  curl -X GET -H "Authorization: Bearer SEU_TOKEN" https://api-ecommerce.com/produtos
```

#### Criar um novo pedido
```bash
  curl -X POST -H "Authorization: Bearer SEU_TOKEN" -H "Content-Type: application/json" -d '{"produtoId": "123", "quantidade": 2}' https://api-ecommerce.com/pedidos
```

## Respostas de Erro

- **400 Bad Request**: Solicitação inválida.
- **401 Unauthorized**: Falha na autenticação.
- **404 Not Found**: Recurso não encontrado.
- **500 Internal Server Error**: Erro interno no servidor.

## Contribuição

Sinta-se à vontade para para contribuir com o projeto abrindo problemas ou enviando solicitações de pull.

## Licença

Este projeto está licenciado sob a **Licença (MIT)**.
