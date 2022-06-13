describe('arstechnica', () => {
  it('Search a post in the news website', () => {
    //When I access the news website
  	//And I search for a post using a existent title
  	cy.visit('https://arstechnica.com/search/?ie=UTF-8&q=%22The%20original%20Jurassic%20Park%20is%20a%20sci-fi%20classic%22')
  	//Then the news website must return the searched post in a results page
  	cy.get('.gs-snippet > :nth-child(2)').should('have.text','The original Jurassic Park is a sci-fi classic')
   })
  it('User sign-up invalid email', () => {
    //When I try to sign up or create a new account
    cy.visit('https://arstechnica.com/civis/ucp.php?mode=register')
    cy.get('#username').type('testbarroco')
    cy.get('#new_password').type('123456')
    cy.get('#password_confirm').type('123456')
    cy.get('#email').type('testbarroco.gmail.com')
    cy.get('#email_confirm').type('testbarroco.gmail.com')
    //And I try to register a account with a invalid email format
    cy.get('.button').click()
    //It returns a error message "The e-mail address you entered is invalid" on a visible place
    cy.get('[id="err1895541029"]').should('have.text','The e-mail address you entered is invalid.')
  })
})