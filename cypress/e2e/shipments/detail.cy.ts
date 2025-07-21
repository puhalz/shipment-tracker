describe('Shipment Detail E2E', () => {
  it('should display shipment detail info and allow navigation back', () => {
    // Visit the first shipment detail directly (assuming SHP001 exists)
    cy.visit('/shipments/SHP001');
    cy.get('.shipment-detail', { timeout: 6000 }).should('be.visible');
    cy.contains('Carrier').should('exist');
    cy.get('.back-link').click();
    cy.contains('Shipments').should('be.visible');
  });
});
