# 📌 Projeto de Testes Automatizados com Cypress

## 📋 Descrição
Este projeto implementa testes automatizados de uma aplicação web utilizando **Cypress**. Ele cobre funcionalidades como:
- Cadastro de tarefas
- Validação de campos obrigatórios
- Impedimento de tarefas duplicadas
- Conclusão e remoção de tarefas

O projeto também gera relatórios detalhados de execução com **Allure Reports**.

---

## 🚀 Tecnologias Utilizadas
- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- [Allure Reports](https://github.com/Shelex/cypress-allure-plugin) - Geração de relatórios de testes
- Node.js & Yarn - Gerenciamento de dependências

---

## 📂 Estrutura do Projeto
```
📦 cypress-express-mark
├── 📂 cypress
│   ├── 📂 e2e
│   │   ├── tasks.cy.js  # Testes automatizados das tarefas
│   ├── 📂 fixtures
│   │   ├── tasks.json  # Massa de dados para testes
│   ├── 📂 support
│   │   ├── commands.js  # Comandos customizados do Cypress
├── 📄 cypress.config.js  # Configuração do Cypress
├── 📄 package.json  # Dependências do projeto
├── 📄 .gitignore  # Arquivos ignorados pelo Git
├── 📄 README.md  # Documentação do projeto
```

---

## 🔧 Configuração e Execução
### 📌 **1. Instalar dependências**
Certifique-se de ter o **Node.js** e o **Yarn** instalados. Em seguida, rode:
```sh
yarn install
```

### 📌 **2. Executar os testes**
Para rodar os testes em modo interativo:
```sh
yarn cypress open
```
Para rodar os testes em modo headless:
```sh
yarn cypress run
```

### 📌 **3. Gerar Relatórios Allure**
1. Após rodar os testes, gere o relatório:
   ```sh
   yarn allure:generate
   ```
2. Para visualizar o relatório no navegador:
   ```sh
   yarn allure:open
   ```

---

## ✅ Funcionalidades Testadas
- Criar uma nova tarefa
- Validar campos obrigatórios
- Impedir a criação de tarefas duplicadas
- Marcar uma tarefa como concluída
- Excluir uma tarefa

---

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir!

🔹 Criado por [Seu Nome]

