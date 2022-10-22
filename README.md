# dev-guild-code-challenge

This is the solution to the code challenge posted on Slack [guild-dev](https://ecs-grp.slack.com/archives/C02AMCCH38B/p1664224680245099) channel, or a copy [here](./QUESTION.md).

### Pre-requisite
Node runtime is installed (version 14.19.0 or above)

### Run Solution

1. Clone the repo `git@github.com:ng-the-engineer/dev-guild-code-challenge.git`

2. Run `node solution` in root directory.

3. The result wil be printed in the terminal. 
- 18 pairs of lovers matched.
- The average execution time is 0.4 to 0.6 ms. 
- It consumed about 3.5 MB memory.

##### Example result:
```
➜  dev-guild-code-challenge git:(main) ✗ node solution
---- 3. Map of Queue ----
Execution time: 0.645ms
Memory approximatedly used: 3.59 MB
Pairs of lovers: 18
Pete Sawayn 48 ♥ Carlton Kuhic 52
Ebony Hilll 48 ♥ Ted Lehner 52
Yvonne Mertz 47 ♥ Bradford Walsh 53
Veronica Christiansen 36 ♥ Carroll Veum Jr. 64
Pauline Keeling 34 ♥ Wm Cole 66
Ethel Smith 32 ♥ Donald Rolfson 68
Megan Nitzsche PhD 28 ♥ Derrick Robel 72
Winston Leannon 28 ♥ Katie Trantow Jr. 72
Dr. Evelyn Pouros 23 ♥ Forrest Schmidt 77
Melvin Franecki 20 ♥ Estelle O'Hara 80
Melody Romaguera II 17 ♥ Erika Fahey 83
Naomi Kertzmann 16 ♥ Brendan Wilkinson 84
Dr. Shannon Mayert 15 ♥ Cary Flatley IV 85
Mr. Vera D'Amore 15 ♥ Alonzo Dach II 85
Raquel Yost 15 ♥ Katrina Gusikowski 85
Ms. Byron Skiles 12 ♥ Virgil Beahan 88
Arthur Goodwin 8 ♥ Amanda Beier 92
Brent Kohler 6 ♥ June Lakin 94
```

##### Code

```
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
```

> The `candidateMap` is a array of object. The array index represents the loveScore. Each element (referred as complementQueue) is an array of candidates with the complement loveScore.

##### My hardware specification

- MacBook Pro (16-inch, 2021)
- Chip: Apple M1 Pro
- Memory: 16 GB



### How good is this result?

Let's begin with a baseline implementation. In `1-brute-force.js`, I have implemented a two-level nested array to locate the matched pair. An average of 20 ms was recorded. The complexity is O(n^2). 

I improved it in `2-indexed-score.js` where I first setup a map with loveScore as the key, and an array of candidates as the value. It became a one level array to locate the lovers, but spend more time to setup the map, as well as more memory. It drammically reduced to 1 to 2 ms. The complexity of search is O(n * log(n)).  Majority of time spent in building the map, which is log(n). The total complexity should be O(n * log(n)) + O(log(n)). But we can reduce it to O(n * log(n)).

Next I changed the matching algorithm, with one level iteration and two arrays. One array is used for the map, similar as in the 2-indexed-score approach, another array is used for the result. The beauty of this approach is to build up the map and do the matching in one level of looping. The execution time further improved to around 0.5 ms, at the cost of using 0.5 MB of memory. The complexity is O(n * log(n)).

Last I based on the algorithm in 3-map-of-queue and converted it in an recursive approach. The idea is inspired by the implemenation of `reduce()` method. However the time was pretty worst, even worse than the brute force approach. So I took it as a reference only.

The `map-of-queue` approach is fast. But in term of scalability, 
it is limited by the available heap memory allocated to the process, by default it is 1024 MB. Of course we can increase this value by passing a flag to the command. However, to deal with an unknown size of candidates. This approach has it flaw. Instead I would consider to use streaming and reactive library such as Rx.js. It is out of the scope of the requirement but will be interesting to explore further.



### Play around

If you want to play around, run `node index` to invoke all the four implementation in single command. To verify the result, please uncomment the print method in the end of each suite.

##### Example result

```
➜  dev-guild-code-challenge git:(main) ✗ node index
---- 1. Brute Force ----
default: 16.325ms
Memory approximatedly used: 3.51 MB
Pairs of lovers: 18
---- 2. Indexed Score ----
default: 1.231ms
Memory approximatedly used: 3.33 MB
Pairs of lovers: 18
---- 3. Map of Queue ----
default: 0.399ms
Memory approximatedly used: 3.74 MB
Pairs of lovers: 18
---- 4. Recursive matching ----
default: 21.7ms
Memory approximatedly used: 9.91 MB
Pairs of lovers: 18
```

Thank you for reading!