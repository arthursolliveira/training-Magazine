it('login successfully', function(){
    cy.visit('https://www.magazineluiza.com.br/')
    cy.get('a[class="sc-AHaJN doAIBk sc-nTrUm hrivJS sc-nTrUm hrivJS"]').click()

    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(1).type('art@mailinator.com')
    
    cy.get('input[class=FormGroup-input]', {timeout: 5000}).eq(2).type('Teste@123')

    cy.get('button[class="LoginBox-form-continue"]').eq(1).click()

    const expectedText =  'Olá, '

    cy.get('button[class="sc-AHaJN jhvpMG sc-jfTVlA lmNEil sc-jfTVlA lmNEil"]')
        .should('be.visible', expectedText)
})