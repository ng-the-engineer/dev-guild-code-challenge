const { printHeapUsed } = require('./utility')
const mapOfQueue = require('./3-map-of-queue')
// const { recursiveMatching, findLover } = require('./4-recursive-map-of-queue')
const TOTAL = 'Execution time'

suite_mapOfQueue()

function suite_mapOfQueue() {
    console.log('---- 3. Map of Queue ----')
    console.time(TOTAL)
    const { lovers } = mapOfQueue.matching()
    console.timeEnd(TOTAL)
    printHeapUsed()
    console.log('Pairs of lovers:', lovers.length)
    lovers.forEach(lover => console.log(`${lover[0].name} ${lover[0].loveScore} \u2665 ${lover[1].name} ${lover[1].loveScore}`))
}

