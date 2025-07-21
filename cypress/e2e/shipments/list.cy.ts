describe('Shipments List E2E', () => {
  it('should display the shipments grid and allow navigation to shipment detail', () => {
    cy.visit('/');
    cy.contains('Shipments').should('be.visible');
    cy.get('.shipment-card').should('have.length.greaterThan', 0);
    cy.get('.shipment-card').first().click();
    cy.url().should('include', '/shipments/');
  });
});
