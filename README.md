# Sistema de Gestão de Notas Escolares

## 1. Objetivo do Projeto

Sistema web para gerenciamento de notas de alunos. O sistema permite realizar operações CRUD (Create, Read, Update, Delete) completas, demonstrando a arquitetura MVC (Model-View-Controller) de forma clara e organizada.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web minimalista
- **HTML5/CSS3** - Interface estilizada
- **JavaScript (Vanilla)** - Lógica do frontend

## Diferenciais Implementados

- **Arquitetura MVC pura** - Separação clara entre camadas
- **CRUD completo** - Todas as operações de persistência
- **Sem banco de dados** - Utiliza mock em memória (arrays)
- **Pronto para uso** - Apenas npm install e npm start

### Funcionalidades principais:
- Cadastro de alunos com duas notas
- Cálculo automático de média
- Classificação automática (Aprovado/Recuperação/Reprovado)
- Listagem completa com indicadores visuais
- Edição de dados existentes
- Exclusão com confirmação
- Estatísticas em tempo real (total de alunos e média geral)

## 2. Instruções de Instalação

### Pré-requisitos

- **Node.js** (versão 12 ou superior) - [Baixar aqui](https://nodejs.org)
- **Git** (opcional, para clonar) - [Baixar aqui](https://git-scm.com)
- **Docker** (opcional, para executar via container) - [Baixar aqui](https://www.docker.com/products/docker-desktop)
- Navegador web moderno (Chrome, Firefox, Edge)

### Passo a passo

#### Opção 1: Clonando do repositório

```bash
# Clone o projeto
git clone https://github.com/EmillyClopes/Sistema-de-notas.git

# Entre na pasta
cd Sistema-de-notas

# Abra o projeto
code .
```

#### Opção 2: Download direto

Baixe o projeto como ZIP e extraia em uma pasta de sua preferência.

#### Instalando dependências (ambas opções)

```bash
# Instale as dependências necessárias
npm install

# O comando acima instalará:
# - express: framework web
# - body-parser: processador de formulários
# - nodemon: (opcional, para desenvolvimento)
```

#### Executando o projeto

```bash
# Modo produção
npm start

# Modo desenvolvimento (com reload automático)
npm run dev
```

O servidor iniciará e você verá a mensagem:
```
Servidor rodando em http://localhost:3000
```

#### Executando com Docker (alternativa)

Se preferir utilizar Docker, siga estes passos:

**Construir a imagem localmente:**
```bash
# Na pasta do projeto, execute:
docker build -t sistema-notas .
```

**Executar o container:**
```bash
docker run -p 3000:3000 sistema-notas
```

**Ou baixar direto do Docker Hub:**
```bash
docker pull emillyclopes/sistema-notas:latest
docker run -p 3000:3000 emillyclopes/sistema-notas:latest
```

Acesse: `http://localhost:3000`

### Como usar:

| Ação | Como fazer |
|------|------------|
| **Adicionar aluno** | Preencha o formulário no topo da página e clique em "Adicionar" |
| **Visualizar alunos** | A tabela principal mostra todos os alunos com suas notas e situação |
| **Editar aluno** | Clique no botão "Editar" na linha do aluno desejado |
| **Excluir aluno** | Clique em "Deletar" e confirme a operação |
| **Ver estatísticas** | O painel superior mostra total de alunos e média geral |

## Estrutura do Projeto

```
sistema-notas/
│
├──     models/              # Camada Model - Dados e regras de negócio
│   └── Aluno.js            # Classe Aluno com métodos calcularMedia() e situacao()
│
├──     controllers/          # Camada Controller - Lógica das requisições
│   └── alunoController.js   # CRUD completo: listar, adicionar, editar, deletar
│
├──     views/                # Camada View - Interface do usuário
│   ├── index.html           # Página principal com formulário e tabela
│   └── editar.html          # Página de edição de alunos
│
├──    app.js                # Arquivo principal, configuração do servidor
├──    package.json           # Dependências e scripts do projeto
├──    package-lock.json      # Versões exatas das dependências
├──    Dockerfile             # Configuração para container Docker
├──    .dockerignore          # Arquivos ignorados pelo Docker
└──    README.md              # Documentação do projeto
```

## Comandos Úteis do Docker

```bash
# Ver containers em execução
docker ps

# Parar o container
docker stop sistema-notas

# Remover o container
docker rm sistema-notas

# Ver imagens disponíveis
docker images

# Remover imagem
docker rmi sistema-notas
```
