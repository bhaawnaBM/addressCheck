///<reference types= "Cypress"/>

describe('Belong Coding Test', () => {

    it('TO validate address check via belong.com', () => {
        cy.visit('https://www.belong.com.au/');
        cy.get(':nth-child(3) > [data-testid="action-tile__root"] > .ActionTilestyles__ContentWrapper-y8oq8z-5 > [data-testid="action-tile__button"] > .Buttonstyles__ContentContainer-sc-170nuae-1').click();
        cy.wait(6000);
        cy.get('[data-testid="primary-button"] > .Buttonstyles__ContentContainer-sc-170nuae-1').click();
        cy.wait(6000);
        cy.get('[data-testid="step-address-lookup__input"]').should('be.visible');
        cy.get('[data-testid="step-address-lookup__input"]').type('31 Delias');
        cy.contains('31 Delias Road').click();
        cy.waitFor(6000);
        cy.contains('Review and confirm your address');
        cy.get('[data-testid="step-address-lookup__submit-button"]').click();
        cy.contains('Great! We can connect you to NBN internet');
    });

    it('To validate Check address via Internet', ()=>{
        cy.visit('https://www.belong.com.au/go/internet/check-your-address');
        cy.get('[data-testid="step-address-lookup__input"]').should('be.visible');
        cy.get('[data-testid="step-address-lookup__input"]').type('31 Delias');
        cy.contains('31 Delias Road').click();
        cy.contains('Review and confirm your address');
        cy.get('[data-testid="step-address-lookup__submit-button"]').click();
        cy.contains('Great! We can connect you to NBN internet');
    })
})
