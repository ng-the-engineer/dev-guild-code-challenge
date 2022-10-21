const { getComplement } = require('./getComplement')

const recursiveMatching = ([head, ...tail], f, accumulator ) => {
    const { lovers, candidateMap } = accumulator

    if (typeof head === 'undefined') {
        return {lovers, candidateMap}
    } else {
        return recursiveMatching(tail, f, f(lovers, candidateMap, head)) 
    }
}

function findLover(lovers, cmap, head) {
    const complement = getComplement(head.loveScore)

    if (cmap[complement] && cmap[complement].length > 0){
        [first, ...remains] = cmap[complement]
        cmap[complement] = remains
        lovers.push([first, head])
    } else {
        const originalItems = cmap[head.loveScore] || []
        cmap[head.loveScore] = [...originalItems, head]
    }

    return {
        lovers,
        candidateMap: cmap
    }
}    

module.exports = { recursiveMatching, findLover }


