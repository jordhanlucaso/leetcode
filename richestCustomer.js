const accounts = [[1,2,3],[3,2,1]]

const maximunWealth = function(accounts) {
    let wealth = []
    let biggerWealth = 0
    for(let i=0; i < accounts.length; i++) {
        wealth.push(accounts[i].reduce((partialSum, a) => partialSum + a, 0))
        if(wealth[i] > biggerWealth){
            biggerWealth = wealth[i]
        }
    }
    return console.log(biggerWealth)
}

maximunWealth(accounts)