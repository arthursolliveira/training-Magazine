
it('Access home', function () {
    cy.visit('https://www.magazineluiza.com.br/')

    cy.get('div[data-testid="stereo-login_menu-unsigned_user_state-container"]').should('be.visible')
})