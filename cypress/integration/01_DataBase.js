
describe('DataBaseTest',()=>{
    
    it('Test',()=>{
        
        cy.task('DATABASE',{

            dbConfig: Cypress.env('DB'),
            sql: 'select * from physician'

        }).then((result)=>{
            console.log(result)
            expect(result.rowCount).to.equal(465)

        /*
        {
            id:'10514', first_name: 'Marty', last_name: 'Clara',
            birth_date: '1980-06-14T19:00:00.000Z', phone: '3345566777', ...
        }
        */
       
        expect(result.rows[16].id).to.equal('10514')
        expect(result.rows[16].first_name).to.equal('Marty')
        expect(result.rows[16].last_name).to.equal('Clara')
        })

        
    })

    it('Test02',()=>{
        
        cy.task('DATABASE',{

            dbConfig: Cypress.env('DB'),
            sql: 'select * from physician'

        }).then((result)=>{
            console.log(result)
            expect(result.rowCount).to.equal(465)

        /*
        {
            id:'10514', first_name: 'Marty', last_name: 'Clara',
            birth_date: '1980-06-14T19:00:00.000Z', phone: '3345566777', ...
        }
        */
        assert.equal(result.rows[16].id,'10514')
        assert.equal(result.rows[16].first_name,'Marty')
        assert.equal(result.rows[16].last_name,'Clara')
        })

        
    })

    it.only('Test03',()=>{
        
        cy.task('DATABASE',{

            dbConfig: Cypress.env('DB'),
            sql: 'select * from physician'

        }).then((result)=>{
            console.log(result)
            expect(result.rowCount).to.equal(465)

        /*
        {
            id:'10514', first_name: 'Marty', last_name: 'Clara',
            birth_date: '1980-06-14T19:00:00.000Z', phone: '3345566777', ...
        }
        */
       //bu şekilde her satırda 2 assert yapar. 
       //Hem string mi diye bakıyor, hemde string değeri doğrumu diye
        expect(result.rows[16].id).to.have.string('10514')
        expect(result.rows[16].first_name).to.have.string('Marty')
        expect(result.rows[16].last_name).to.have.string('Clara')
        })

        
    })
})