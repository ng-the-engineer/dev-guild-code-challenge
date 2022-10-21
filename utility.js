const getHeapUsed = () => process.memoryUsage().heapUsed / 1024 / 1024

const printHeapUsed = () => {
    console.log(`Memory approximatedly used: ${Math.round(getHeapUsed() * 100) / 100} MB`)
}
module.exports = { printHeapUsed }