const candidates = require('./data1.json')

function matching() {
    const lovers = []
    for(i=0; i<candidates.length; i++) {
        for(j=i; j<candidates.length; j++) {
            if (candidates[j].selected === true)
                continue

            if (candidates[i].id === candidates[j].id) 
                continue

            if (candidates[i].loveScore + candidates[j].loveScore === 100) {
                lovers.push([ candidates[i], candidates[j]])
                candidates[i].selected = true
                candidates[j].selected = true
                break
            }
        }
    }
    return {result: lovers, candidates}
}

module.exports = { matching }

