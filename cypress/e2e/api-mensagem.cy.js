describe('Api Adopet', () => {
    
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/b14179a3-b541-460c-b10c-4ce9207f6edf',
            headers:Cypress.env()
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})