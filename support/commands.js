// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 
// export {};
 
// declare global {
//   namespace Cypress {
//     interface Chainable<Subject> {
      
//       getIframe(getIframe: string): Chainable<any>;
//     }
//   }
// }


Cypress.Commands.add('getIframe1', (iFrame)=>{

   return  cy.get('.category-cards .card.mt-4.top-card').eq(2).click(),
           cy.get('.accordion .element-group .menu-list [id="item-3"]').contains("Nested Frames").click({force:true}),
           cy.get(iFrame)
           .its('0.contentDocument.body')
           .should('be.visible')
           .then(cy.wrap);  
});

Cypress.Commands.add('getIframe2', (iFrame2)=>{

   return cy.get(iFrame2)
   .its('0.contentDocument.body')
   .should('be.visible')
   .then(cy.wrap);

});


