describe('Verify order product  from Amazon', () => {
    it('order a product ', () => {
      cy.visit('/')
      cy.title().should('include', "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
      cy.get('#twotabsearchtextbox').type("Amazon echo")
      cy.contains("amazon echo").click()
      cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first()
      .invoke("removeAttr", "target").click()
      cy.get("#add-to-cart-button").should("be.visible")
      cy.get("#add-to-cart-button").click()
      cy.get('input[name="proceedToRetailCheckout"]').should("be.visible")
      cy.get('input[name="proceedToRetailCheckout"]').click()
      cy.url().should("include","https://www.amazon.in/ap/signin?")
 
    })
  })