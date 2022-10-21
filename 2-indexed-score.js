const candidates = require('./data1.json')
const { getComplement } = require('./getComplement')

const TOTAL = 'Execution Time'

function matching() {
    // array to map
    const candidateMap = new Map()
    const completeSet = new Set()
    const lovers = []

    candidates.forEach((candidate) => {
        const score = candidate.loveScore
        if (candidateMap.has(score)) {
            candidateMap.set(score, { candidates: [...candidateMap.get(score).candidates, candidate]})
        } else {
            candidateMap.set(score, { candidates: [candidate]})
        }
    })

    // loop array, then find compliment from the map
    for(const [key, value] of candidateMap.entries()) {
        if (completeSet.has(key)) continue

        if (key === 50) {
            const { candidates } = candidateMap.get(50)
            for (let i=0; i< Math.floor(candidates.length/2); i++) {
                lovers.push([candidates[i], candidates[i+1]])
            }
            completeSet.add(50)
            continue
        }

        // get the compliment
        const complement = getComplement(key)
        if (candidateMap.has(complement)) {
            const matched = candidateMap.get(complement)

            if (value.candidates.length < matched.candidates.length) {
                value.candidates.forEach((candidate, index) => {
                    lovers.push([candidate, matched.candidates[index]])
                })
            } else {
                matched.candidates.forEach((candidate, index) => {
                    lovers.push([value.candidates[index], candidate])
                })
            }
            completeSet.add(key)
            completeSet.add(complement)
        }
    }
    return { lovers, candidates }
}

module.exports = { matching }


