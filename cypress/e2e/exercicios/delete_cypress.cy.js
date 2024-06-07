it('Consegue deletar uma tarefa', () => {
    cy.visit('https://example.cypress.io/todo');    
    
    // Adiciona uma nova tarefa
    cy.get('.new-todo').type('teste{enter}');
    
    // Verifica se a nova tarefa foi adicionada corretamente
    cy.get('.todo-list li').should('have.length', 3).and('contain', 'Pay electric bill');
    
    // Passa o mouse sobre o primeiro item da tarefa para exibir o botão de exclusão
    cy.get('.todo-list li').first().trigger('mouseover');
    
    // Clica no botão de exclusão da primeira tarefa
    cy.get('.todo-list li').first().find('button[class="destroy todo-button"]').click({ force: true });

    // Verifica se todas as tarefas foram deletadas
    cy.get('.todo-list li').should('have.length', 2);


});



it('Para filtrar tarefas completas', () => {
    cy.contains('Completed').click()

    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Pay electric bill')

    cy.contains('Walk the dog').should('not.exist')
  })

    


