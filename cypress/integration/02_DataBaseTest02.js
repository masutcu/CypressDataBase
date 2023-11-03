describe('Male and Female Physicians',()=>{
    it('Male Physicians', ()=>{
        cy.task("DATABASE", {
            dbConfig:Cypress.env('DB'),
            sql: 'select * from physician where gender="MALE"'
        }).then((result)=>{
            console.log(resul.rows);
            expect(result.rowCount).to.eq(398)
        })
    })

    it.only('Female Physicians', ()=>{
        cy.task("DATABASE", {
            dbConfig:Cypress.env('DB'),
            sql: 'select * from physician where gender="FEMALE"'
        }).then((result)=>{
            console.log(resul.rows);
            expect(result.rowCount).to.eq(63)
        })
    })
})