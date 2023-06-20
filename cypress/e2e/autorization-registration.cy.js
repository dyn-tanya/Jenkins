describe.skip('Registration and Autorization', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/');
        cy.get('#customer_menu_top').click();
    });


    it('Registration', () => {
        cy.get('[title="Continue"]').click();

        cy.get('.lock-on-click').click();
        cy.contains('First Name must be between 1 and 32 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_firstname').type('Tanya', { delay: 50 });

        cy.get('.lock-on-click').click();
        cy.contains('Last Name must be between 1 and 32 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_lastname').type('Dyn', { delay: 50 });

        cy.get('.lock-on-click').click();
        cy.contains('Email Address does not appear to be valid!')
            .should('be.visible');

        cy.get('#AccountFrm_email').type('tanya.dynn114@gmail.com', { delay: 50 });

        cy.get('#AccountFrm_telephone').type('380688944837');
        cy.get('#AccountFrm_fax').type('(044)-247-40-18');
        cy.get('#AccountFrm_company').type('Everest Media');

        cy.get('.lock-on-click').click();
        cy.contains('Address 1 must be between 3 and 128 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_address_1').type('St.Robert, 236', { delay: 50 });
        cy.get('#AccountFrm_address_2').type('Vernadskogo, 13')

        cy.get('.lock-on-click').click();
        cy.contains('City must be between 3 and 128 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_city').type('Pavlograd', { delay: 50 });

        cy.get('.lock-on-click').click();
        cy.contains('Zip/postal code must be between 3 and 10 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_postcode').type('20515346', { delay: 50 });
        cy.get('#AccountFrm_country_id').select('Ukraine');

        cy.get('.lock-on-click').click();
        cy.contains('Please select a region / state!')
            .should('be.visible');

        cy.get('#AccountFrm_zone_id').select('Dnipro')

        cy.get('.lock-on-click').click();
        cy.contains('Login name must be alphanumeric only and between 5 and 64 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_loginname').type('dyntanyaa114', { delay: 50 });

        cy.get('.lock-on-click').click();
        cy.contains('Password must be between 4 and 20 characters!')
            .should('be.visible');

        cy.get('#AccountFrm_password').type('qwerty124');

        cy.get('.lock-on-click').click();
        cy.contains('Password confirmation does not match password!')
            .should('be.visible');
        cy.contains('Error: You must agree to the Privacy Policy!')
            .should('be.visible');

        cy.get('#AccountFrm_newsletter1').check('1');
        cy.get('#AccountFrm_agree').check('1');

        cy.get('#AccountFrm_password').type('qwerty54', { delay: 50 });
        cy.get('#AccountFrm_confirm').type('qwerty54', { delay: 50 });

        cy.get('.lock-on-click').click();
        cy.get('.maintext')
            .should('contain', 'Your Account Has Been Created!')
    });

    it('Autorization', () => {
        cy.get('#loginFrm_loginname').type('dyntanyaa14');
        cy.get('#loginFrm_password').type('qwerty54');
        cy.get('[title="Login"]').click();
        cy.get('.heading1').should('contain', ' My Account');
    })
})