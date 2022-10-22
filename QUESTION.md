:rotating_light: Code challenge :rotating_light:

You are working for a dating app start up :heart:. This company have come up with a way to match two people based on a metric called love score™.
If the sum of two people's love score™ == 100, then they are considered a match. This service has taken off and is really popular, however the current implementation takes too long to find matches :-1:.
Write a program to find if there are any matches in a json file, with the data looking something like this:

```
[
  {
    "id": "29b86c77-6232-42d9-bb85-ef32d37c42f8",
    "name": "Dr. Silvia Pfeffer",
    "loveScore": 9
  },
  {
    "id": "0922a4fb-0689-42c5-bd6e-3ed6f6d93c36",
    "name": "Mark Christiansen",
    "loveScore": 15
  },
  {
    "id": "e3121a78-72c7-478d-8a84-d42096bb00e8",
    "name": "Alvin Hartmann DVM",
    "loveScore": 30
  },
  {
    "id": "83b49a28-8f82-4fb5-bbc3-8e9f84485d37",
    "name": "Joann Ratke",
    "loveScore": 41
  },
  {
    "id": "c65473f3-f877-46bc-bd77-8310c5904495",
    "name": "Alma Zieme",
    "loveScore": 43
  },
  {
    "id": "604d926f-ca3b-4a20-90ca-c213fa46979f",
    "name": "Preston Wuckert",
    "loveScore": 45
  },
  {
    "id": "8377717c-006c-426f-b870-5608299db455",
    "name": "Leland Terry",
    "loveScore": 85
  }
]
```

// In this case there is a match because the sum of second and last records score in this array is 100. 
It should identify if there is a match in a given data set and also record how long it took to search for matches. Remember speed is key, as the current implementation takes too long.
Submission:
Submit your solution in any language of your choice by messaging me with the source code, instructions of how to run/compile it and readme of what your thought process!
You may be asked to talk a little bit about your answer in the dev guild meeting! 