describe('Form inputs', () => {
    it('Can navigate to the site', ()=> {
        cy.visit('http://localhost:3000')
    })
    it('can click home', () => {
        cy.get('li:first').click()
        
    })
    it('can click build your own pizza', () => {
        cy.get('h2').click()
    })
    it('can input text', () => {
        cy.get('input[name="name"')
        .type('Test')
    })
    it('can select multiple toppings', () => {
        cy.get('[type="checkbox"]').check()
    })
    it('can submit form', () => {
        cy.get('[type="radio"]').first().check()
        cy.get('button').click()
    })
})