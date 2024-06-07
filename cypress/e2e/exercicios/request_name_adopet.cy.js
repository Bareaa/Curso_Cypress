
describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMTQxNzlhMy1iNTQxLTQ2MGMtYjEwYy00Y2U5MjA3ZjZlZGYiLCJhZG9wdGVyTmFtZSI6Ikd1aWxoZXJtZSBCYXJlYSIsImlhdCI6MTcxNzc4MDc4NSwiZXhwIjoxNzE4MDM5OTg1fQ.zITjj36L_Fyix0qM2DiSV3ix8UR6hW2vL4h5A-r-Jm4`
      
            it('Nome do perfil', () => {
                cy.request({
                    method: 'GET' ,
                    url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/b14179a3-b541-460c-b10c-4ce9207f6edf',
                    headers: { authorization }
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('perfil')
                expect(res.body.perfil.nome).to.be.equal('Guilherme Barea')
                                 
                })
            })
        })
  