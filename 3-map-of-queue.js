const candidates = require('./data1.json')
const { getComplement } = require('./getComplement')

const candidateMap = new Array(100)
const lovers = []

function matching(){
    candidates.forEach((candidate) => {
        const complement = getComplement(candidate.loveScore)
        
        const complementQueue = candidateMap[complement]
        
        if (complementQueue && complementQueue.length > 0) {
            [head, ...tail] = complementQueue
            candidateMap[complement] = tail
            lovers.push([head, candidate])
        } else {
            const originalItems = candidateMap[candidate.loveScore] || []
            candidateMap[candidate.loveScore] = [ ...originalItems, candidate ]
        }   
    })
    return ({lovers})
}

module.exports = { matching }
