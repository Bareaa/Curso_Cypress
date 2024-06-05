// ## Exercício 1
// Refatore os testes já realizados aplicando o método `beforeEach()`.
//
    describe('Realizar cadastro', () => {
        beforeEach(() =>{
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.get('[data-test="register-button"]').click();
        })
        it('Deve se cadastrar usando os dados abaixo', () => {
          cy.get('input[name="nome"]').type('Barea');
          cy.get('input[name="email"]').type('barea@gmail.com');
          cy.get('input[name="password"]').type('Senha123456');
          cy.get('input[name="confirm_password"]').type('Senha123456');
          cy.contains('button', 'Cadastrar').click();
        })
      })



// ## Exercício 2
// Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
//
    describe('Página inicial & title == AdoPet', () => {
        beforeEach(() => {
                cy.visit('https://adopet-frontend-cypress.vercel.app/');
            })
        it('Verifica se o title está presente no html', () => {
             cy.title('AdoPet').should('eq', 'AdoPet')
            });
        });


// ## Exercício 3
// Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
//
    describe('Página inicial e texto tem Quem ama adota!', () => {
        beforeEach(() => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
        })
        it('Verifica se o texto está presente no html', () => {
            cy.contains('p', 'Quem ama adota!').should('be.visible');
        });
    });

// ## Exercício 4
// Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. 
// Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.

describe('Página inicial tem que apresentar o texto "..."', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verifica presença do texto no html', () => {
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });
})

// ## Exercício 5
// Teste o login com um fluxo diferente: Visite a página principal do Adopet, 
// clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.

describe('Teste de login com fluxo diferente', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.button').click();
        cy.get('.header__user')
        cy.get('img[alt="Usuário"]').click();
        cy.contains('a', 'Login').click();
    })
    it('Deve logar com nome e senha válidos', () => {
        cy.get('input[name="email"]').type('barea@gmail.com');
        cy.get('input[name="password"]').type('Senha123456');
        cy.get('button[data-test="submit-button"]').click();
    });
})