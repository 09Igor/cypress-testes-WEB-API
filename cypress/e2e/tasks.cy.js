describe("tarefas", () => {
  let testData;

  before(() => {
    cy.fixture("tasks").then((t) => {
      testData = t;
    });

    cy.viewport(1920, 1080);
  });

  context("cadsatro", () => {
    it("deve cadastrar nova tarefa", () => {

      const taskName = "Tarefa de teste"

      cy.removeTaskByName(taskName)
      cy.createTask("Tarefa de teste")

      cy.contains("main div p", taskName)
          .should("be.visible");
    });

    it("não deve permitir tarefa duplicada", () => {
      const task = testData.dup;

      cy.removeTaskByName(task.name);
      cy.postTask(task);
      cy.createTask(task.name);
    });

    it("campo obrigatório", () => {
      cy.createTask();
      cy.isRequired("This is a required field");
    });
  });
  context("ataualização", () => {
    it("deve concluir uma tarefa", () => {
      const task = {
        name: "Pagar contas de consumo",
        is_done: false,
      };

      cy.removeTaskByName(task.name);
      cy.postTask(task);

      cy.visit("/");

      cy.contains("p", task.name)
        .parent()
        .find("button[class*=ItemToggle]")
        .click();

      cy.contains("p", task.name).should(
        "have.css",
        "text-decoration-line",
        "line-through"
      );
    });
  });
  context("exclusão", () => {
    it("deve remover uma tarefa", () => {
      const task = {
        name: "Estudar JavaScript",
        is_done: false,
      };

      cy.removeTaskByName(task.name);
      cy.postTask(task);

      cy.visit("/");

      cy.contains("p", task.name)
        .parent()
        .find("button[class*=ItemDelete]")
        .click();

      cy.contains("p", task.name).should("not.exist");
    });
  });
});
