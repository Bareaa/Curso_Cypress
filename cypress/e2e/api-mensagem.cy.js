describe('Api Adopet', () => {
    const tempoEsperado = Math.random() * 1000
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMTQxNzlhMy1iNTQxLTQ2MGMtYjEwYy00Y2U5MjA3ZjZlZGYiLCJhZG9wdGVyTmFtZSI6Ikd1aWxoZXJtZSBCYXJlYSIsImlhdCI6MTcxNzc4NzczMSwiZXhwIjoxNzE4MDQ2OTMxfQ.ww7hQL2why3hIOUnuubS1oc7lx-E6J5CYeavrM903Kw'

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/b14179a3-b541-460c-b10c-4ce9207f6edf',
            headers:{ authorization }
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lessThan(tempoEsperado)
        })
    })
})