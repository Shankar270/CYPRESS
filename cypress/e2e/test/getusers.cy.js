describe('Api test automation', () => {



    it('get user', () => {
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:'Bearer e18733a490747744b2dee2480fdf83bf76de199a8503ada35bc7f70eac896705'
            }
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })

    })


    it('get user1', () => {
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/7839073',
            headers:{
                Authorization:'Bearer e18733a490747744b2dee2480fdf83bf76de199a8503ada35bc7f70eac896705'
            }
        })
        .then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(7839073)
        })

    })
})