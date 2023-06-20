//хелпер, которий авторизовує через ui


export function login(qwe) {  //зможемо заімпортити в будь-якому файлі проекту, user як параметр функції
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(qwe.username);
    cy.get('#loginFrm_password').type(qwe.password);
    cy.get('button[type="submit"]').contains('Login').click();
}


export function findNewProd(productName) {
    cy.get('ul.pagination a').then(pages => {
        for (let i = 1; i < pages.length; i++) {
            cy.location().then(location => {
                if (!location.search.includes('product/product')) {
                    cy.get('body').then(body => {
                        if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
                            cy.get(`.prdocutname[title="${productName}"]`).click();
                        }
                        else {
                            cy.get('ul.pagination a').contains('>').click();
                        }
                    })

                }
            })

        }
    })

}

//рекурсія, функція викликає саму себе
export function findrNewProd(productName) {
    cy.get('body').then(body => {
        if (body.find(`.prdocutname[title="${productName}"]`).length > 0) {
            cy.get(`.prdocutname[title="${productName}"]`).click();
        }
        else {
            cy.get('ul.pagination a').contains('>').click();
            findrNewProd(productName) //викликає саму себе
        }
    })
}
