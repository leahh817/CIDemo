describe('explore youbtube',()=>{
    
    it('visit youtube',()=>{
        cy.visit('https://www.youtube.com')
        cy.url().should('include','youtube.com')

        cy.contains('Music').click()
        cy.contains('Music').parent().should('have.attr','aria-selected','true')

        cy.get('input[name="search_query"]')
          .type('Taylor Swift')
          .should('have.value','Taylor Swift')

        cy.get('#search-icon-legacy').click()
        cy.location('href').should('include','/results?search_query=Taylor+Swift')

        

        cy.contains('Taylor Swift - All Too Well: The Short Film').click()
        cy.get('#container > h1 > yt-formatted-string').should('have.text','Taylor Swift - All Too Well: The Short Film')

        cy.get('button[aria-label="Pause (k)"]').click().should('have.attr','aria-label','Play (k)')
       // cy.get('button[aria-label="Play (k)"]').should('have.attr','title','Play (k)')

        cy.get('a[title="Next (SHIFT+n)"]').click()
        cy.get('#container > h1 > yt-formatted-string').should('not.have.text','Taylor Swift - All Too Well: The Short Film')

        cy.get('#guide-button').click()
        cy.get('#sections').should('be.visible')

        cy.get('a[title="Home"]').eq(0).click()
        cy.contains('All').parent().should('have.attr','aria-selected','true')

    })

    // it('switch to music tab',()=>{
        
    // })

    // it('search taylor swift',()=>{
        
    // })

    // it('puase and resume',()=>{


    // })

    // it('back to homepage',()=>{
       
    // })


})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('uncaught errors!');
    return false
})
