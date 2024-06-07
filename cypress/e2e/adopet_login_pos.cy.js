function login() {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
          statusCode:200,}).as('stubPost')
        })
    }


describe('Página de login', () => {
    login();

    it('Deve preencher os campos do login corretamente e autenticar o usuário', () => {

      cy.login('barea@gmail.com', 'Senha123456');
    });
  });