///<reference types= "Cypress"/>

describe('Belong Coding Test', () =>{
    it('To validate Check address', ()=>{
        cy.visit('https://www.belong.com.au/go/internet/check-your-address');
        cy.get('[data-testid="step-address-lookup__input"]').should('be.visible');
        cy.get('[data-testid="step-address-lookup__input"]').type('31 Delias');
        cy.contains('31 Delias Road').click();
        cy.waitFor(6000);
        cy.contains('Review and confirm your address');
        cy.get('[data-testid="step-address-lookup__submit-button"]').click();
        cy.wait(8000);
        cy.contains('Great! We can connect you to NBN internet');
    })
})
