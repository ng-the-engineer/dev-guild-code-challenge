const { printHeapUsed } = require('./utility')
const bruteForce = require('./1-brute-force')
const indexedScores = require('./2-indexed-score')
const mapOfQueue = require('./3-map-of-queue')
const { recursiveMatching, findLover } = require('./4-recursive-map-of-queue')

suite_bruceForce()
suite_indexedScore()
suite_mapOfQueue()
suite_recursive_matching()

function suite_bruceForce() {
    console.log('---- 1. Brute Force ----')
    console.time()
    const { result } = bruteForce.matching()
    console.timeEnd()
    printHeapUsed()
    console.log('Pairs of lovers:', result.length)
    // result.forEach(pair => console.log(`${pair[0].name} (${pair[0].loveScore}) \u2665 ${pair[1].name} (${pair[1].loveScore})`))
}

function suite_indexedScore() {
    console.log('---- 2. Indexed Score ----')
    console.time()
    const { lovers } = indexedScores.matching()
    console.timeEnd()
    printHeapUsed()
    console.log('Pairs of lovers:', lovers.length)
    // lovers.forEach(lover => console.log(`${lover[0].name} (${lover[0].loveScore}) \u2665 ${lover[1].name} (${lover[1].loveScore})`))
}

function suite_mapOfQueue() {
    console.log('---- 3. Map of Queue ----')
    console.time()
    const { lovers } = mapOfQueue.matching()
    console.timeEnd()
    printHeapUsed()
    console.log('Pairs of lovers:', lovers.length)
    // lovers.forEach(lover => console.log(`${lover[0].name} ${lover[0].loveScore} \u2665 ${lover[1].name} ${lover[1].loveScore}`))
}

function suite_recursive_matching() {
    console .log('---- 4. Recursive matching ----')
    const candidates = require('./data1.json')
    // const a = Array(100).fill(null)
    const a = new Array(100)
    console.time()
    const { lovers } = recursiveMatching(candidates, findLover, { lovers: [], candidateMap: a })
    console.timeEnd()
    printHeapUsed()
    console.log('Pairs of lovers:', lovers.length)
    // lovers.forEach(lover => console.log(`${lover[0].name} (${lover[0].loveScore}) \u2665 ${lover[1].name} (${lover[1].loveScore})`))
}