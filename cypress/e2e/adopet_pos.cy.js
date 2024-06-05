describe('Realizar cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
  })
  it('Deve se cadastrar usando os dados abaixo', () => {
    cy.cadastro('Barea', 'barea@gmail.com', 'Senha123456');
  })
})

describe('Efetuar login', () => {
  it('Deve realizar login com as credenciais abaixo', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
    cy.login('barea@gmail.com', 'Senha123456');
  })
})



function testarBotaoHome(icon) {
  cy.get('a[class="header__home"]').click();
}

function testarBotaoMensagem(icon) {
  cy.get('a[href="/mensagem"]').click();
}

function login() {
  cy.get('img[alt="Usuário"]').click();
  cy.contains('a', 'Login').click();

  cy.login('barea@gmail.com', 'Senha123456');

}

function preencheFormularioMensagem() {
  cy.get('inpput[placeholder="Insira seu nome completo"]').type('Barea');
  cy.get('input[placeholder="Insira seu telefone e/ou whatsapp"]').type('54999999999');
  cy.get('input[placeholder="Por qual animal você se interessou?"]').type('Dunga');
  cy.get('textarea[placeholder="Escreva sua mensagem."]').type('Olá, gostaria de adotar o Dunga, como faço?');
}
describe('Página home', () => {
  it('Deve ser direcionado para página principal', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })
})

describe('Teste dos ícones do header', () => {
  it('Deve ser direcionado para página principal e testar os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();

    login();

    testarBotaoHome('a[class="header__home"]', 'aria-label="Tela inicial"');


    cy.contains('a', 'Falar com responsável').click();

    cy.get('input[placeholder="Insira seu nome completo"]').type('Barea');
    cy.get('input[placeholder="Insira seu telefone e/ou whatsapp"]').type('54999999999');
    cy.get('input[placeholder="Por qual animal você se interessou?"]').type('Dunga');
    cy.get('textarea[placeholder="Escreva sua mensagem."]').type('Olá, gostaria de adotar o Dunga, como faço?');

    cy.contains('button', 'Enviar').click();
})  
})