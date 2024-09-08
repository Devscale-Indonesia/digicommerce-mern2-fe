describe('template spec', () => {
  it('Form Creating Product Has to Have Input Tag', () => {
    cy.visit('http://localhost:5173/dashboard/products/create');

    cy.get('input[name="tag"]').should('be.visible');
  });

  it('Input tag type a text and enter', () => {
    cy.visit('http://localhost:5173/dashboard/products/create');

    cy.get('input[name="tag"]').type('ui template{enter}');

    cy.get('input[role="product-tags"]').should('have.value', 'ui template');
  });
});
