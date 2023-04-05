it('login successfully', function(){
    cy.visit('https://www.magazineluiza.com.br/')
    cy.get('a[class="sc-AHaJN doAIBk sc-nTrUm hrivJS sc-nTrUm hrivJS"]').click()

    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(1).type('art@mailinator.com')
    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(2).type('Teste@123')

    cy.get('button[class="LoginBox-form-continue"]').eq(1).click()

    const expectedText =  'Olá,'
    cy.get('button[class="sc-AHaJN jhvpMG sc-jfTVlA lmNEil sc-jfTVlA lmNEil"]')
        .should('be.visible', expectedText)
})

it('login email invalid', function(){
    cy.visit('/')
    cy.get('a[class="sc-AHaJN doAIBk sc-nTrUm hrivJS sc-nTrUm hrivJS"]').click()

    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(1).type('artkjhej@mailinator.com')
    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(2).type('Teste@123')

    cy.get('button[class="LoginBox-form-continue"]').eq(1).click()

    const expectedText = 'Verifique o login e a senha para continuar.'
   cy.get('div[class="LoginBox-form-error--unique"]')
        .should('be.visible', expectedText)
})

it('login password invalid', function(){
    cy.visit('/')
    cy.get('a[class="sc-AHaJN doAIBk sc-nTrUm hrivJS sc-nTrUm hrivJS"]').click()

    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(1).type('art@mailinator.com')
    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(2).type('Tesdfsd3')

    cy.get('button[class="LoginBox-form-continue"]').eq(1).click()

    const expectedText = 'Verifique o login e a senha para continuar.'
    cy.get('div[class="LoginBox-form-error--unique"]')
        .should('be.visible', expectedText)
})