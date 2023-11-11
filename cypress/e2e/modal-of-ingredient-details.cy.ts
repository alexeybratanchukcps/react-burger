
describe('Test modal of ingredient details', () => {
    beforeEach(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()

        cy.intercept("GET", 'https://norma.nomoreparties.space/api/ingredients', {fixture: 'products'}).as("getIngredients")

        cy.initApp()

        cy.wait('@getIngredients')

        cy.get('[data-testid=card-product]').first().click()
    })

    it('should open the modal of ingredient', () => {
        cy.get('[data-testid=modal_showed]').first().should('have.attr', 'data-testid')
    })

    it('should have data the modal of ingredient', () => {
        cy.get('[data-testid=ingredient-details_title]').should("have.text", "Краторная булка N-200i")
    })

    it('should close the modal of ingredient', () => {
        cy.get('[data-testid=modal_close]').first().click()
        cy.get('[data-testid=modal_showed]').should('not.exist')
    })
});





export {}