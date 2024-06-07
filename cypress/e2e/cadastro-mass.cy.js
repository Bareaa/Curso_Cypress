import { usuarios } from '../fixtures/usuarios.json';

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    });
    usuarios.forEach(usuario => {
        it('Deve preencher o formulário de cadastro com sucesso', () => {
            cy.get('[data-test="input-name"]').clear().type(usuario.name);
            cy.get('[data-test="input-email"]').type(usuario.email);
            cy.get('[data-test="input-password"]').type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').type(usuario.password);
            cy.get('[data-test="submit-button"]').click();
        })
    });
});