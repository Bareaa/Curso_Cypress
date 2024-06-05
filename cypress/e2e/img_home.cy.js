describe('Página home apresenta imagem de pets', () => {
    it('Deve ser direcionado para página principal', () => {
        it('Verifica imagens dos animais', () =>{
            cy.visit('https://adopet-frontend-cypress.vercel.app/home');
            cy.get('.cards').should('be.visible');
          
        })
    
    })
})