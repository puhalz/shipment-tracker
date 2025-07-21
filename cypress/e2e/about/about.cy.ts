describe('About Page E2E', () => {
  it('should display the About page content', () => {
    cy.visit('/about');
    cy.get('.about-container').should('be.visible');
    cy.contains('About Shipment Tracker').should('exist');
    cy.contains('Modular Architecture').should('exist');
  });
});
