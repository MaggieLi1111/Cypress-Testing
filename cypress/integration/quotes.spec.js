// write tests here
describe("Quotes App", () => {
    beforeEach(()=> {
        cy.visit("http://localhost:1234");
    })
})

const textInput = () => cy.get("input[name=text]");
const authorInput = () => cy.get("input[name=author]");
const foobarInput = () => cy.get("input[name=foobar]");
const submitBtn = () => cy.get("button[id='submitBtn']");
const cancelBtn = () => cy.get("button[id='cancelBtn']");

it("Sanity check to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
})

it("The proper elements are showing", () => {
    textInput().should("exist");
    foobarInput().should("not.exist");
    authorInput().should("exist");
    submitBtn().should("exist");
    cancelBtn().should("exist");

    cy.contains("Submit Quote").should("exist");
    cy.contains(/submit quote/i).should("exist");

})