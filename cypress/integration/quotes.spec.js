// write tests here
describe("Quotes App", () => {
 beforeEach(() => {
   /**
    * Each test needs fresh state!
    * How do we "reset" state in React?
    * We're gonna refresh the page!
    * Every test must be able to work in isolation
    */
   cy.visit("http://localhost:1234"); // If you're on a different port this has to change
 })

 // Helper time!!
 const textInput = () => cy.get("input[name=text]");
 const authorInput = () => cy.get("input[name=author]");
 const foobarInput = () => cy.get("input[name=foobar]");
 const submitBtn = () => cy.get("button[id='submitBtn']");
 const cancelBtn = () => cy.get("button[id='cancelBtn']");

 it("Sanity check to make sure tests work", () => {
   // "it" is a test
   // "expect" is an assertion
   // There can (and often are) multiple assertions per test
   expect(1 + 2).to.equal(3);
   expect(2 + 2).not.to.equal(5);
   expect({}).not.to.equal({}); // === strict equality
   expect({}).to.eql({}); // == loosey? equality
 })

 it("The proper elements are showing", () => {
   textInput().should("exist");
   foobarInput().should("not.exist");
   authorInput().should("exist");
 })
})