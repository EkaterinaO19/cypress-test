describe('Byndyusoft Contact Information Test', () => {
    it('should verify contact information on Byndyusoft website', () => {
        cy.visit('https://www.google.ru/')
        cy.get('textarea[id="APjFqb"]').type('Byndyusoft').type('{enter}')

        // cy.window().then((win) => {
        //     cy.stub(win, 'open').as('windowOpen');
        //     cy.get('.tF2Cxc > .yuRUbf .LC20lb').eq(0).click();
        //     cy.wait(20000);
        //     cy.get('@windowOpen').should('not.be.called');
        // });
            cy.visit('https://byndyusoft.com/')
            cy.get('.knowMore__container > .btn').click({force: true})
            cy.get('.popup-callback__footer-contacts > [href="mailto:sales@byndyusoft.com"]')
            cy.get('a.popup-callback__footer-linkTg.ml40').should('be.visible').then(($telegramLink) => {
                const phoneNumber = $telegramLink.text().trim();
                expect(phoneNumber).to.equal('8 800 775-15-21');
                cy.log(`Phone Number: ${phoneNumber}`);
            });
        })
    })