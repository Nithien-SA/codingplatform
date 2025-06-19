const defaultInputLimits = {
  size: 'Up to 10^5 elements',
  numberOfInputs: 'Up to 10 inputs',
  note: 'See problem description for details.'
};

const challenges = [
  {
    id: 42,
    title: "Magical Pet Sitter",
    difficulty: "Easy",
    description: "You're a pet sitter for magical creatures. Each pet has a name, type, and list of care requirements. Your task is to create a schedule of care activities for each pet, ensuring that no two pets requiring the same care are scheduled at the same time.",
    examples: [
      {
        input: "pets = [\n  { name: 'Fluffy', type: 'Dragon', care: ['feed', 'exercise'] },\n  { name: 'Sparky', type: 'Phoenix', care: ['feed', 'groom'] },\n  { name: 'Whiskers', type: 'Cat', care: ['feed'] }\n]\nOutput: { 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] }",
        output: "{ 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] }",
        explanation: "Create a schedule for Fluffy, Sparky, and Whiskers."
      },
      {
        input: "pets = [\n  { name: 'Pet1', type: 'Type1', care: ['care1'] },\n  { name: 'Pet2', type: 'Type2', care: ['care2'] }\n]\nOutput: { 'care1': ['Pet1', 'Pet2'] }",
        output: "{ 'care1': ['Pet1', 'Pet2'] }",
        explanation: "Create a schedule for Pet1 and Pet2."
      }
    ],
    inputLimits: {
      size: "1 <= pets.length <= 1000",
      numberOfInputs: "Each pet has a name, type, and care array",
      note: "Care instructions are strings."
    },
    status: "unattempted",
    starterCode: `function createPetSchedule(pets) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Fluffy', type: 'Dragon', care: ['feed', 'exercise'] },
          { name: 'Sparky', type: 'Phoenix', care: ['feed', 'groom'] },
          { name: 'Whiskers', type: 'Cat', care: ['feed'] }
        ]], 
        output: { 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] } 
      },
      { 
        input: [[
          { name: 'Pet1', type: 'Type1', care: ['care1'] },
          { name: 'Pet2', type: 'Type2', care: ['care2'] }
        ]], 
        output: { 'care1': ['Pet1', 'Pet2'] } 
      }
    ]
  },
  {
    id: 7,
    title: "Dragon's Treasure Sorter",
    difficulty: "Easy",
    description: "You're a dragon organizing your treasure hoard. Each treasure has a value and a category. Your task is to sort the treasures by category and then by value within each category. If two treasures have the same value, sort them alphabetically by name.",
    examples: [
      {
        input: "treasures = [ { name: 'Ruby', value: 100, category: 'gems' }, { name: 'Gold', value: 50, category: 'metals' }, { name: 'Diamond', value: 100, category: 'gems' } ]",
        output: "[ { name: 'Diamond', value: 100, category: 'gems' }, { name: 'Ruby', value: 100, category: 'gems' }, { name: 'Gold', value: 50, category: 'metals' } ]",
        explanation: "Sort by category, then by value, then by name."
      },
      {
        input: "treasures = [ { name: 'Emerald', value: 200, category: 'gems' }, { name: 'Silver', value: 50, category: 'metals' } ]",
        output: "[ { name: 'Emerald', value: 200, category: 'gems' }, { name: 'Silver', value: 50, category: 'metals' } ]",
        explanation: "Already sorted."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, value, and category",
      note: "Values are integers."
    },
    status: "unattempted",
    starterCode: `function sortTreasures(treasures) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Ruby', value: 100, category: 'gems' },
          { name: 'Gold', value: 50, category: 'metals' },
          { name: 'Diamond', value: 100, category: 'gems' }
        ]], 
        output: [
          { name: 'Diamond', value: 100, category: 'gems' },
          { name: 'Ruby', value: 100, category: 'gems' },
          { name: 'Gold', value: 50, category: 'metals' }
        ] 
      },
      { 
        input: [[
          { name: 'Emerald', value: 200, category: 'gems' },
          { name: 'Silver', value: 50, category: 'metals' }
        ]], 
        output: [
          { name: 'Emerald', value: 200, category: 'gems' },
          { name: 'Silver', value: 50, category: 'metals' }
        ] 
      }
    ]
  },
  {
    id: 101,
    title: "Time Traveler's Log II",
    difficulty: "Easy",
    description: "You're keeping a log of your time travel adventures. Each entry has a date, location, and list of events. Your task is to find all locations visited in a given time period and also count the number of unique events that occurred during that period.",
    examples: [
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },\n  { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },\n  { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-03'",
        output: "{ locations: ['London', 'Rome', 'Paris'], eventsCount: 6 }",
        explanation: "Find all locations visited and count unique events between the given dates."
      },
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Location1', events: ['Event1'] },\n  { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'",
        output: "{ locations: [], eventsCount: 0 }",
        explanation: "No locations or events in the given period."
      }
    ],
    inputLimits: {
      size: "1 <= log.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations and events are strings."
    },
    status: "unattempted",
    starterCode: `function findVisitedLocationsAndEvents(log, startDate, endDate) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [[
          { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },
          { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },
          { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }
        ],
        '2024-03-01',
        '2024-03-03'
      ], 
      output: { locations: ['London', 'Rome', 'Paris'], eventsCount: 6 } 
    },
    { 
      input: [
        [
          { date: '2024-03-01', location: 'Location1', events: ['Event1'] },
          { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }
        ],
        '2024-03-03',
        '2024-03-04'
      ], 
      output: { locations: [], eventsCount: 0 } 
    }
  ],
  },
  {
    id: 56,
    title: "Haunted House Escape",
    difficulty: "Medium",
    description: "You are trapped in a haunted house with locked doors and keys. Each room may have a key to another room. Find if you can escape from the entrance to the exit.",
    examples: [
      {
        input: "rooms = [{id: 1, keys: [2]}, {id: 2, keys: [3]}, {id: 3, keys: []}], entrance = 1, exit = 3; Output: true",
        output: "true",
        explanation: "You can escape from the entrance to the exit."
      },
      {
        input: "rooms = [{id: 1, keys: [2]}, {id: 2, keys: []}, {id: 3, keys: []}], entrance = 1, exit = 3; Output: false",
        output: "false",
        explanation: "You cannot escape from the entrance to the exit."
      }
    ],
    status: "unattempted",
    starterCode: `function canEscape(rooms, entrance, exit) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{id: 1, keys: [2]}, {id: 2, keys: [3]}, {id: 3, keys: []}], 1, 3], output: true },
      { input: [[{id: 1, keys: [2]}, {id: 2, keys: []}, {id: 3, keys: []}], 1, 3], output: false }
    ]
  },
  {
    id: 81,
    title: "Enchanted Forest Treasure Hunt",
    difficulty: "Medium",
    description: "You are searching for treasures in an enchanted forest represented as a 2D grid. Each cell can be empty, a tree, or a treasure. Write a function to return the coordinates of all treasures.",
    examples: [
      {
        input: "forest = [['.', 'T', 'X'], ['X', '.', '.'], ['T', 'X', '.']]; Output: [[0,2],[1,0],[2,1]]",
        output: "[[0,2],[1,0],[2,1]]",
        explanation: "Find the coordinates of all treasures in the enchanted forest."
      },
      {
        input: "forest = [['.', '.', '.'], ['.', '.', '.']]; Output: []",
        output: "[]",
        explanation: "No treasures are present in the enchanted forest."
      }
    ],
    status: "unattempted",
    starterCode: `function findTreasures(forest) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[['.', 'T', 'X'], ['X', '.', '.'], ['T', 'X', '.']]], output: [[0,2],[1,0],[2,1]] },
      { input: [[['.', '.', '.'], ['.', '.', '.']]], output: [] }
    ]
  },
  {
    id: 23,
    title: "Dragon's Treasure Hoard",
    difficulty: "Medium",
    description: "You're a dragon who loves collecting treasures. Your hoard is organized by value and rarity. Given an array of treasures, where each treasure has a value and rarity level, find the most valuable combination of treasures that doesn't exceed a given weight limit. Each treasure's weight is calculated as (value * rarity).",
    examples: [
      {
        input: "treasures = [\n  { name: 'Golden Crown', value: 100, rarity: 5 },\n  { name: 'Diamond', value: 50, rarity: 3 },\n  { name: 'Ruby', value: 75, rarity: 4 }\n],\nweightLimit = 500\nOutput: ['Golden Crown', 'Ruby']",
        output: "['Golden Crown', 'Ruby']",
        explanation: "Find the most valuable treasures that fit within the weight limit."
      },
      {
        input: "treasures = [\n  { name: 'Sapphire', value: 200, rarity: 2 },\n  { name: 'Emerald', value: 150, rarity: 2 }\n],\nweightLimit = 300\nOutput: ['Sapphire']",
        output: "['Sapphire']",
        explanation: "Only 'Sapphire' fits within the weight limit."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, value, and rarity",
      note: "Values and rarities are integers."
    },
    status: "unattempted",
    starterCode: `function findOptimalTreasures(treasures, weightLimit) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Golden Crown', value: 100, rarity: 5 },
            { name: 'Diamond', value: 50, rarity: 3 },
            { name: 'Ruby', value: 75, rarity: 4 }
          ],
          500
        ], 
        output: ['Golden Crown', 'Ruby'] 
      },
      { 
        input: [
          [
            { name: 'Sapphire', value: 200, rarity: 2 },
            { name: 'Emerald', value: 150, rarity: 2 }
          ],
          300
        ], 
        output: ['Sapphire'] 
      }
    ]
  },
  {
    id: 68,
    title: "Magical Garden IV",
    difficulty: "Easy",
    description: "You're tending a magical garden. Each plant has a name, type, and a list of magical properties. Your task is to find all plants of a given type and also count the number of unique magical properties in the garden.",
    examples: [
      {
        input: "plants = [ { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] }, { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] } ]; type = 'Flower'; Output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        output: "{ plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        explanation: "Two flowers found, with 3 unique properties: healing, beauty, luck."
      },
      {
        input: "plants = [ { name: 'Oak', type: 'Tree', properties: ['strength'] } ]; type = 'Tree'; Output: { plants: ['Oak'], uniqueProperties: 1 }",
        output: "{ plants: ['Oak'], uniqueProperties: 1 }",
        explanation: "One tree found, with 1 unique property."
      }
    ],
    inputLimits: {
      size: "1 <= plants.length <= 1000",
      numberOfInputs: "Each plant has a name, type, and list of properties",
      note: "Properties are strings."
    },
    status: "unattempted",
    starterCode: `function findPlantsAndUniqueProperties(plants, type) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] },
            { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] }
          ],
          'Flower'
        ], 
        output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 } 
      },
      { 
        input: [
          [
            { name: 'Oak', type: 'Tree', properties: ['strength'] }
          ],
          'Tree'
        ], 
        output: { plants: ['Oak'], uniqueProperties: 1 } 
      }
    ]
  },
  {
    id: 13,
    title: "Time Traveler's Log",
    difficulty: "Easy",
    description: "You're keeping a log of your time travel adventures. Each entry has a date, location, and list of events. Your task is to find all locations visited in a given time period and sort them by the number of events.",
    examples: [
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },\n  { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },\n  { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-03'\nOutput: ['London', 'Rome', 'Paris']",
        output: "['London', 'Rome', 'Paris']",
        explanation: "Find all locations visited between the dates and sort them by the number of events."
      },
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Location1', events: ['Event1'] },\n  { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'\nOutput: []",
        output: "[]",
        explanation: "No locations visited between the dates."
      }
    ],
    inputLimits: {
      size: "1 <= log.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findVisitedLocations(log, startDate, endDate) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },
          { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },
          { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }
        ],
        '2024-03-01',
        '2024-03-03'
      ], 
      output: ['London', 'Rome', 'Paris'] 
    },
    { 
      input: [[
        { date: '2024-03-01', location: 'Location1', events: ['Event1'] },
        { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }
      ],
      '2024-03-03',
      '2024-03-04'
    ], 
    output: [] 
    }
  ],
  },
  {
    id: 14,
    title: "Time Traveler's Guide",
    difficulty: "Easy",
    description: "You're creating a guide for time travelers. Each location has a name, time period, and list of important events. Your task is to find all locations that have a specific event in their history.",
    examples: [
      {
        input: "locations = [\n  { name: 'Rome', period: 'Ancient', events: ['Empire founded', 'Colosseum built'] },\n  { name: 'Paris', period: 'Medieval', events: ['Notre Dame built', 'University founded'] },\n  { name: 'London', period: 'Modern', events: ['Great Fire', 'Industrial Revolution'] }\n],\nevent = 'built'\nOutput: ['Rome', 'Paris']",
        output: "['Rome', 'Paris']",
        explanation: "Find all locations that have 'built' in their history."
      },
      {
        input: "locations = [\n  { name: 'Location1', period: 'Period1', events: ['Event1'] },\n  { name: 'Location2', period: 'Period2', events: ['Event2'] }\n],\nevent = 'Event3'\nOutput: []",
        output: "[]",
        explanation: "No locations have 'Event3' in their history."
      }
    ],
    inputLimits: {
      size: "1 <= locations.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findLocationsByEvent(locations, event) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Rome', period: 'Ancient', events: ['Empire founded', 'Colosseum built'] },
          { name: 'Paris', period: 'Medieval', events: ['Notre Dame built', 'University founded'] },
          { name: 'London', period: 'Modern', events: ['Great Fire', 'Industrial Revolution'] }
        ],
        'built'
      ], 
      output: ['Rome', 'Paris'] 
    },
    { 
      input: [[
        { name: 'Location1', period: 'Period1', events: ['Event1'] },
        { name: 'Location2', period: 'Period2', events: ['Event2'] }
      ],
      'Event3'
    ], 
    output: [] 
    }
  ],
  },
  {
    id: 15,
    title: "Alien Language Decoder",
    difficulty: "Medium",
    description: "You've intercepted a message from an alien civilization. Their language uses a unique number system where each digit represents a different concept. The aliens have provided a mapping of their digits to Earth concepts. Your task is to decode their messages. Given a number in alien format and a mapping object, convert it to Earth concepts.",
    examples: [
      {
        input: "alienNumber = '123', mapping = { '1': 'water', '2': 'fire', '3': 'earth' }\nOutput: ['water', 'fire', 'earth']",
        output: "['water', 'fire', 'earth']",
        explanation: "Convert alien number to Earth concepts."
      },
      {
        input: "alienNumber = '456', mapping = { '4': 'water', '5': 'fire', '6': 'earth' }\nOutput: ['water', 'fire', 'earth']",
        output: "['water', 'fire', 'earth']",
        explanation: "Convert alien number to Earth concepts."
      }
    ],
    inputLimits: {
      size: "1 <= alienNumber.length <= 1000",
      numberOfInputs: "Mapping is an object",
      note: "Mapping keys are strings, values are strings."
    },
    status: "unattempted",
    starterCode: `function decodeAlienMessage(alienNumber, mapping) {
  // Write your code here
}`,
    testCases: [
      { 
        input: ['123', { '1': 'water', '2': 'fire', '3': 'earth' }], 
        output: ['water', 'fire', 'earth'] 
      },
      { 
        input: ['456', { '4': 'water', '5': 'fire', '6': 'earth' }], 
        output: ['water', 'fire', 'earth'] 
      }
    ]
  },
  {
    id: 16,
    title: "Magical Potion Mixer",
    difficulty: "Medium",
    description: "You're a wizard's apprentice tasked with creating magical potions. Each potion requires specific ingredients in exact quantities. Your task is to write a function that determines if you can make a potion given your available ingredients and the recipe. The recipe is an object where keys are ingredient names and values are required quantities. Your ingredients are also an object with the same structure.",
    examples: [
      {
        input: "recipe = { 'dragon scale': 2, 'unicorn hair': 1, 'phoenix feather': 3 },\n       ingredients = { 'dragon scale': 3, 'unicorn hair': 1, 'phoenix feather': 2 }\nOutput: false",
        output: "false",
        explanation: "Not enough ingredients to make the potion."
      },
      {
        input: "recipe = { 'dragon scale': 2, 'unicorn hair': 1, 'phoenix feather': 3 },\n       ingredients = { 'dragon scale': 3, 'unicorn hair': 1, 'phoenix feather': 3 }\nOutput: true",
        output: "true",
        explanation: "Enough ingredients to make the potion."
      }
    ],
    inputLimits: {
      size: "1 <= recipe.length <= 1000",
      numberOfInputs: "1 <= ingredients.length <= 1000",
      note: "Quantities are integers."
    },
    status: "unattempted",
    starterCode: `function canMakePotion(recipe, ingredients) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          { 'dragon scale': 2, 'unicorn hair': 1, 'phoenix feather': 3 },
          { 'dragon scale': 3, 'unicorn hair': 1, 'phoenix feather': 2 }
        ], 
        output: false 
      },
      { 
        input: [
          { 'dragon scale': 2, 'unicorn hair': 1, 'phoenix feather': 3 },
          { 'dragon scale': 3, 'unicorn hair': 1, 'phoenix feather': 3 }
        ], 
        output: true 
      }
    ]
  },
  {
    id: 17,
    title: "Pirate's Treasure Map",
    difficulty: "Hard",
    description: "You've found a pirate's treasure map! The map is represented as a 2D grid where 'X' marks the spot, '~' represents water, and '.' represents land. You can only move on land, and you need to find the shortest path to the treasure. Return the number of steps needed to reach the treasure, or -1 if it's impossible to reach.",
    examples: [
      {
        input: "map = [\n  ['.', '.', '.', '~'],\n  ['.', '~', '.', '.'],\n  ['.', '.', 'X', '~']\n]\nOutput: 4",
        output: "4",
        explanation: "Shortest path from 'E' to 'X' is 4 steps."
      },
      {
        input: "map = [\n  ['.', '.', '.', '~'],\n  ['.', '~', '.', '.'],\n  ['.', '.', '.', '~']\n]\nOutput: -1",
        output: "-1",
        explanation: "No path to the treasure."
      }
    ],
    inputLimits: {
      size: "1 <= map.length, map[0].length <= 100",
      numberOfInputs: "Grid cells are 'X', '.', or '~'",
      note: "'X' is the treasure, '.' is open, '~' is water."
    },
    status: "unattempted",
    starterCode: `function findTreasure(map) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          ['.', '.', '.', '~'],
          ['.', '~', '.', '.'],
          ['.', '.', 'X', '~']
        ]], 
        output: 4 
      },
      { 
        input: [[
          ['.', '.', '.', '~'],
          ['.', '~', '.', '.'],
          ['.', '.', '.', '~']
        ]], 
        output: -1 
      }
    ]
  },
  {
    id: 18,
    title: "Robot Factory Manager",
    difficulty: "Medium",
    description: "You're managing a robot factory where robots are assembled in stages. Each robot must go through a series of stations in order. Given an array of robots and their current stations, determine if the assembly line is running efficiently. A line is efficient if no robot is waiting behind a robot that's at an earlier stage.",
    examples: [
      {
        input: "robots = [\n  { id: 1, station: 3 },\n  { id: 2, station: 1 },\n  { id: 3, station: 2 }\n]\nOutput: false",
        output: "false",
        explanation: "The assembly line is not efficient."
      },
      {
        input: "robots = [\n  { id: 1, station: 1 },\n  { id: 2, station: 2 },\n  { id: 3, station: 3 }\n]\nOutput: true",
        output: "true",
        explanation: "The assembly line is efficient."
      }
    ],
    inputLimits: {
      size: "1 <= robots.length <= 1000",
      numberOfInputs: "Each robot has an id and a station",
      note: "Stations are integers."
    },
    status: "unattempted",
    starterCode: `function isAssemblyLineEfficient(robots) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { id: 1, station: 3 },
          { id: 2, station: 1 },
          { id: 3, station: 2 }
        ]], 
        output: false 
      },
      { 
        input: [[
          { id: 1, station: 1 },
          { id: 2, station: 2 },
          { id: 3, station: 3 }
        ]], 
        output: true 
      }
    ]
  },
  {
    id: 105,
    title: "Space Station Power Grid",
    difficulty: "Hard",
    description: "You're managing the power grid of a space station. The station has multiple power sources and consumers. Each power source has a maximum output, and each consumer has a required input. Your task is to determine if the power grid can satisfy all consumers' needs. The grid is represented as a directed graph where edges represent power lines with maximum capacity.",
    examples: [
      {
        input: "grid = {\n  'solar': { 'habitat': 100, 'lab': 50 },\n  'nuclear': { 'habitat': 50, 'lab': 100 },\n  'habitat': { 'required': 120 },\n  'lab': { 'required': 130 }\n}\nOutput: true",
        output: "true",
        explanation: "The power grid can satisfy all consumers' needs."
      },
      {
        input: "grid = {\n  'solar': { 'habitat': 50, 'lab': 50 },\n  'nuclear': { 'habitat': 50, 'lab': 50 },\n  'habitat': { 'required': 120 },\n  'lab': { 'required': 130 }\n}\nOutput: false",
        output: "false",
        explanation: "The power grid cannot satisfy all consumers' needs."
      }
    ],
    inputLimits: {
      size: "1 <= grid.length <= 1000",
      numberOfInputs: "Grid cells are 'solar', 'nuclear', 'habitat', or 'lab'",
      note: "Values are integers."
    },
    status: "unattempted",
    starterCode: `function canPowerGridMeetDemand(grid) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [{
          'solar': { 'habitat': 100, 'lab': 50 },
          'nuclear': { 'habitat': 50, 'lab': 100 },
          'habitat': { 'required': 120 },
          'lab': { 'required': 130 }
        }], 
        output: true 
      },
      { 
        input: [{
          'solar': { 'habitat': 50, 'lab': 50 },
          'nuclear': { 'habitat': 50, 'lab': 50 },
          'habitat': { 'required': 120 },
          'lab': { 'required': 130 }
        }], 
        output: false 
      }
    ]
  },
  {
    id: 20,
    title: "Magical Garden Planner",
    difficulty: "Medium",
    description: "You're designing a magical garden where plants have special relationships. Some plants grow better next to certain other plants, while some combinations are harmful. Given a grid of plant positions and their relationships, determine if the garden layout is optimal. A layout is optimal if no plant is next to a plant it's incompatible with.",
    examples: [
      {
        input: "garden = [\n  ['rose', 'lily', 'rose'],\n  ['lily', 'rose', 'lily']\n],\nincompatible = { 'rose': ['lily'], 'lily': ['rose'] }\nOutput: false",
        output: "false",
        explanation: "The garden layout is not optimal."
      },
      {
        input: "garden = [\n  ['rose', 'tulip', 'rose'],\n  ['tulip', 'rose', 'tulip']\n],\nincompatible = { 'rose': ['lily'], 'lily': ['rose'] }\nOutput: true",
        output: "true",
        explanation: "The garden layout is optimal."
      }
    ],
    inputLimits: {
      size: "1 <= garden.length, garden[0].length <= 100",
      numberOfInputs: "Grid cells are 'rose', 'lily', 'tulip', or '.'",
      note: "'.' is empty, 'rose' and 'lily' are plants, 'tulip' is a plant incompatible with 'rose' and 'lily'."
    },
    status: "unattempted",
    starterCode: `function isGardenLayoutOptimal(garden, incompatible) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [['rose', 'lily', 'rose'], ['lily', 'rose', 'lily']],
          { 'rose': ['lily'], 'lily': ['rose'] }
        ], 
        output: false 
      },
      { 
        input: [
          [['rose', 'tulip', 'rose'], ['tulip', 'rose', 'tulip']],
          { 'rose': ['lily'], 'lily': ['rose'] }
        ], 
        output: true 
      }
    ]
  },
  {
    id: 21,
    title: "Time-Traveling Detective",
    difficulty: "Hard",
    description: "You're a detective who can travel through time to solve crimes. You have a list of events from different time periods, and you need to determine if there's a consistent timeline that explains all the events. Each event has a timestamp and a description. A timeline is consistent if no event contradicts another event's description.",
    examples: [
      {
        input: "events = [\n  { time: 1000, description: 'King was alive' },\n  { time: 1001, description: 'King was murdered' },\n  { time: 1002, description: 'King was alive' }\n]\nOutput: false",
        output: "false",
        explanation: "The timeline is not consistent."
      },
      {
        input: "events = [\n  { time: 1000, description: 'King was alive' },\n  { time: 1001, description: 'King was murdered' },\n  { time: 1002, description: 'Kingdom in mourning' }\n]\nOutput: true",
        output: "true",
        explanation: "The timeline is consistent."
      }
    ],
    inputLimits: {
      size: "1 <= events.length <= 1000",
      numberOfInputs: "Each event has a timestamp and a description",
      note: "Timestamps are integers."
    },
    status: "unattempted",
    starterCode: `function isTimelineConsistent(events) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { time: 1000, description: 'King was alive' },
          { time: 1001, description: 'King was murdered' },
          { time: 1002, description: 'King was alive' }
        ]], 
        output: false 
      },
      { 
        input: [[
          { time: 1000, description: 'King was alive' },
          { time: 1001, description: 'King was murdered' },
          { time: 1002, description: 'Kingdom in mourning' }
        ]], 
        output: true 
      }
    ]
  },
  {
    id: 22,
    title: "Alien DNA Sequencer",
    difficulty: "Medium",
    description: "You're analyzing alien DNA sequences. Each sequence is a string of nucleotides (A, T, G, C) with special properties. Your task is to find the longest common subsequence that appears in all given sequences. The subsequence must maintain the order of nucleotides but doesn't need to be consecutive.",
    examples: [
      {
        input: "sequences = ['ATGC', 'AGTC', 'ATTC']\nOutput: 'ATC'",
        output: "'ATC'",
        explanation: "Find the longest common subsequence in all given sequences."
      },
      {
        input: "sequences = ['AAA', 'AAA', 'AAA']\nOutput: 'AAA'",
        output: "'AAA'",
        explanation: "All sequences are identical."
      }
    ],
    inputLimits: {
      size: "1 <= sequences.length <= 1000",
      numberOfInputs: "Each sequence is a string",
      note: "Sequences are case-sensitive."
    },
    status: "unattempted",
    starterCode: `function findLongestCommonSubsequence(sequences) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [['ATGC', 'AGTC', 'ATTC']], 
        output: 'ATC' 
      },
      { 
        input: [['AAA', 'AAA', 'AAA']], 
        output: 'AAA' 
      }
    ]
  },
  {
    id: 24,
    title: "Wizard's Spell Book",
    difficulty: "Hard",
    description: "You're a wizard creating a new spell. Each spell is a combination of magical words that must follow specific rules: 1) Words must be in alphabetical order, 2) No word can be used twice, 3) The total power of the spell (sum of word lengths) must be exactly equal to the target power. Given a list of magical words and a target power, find all valid spell combinations.",
    examples: [
      {
        input: "words = ['fire', 'ice', 'wind', 'earth'], targetPower = 8\nOutput: [['fire', 'wind'], ['ice', 'wind']]",
        output: "[['fire', 'wind'], ['ice', 'wind']]",
        explanation: "Find all valid combinations of words that sum to the target power."
      },
      {
        input: "words = ['light', 'dark', 'void'], targetPower = 4\nOutput: [['light']]",
        output: "[['light']]",
        explanation: "Only one word fits the target power."
      }
    ],
    inputLimits: {
      size: "1 <= words.length <= 1000",
      numberOfInputs: "1 <= targetPower <= 100",
      note: "Words are strings, target power is an integer."
    },
    status: "unattempted",
    starterCode: `function findValidSpells(words, targetPower) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [['fire', 'ice', 'wind', 'earth'], 8], 
        output: [['fire', 'wind'], ['ice', 'wind']] 
      },
      { 
        input: [['light', 'dark', 'void'], 4], 
        output: [['light']] 
      }
    ]
  },
  {
    id: 25,
    title: "Space Colony Architect",
    difficulty: "Hard",
    description: "You're designing a space colony on Mars. The colony is represented as a grid where each cell can be a living quarter, farm, or power plant. Each building type has specific requirements: living quarters need power and food, farms need water, and power plants need to be connected to living quarters. Determine if a given colony layout is valid.",
    examples: [
      {
        input: "colony = [\n  ['L', 'P', 'F'],\n  ['F', 'L', 'P'],\n  ['P', 'F', 'L']\n]\nOutput: true",
        output: "true",
        explanation: "The colony layout is valid."
      },
      {
        input: "colony = [\n  ['L', 'L', 'L'],\n  ['P', 'P', 'P'],\n  ['F', 'F', 'F']\n]\nOutput: false",
        output: "false",
        explanation: "The colony layout is not valid."
      }
    ],
    inputLimits: {
      size: "1 <= colony.length, colony[0].length <= 100",
      numberOfInputs: "Grid cells are 'L', 'P', 'F', or '.'",
      note: "'L' is living quarter, 'P' is power plant, 'F' is farm, '.' is empty."
    },
    status: "unattempted",
    starterCode: `function isColonyLayoutValid(colony) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          ['L', 'P', 'F'],
          ['F', 'L', 'P'],
          ['P', 'F', 'L']
        ]], 
        output: true 
      },
      { 
        input: [[
          ['L', 'L', 'L'],
          ['P', 'P', 'P'],
          ['F', 'F', 'F']
        ]], 
        output: false 
      }
    ]
  },
  {
    id: 26,
    title: "Time-Traveling Chess Master",
    difficulty: "Medium",
    description: "You're a chess master who can travel through time to study famous games. Given a sequence of chess moves from different time periods, determine if the moves form a valid game. A game is valid if each move follows chess rules and the pieces are in the correct positions.",
    examples: [
      {
        input: "moves = [\n  { from: 'e2', to: 'e4', time: 1850 },\n  { from: 'e7', to: 'e5', time: 1850 },\n  { from: 'g1', to: 'f3', time: 1850 }\n]\nOutput: true",
        output: "true",
        explanation: "The chess moves form a valid game."
      },
      {
        input: "moves = [\n  { from: 'e2', to: 'e4', time: 1850 },\n  { from: 'e2', to: 'e4', time: 1850 }\n]\nOutput: false",
        output: "false",
        explanation: "The chess moves do not form a valid game."
      }
    ],
    inputLimits: {
      size: "1 <= moves.length <= 1000",
      numberOfInputs: "Each move has a from, to, and time",
      note: "Times are integers."
    },
    status: "unattempted",
    starterCode: `function isValidChessGame(moves) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { from: 'e2', to: 'e4', time: 1850 },
          { from: 'e7', to: 'e5', time: 1850 },
          { from: 'g1', to: 'f3', time: 1850 }
        ]], 
        output: true 
      },
      { 
        input: [[
          { from: 'e2', to: 'e4', time: 1850 },
          { from: 'e2', to: 'e4', time: 1850 }
        ]], 
        output: false 
      }
    ]
  },
  {
    id: 27,
    title: "Dragon's Treasure Network",
    difficulty: "Hard",
    description: "You're a dragon managing a network of treasure caves. Each cave contains different types of treasures, and they're connected by tunnels. Your task is to find the most valuable path through the caves, where the value of a path is the sum of unique treasures collected. You can't collect the same type of treasure twice.",
    examples: [
      {
        input: "caves = {\n  'A': { treasures: ['gold', 'ruby'], connections: ['B', 'C'] },\n  'B': { treasures: ['diamond', 'gold'], connections: ['A', 'D'] },\n  'C': { treasures: ['emerald', 'ruby'], connections: ['A', 'D'] },\n  'D': { treasures: ['sapphire'], connections: ['B', 'C'] }\n}\nOutput: ['A', 'B', 'D']",
        output: "['A', 'B', 'D']",
        explanation: "Find the most valuable path through the caves."
      },
      {
        input: "caves = {\n  'A': { treasures: ['gold'], connections: ['B'] },\n  'B': { treasures: ['gold'], connections: ['A'] }\n}\nOutput: ['A']",
        output: "['A']",
        explanation: "Only one cave is connected to 'A'."
      }
    ],
    inputLimits: {
      size: "1 <= caves.length <= 1000",
      numberOfInputs: "Each cave has treasures and connections",
      note: "Treasures are strings, connections are strings."
    },
    status: "unattempted",
    starterCode: `function findMostValuablePath(caves) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [{
          'A': { treasures: ['gold', 'ruby'], connections: ['B', 'C'] },
          'B': { treasures: ['diamond', 'gold'], connections: ['A', 'D'] },
          'C': { treasures: ['emerald', 'ruby'], connections: ['A', 'D'] },
          'D': { treasures: ['sapphire'], connections: ['B', 'C'] }
        }], 
        output: ['A', 'B', 'D'] 
      },
      { 
        input: [{
          'A': { treasures: ['gold'], connections: ['B'] },
          'B': { treasures: ['gold'], connections: ['A'] }
        }], 
        output: ['A'] 
      }
    ]
  },
  {
    id: 28,
    title: "Time-Traveling Library",
    difficulty: "Hard",
    description: "You're managing a library where books can travel through time. Each book has a list of time periods it has visited. Your task is to find the longest continuous time period where all given books were present in the library. A time period is represented as [start, end] where start and end are years.",
    examples: [
      {
        input: "books = [\n  { title: 'Book1', periods: [[1000, 1200], [1300, 1500]] },\n  { title: 'Book2', periods: [[1100, 1400]] },\n  { title: 'Book3', periods: [[1150, 1250], [1350, 1450]] }\n]\nOutput: [1150, 1200]",
        output: "[1150, 1200]",
        explanation: "Find the longest continuous time period where all books were present."
      },
      {
        input: "books = [\n  { title: 'Book1', periods: [[1000, 1100]] },\n  { title: 'Book2', periods: [[1200, 1300]] }\n]\nOutput: null",
        output: "null",
        explanation: "No books were present in the library during the given time period."
      }
    ],
    inputLimits: {
      size: "1 <= books.length <= 1000",
      numberOfInputs: "Each book has time periods",
      note: "Periods are pairs of years."
    },
    status: "unattempted",
    starterCode: `function findCommonTimePeriod(books) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { title: 'Book1', periods: [[1000, 1200], [1300, 1500]] },
          { title: 'Book2', periods: [[1100, 1400]] },
          { title: 'Book3', periods: [[1150, 1250], [1350, 1450]] }
        ]], 
        output: [1150, 1200] 
      },
      { 
        input: [[
          { title: 'Book1', periods: [[1000, 1100]] },
          { title: 'Book2', periods: [[1200, 1300]] }
        ]], 
        output: null 
      }
    ]
  },
  {
    id: 29,
    title: "Magical Potion Shop",
    difficulty: "Medium",
    description: "You're running a magical potion shop. Each potion has a list of ingredients and a brewing time. Customers can order multiple potions, and you need to determine the optimal brewing schedule to minimize the total waiting time. You can only brew one potion at a time.",
    examples: [
      {
        input: "orders = [\n  { potion: 'Healing', time: 30, deadline: 100 },\n  { potion: 'Strength', time: 20, deadline: 50 },\n  { potion: 'Invisibility', time: 40, deadline: 120 }\n]\nOutput: ['Strength', 'Healing', 'Invisibility']",
        output: "['Strength', 'Healing', 'Invisibility']",
        explanation: "Schedule potions to minimize total waiting time."
      },
      {
        input: "orders = [\n  { potion: 'A', time: 10, deadline: 20 },\n  { potion: 'B', time: 20, deadline: 15 }\n]\nOutput: ['B', 'A']",
        output: "['B', 'A']",
        explanation: "Schedule potions to minimize total waiting time."
      }
    ],
    inputLimits: {
      size: "1 <= orders.length <= 1000",
      numberOfInputs: "Each order has a potion name, brewing time, and deadline",
      note: "Times and deadlines are integers."
    },
    status: "unattempted",
    starterCode: `function schedulePotionBrewing(orders) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { potion: 'Healing', time: 30, deadline: 100 },
          { potion: 'Strength', time: 20, deadline: 50 },
          { potion: 'Invisibility', time: 40, deadline: 120 }
        ]], 
        output: ['Strength', 'Healing', 'Invisibility'] 
      },
      { 
        input: [[
          { potion: 'A', time: 10, deadline: 20 },
          { potion: 'B', time: 20, deadline: 15 }
        ]], 
        output: ['B', 'A'] 
      }
    ]
  },
  {
    id: 30,
    title: "Space Station Defense",
    difficulty: "Hard",
    description: "You're defending a space station from incoming asteroids. The station is represented as a grid where each cell can be a defense tower, shield generator, or empty space. Defense towers can protect adjacent cells, and shield generators can protect all cells in their row and column. Determine if the current defense setup can protect the entire station.",
    examples: [
      {
        input: "station = [\n  ['T', 'S', 'E'],\n  ['E', 'T', 'E'],\n  ['E', 'E', 'T']\n]\nOutput: true",
        output: "true",
        explanation: "The defense setup can protect the entire station."
      },
      {
        input: "station = [\n  ['T', 'E', 'E'],\n  ['E', 'E', 'E'],\n  ['E', 'E', 'T']\n]\nOutput: false",
        output: "false",
        explanation: "The defense setup cannot protect the entire station."
      }
    ],
    inputLimits: {
      size: "1 <= station.length, station[0].length <= 100",
      numberOfInputs: "Grid cells are 'T', 'S', 'E', or '.'",
      note: "'T' is defense tower, 'S' is shield generator, 'E' is empty space, '.' is unoccupied."
    },
    status: "unattempted",
    starterCode: `function isStationProtected(station) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          ['T', 'S', 'E'],
          ['E', 'T', 'E'],
          ['E', 'E', 'T']
        ]], 
        output: true 
      },
      { 
        input: [[
          ['T', 'E', 'E'],
          ['E', 'E', 'E'],
          ['E', 'E', 'T']
        ]], 
        output: false 
      }
    ]
  },
  {
    id: 31,
    title: "Time-Traveling Tournament",
    difficulty: "Medium",
    description: "You're organizing a chess tournament where players can travel through time to play against historical champions. Each match has a time period and a result. Your task is to find the longest winning streak for each player, considering that matches can be played in any order due to time travel.",
    examples: [
      {
        input: "matches = [\n  { player: 'Alice', opponent: 'Capablanca', year: 1921, result: 'win' },\n  { player: 'Alice', opponent: 'Fischer', year: 1972, result: 'loss' },\n  { player: 'Alice', opponent: 'Kasparov', year: 1985, result: 'win' }\n]\nOutput: 2",
        output: "2",
        explanation: "Alice has a winning streak of 2 matches."
      },
      {
        input: "matches = [\n  { player: 'Bob', opponent: 'Morphy', year: 1858, result: 'loss' },\n  { player: 'Bob', opponent: 'Steinitz', year: 1886, result: 'loss' }\n]\nOutput: 0",
        output: "0",
        explanation: "Bob has no winning streak."
      }
    ],
    inputLimits: {
      size: "1 <= matches.length <= 1000",
      numberOfInputs: "Each match has a player, opponent, year, and result",
      note: "Years are integers, results are 'win' or 'loss'."
    },
    status: "unattempted",
    starterCode: `function findLongestWinningStreak(matches) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { player: 'Alice', opponent: 'Capablanca', year: 1921, result: 'win' },
          { player: 'Alice', opponent: 'Fischer', year: 1972, result: 'loss' },
          { player: 'Alice', opponent: 'Kasparov', year: 1985, result: 'win' }
        ]], 
        output: 2 
      },
      { 
        input: [[
          { player: 'Bob', opponent: 'Morphy', year: 1858, result: 'loss' },
          { player: 'Bob', opponent: 'Steinitz', year: 1886, result: 'loss' }
        ]], 
        output: 0 
      }
    ]
  },
  {
    id: 32,
    title: "Magical Garden Evolution",
    difficulty: "Hard",
    description: "You're studying a magical garden where plants evolve based on their neighbors. Each plant has a type and can evolve into a new type based on the types of its adjacent plants. Given the current state of the garden and evolution rules, determine the state of the garden after a specified number of generations.",
    examples: [
      {
        input: "garden = [\n  ['A', 'B', 'C'],\n  ['B', 'A', 'B'],\n  ['C', 'B', 'A']\n],\nrules = { 'A': { 'B': 'C', 'C': 'A' },\n          'B': { 'A': 'B', 'C': 'A' },\n          'C': { 'A': 'B', 'B': 'C' } },\ngenerations = 2\nOutput: [\n  ['B', 'C', 'A'],\n  ['C', 'B', 'C'],\n  ['A', 'C', 'B']\n]",
        output: "[['B', 'C', 'A'], ['C', 'B', 'C'], ['A', 'C', 'B']]",
        explanation: "Evolve the garden for 2 generations."
      },
      {
        input: "garden = [\n  ['A', 'B'],\n  ['B', 'A']\n],\nrules = { 'A': { 'B': 'A' }, 'B': { 'A': 'B' } },\ngenerations = 1\nOutput: [\n  ['A', 'A'],\n  ['B', 'B']\n]",
        output: "[['A', 'A'], ['B', 'B']]",
        explanation: "Evolve the garden for 1 generation."
      }
    ],
    inputLimits: {
      size: "1 <= garden.length, garden[0].length <= 100",
      numberOfInputs: "Grid cells are 'A', 'B', 'C', or '.'",
      note: "'A', 'B', 'C' are plant types, '.' is empty."
    },
    status: "unattempted",
    starterCode: `function evolveGarden(garden, rules, generations) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            ['A', 'B', 'C'],
            ['B', 'A', 'B'],
            ['C', 'B', 'A']
          ],
          {
            'A': { 'B': 'C', 'C': 'A' },
            'B': { 'A': 'B', 'C': 'A' },
            'C': { 'A': 'B', 'B': 'C' }
          },
          2
        ], 
        output: [
          ['B', 'C', 'A'],
          ['C', 'B', 'C'],
          ['A', 'C', 'B']
        ] 
      },
      { 
        input: [
          [['A', 'B'], ['B', 'A']],
          { 'A': { 'B': 'A' }, 'B': { 'A': 'B' } },
          1
        ], 
        output: [
          ['A', 'A'],
          ['B', 'B']
        ] 
      }
    ]
  },
  {
    id: 33,
    title: "Time-Traveling Library Catalog",
    difficulty: "Medium",
    description: "You're managing a library where books can exist in multiple time periods. Each book has a list of time periods it exists in, and each time period has a list of books present. Your task is to find all books that exist in a given time period and sort them by their publication date.",
    examples: [
      {
        input: "books = [\n  { title: 'Book1', periods: [1000, 1200, 1400], published: 1000 },\n  { title: 'Book2', periods: [1100, 1300], published: 1100 },\n  { title: 'Book3', periods: [1000, 1300], published: 1000 }\n],\ntimePeriod = 1100\nOutput: ['Book2', 'Book1', 'Book3']",
        output: "['Book2', 'Book1', 'Book3']",
        explanation: "Find all books that exist in the given time period and sort them by publication date."
      },
      {
        input: "books = [\n  { title: 'Book1', periods: [1000], published: 1000 },\n  { title: 'Book2', periods: [2000], published: 2000 }\n],\ntimePeriod = 1500\nOutput: []",
        output: "[]",
        explanation: "No books exist in the given time period."
      }
    ],
    inputLimits: {
      size: "1 <= books.length <= 1000",
      numberOfInputs: "Each book has time periods",
      note: "Periods are pairs of years."
    },
    status: "unattempted",
    starterCode: `function findBooksInTimePeriod(books, timePeriod) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { title: 'Book1', periods: [1000, 1200, 1400], published: 1000 },
            { title: 'Book2', periods: [1100, 1300], published: 1100 },
            { title: 'Book3', periods: [1000, 1300], published: 1000 }
          ],
          1100
        ], 
        output: ['Book2', 'Book1', 'Book3'] 
      },
      { 
        input: [
          [
            { title: 'Book1', periods: [1000], published: 1000 },
            { title: 'Book2', periods: [2000], published: 2000 }
          ],
          1500
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 34,
    title: "Dragon's Treasure Finder",
    difficulty: "Easy",
    description: "You're a dragon looking for specific treasures in your hoard. Each treasure has a name, type, and value. Your task is to find all treasures of a given type that are worth more than a minimum value.",
    examples: [
      {
        input: "treasures = [\n  { name: 'Ruby', type: 'gem', value: 100 },\n  { name: 'Diamond', type: 'gem', value: 200 },\n  { name: 'Gold', type: 'metal', value: 50 }\n],\ntype = 'gem',\nminValue = 150\nOutput: ['Diamond']",
        output: "['Diamond']",
        explanation: "Find all treasures of type 'gem' that are worth more than 150."
      },
      {
        input: "treasures = [\n  { name: 'Treasure1', type: 'type1', value: 100 },\n  { name: 'Treasure2', type: 'type1', value: 200 }\n],\ntype = 'type1',\nminValue = 50\nOutput: ['Treasure1', 'Treasure2']",
        output: "['Treasure1', 'Treasure2']",
        explanation: "Find all treasures of type 'type1' that are worth more than 50."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, type, and value",
      note: "Values are integers."
    },
    status: "unattempted",
    starterCode: `function findValuableTreasures(treasures, type, minValue) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Ruby', type: 'gem', value: 100 },
            { name: 'Diamond', type: 'gem', value: 200 },
            { name: 'Gold', type: 'metal', value: 50 }
          ],
          'gem',
          150
        ], 
        output: ['Diamond'] 
      },
      { 
        input: [
          [
            { name: 'Treasure1', type: 'type1', value: 100 },
            { name: 'Treasure2', type: 'type1', value: 200 }
          ],
          'type1',
          50
        ], 
        output: ['Treasure1', 'Treasure2'] 
      }
    ]
  },
  {
    id: 35,
    title: "Wizard's Spell Organizer",
    difficulty: "Easy",
    description: "You're organizing a wizard's spell book. Each spell has a name, level, and list of required ingredients. Your task is to group spells by level and sort them alphabetically within each level.",
    examples: [
      {
        input: "spells = [\n  { name: 'Fireball', level: 1, ingredients: ['dragon scale'] },\n  { name: 'Ice Spike', level: 2, ingredients: ['frost crystal'] },\n  { name: 'Lightning Bolt', level: 1, ingredients: ['storm cloud'] }\n]\nOutput: { 1: ['Fireball', 'Lightning Bolt'], 2: ['Ice Spike'] }",
        output: "{ 1: ['Fireball', 'Lightning Bolt'], 2: ['Ice Spike'] }",
        explanation: "Group spells by level and sort alphabetically."
      },
      {
        input: "spells = [\n  { name: 'Spell1', level: 1, ingredients: [] },\n  { name: 'Spell2', level: 1, ingredients: [] }\n]\nOutput: { 1: ['Spell1', 'Spell2'] }",
        output: "{ 1: ['Spell1', 'Spell2'] }",
        explanation: "Group spells by level and sort alphabetically."
      }
    ],
    inputLimits: {
      size: "1 <= spells.length <= 1000",
      numberOfInputs: "1 <= levels <= 100",
      note: "Spells are objects with name, level, and ingredients."
    },
    status: "unattempted",
    starterCode: `function organizeSpells(spells) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Fireball', level: 1, ingredients: ['dragon scale'] },
          { name: 'Ice Spike', level: 2, ingredients: ['frost crystal'] },
          { name: 'Lightning Bolt', level: 1, ingredients: ['storm cloud'] }
        ]], 
        output: { 1: ['Fireball', 'Lightning Bolt'], 2: ['Ice Spike'] } 
      },
      { 
        input: [[
          { name: 'Spell1', level: 1, ingredients: [] },
          { name: 'Spell2', level: 1, ingredients: [] }
        ]], 
        output: { 1: ['Spell1', 'Spell2'] } 
      }
    ]
  },
  {
    id: 36,
    title: "Magical Garden Planner",
    difficulty: "Easy",
    description: "You're planning a magical garden. Each plant has a name, type, and list of compatible plants. Your task is to find all plants that are compatible with a given plant.",
    examples: [
      {
        input: "plants = [\n  { name: 'Rose', type: 'flower', compatible: ['Lily', 'Tulip'] },\n  { name: 'Lily', type: 'flower', compatible: ['Rose', 'Daisy'] },\n  { name: 'Tulip', type: 'flower', compatible: ['Rose', 'Daisy'] }\n],\nplantName = 'Rose'\nOutput: ['Lily', 'Tulip']",
        output: "['Lily', 'Tulip']",
        explanation: "Find all plants compatible with 'Rose'."
      },
      {
        input: "plants = [\n  { name: 'Plant1', type: 'type1', compatible: ['Plant2'] },\n  { name: 'Plant2', type: 'type1', compatible: ['Plant1'] }\n],\nplantName = 'Plant1'\nOutput: ['Plant2']",
        output: "['Plant2']",
        explanation: "Find all plants compatible with 'Plant1'."
      }
    ],
    inputLimits: {
      size: "1 <= plants.length <= 1000",
      numberOfInputs: "Each plant has a name and compatible plants",
      note: "Compatible plants are strings."
    },
    status: "unattempted",
    starterCode: `function findCompatiblePlants(plants, plantName) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rose', type: 'flower', compatible: ['Lily', 'Tulip'] },
            { name: 'Lily', type: 'flower', compatible: ['Rose', 'Daisy'] },
            { name: 'Tulip', type: 'flower', compatible: ['Rose', 'Daisy'] }
          ],
          'Rose'
        ], 
        output: ['Lily', 'Tulip'] 
      },
      { 
        input: [
          [
            { name: 'Plant1', type: 'type1', compatible: ['Plant2'] },
            { name: 'Plant2', type: 'type1', compatible: ['Plant1'] }
          ],
          'Plant1'
        ], 
        output: ['Plant2'] 
      }
    ]
  },
  {
    id: 37,
    title: "Dragon's Treasure Tracker",
    difficulty: "Easy",
    description: "You're tracking a dragon's treasure collection. Each treasure has a name, acquisition date, and value. Your task is to find the total value of treasures acquired in a given time period.",
    examples: [
      {
        input: "treasures = [\n  { name: 'Ruby', date: '2024-03-01', value: 100 },\n  { name: 'Diamond', date: '2024-03-02', value: 200 },\n  { name: 'Gold', date: '2024-03-03', value: 50 }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-02'\nOutput: 300",
        output: "300",
        explanation: "Find the total value of treasures acquired between the given dates."
      },
      {
        input: "treasures = [\n  { name: 'Treasure1', date: '2024-03-01', value: 100 },\n  { name: 'Treasure2', date: '2024-03-02', value: 200 }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'\nOutput: 0",
        output: "0",
        explanation: "No treasures acquired between the given dates."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, date, and value",
      note: "Dates are in 'YYYY-MM-DD' format."
    },
    status: "unattempted",
    starterCode: `function calculateTreasureValue(treasures, startDate, endDate) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Ruby', date: '2024-03-01', value: 100 },
            { name: 'Diamond', date: '2024-03-02', value: 200 },
            { name: 'Gold', date: '2024-03-03', value: 50 }
          ],
          '2024-03-01',
          '2024-03-02'
        ], 
        output: 300 
      },
      { 
        input: [
          [
            { name: 'Treasure1', date: '2024-03-01', value: 100 },
            { name: 'Treasure2', date: '2024-03-02', value: 200 }
          ],
          '2024-03-03',
          '2024-03-04'
        ], 
        output: 0 
      }
    ]
  },
  {
    id: 38,
    title: "Wizard's Potion Shop",
    difficulty: "Easy",
    description: "You're running a potion shop. Each potion has a name, price, and list of ingredients. Your task is to find all potions that can be made with the available ingredients and sort them by price.",
    examples: [
      {
        input: "potions = [\n  { name: 'Healing', price: 100, ingredients: ['dragon scale', 'unicorn hair'] },\n  { name: 'Strength', price: 150, ingredients: ['phoenix feather'] },\n  { name: 'Invisibility', price: 200, ingredients: ['dragon scale', 'phoenix feather'] }\n],\navailable = ['dragon scale', 'unicorn hair', 'phoenix feather']\nOutput: ['Healing', 'Strength', 'Invisibility']",
        output: "['Healing', 'Strength', 'Invisibility']",
        explanation: "Find all potions that can be made with the available ingredients and sort them by price."
      },
      {
        input: "potions = [\n  { name: 'Potion1', price: 100, ingredients: ['ingredient1'] },\n  { name: 'Potion2', price: 200, ingredients: ['ingredient2'] }\n],\navailable = ['ingredient1']\nOutput: ['Potion1']",
        output: "['Potion1']",
        explanation: "Only 'Potion1' can be made with the available ingredient."
      }
    ],
    inputLimits: {
      size: "1 <= potions.length <= 1000",
      numberOfInputs: "Each potion has a name, price, and ingredients",
      note: "Prices and ingredients are integers."
    },
    status: "unattempted",
    starterCode: `function findAvailablePotions(potions, available) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Healing', price: 100, ingredients: ['dragon scale', 'unicorn hair'] },
            { name: 'Strength', price: 150, ingredients: ['phoenix feather'] },
            { name: 'Invisibility', price: 200, ingredients: ['dragon scale', 'phoenix feather'] }
          ],
          ['dragon scale', 'unicorn hair', 'phoenix feather']
        ], 
        output: ['Healing', 'Strength', 'Invisibility'] 
      },
      { 
        input: [
          [
            { name: 'Potion1', price: 100, ingredients: ['ingredient1'] },
            { name: 'Potion2', price: 200, ingredients: ['ingredient2'] }
          ],
          ['ingredient1']
        ], 
        output: ['Potion1'] 
      }
    ]
  },
  {
    id: 39,
    title: "Time Traveler's Log",
    difficulty: "Easy",
    description: "You're keeping a log of your time travel adventures. Each entry has a date, location, and list of events. Your task is to find all locations visited in a given time period.",
    examples: [
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },\n  { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },\n  { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-03'\nOutput: ['London', 'Rome', 'Paris']",
        output: "['London', 'Rome', 'Paris']",
        explanation: "Find all locations visited between the given dates."
      },
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Location1', events: ['Event1'] },\n  { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'\nOutput: []",
        output: "[]",
        explanation: "No locations visited between the given dates."
      }
    ],
    inputLimits: {
      size: "1 <= log.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findVisitedLocations(log, startDate, endDate) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },
            { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },
            { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }
          ],
          '2024-03-01',
          '2024-03-03'
        ], 
        output: ['London', 'Rome', 'Paris'] 
      },
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Location1', events: ['Event1'] },
            { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }
          ],
          '2024-03-03',
          '2024-03-04'
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 40,
    title: "Time Traveler's Guide",
    difficulty: "Easy",
    description: "You're creating a guide for time travelers. Each location has a name, time period, and list of important events. Your task is to find all locations that have a specific event in their history.",
    examples: [
      {
        input: "locations = [\n  { name: 'Rome', period: 'Ancient', events: ['Empire founded', 'Colosseum built'] },\n  { name: 'Paris', period: 'Medieval', events: ['Notre Dame built', 'University founded'] },\n  { name: 'London', period: 'Modern', events: ['Great Fire', 'Industrial Revolution'] }\n],\nevent = 'built'\nOutput: ['Rome', 'Paris']",
        output: "['Rome', 'Paris']",
        explanation: "Find all locations that have 'built' in their history."
      },
      {
        input: "locations = [\n  { name: 'Location1', period: 'Period1', events: ['Event1'] },\n  { name: 'Location2', period: 'Period2', events: ['Event2'] }\n],\nevent = 'Event3'\nOutput: []",
        output: "[]",
        explanation: "No locations have 'Event3' in their history."
      }
    ],
    inputLimits: {
      size: "1 <= locations.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findLocationsByEvent(locations, event) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rome', period: 'Ancient', events: ['Empire founded', 'Colosseum built'] },
            { name: 'Paris', period: 'Medieval', events: ['Notre Dame built', 'University founded'] },
            { name: 'London', period: 'Modern', events: ['Great Fire', 'Industrial Revolution'] }
          ],
          'built'
        ], 
        output: ['Rome', 'Paris'] 
      },
      { 
        input: [
          [
            { name: 'Location1', period: 'Period1', events: ['Event1'] },
            { name: 'Location2', period: 'Period2', events: ['Event2'] }
          ],
          'Event3'
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 41,
    title: "Alien Message Decoder",
    difficulty: "Hard",
    description: "You've received a message from an alien civilization that uses a unique encoding system. The message is a sequence of numbers where each number represents a word in their language. However, the encoding is ambiguous - the same sequence could represent different messages. Your task is to find all possible valid messages based on a given dictionary.",
    examples: [
      {
        input: "message = '1234', dictionary = { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }\nOutput: ['a b c e', 'a w e', 'l c e']",
        output: "['a b c e', 'a w e', 'l c e']",
        explanation: "Decode the alien message using the given dictionary."
      },
      {
        input: "message = '5678', dictionary = { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }\nOutput: ['f g h i']",
        output: "['f g h i']",
        explanation: "Decode the alien message using the given dictionary."
      }
    ],
    inputLimits: {
      size: "1 <= message.length <= 1000",
      numberOfInputs: "Mapping is an object",
      note: "Mapping keys are strings, values are strings."
    },
    status: "unattempted",
    starterCode: `function decodeAlienMessage(message, dictionary) {
  // Write your code here
}`,
    testCases: [
      { 
        input: ['1234', { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }], 
        output: ['a b c e', 'a w e', 'l c e'] 
      },
      { 
        input: ['5678', { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }], 
        output: ['f g h i'] 
      }
    ]
  },
  {
    id: 43,
    title: "Dragon's Treasure Catalog",
    difficulty: "Easy",
    description: "You're cataloging a dragon's treasure collection. Each treasure has a name, type, and value. Your task is to find the most valuable treasure of each type.",
    examples: [
      {
        input: "treasures = [\n  { name: 'Ruby', type: 'gem', value: 100 },\n  { name: 'Diamond', type: 'gem', value: 200 },\n  { name: 'Gold', type: 'metal', value: 50 },\n  { name: 'Silver', type: 'metal', value: 30 }\n]\nOutput: { gem: 'Diamond', metal: 'Gold' }",
        output: "{ gem: 'Diamond', metal: 'Gold' }",
        explanation: "Find the most valuable treasures of each type."
      },
      {
        input: "treasures = [\n  { name: 'Treasure1', type: 'type1', value: 100 },\n  { name: 'Treasure2', type: 'type1', value: 200 }\n]\nOutput: { type1: 'Treasure2' }",
        output: "{ type1: 'Treasure2' }",
        explanation: "Find the most valuable treasure of type 'type1'."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, type, and value",
      note: "Values are integers."
    },
    status: "unattempted",
    starterCode: `function findMostValuableTreasures(treasures) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Ruby', type: 'gem', value: 100 },
          { name: 'Diamond', type: 'gem', value: 200 },
          { name: 'Gold', type: 'metal', value: 50 },
          { name: 'Silver', type: 'metal', value: 30 }
        ]], 
        output: { gem: 'Diamond', metal: 'Gold' } 
      },
      { 
        input: [[
          { name: 'Treasure1', type: 'type1', value: 100 },
          { name: 'Treasure2', type: 'type1', value: 200 }
        ]], 
        output: { type1: 'Treasure2' } 
      }
    ]
  },
  {
    id: 44,
    title: "Magical Garden III",
    difficulty: "Easy",
    description: "You're tending a magical garden. Each plant has a name, type, and a list of magical properties. Your task is to find all plants of a given type and also count the number of unique magical properties in the garden.",
    examples: [
      {
        input: "plants = [ { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] }, { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] } ]; type = 'Flower'; Output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        output: "{ plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        explanation: "Two flowers found, with 3 unique properties: healing, beauty, luck."
      },
      {
        input: "plants = [ { name: 'Oak', type: 'Tree', properties: ['strength'] } ]; type = 'Tree'; Output: { plants: ['Oak'], uniqueProperties: 1 }",
        output: "{ plants: ['Oak'], uniqueProperties: 1 }",
        explanation: "One tree found, with 1 unique property."
      }
    ],
    inputLimits: {
      size: "1 <= plants.length <= 1000",
      numberOfInputs: "Each plant has a name, type, and list of properties",
      note: "Properties are strings."
    },
    status: "unattempted",
    starterCode: `function findPlantsAndUniqueProperties(plants, type) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] },
            { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] }
          ],
          'Flower'
        ], 
        output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 } 
      },
      { 
        input: [
          [
            { name: 'Oak', type: 'Tree', properties: ['strength'] }
          ],
          'Tree'
        ], 
        output: { plants: ['Oak'], uniqueProperties: 1 } 
      }
    ]
  },
  {
    id: 45,
    title: "Magical Garden Inventory",
    difficulty: "Easy",
    description: "You're taking inventory of a magical garden. Each plant has a name, type, and quantity. Your task is to find the total quantity of each type of plant.",
    examples: [
      {
        input: "plants = [\n  { name: 'Rose', type: 'flower', quantity: 5 },\n  { name: 'Lily', type: 'flower', quantity: 3 },\n  { name: 'Oak', type: 'tree', quantity: 2 },\n  { name: 'Pine', type: 'tree', quantity: 4 }\n]\nOutput: { flower: 8, tree: 6 }",
        output: "{ flower: 8, tree: 6 }",
        explanation: "Find the total quantity of each type of plant."
      },
      {
        input: "plants = [\n  { name: 'Plant1', type: 'type1', quantity: 1 },\n  { name: 'Plant2', type: 'type1', quantity: 2 }\n]\nOutput: { type1: 3 }",
        output: "{ type1: 3 }",
        explanation: "Find the total quantity of plants of type 'type1'."
      }
    ],
    inputLimits: {
      size: "1 <= plants.length <= 1000",
      numberOfInputs: "Each plant has a name, type, and quantity",
      note: "Quantities are integers."
    },
    status: "unattempted",
    starterCode: `function countPlantsByType(plants) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Rose', type: 'flower', quantity: 5 },
          { name: 'Lily', type: 'flower', quantity: 3 },
          { name: 'Oak', type: 'tree', quantity: 2 },
          { name: 'Pine', type: 'tree', quantity: 4 }
        ]], 
        output: { flower: 8, tree: 6 } 
      },
      { 
        input: [[
          { name: 'Plant1', type: 'type1', quantity: 1 },
          { name: 'Plant2', type: 'type1', quantity: 2 }
        ]], 
        output: { type1: 3 } 
      }
    ]
  },
  {
    id: 46,
    title: "Time Traveler's Log",
    difficulty: "Easy",
    description: "You're keeping a log of your time travel adventures. Each entry has a date, location, and list of events. Your task is to find all locations visited in a given time period.",
    examples: [
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },\n  { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },\n  { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-03'\nOutput: ['London', 'Rome', 'Paris']",
        output: "['London', 'Rome', 'Paris']",
        explanation: "Find all locations visited between the given dates."
      },
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Location1', events: ['Event1'] },\n  { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'\nOutput: []",
        output: "[]",
        explanation: "No locations visited between the given dates."
      }
    ],
    inputLimits: {
      size: "1 <= log.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findVisitedLocations(log, startDate, endDate) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },
            { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },
            { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }
          ],
          '2024-03-01',
          '2024-03-03'
        ], 
        output: ['London', 'Rome', 'Paris'] 
      },
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Location1', events: ['Event1'] },
            { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }
          ],
          '2024-03-03',
          '2024-03-04'
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 47,
    title: "Time Traveler's Guide",
    difficulty: "Easy",
    description: "You're creating a guide for time travelers. Each location has a name, time period, and list of important events. Your task is to find all locations that have a specific event in their history.",
    examples: [
      {
        input: "locations = [\n  { name: 'Rome', period: 'Ancient', events: ['Empire founded', 'Colosseum built'] },\n  { name: 'Paris', period: 'Medieval', events: ['Notre Dame built', 'University founded'] },\n  { name: 'London', period: 'Modern', events: ['Great Fire', 'Industrial Revolution'] }\n],\nevent = 'built'\nOutput: ['Rome', 'Paris']",
        output: "['Rome', 'Paris']",
        explanation: "Find all locations that have 'built' in their history."
      },
      {
        input: "locations = [\n  { name: 'Location1', period: 'Period1', events: ['Event1'] },\n  { name: 'Location2', period: 'Period2', events: ['Event2'] }\n],\nevent = 'Event3'\nOutput: []",
        output: "[]",
        explanation: "No locations have 'Event3' in their history."
      }
    ],
    inputLimits: {
      size: "1 <= locations.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findLocationsByEvent(locations, event) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rome', period: 'Ancient', events: ['Empire founded', 'Colosseum built'] },
            { name: 'Paris', period: 'Medieval', events: ['Notre Dame built', 'University founded'] },
            { name: 'London', period: 'Modern', events: ['Great Fire', 'Industrial Revolution'] }
          ],
          'built'
        ], 
        output: ['Rome', 'Paris'] 
      },
      { 
        input: [
          [
            { name: 'Location1', period: 'Period1', events: ['Event1'] },
            { name: 'Location2', period: 'Period2', events: ['Event2'] }
          ],
          'Event3'
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 48,
    title: "Alien Message Decoder",
    difficulty: "Hard",
    description: "You've received a message from an alien civilization that uses a unique encoding system. The message is a sequence of numbers where each number represents a word in their language. However, the encoding is ambiguous - the same sequence could represent different messages. Your task is to find all possible valid messages based on a given dictionary.",
    examples: [
      {
        input: "message = '1234', dictionary = { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }\nOutput: ['a b c e', 'a w e', 'l c e']",
        output: "['a b c e', 'a w e', 'l c e']",
        explanation: "Decode the alien message using the given dictionary."
      },
      {
        input: "message = '5678', dictionary = { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }\nOutput: ['f g h i']",
        output: "['f g h i']",
        explanation: "Decode the alien message using the given dictionary."
      }
    ],
    inputLimits: {
      size: "1 <= message.length <= 1000",
      numberOfInputs: "Mapping is an object",
      note: "Mapping keys are strings, values are strings."
    },
    status: "unattempted",
    starterCode: `function decodeAlienMessage(message, dictionary) {
  // Write your code here
}`,
    testCases: [
      { 
        input: ['1234', { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }], 
        output: ['a b c e', 'a w e', 'l c e'] 
      },
      { 
        input: ['5678', { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }], 
        output: ['f g h i'] 
      }
    ]
  },
  {
    id: 49,
    title: "Magical Pet Sitter II",
    difficulty: "Easy",
    description: "You're a pet sitter for magical creatures, but now some pets have magical allergies and require special care. Your task is to create a schedule of care activities for each pet, ensuring that no two pets requiring the same care are scheduled at the same time, and that pets with allergies are not scheduled with their allergens.",
    examples: [
      {
        input: "pets = [ { name: 'Fluffy', type: 'Dragon', care: ['feed', 'exercise'], allergies: ['groom'] }, { name: 'Sparky', type: 'Phoenix', care: ['feed', 'groom'], allergies: [] }, { name: 'Whiskers', type: 'Cat', care: ['feed'], allergies: ['exercise'] } ]",
        output: "{ 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] }",
        explanation: "Fluffy cannot be scheduled for 'groom', Whiskers cannot be scheduled for 'exercise'."
      }
      // ... keep or modify more examples as needed ...
    ],
    inputLimits: {
      size: "1 <= pets.length <= 1000",
      numberOfInputs: "Each pet has a name, type, care array, and allergies",
      note: "Care instructions are strings, allergies are strings."
    },
    status: "unattempted",
    starterCode: `function createPetSchedule(pets) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[
          { name: 'Fluffy', type: 'Dragon', care: ['feed', 'exercise'], allergies: ['groom'] },
          { name: 'Sparky', type: 'Phoenix', care: ['feed', 'groom'], allergies: [] },
          { name: 'Whiskers', type: 'Cat', care: ['feed'], allergies: ['exercise'] }
        ]], 
        output: { 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] } 
      }
    ]
  },
  {
    id: 50,
    title: "Magical Garden II",
    difficulty: "Easy",
    description: "You're tending a magical garden. Each plant has a name, type, and a list of magical properties. Your task is to find all plants of a given type and also count the number of unique magical properties in the garden.",
    examples: [
      {
        input: "plants = [ { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] }, { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] } ]; type = 'Flower'; Output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        output: "{ plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        explanation: "Two flowers found, with 3 unique properties: healing, beauty, luck."
      },
      {
        input: "plants = [ { name: 'Oak', type: 'Tree', properties: ['strength'] } ]; type = 'Tree'; Output: { plants: ['Oak'], uniqueProperties: 1 }",
        output: "{ plants: ['Oak'], uniqueProperties: 1 }",
        explanation: "One tree found, with 1 unique property."
      }
    ],
    inputLimits: {
      size: "1 <= plants.length <= 1000",
      numberOfInputs: "Each plant has a name, type, and list of properties",
      note: "Properties are strings."
    },
    status: "unattempted",
    starterCode: `function findPlantsAndUniqueProperties(plants, type) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] },
            { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] }
          ],
          'Flower'
        ], 
        output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 } 
      },
      { 
        input: [
          [
            { name: 'Oak', type: 'Tree', properties: ['strength'] }
          ],
          'Tree'
        ], 
        output: { plants: ['Oak'], uniqueProperties: 1 } 
      }
    ]
  },
  {
    id: 51,
    title: "Wizard's Spell Book II",
    difficulty: "Easy",
    description: "You're organizing a wizard's spell book. Each spell has a name, level, and list of required ingredients. Your task is to find all spells that can be cast with the available ingredients and also count the number of unique ingredients required for all castable spells.",
    examples: [
      {
        input: "spells = [ { name: 'Fireball', level: 1, ingredients: ['dragon scale', 'phoenix feather'] }, { name: 'Ice Spike', level: 2, ingredients: ['frost crystal'] }, { name: 'Lightning Bolt', level: 1, ingredients: ['storm cloud', 'copper'] } ], available = ['dragon scale', 'phoenix feather', 'frost crystal']; Output: { castable: ['Fireball', 'Ice Spike'], uniqueIngredients: 3 }",
        output: "{ castable: ['Fireball', 'Ice Spike'], uniqueIngredients: 3 }",
        explanation: "Two spells can be cast, requiring 3 unique ingredients: dragon scale, phoenix feather, frost crystal."
      },
      {
        input: "spells = [ { name: 'Spell1', level: 1, ingredients: ['ingredient1'] }, { name: 'Spell2', level: 1, ingredients: ['ingredient2'] } ], available = ['ingredient1']; Output: { castable: ['Spell1'], uniqueIngredients: 1 }",
        output: "{ castable: ['Spell1'], uniqueIngredients: 1 }",
        explanation: "Only 'Spell1' can be cast, requiring 1 unique ingredient."
      }
    ],
    inputLimits: {
      size: "1 <= spells.length <= 1000",
      numberOfInputs: "1 <= levels <= 100",
      note: "Spells are objects with name, level, and ingredients."
    },
    status: "unattempted",
    starterCode: `function findCastableSpellsAndUniqueIngredients(spells, available) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Fireball', level: 1, ingredients: ['dragon scale', 'phoenix feather'] },
            { name: 'Ice Spike', level: 2, ingredients: ['frost crystal'] },
            { name: 'Lightning Bolt', level: 1, ingredients: ['storm cloud', 'copper'] }
          ],
          ['dragon scale', 'phoenix feather', 'frost crystal']
        ], 
        output: { castable: ['Fireball', 'Ice Spike'], uniqueIngredients: 3 } 
      },
      { 
        input: [
          [
            { name: 'Spell1', level: 1, ingredients: ['ingredient1'] },
            { name: 'Spell2', level: 1, ingredients: ['ingredient2'] }
          ],
          ['ingredient1']
        ], 
        output: { castable: ['Spell1'], uniqueIngredients: 1 } 
      }
    ]
  },
  {
    id: 53,
    title: "Potion Mixing Simulator",
    difficulty: "Easy",
    description: "Given a list of potions and their ingredients, return all potions that can be made with the available ingredients.",
    examples: [
      {
        input: "potions = [{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}], available = ['herb', 'water']; Output: ['Healing']",
        output: "['Healing']",
        explanation: "Find all potions that can be made with the available ingredients."
      },
      {
        input: "potions = [{name: 'Stamina', ingredients: ['root']}, {name: 'Speed', ingredients: ['herb']}], available = ['herb']; Output: ['Speed']",
        output: "['Speed']",
        explanation: "Find all potions that can be made with the available ingredients."
      }
    ],
    status: "unattempted",
    starterCode: `function availablePotions(potions, available) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}], ['herb', 'water']], output: ['Healing'] },
      { input: [[{name: 'Stamina', ingredients: ['root']}, {name: 'Speed', ingredients: ['herb']}], ['herb']], output: ['Speed'] }
    ]
  },
  {
    id: 54,
    title: "Alien Number Translator",
    difficulty: "Hard",
    description: "Translate a number from an alien base system to decimal. The alien base and digit mapping are provided.",
    examples: [
      {
        input: "alienNum = 'abc', base = 4, mapping = {a: 0, b: 1, c: 2}; Output: 6",
        output: "6",
        explanation: "Convert alien number to decimal."
      },
      {
        input: "alienNum = 'ba', base = 2, mapping = {a: 0, b: 1}; Output: 2",
        output: "2",
        explanation: "Convert alien number to decimal."
      }
    ],
    status: "unattempted",
    starterCode: `function alienToDecimal(alienNum, base, mapping) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['abc', 4, {a: 0, b: 1, c: 2}], output: 6 },
      { input: ['ba', 2, {a: 0, b: 1}], output: 2 }
    ]
  },
  {
    id: 55,
    title: "Wizard Duel Simulator",
    difficulty: "Medium",
    description: "Simulate a duel between two wizards. Each has spells with power and cooldown. Determine the winner after a sequence of turns.",
    examples: [
      {
        input: "wizards = [{name: 'A', spells: [{power: 5, cooldown: 2}]}, {name: 'B', spells: [{power: 4, cooldown: 1}]}], turns = 3; Output: 'A'",
        output: "'A'",
        explanation: "Wizard A wins the duel."
      },
      {
        input: "wizards = [{name: 'A', spells: [{power: 2, cooldown: 1}]}, {name: 'B', spells: [{power: 3, cooldown: 1}]}], turns = 2; Output: 'B'",
        output: "'B'",
        explanation: "Wizard B wins the duel."
      }
    ],
    status: "unattempted",
    starterCode: `function wizardDuel(wizards, turns) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'A', spells: [{power: 5, cooldown: 2}]}, {name: 'B', spells: [{power: 4, cooldown: 1}]}], 3], output: 'A' },
      { input: [[{name: 'A', spells: [{power: 2, cooldown: 1}]}, {name: 'B', spells: [{power: 3, cooldown: 1}]}], 2], output: 'B' }
    ]
  },
  {
    id: 106,
    title: "Robot Maze Runner",
    difficulty: "Medium",
    description: "A robot is placed in a maze represented by a 2D grid. The robot can move up, down, left, or right but cannot pass through walls. Write a function to find the minimum number of moves to reach the exit from the start position.",
    examples: [
      {
        input: "maze = [['S', '.', '.', '#'], ['.', '#', '.', '.'], ['.', '.', '.', 'E']]",
        output: "5",
        explanation: "The robot needs 5 moves to reach the exit: right, right, down, right, down."
      },
      {
        input: "maze = [['S', '#', '.'], ['.', '.', 'E']]",
        output: "3",
        explanation: "The robot needs 3 moves to reach the exit: down, right, right."
      }
    ],
    inputLimits: {
      size: "1 <= maze.length, maze[0].length <= 100",
      numberOfInputs: "Grid cells are 'S' (start), 'E' (exit), '.' (path), or '#' (wall)",
      note: "The robot can only move in four directions: up, down, left, right."
    },
    status: "unattempted",
    starterCode: `function findMinimumMoves(maze) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [[['S', '.', '.', '#'], ['.', '#', '.', '.'], ['.', '.', '.', 'E']]], 
        output: 5 
      },
      { 
        input: [[['S', '#', '.'], ['.', '.', 'E']]], 
        output: 3 
      }
    ]
  },
  {
    id: 58,
    title: "Dragon's Hoard Organizer",
    difficulty: "Easy",
    description: "You're a dragon with a hoard of treasures. Each treasure has a type, value, and rarity. For each type, maximize the total value of treasures you can collect without exceeding a type-specific weight limit (weight = value * rarity). Return the total value for each type.",
    examples: [
      {
        input: "treasures = [ {type: 'gem', value: 100, rarity: 2}, {type: 'gold', value: 200, rarity: 1}, {type: 'gem', value: 50, rarity: 3} ]; limits = { gem: 300, gold: 250 }; Output: { gem: 100, gold: 200 }",
        output: "{ gem: 100, gold: 200 }",
        explanation: "For gems, only the first fits (100*2=200, 50*3=150 is too much for the remaining limit). For gold, 200*1=200 fits under 250."
      },
      {
        input: "treasures = [ {type: 'silver', value: 30, rarity: 1} ]; limits = { silver: 40 }; Output: { silver: 30 }",
        output: "{ silver: 30 }",
        explanation: "Only one type of treasure, and it fits the limit."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, type, value, and rarity; limits is an object by type",
      note: "Values and rarities are integers."
    },
    status: "unattempted",
    starterCode: `function organizeHoardByType(treasures, limits) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{type: 'gem', value: 100, rarity: 2}, {type: 'gold', value: 200, rarity: 1}, {type: 'gem', value: 50, rarity: 3}], {gem: 300, gold: 250}], output: {gem: 100, gold: 200} },
      { input: [[{type: 'silver', value: 30, rarity: 1}], {silver: 40}], output: {silver: 30} }
    ]
  },
  {
    id: 59,
    title: "Wizard's Spell Combiner",
    difficulty: "Medium",
    description: "Given a list of spells, each with a power and a list of required ingredients, return all possible combinations of spells that can be cast with the available ingredients and a maximum total power.",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 5, ingredients: ['a']}, {name: 'Ice', power: 3, ingredients: ['b']}], available = ['a', 'b'], maxPower = 8; Output: [['Fire', 'Ice']]",
        output: "[['Fire', 'Ice']]",
        explanation: "Find all combinations of spells that can be cast with the available ingredients and a maximum total power."
      },
      {
        input: "spells = [{name: 'Fire', power: 5, ingredients: ['a']}, {name: 'Ice', power: 3, ingredients: ['b']}], available = ['a'], maxPower = 5; Output: [['Fire']]",
        output: "[['Fire']]",
        explanation: "Only 'Fire' can be cast with the available ingredient."
      }
    ],
    status: "unattempted",
    starterCode: `function combineSpells(spells, available, maxPower) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', power: 5, ingredients: ['a']}, {name: 'Ice', power: 3, ingredients: ['b']}], ['a', 'b'], 8], output: [['Fire', 'Ice']] },
      { input: [[{name: 'Fire', power: 5, ingredients: ['a']}, {name: 'Ice', power: 3, ingredients: ['b']}], ['a'], 5], output: [['Fire']] }
    ]
  },
  {
    id: 60,
    title: "Alien Message Splitter",
    difficulty: "Hard",
    description: "Given a string representing an alien message and a dictionary of valid words, return all possible ways to split the message into valid words.",
    examples: [
      {
        input: "message = 'applepie', dictionary = ['apple', 'pie', 'app', 'lepie']; Output: [['apple', 'pie'], ['app', 'lepie']]",
        output: "[['apple', 'pie'], ['app', 'lepie']]",
        explanation: "Split the message into valid words using the given dictionary."
      },
      {
        input: "message = 'banana', dictionary = ['ban', 'ana', 'banana']; Output: [['ban', 'ana'], ['banana']]",
        output: "[['ban', 'ana'], ['banana']]",
        explanation: "Split the message into valid words using the given dictionary."
      }
    ],
    status: "unattempted",
    starterCode: `function splitAlienMessage(message, dictionary) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['applepie', ['apple', 'pie', 'app', 'lepie']], output: [['apple', 'pie'], ['app', 'lepie']] },
      { input: ['banana', ['ban', 'ana', 'banana']], output: [['ban', 'ana'], ['banana']] }
    ]
  },
  {
    id: 61,
    title: "Enchanted Forest Map",
    difficulty: "Easy",
    description: "You are given a map of an enchanted forest as a 2D grid. Each cell can be a tree, a path, or a magical portal. Write a function to count the number of magical portals in the forest.",
    examples: [
      {
        input: "forest = [['T', 'P', 'T'], ['P', 'T', 'P'], ['T', 'T', 'P']]; Output: 4",
        output: "4",
        explanation: "Count the number of magical portals in the forest."
      },
      {
        input: "forest = [['T', 'T'], ['T', 'T']]; Output: 0",
        output: "0",
        explanation: "No magical portals in the forest."
      }
    ],
    status: "unattempted",
    starterCode: `function countPortals(forest) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[['T', 'P', 'T'], ['P', 'T', 'P'], ['T', 'T', 'P']]], output: 4 },
      { input: [[['T', 'T'], ['T', 'T']]], output: 0 }
    ]
  },
  {
    id: 62,
    title: "Wizard's Spell Chain",
    difficulty: "Medium",
    description: "Given a list of spells, each with a power and a list of compatible spells, find the longest chain of compatible spells.",
    examples: [
      {
        input: "spells = [{name: 'Fire', compatible: ['Ice']}, {name: 'Ice', compatible: ['Wind']}, {name: 'Wind', compatible: []}]; Output: 3",
        output: "3",
        explanation: "Find the longest chain of compatible spells."
      },
      {
        input: "spells = [{name: 'A', compatible: []}]; Output: 1",
        output: "1",
        explanation: "Only one spell is available."
      }
    ],
    status: "unattempted",
    starterCode: `function longestSpellChain(spells) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', compatible: ['Ice']}, {name: 'Ice', compatible: ['Wind']}, {name: 'Wind', compatible: []}]], output: 3 },
      { input: [[{name: 'A', compatible: []}]], output: 1 }
    ]
  },
  {
    id: 63,
    title: "Alien Signal Decoder",
    difficulty: "Hard",
    description: "You receive a signal from an alien civilization as a string of 0s and 1s. Each sequence of 1s represents a word, and 0s are separators. Write a function to return the lengths of all words in the signal.",
    examples: [
      {
        input: "signal = '110011100'; Output: [2,3]",
        output: "[2,3]",
        explanation: "Decode the alien signal to find the lengths of all words."
      },
      {
        input: "signal = '10001'; Output: [1,1]",
        output: "[1,1]",
        explanation: "Decode the alien signal to find the lengths of all words."
      }
    ],
    status: "unattempted",
    starterCode: `function decodeSignal(signal) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['110011100'], output: [2,3] },
      { input: ['10001'], output: [1,1] }
    ]
  },
  {
    id: 64,
    title: "Potion Ingredient Matcher",
    difficulty: "Easy",
    description: "Given a list of potions and a list of available ingredients, return all potions that can be made with the available ingredients.",
    examples: [
      {
        input: "potions = [{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}], available = ['herb', 'water']; Output: ['Healing']",
        output: "['Healing']",
        explanation: "Find all potions that can be made with the available ingredients."
      },
      {
        input: "potions = [{name: 'Stamina', ingredients: ['root']}, {name: 'Speed', ingredients: ['herb']}], available = ['herb']; Output: ['Speed']",
        output: "['Speed']",
        explanation: "Find all potions that can be made with the available ingredient."
      }
    ],
    status: "unattempted",
    starterCode: `function availablePotions(potions, available) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}], ['herb', 'water']], output: ['Healing'] },
      { input: [[{name: 'Stamina', ingredients: ['root']}, {name: 'Speed', ingredients: ['herb']}], ['herb']], output: ['Speed'] }
    ]
  },
  {
    id: 65,
    title: "Dragon's Path Finder",
    difficulty: "Medium",
    description: "A dragon wants to visit all caves in a network. Each cave is connected by tunnels. Write a function to find the shortest path that visits all caves at least once.",
    examples: [
      {
        input: "caves = {A: ['B'], B: ['A', 'C'], C: ['B']}; Output: 2",
        output: "2",
        explanation: "Find the shortest path that visits all caves at least once."
      },
      {
        input: "caves = {A: ['B'], B: ['A']}; Output: 1",
        output: "1",
        explanation: "Only one cave is connected to 'A'."
      }
    ],
    status: "unattempted",
    starterCode: `function shortestDragonPath(caves) {\n  // Write your code here\n}`,
    testCases: [
      { input: [{A: ['B'], B: ['A', 'C'], C: ['B']}], output: 2 },
      { input: [{A: ['B'], B: ['A']}], output: 1 }
    ]
  },
  {
    id: 66,
    title: "Wizard's Potion Sorter",
    difficulty: "Easy",
    description: "Given a list of potions, each with a name and a potency, return the potions sorted by potency in descending order.",
    examples: [
      {
        input: "potions = [{name: 'Healing', potency: 10}, {name: 'Mana', potency: 15}]; Output: ['Mana', 'Healing']",
        output: "['Mana', 'Healing']",
        explanation: "Sort potions by potency in descending order."
      },
      {
        input: "potions = [{name: 'Stamina', potency: 5}]; Output: ['Stamina']",
        output: "['Stamina']",
        explanation: "Only one potion is available."
      }
    ],
    status: "unattempted",
    starterCode: `function sortPotionsByPotency(potions) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', potency: 10}, {name: 'Mana', potency: 15}]], output: ['Mana', 'Healing'] },
      { input: [[{name: 'Stamina', potency: 5}]], output: ['Stamina'] }
    ]
  },
  {
    id: 67,
    title: "Alien Language Translator",
    difficulty: "Medium",
    description: "Given a sentence in an alien language and a dictionary mapping alien words to English, translate the sentence to English.",
    examples: [
      {
        input: "sentence = 'blip blop', dictionary = {blip: 'hello', blop: 'world'}; Output: 'hello world'",
        output: "'hello world'",
        explanation: "Translate the alien sentence to English using the given dictionary."
      },
      {
        input: "sentence = 'blip', dictionary = {blip: 'hi'}; Output: 'hi'",
        output: "'hi'",
        explanation: "Translate the alien sentence to English using the given dictionary."
      }
    ],
    status: "unattempted",
    starterCode: `function translateAlien(sentence, dictionary) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['blip blop', {blip: 'hello', blop: 'world'}], output: 'hello world' },
      { input: ['blip', {blip: 'hi'}], output: 'hi' }
    ]
  },
  {
    id: 69,
    title: "Dragon's Flight Planner",
    difficulty: "Medium",
    description: "A dragon wants to visit several castles. Each castle is at a different coordinate. Write a function to find the shortest route that visits all castles and returns to the start.",
    examples: [
      {
        input: "castles = [[0,0],[1,2],[2,1]]; Output: 4.83",
        output: "4.83",
        explanation: "Find the shortest route that visits all castles and returns to the start."
      },
      {
        input: "castles = [[0,0],[1,1]]; Output: 2.83",
        output: "2.83",
        explanation: "Find the shortest route that visits two castles and returns to the start."
      }
    ],
    status: "unattempted",
    starterCode: `function shortestFlightRoute(castles) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[[0,0],[1,2],[2,1]]], output: 4.83 },
      { input: [[[0,0],[1,1]]], output: 2.83 }
    ]
  },
  {
    id: 70,
    title: "Wizard's Spell Power Calculator",
    difficulty: "Easy",
    description: "Given a list of spells, each with a power value, return the total power of all spells.",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 5}, {name: 'Ice', power: 3}]; Output: 8",
        output: "8",
        explanation: "Find the total power of all spells."
      },
      {
        input: "spells = [{name: 'Wind', power: 7}]; Output: 7",
        output: "7",
        explanation: "Only one spell is available."
      }
    ],
    status: "unattempted",
    starterCode: `function totalSpellPower(spells) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', power: 5}, {name: 'Ice', power: 3}]], output: 8 },
      { input: [[{name: 'Wind', power: 7}]], output: 7 }
    ]
  },
  {
    id: 71,
    title: "Magical Creature Counter",
    difficulty: "Easy",
    description: "Given a list of magical creatures, each with a type, return the count of each type.",
    examples: [
      {
        input: "creatures = [{type: 'unicorn'}, {type: 'dragon'}, {type: 'unicorn'}]; Output: { unicorn: 2, dragon: 1 }",
        output: "{ unicorn: 2, dragon: 1 }",
        explanation: "Count the number of each type of magical creature."
      },
      {
        input: "creatures = [{type: 'phoenix'}]; Output: { phoenix: 1 }",
        output: "{ phoenix: 1 }",
        explanation: "Only one type of magical creature is available."
      }
    ],
    status: "unattempted",
    starterCode: `function countCreatures(creatures) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{type: 'unicorn'}, {type: 'dragon'}, {type: 'unicorn'}]], output: { unicorn: 2, dragon: 1 } },
      { input: [[{type: 'phoenix'}]], output: { phoenix: 1 } }
    ]
  },
  {
    id: 72,
    title: "Wizard's Spell Upgrade",
    difficulty: "Medium",
    description: "Given a list of spells and a list of upgrades, return all spells that can be upgraded and their new power.",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 5}], upgrades = [{name: 'Fire', bonus: 3}]; Output: [{name: 'Fire', power: 8}]",
        output: "[{name: 'Fire', power: 8}]",
        explanation: "Upgrade 'Fire' spell and return the upgraded spell."
      },
      {
        input: "spells = [{name: 'Ice', power: 2}], upgrades = [{name: 'Fire', bonus: 3}]; Output: [{name: 'Ice', power: 2}]",
        output: "[{name: 'Ice', power: 2}]",
        explanation: "No upgrade is applied to 'Ice' spell."
      }
    ],
    status: "unattempted",
    starterCode: `function upgradeSpells(spells, upgrades) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', power: 5}], [{name: 'Fire', bonus: 3}]], output: [{name: 'Fire', power: 8}] },
      { input: [[{name: 'Ice', power: 2}], [{name: 'Fire', bonus: 3}]], output: [{name: 'Ice', power: 2}] }
    ]
  },
  {
    id: 73,
    title: "Alien Artifact Sorter",
    difficulty: "Hard",
    description: "Given a list of alien artifacts, each with a value and a rarity, sort the artifacts by rarity (descending) and then by value (ascending).",
    examples: [
      {
        input: "artifacts = [{value: 10, rarity: 2}, {value: 5, rarity: 3}, {value: 8, rarity: 2}]; Output: [{value: 5, rarity: 3}, {value: 8, rarity: 2}, {value: 10, rarity: 2}]",
        output: "[{value: 5, rarity: 3}, {value: 8, rarity: 2}, {value: 10, rarity: 2}]",
        explanation: "Sort artifacts by rarity (descending) and then by value (ascending)."
      },
      {
        input: "artifacts = [{value: 1, rarity: 1}]; Output: [{value: 1, rarity: 1}]",
        output: "[{value: 1, rarity: 1}]",
        explanation: "Only one artifact is available."
      }
    ],
    status: "unattempted",
    starterCode: `function sortArtifacts(artifacts) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{value: 10, rarity: 2}, {value: 5, rarity: 3}, {value: 8, rarity: 2}]], output: [{value: 5, rarity: 3}, {value: 8, rarity: 2}, {value: 10, rarity: 2}] },
      { input: [[{value: 1, rarity: 1}]], output: [{value: 1, rarity: 1}] }
    ]
  },
  {
    id: 74,
    title: "Potion Ingredient Finder",
    difficulty: "Easy",
    description: "Given a list of potions and a required ingredient, return all potions that contain the ingredient.",
    examples: [
      {
        input: "potions = [{name: 'Healing', ingredients: ['herb']}, {name: 'Mana', ingredients: ['crystal']}], ingredient = 'herb'; Output: ['Healing']",
        output: "['Healing']",
        explanation: "Find all potions that contain the required ingredient."
      },
      {
        input: "potions = [{name: 'Stamina', ingredients: ['root']}], ingredient = 'herb'; Output: []",
        output: "[]",
        explanation: "No potions contain the required ingredient."
      }
    ],
    status: "unattempted",
    starterCode: `function findPotionsWithIngredient(potions, ingredient) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', ingredients: ['herb']}, {name: 'Mana', ingredients: ['crystal']}], 'herb'], output: ['Healing'] },
      { input: [[{name: 'Stamina', ingredients: ['root']}], 'herb'], output: [] }
    ]
  },
  {
    id: 75,
    title: "Dragon's Treasure Value Calculator",
    difficulty: "Medium",
    description: "Given a list of treasures, each with a value and a type, return the total value for each type.",
    examples: [
      {
        input: "treasures = [{type: 'gem', value: 100}, {type: 'gold', value: 200}, {type: 'gem', value: 50}]; Output: { gem: 150, gold: 200 }",
        output: "{ gem: 150, gold: 200 }",
        explanation: "Find the total value for each type of treasure."
      },
      {
        input: "treasures = [{type: 'silver', value: 30}]; Output: { silver: 30 }",
        output: "{ silver: 30 }",
        explanation: "Only one type of treasure is available."
      }
    ],
    status: "unattempted",
    starterCode: `function calculateTreasureValues(treasures) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{type: 'gem', value: 100}, {type: 'gold', value: 200}, {type: 'gem', value: 50}]], output: { gem: 150, gold: 200 } },
      { input: [[{type: 'silver', value: 30}]], output: { silver: 30 } }
    ]
  },
  {
    id: 76,
    title: "Wizard's Spellbook Organizer",
    difficulty: "Easy",
    description: "Given a list of spells, each with a name and a level, return the spells grouped by level.",
    examples: [
      {
        input: "spells = [{name: 'Fire', level: 1}, {name: 'Ice', level: 2}, {name: 'Wind', level: 1}]; Output: { 1: ['Fire', 'Wind'], 2: ['Ice'] }",
        output: "{ 1: ['Fire', 'Wind'], 2: ['Ice'] }",
        explanation: "Group spells by level."
      },
      {
        input: "spells = [{name: 'Stamina', level: 3}]; Output: { 3: ['Stamina'] }",
        output: "{ 3: ['Stamina'] }",
        explanation: "Only one spell is available at level 3."
      }
    ],
    status: "unattempted",
    starterCode: `function groupSpellsByLevel(spells) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', level: 1}, {name: 'Ice', level: 2}, {name: 'Wind', level: 1}]], output: { 1: ['Fire', 'Wind'], 2: ['Ice'] } },
      { input: [[{name: 'Stamina', level: 3}]], output: { 3: ['Stamina'] } }
    ]
  },
  {
    id: 77,
    title: "Alien Language Frequency Analyzer",
    difficulty: "Medium",
    description: "Given a string in an alien language, return the frequency of each character.",
    examples: [
      {
        input: "text = 'aabbc'; Output: { a: 2, b: 2, c: 1 }",
        output: "{ a: 2, b: 2, c: 1 }",
        explanation: "Find the frequency of each character in the alien language."
      },
      {
        input: "text = 'xyz'; Output: { x: 1, y: 1, z: 1 }",
        output: "{ x: 1, y: 1, z: 1 }",
        explanation: "Find the frequency of each character in the alien language."
      }
    ],
    status: "unattempted",
    starterCode: `function analyzeFrequency(text) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['aabbc'], output: { a: 2, b: 2, c: 1 } },
      { input: ['xyz'], output: { x: 1, y: 1, z: 1 } }
    ]
  },
  {
    id: 78,
    title: "Potion Brewing Time Calculator",
    difficulty: "Easy",
    description: "Given a list of potions, each with a brewing time, return the total brewing time for all potions.",
    examples: [
      {
        input: "potions = [{name: 'Healing', time: 10}, {name: 'Mana', time: 15}]; Output: 25",
        output: "25",
        explanation: "Find the total brewing time for all potions."
      },
      {
        input: "potions = [{name: 'Stamina', time: 5}]; Output: 5",
        output: "5",
        explanation: "Only one potion is available."
      }
    ],
    status: "unattempted",
    starterCode: `function totalBrewingTime(potions) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', time: 10}, {name: 'Mana', time: 15}]], output: 25 },
      { input: [[{name: 'Stamina', time: 5}]], output: 5 }
    ]
  },
  {
    id: 79,
    title: "Dragon's Flight Distance Calculator",
    difficulty: "Medium",
    description: "Given a list of coordinates representing a dragon's flight path, return the total distance flown.",
    examples: [
      {
        input: "path = [[0,0],[3,4],[6,8]]; Output: 10",
        output: "10",
        explanation: "Find the total distance flown by the dragon."
      },
      {
        input: "path = [[0,0],[1,1]]; Output: 1.41",
        output: "1.41",
        explanation: "Find the total distance flown by the dragon."
      }
    ],
    status: "unattempted",
    starterCode: `function totalFlightDistance(path) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[[0,0],[3,4],[6,8]]], output: 10 },
      { input: [[[0,0],[1,1]]], output: 1.41 }
    ]
  },
  {
    id: 80,
    title: "Wizard's Spell Effectiveness",
    difficulty: "Hard",
    description: "Given a list of spells, each with a power and a resistance value, return the effectiveness of each spell (power minus resistance).",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 10, resistance: 3}, {name: 'Ice', power: 8, resistance: 2}]; Output: [7, 6]",
        output: "[7, 6]",
        explanation: "Find the effectiveness of each spell."
      },
      {
        input: "spells = [{name: 'Wind', power: 7, resistance: 7}]; Output: [0]",
        output: "[0]",
        explanation: "No spell has a positive effectiveness."
      }
    ],
    status: "unattempted",
    starterCode: `function spellEffectiveness(spells) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', power: 10, resistance: 3}, {name: 'Ice', power: 8, resistance: 2}]], output: [7, 6] },
      { input: [[{name: 'Wind', power: 7, resistance: 7}]], output: [0] }
    ]
  },
  {
    id: 82,
    title: "Wizard's Spell Power Filter",
    difficulty: "Easy",
    description: "Given a list of spells, each with a power value, and a minimum power, return all spells with power greater than or equal to the minimum.",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 5}, {name: 'Ice', power: 3}], minPower = 4; Output: ['Fire']",
        output: "['Fire']",
        explanation: "Find all spells with power greater than or equal to the minimum power."
      },
      {
        input: "spells = [{name: 'Wind', power: 7}], minPower = 8; Output: []",
        output: "[]",
        explanation: "No spells have power greater than or equal to the minimum power."
      }
    ],
    status: "unattempted",
    starterCode: `function filterSpellsByPower(spells, minPower) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', power: 5}, {name: 'Ice', power: 3}], 4], output: ['Fire'] },
      { input: [[{name: 'Wind', power: 7}], 8], output: [] }
    ]
  },
  {
    id: 83,
    title: "Alien Message Reverser",
    difficulty: "Medium",
    description: "Given a string representing an alien message, return the message reversed, but keep the order of words intact.",
    examples: [
      {
        input: "message = 'blip blop blap'; Output: 'palb polb pilb'",
        output: "'palb polb pilb'",
        explanation: "Reverse the alien message while keeping the order of words intact."
      },
      {
        input: "message = 'foo bar'; Output: 'oof rab'",
        output: "'oof rab'",
        explanation: "Reverse the alien message while keeping the order of words intact."
      }
    ],
    status: "unattempted",
    starterCode: `function reverseAlienMessage(message) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['blip blop blap'], output: 'palb polb pilb' },
      { input: ['foo bar'], output: 'oof rab' }
    ]
  },
  {
    id: 84,
    title: "Potion Ingredient Counter",
    difficulty: "Easy",
    description: "Given a list of potions, each with a list of ingredients, return the total count of each ingredient used.",
    examples: [
      {
        input: "potions = [{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}]; Output: { herb: 1, water: 2, crystal: 1 }",
        output: "{ herb: 1, water: 2, crystal: 1 }",
        explanation: "Find the total count of each ingredient used in all potions."
      },
      {
        input: "potions = [{name: 'Stamina', ingredients: ['root']}]; Output: { root: 1 }",
        output: "{ root: 1 }",
        explanation: "Only one ingredient is used in the potions."
      }
    ],
    status: "unattempted",
    starterCode: `function countIngredients(potions) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}]], output: { herb: 1, water: 2, crystal: 1 } },
      { input: [[{name: 'Stamina', ingredients: ['root']}]], output: { root: 1 } }
    ]
  },
  {
    id: 85,
    title: "Dragon's Treasure Path",
    difficulty: "Hard",
    description: "A dragon wants to collect the maximum value of treasures in a grid, moving only right or down. Each cell contains a value. Write a function to return the maximum value that can be collected from the top-left to the bottom-right.",
    examples: [
      {
        input: "grid = [[1,2,3],[4,5,6],[7,8,9]]; Output: 29",
        output: "29",
        explanation: "Find the maximum value that can be collected from the top-left to the bottom-right of the grid."
      },
      {
        input: "grid = [[1,1],[1,1]]; Output: 3",
        output: "3",
        explanation: "Find the maximum value that can be collected from the top-left to the bottom-right of the grid."
      }
    ],
    status: "unattempted",
    starterCode: `function maxTreasurePath(grid) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[[1,2,3],[4,5,6],[7,8,9]]], output: 29 },
      { input: [[[1,1],[1,1]]], output: 3 }
    ]
  },
  {
    id: 86,
    title: "Wizard's Spellbook Merger",
    difficulty: "Medium",
    description: "Given two lists of spells, merge them into one list without duplicates, sorted alphabetically.",
    examples: [
      {
        input: "spells1 = ['Fire', 'Ice'], spells2 = ['Wind', 'Fire']; Output: ['Fire', 'Ice', 'Wind']",
        output: "['Fire', 'Ice', 'Wind']",
        explanation: "Merge the two spell lists without duplicates and sort alphabetically."
      },
      {
        input: "spells1 = ['A'], spells2 = ['B']; Output: ['A', 'B']",
        output: "['A', 'B']",
        explanation: "Merge the two spell lists without duplicates and sort alphabetically."
      }
    ],
    status: "unattempted",
    starterCode: `function mergeSpellbooks(spells1, spells2) {\n  // Write your code here\n}`,
    testCases: [
      { input: [['Fire', 'Ice'], ['Wind', 'Fire']], output: ['Fire', 'Ice', 'Wind'] },
      { input: [['A'], ['B']], output: ['A', 'B'] }
    ]
  },
  {
    id: 87,
    title: "Alien Number System Converter",
    difficulty: "Hard",
    description: "Given a number in an alien number system (as a string) and a mapping to decimal digits, convert it to a decimal number.",
    examples: [
      {
        input: "alienNum = 'abc', mapping = {a: 1, b: 2, c: 3}; Output: 123",
        output: "123",
        explanation: "Convert alien number to decimal."
      },
      {
        input: "alienNum = 'ba', mapping = {a: 0, b: 1}; Output: 10",
        output: "10",
        explanation: "Convert alien number to decimal."
      }
    ],
    status: "unattempted",
    starterCode: `function alienToDecimal(alienNum, mapping) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['abc', {a: 1, b: 2, c: 3}], output: 123 },
      { input: ['ba', {a: 0, b: 1}], output: 10 }
    ]
  },
  {
    id: 88,
    title: "Potion Recipe Finder",
    difficulty: "Easy",
    description: "Given a list of potions and a list of available ingredients, return all potions that can be made with the available ingredients.",
    examples: [
      {
        input: "potions = [{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}], available = ['herb', 'water']; Output: ['Healing']",
        output: "['Healing']",
        explanation: "Find all potions that can be made with the available ingredients."
      },
      {
        input: "potions = [{name: 'Stamina', ingredients: ['root']}, {name: 'Speed', ingredients: ['herb']}], available = ['herb']; Output: ['Speed']",
        output: "['Speed']",
        explanation: "Find all potions that can be made with the available ingredient."
      }
    ],
    status: "unattempted",
    starterCode: `function findAvailablePotions(potions, available) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Healing', ingredients: ['herb', 'water']}, {name: 'Mana', ingredients: ['crystal', 'water']}], ['herb', 'water']], output: ['Healing'] },
      { input: [[{name: 'Stamina', ingredients: ['root']}, {name: 'Speed', ingredients: ['herb']}], ['herb']], output: ['Speed'] }
    ]
  },
  {
    id: 89,
    title: "Dragon's Flight Path Optimizer",
    difficulty: "Medium",
    description: "Given a list of castles and their coordinates, return the shortest path that visits all castles exactly once.",
    examples: [
      {
        input: "castles = [[0,0],[1,2],[2,1]]; Output: 4.83",
        output: "4.83",
        explanation: "Find the shortest path that visits all castles exactly once."
      },
      {
        input: "castles = [[0,0],[1,1]]; Output: 2.83",
        output: "2.83",
        explanation: "Find the shortest path that visits two castles and returns to the start."
      }
    ],
    status: "unattempted",
    starterCode: `function optimizeFlightPath(castles) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[[0,0],[1,2],[2,1]]], output: 4.83 },
      { input: [[[0,0],[1,1]]], output: 2.83 }
    ]
  },
  {
    id: 90,
    title: "Wizard's Spell Power Maximizer",
    difficulty: "Hard",
    description: "Given a list of spells, each with a power and a cooldown, return the maximum total power that can be achieved in a given number of turns.",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 5, cooldown: 2}, {name: 'Ice', power: 3, cooldown: 1}], turns = 3; Output: 8",
        output: "8",
        explanation: "Find the maximum total power that can be achieved in 3 turns."
      },
      {
        input: "spells = [{name: 'Wind', power: 7, cooldown: 1}], turns = 2; Output: 14",
        output: "14",
        explanation: "Find the maximum total power that can be achieved in 2 turns."
      }
    ],
    status: "unattempted",
    starterCode: `function maximizeSpellPower(spells, turns) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{name: 'Fire', power: 5, cooldown: 2}, {name: 'Ice', power: 3, cooldown: 1}], 3], output: 8 },
      { input: [[{name: 'Wind', power: 7, cooldown: 1}], 2], output: 14 }
    ]
  },
  {
    id: 91,
    title: "Enchanted Forest Path Counter",
    difficulty: "Easy",
    description: "Given a 2D grid representing an enchanted forest, count the number of unique paths from the top-left to the bottom-right, moving only right or down.",
    examples: [
      {
        input: "forest = [[0,0,0],[0,0,0],[0,0,0]]",
        output: "6",
        explanation: "There are 6 unique paths in a 3x3 grid."
      },
      {
        input: "forest = [[0,0],[0,0]]",
        output: "2",
        explanation: "There are 2 unique paths in a 2x2 grid."
      }
    ],
    inputLimits: {
      size: "1 <= forest.length, forest[0].length <= 100",
      numberOfInputs: "Grid cells are integers",
      note: "Only right and down moves allowed."
    },
    status: "unattempted",
    starterCode: `function countForestPaths(forest) {
  // Write your code here
}`,
  },
  {
    id: 92,
    title: "Wizard's Spellbook Filter",
    difficulty: "Medium",
    description: "Given a list of spells and a filter function, return all spells that pass the filter.",
    examples: [
      {
        input: "spells = [{name: 'Fire', power: 5}, {name: 'Ice', power: 3}], filter = spell => spell.power > 4; Output: ['Fire']",
        output: "['Fire']",
        explanation: "Find all spells with power greater than 4."
      },
      {
        input: "spells = [{name: 'Wind', power: 7}], filter = spell => spell.power > 10; Output: []",
        output: "[]",
        explanation: "No spells have power greater than 10."
      }
    ],
    inputLimits: {
      size: "1 <= spells.length <= 1000",
      numberOfInputs: "Filter is a function",
      note: "Spells are objects with name and power."
    },
    status: "unattempted",
    starterCode: `function filterSpellbook(spells, filter) {
  // Write your code here
}`,
  },
  {
    id: 93,
    title: "Alien Word Frequency Counter",
    difficulty: "Easy",
    description: "Given a string in an alien language, return the frequency of each word.",
    examples: [
      {
        input: "text = 'blip blop blip'",
        output: "{ blip: 2, blop: 1 }",
        explanation: "Find the frequency of each word in the alien language."
      },
      {
        input: "text = 'foo bar'",
        output: "{ foo: 1, bar: 1 }",
        explanation: "Find the frequency of each word in the alien language."
      }
    ],
    inputLimits: {
      size: "1 <= text.length <= 10000",
      numberOfInputs: "Words are separated by spaces",
      note: "Words are case-sensitive."
    },
    status: "unattempted",
    starterCode: `function countAlienWords(text) {
  // Write your code here
}`,
  },
  {
    id: 94,
    title: "Potion Ingredient Substituter",
    difficulty: "Medium",
    description: "Given a list of potions, available ingredients, and a substitution map, return all potions that can be made using substitutions if needed.",
    examples: [
      {
        input: "potions = [{name: 'Healing', ingredients: ['herb', 'water']}], available = ['herb'], substitutions = { 'water': ['herb'] }; Output: ['Healing']",
        output: "['Healing']",
        explanation: "Make 'Healing' by substituting 'herb' for 'water'."
      },
      {
        input: "potions = [{name: 'Mana', ingredients: ['crystal']}], available = ['herb'], substitutions = { 'crystal': ['herb'] }; Output: ['Mana']",
        output: "['Mana']",
        explanation: "Make 'Mana' by substituting 'herb' for 'crystal'."
      }
    ],
    inputLimits: {
      size: "1 <= potions.length <= 1000",
      numberOfInputs: "Substitutions is a map",
      note: "Ingredients are strings."
    },
    status: "unattempted",
    starterCode: `function substitutePotionIngredients(potions, available, substitutions) {
  // Write your code here
}`,
  },
  {
    id: 95,
    title: "Dragon's Treasure Maximizer",
    difficulty: "Hard",
    description: "Given a list of treasures, each with a value and a weight, and a maximum weight, return the maximum value that can be collected without exceeding the weight.",
    examples: [
      {
        input: "treasures = [{value: 10, weight: 2}, {value: 5, weight: 3}, {value: 8, weight: 2}], maxWeight = 5; Output: 13",
        output: "13",
        explanation: "Pick treasures with value 5 and 8 (weights 3+2=5) to maximize value without exceeding the weight limit."
      },
      {
        input: "treasures = [{value: 1, weight: 1}], maxWeight = 1; Output: 1",
        output: "1",
        explanation: "Only one treasure can be picked."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has value and weight",
      note: "Max weight is an integer."
    },
    status: "unattempted",
    starterCode: `function maximizeTreasureValue(treasures, maxWeight) {
  // Write your code here
}`,
  },
  {
    id: 96,
    title: "Wizard's Spell Sequence Validator",
    difficulty: "Medium",
    description: "Given a list of spells and a sequence, return true if the sequence is a valid order of casting spells (no spell is cast before its prerequisites).",
    examples: [
      {
        input: "spells = [{name: 'Fire', prerequisites: []}, {name: 'Ice', prerequisites: ['Fire']}], sequence = ['Fire', 'Ice']; Output: true",
        output: "true",
        explanation: "'Fire' is cast before 'Ice', which is valid."
      },
      {
        input: "spells = [{name: 'Fire', prerequisites: []}, {name: 'Ice', prerequisites: ['Fire']}], sequence = ['Ice', 'Fire']; Output: false",
        output: "false",
        explanation: "'Ice' is cast before its prerequisite 'Fire', which is invalid."
      }
    ],
    inputLimits: {
      size: "1 <= spells.length <= 1000",
      numberOfInputs: "Each spell has prerequisites",
      note: "Sequence is an array of spell names."
    },
    status: "unattempted",
    starterCode: `function validateSpellSequence(spells, sequence) {
  // Write your code here
}`,
  },
  {
    id: 97,
    title: "Alien Message Permutator",
    difficulty: "Hard",
    description: "Given a string representing an alien message, return all unique permutations of the message.",
    examples: [
      {
        input: "message = 'abc'",
        output: "['abc', 'acb', 'bac', 'bca', 'cab', 'cba']",
        explanation: "Find all unique permutations of the alien message."
      },
      {
        input: "message = 'a'",
        output: "['a']",
        explanation: "Only one permutation is possible."
      }
    ],
    inputLimits: {
      size: "1 <= message.length <= 8",
      numberOfInputs: "Message is a string",
      note: "Return all unique permutations."
    },
    status: "unattempted",
    starterCode: `function permuteAlienMessage(message) {
  // Write your code here
}`,
  },
  {
    id: 98,
    title: "Potion Brewing Order",
    difficulty: "Medium",
    description: "Given a list of potions, each with a brewing time and dependencies, return a valid order to brew all potions.",
    examples: [
      {
        input: "potions = [{name: 'Healing', time: 10, deps: []}, {name: 'Mana', time: 15, deps: ['Healing']}]; Output: ['Healing', 'Mana']",
        output: "['Healing', 'Mana']",
        explanation: "Find a valid order to brew 'Healing' and 'Mana' potions."
      },
      {
        input: "potions = [{name: 'A', time: 5, deps: []}, {name: 'B', time: 10, deps: ['A']}]; Output: ['A', 'B']",
        output: "['A', 'B']",
        explanation: "Find a valid order to brew 'A' and 'B' potions."
      }
    ],
    inputLimits: {
      size: "1 <= potions.length <= 1000",
      numberOfInputs: "Each potion has time and deps",
      note: "Deps is an array of potion names."
    },
    status: "unattempted",
    starterCode: `function brewingOrder(potions) {
  // Write your code here
}`,
  },
  {
    id: 99,
    title: "Dragon's Flight Path Counter",
    difficulty: "Easy",
    description: "Given a list of castles and their coordinates, return the number of unique flight paths that visit all castles exactly once.",
    examples: [
      {
        input: "castles = [[0,0],[1,2],[2,1]]",
        output: "6",
        explanation: "There are 6 unique paths for 3 castles."
      },
      {
        input: "castles = [[0,0],[1,1]]",
        output: "2",
        explanation: "There are 2 unique paths for 2 castles."
      }
    ],
    inputLimits: {
      size: "1 <= castles.length <= 10",
      numberOfInputs: "Each castle is a coordinate pair",
      note: "Paths must visit all castles exactly once."
    },
    status: "unattempted",
    starterCode: `function countFlightPaths(castles) {
  // Write your code here
}`,
  },
  {
    id: 100,
    title: "Wizard's Spell Combination Generator",
    difficulty: "Hard",
    description: "Given a list of spells, return all possible combinations of spells that can be cast together (no spell can be cast twice).",
    examples: [
      {
        input: "spells = ['Fire', 'Ice', 'Wind']",
        output: "[['Fire'], ['Ice'], ['Wind'], ['Fire','Ice'], ['Fire','Wind'], ['Ice','Wind'], ['Fire','Ice','Wind']]",
        explanation: "Find all possible combinations of spells that can be cast together."
      },
      {
        input: "spells = ['A','B']",
        output: "[['A'], ['B'], ['A','B']]",
        explanation: "Find all possible combinations of spells that can be cast together."
      }
    ],
    inputLimits: {
      size: "1 <= spells.length <= 10",
      numberOfInputs: "Spells is an array of strings",
      note: "No spell can be cast twice."
    },
    status: "unattempted",
    starterCode: `function generateSpellCombinations(spells) {
  // Write your code here
}`,
    testCases: [
      { 
        input: [['Fire', 'Ice', 'Wind']], 
        output: [['Fire'], ['Ice'], ['Wind'], ['Fire','Ice'], ['Fire','Wind'], ['Ice','Wind'], ['Fire','Ice','Wind']] 
      },
      { 
        input: [['A','B']], 
        output: [['A'], ['B'], ['A','B']] 
      }
    ]
  },
  {
    id: 1,
    title: "Magical Garden I",
    difficulty: "Easy",
    description: "You're tending a magical garden. Each plant has a name, type, and a list of magical properties. Your task is to find all plants of a given type and also count the number of unique magical properties in the garden.",
    examples: [
      {
        input: "plants = [ { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] }, { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] } ]; type = 'Flower'; Output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        output: "{ plants: ['Rose', 'Lily'], uniqueProperties: 3 }",
        explanation: "Two flowers found, with 3 unique properties: healing, beauty, luck."
      },
      {
        input: "plants = [ { name: 'Oak', type: 'Tree', properties: ['strength'] } ]; type = 'Tree'; Output: { plants: ['Oak'], uniqueProperties: 1 }",
        output: "{ plants: ['Oak'], uniqueProperties: 1 }",
        explanation: "One tree found, with 1 unique property."
      }
    ],
    inputLimits: {
      size: "1 <= plants.length <= 1000",
      numberOfInputs: "Each plant has a name, type, and list of properties",
      note: "Properties are strings."
    },
    status: "unattempted",
    starterCode: `function findPlantsAndUniqueProperties(plants, type) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Rose', type: 'Flower', properties: ['healing', 'beauty'] },
            { name: 'Lily', type: 'Flower', properties: ['beauty', 'luck'] }
          ],
          'Flower'
        ], 
        output: { plants: ['Rose', 'Lily'], uniqueProperties: 3 } 
      },
      { 
        input: [
          [
            { name: 'Oak', type: 'Tree', properties: ['strength'] }
          ],
          'Tree'
        ], 
        output: { plants: ['Oak'], uniqueProperties: 1 } 
      }
    ]
  },
  {
    id: 2,
    title: "Wizard's Spell Book I",
    difficulty: "Easy",
    description: "You're organizing a wizard's spell book. Each spell has a name, level, and list of required ingredients. Your task is to find all spells that can be cast with the available ingredients and also count the number of unique ingredients required for all castable spells.",
    examples: [
      {
        input: "spells = [ { name: 'Fireball', level: 1, ingredients: ['dragon scale', 'phoenix feather'] }, { name: 'Ice Spike', level: 2, ingredients: ['frost crystal'] }, { name: 'Lightning Bolt', level: 1, ingredients: ['storm cloud', 'copper'] } ], available = ['dragon scale', 'phoenix feather', 'frost crystal']; Output: { castable: ['Fireball', 'Ice Spike'], uniqueIngredients: 3 }",
        output: "{ castable: ['Fireball', 'Ice Spike'], uniqueIngredients: 3 }",
        explanation: "Two spells can be cast, requiring 3 unique ingredients: dragon scale, phoenix feather, frost crystal."
      },
      {
        input: "spells = [ { name: 'Spell1', level: 1, ingredients: ['ingredient1'] }, { name: 'Spell2', level: 1, ingredients: ['ingredient2'] } ], available = ['ingredient1']; Output: { castable: ['Spell1'], uniqueIngredients: 1 }",
        output: "{ castable: ['Spell1'], uniqueIngredients: 1 }",
        explanation: "Only 'Spell1' can be cast, requiring 1 unique ingredient."
      }
    ],
    inputLimits: {
      size: "1 <= spells.length <= 1000",
      numberOfInputs: "1 <= levels <= 100",
      note: "Spells are objects with name, level, and ingredients."
    },
    status: "unattempted",
    starterCode: `function findCastableSpellsAndUniqueIngredients(spells, available) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { name: 'Fireball', level: 1, ingredients: ['dragon scale', 'phoenix feather'] },
            { name: 'Ice Spike', level: 2, ingredients: ['frost crystal'] },
            { name: 'Lightning Bolt', level: 1, ingredients: ['storm cloud', 'copper'] }
          ],
          ['dragon scale', 'phoenix feather', 'frost crystal']
        ], 
        output: { castable: ['Fireball', 'Ice Spike'], uniqueIngredients: 3 } 
      },
      { 
        input: [
          [
            { name: 'Spell1', level: 1, ingredients: ['ingredient1'] },
            { name: 'Spell2', level: 1, ingredients: ['ingredient2'] }
          ],
          ['ingredient1']
        ], 
        output: { castable: ['Spell1'], uniqueIngredients: 1 } 
      }
    ]
  },
  {
    id: 3,
    title: "Dragon's Treasure Hoard I",
    difficulty: "Easy",
    description: "You're a dragon with a hoard of treasures. Each treasure has a type, value, and rarity. For each type, maximize the total value of treasures you can collect without exceeding a type-specific weight limit (weight = value * rarity). Return the total value for each type.",
    examples: [
      {
        input: "treasures = [ {type: 'gem', value: 100, rarity: 2}, {type: 'gold', value: 200, rarity: 1}, {type: 'gem', value: 50, rarity: 3} ]; limits = { gem: 300, gold: 250 }; Output: { gem: 100, gold: 200 }",
        output: "{ gem: 100, gold: 200 }",
        explanation: "For gems, only the first fits (100*2=200, 50*3=150 is too much for the remaining limit). For gold, 200*1=200 fits under 250."
      },
      {
        input: "treasures = [ {type: 'silver', value: 30, rarity: 1} ]; limits = { silver: 40 }; Output: { silver: 30 }",
        output: "{ silver: 30 }",
        explanation: "Only one type of treasure, and it fits the limit."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, type, value, and rarity; limits is an object by type",
      note: "Values and rarities are integers."
    },
    status: "unattempted",
    starterCode: `function organizeHoardByType(treasures, limits) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[{type: 'gem', value: 100, rarity: 2}, {type: 'gold', value: 200, rarity: 1}, {type: 'gem', value: 50, rarity: 3}], {gem: 300, gold: 250}], output: {gem: 100, gold: 200} },
      { input: [[{type: 'silver', value: 30, rarity: 1}], {silver: 40}], output: {silver: 30} }
    ]
  },
  {
    id: 4,
    title: "Time Traveler's Log I",
    difficulty: "Easy",
    description: "You're keeping a log of your time travel adventures. Each entry has a date, location, and list of events. Your task is to find all locations visited in a given time period.",
    examples: [
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },\n  { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },\n  { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-03'\nOutput: ['London', 'Rome', 'Paris']",
        output: "['London', 'Rome', 'Paris']",
        explanation: "Find all locations visited between the given dates."
      },
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Location1', events: ['Event1'] },\n  { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'\nOutput: []",
        output: "[]",
        explanation: "No locations visited between the given dates."
      }
    ],
    inputLimits: {
      size: "1 <= log.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findVisitedLocations(log, startDate, endDate) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },
            { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },
            { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }
          ],
          '2024-03-01',
          '2024-03-03'
        ], 
        output: ['London', 'Rome', 'Paris'] 
      },
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Location1', events: ['Event1'] },
            { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }
          ],
          '2024-03-03',
          '2024-03-04'
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 5,
    title: "Alien Message Decoder I",
    difficulty: "Hard",
    description: "You've received a message from an alien civilization that uses a unique encoding system. The message is a sequence of numbers where each number represents a word in their language. However, the encoding is ambiguous - the same sequence could represent different messages. Your task is to find all possible valid messages based on a given dictionary.",
    examples: [
      {
        input: "message = '1234', dictionary = { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }\nOutput: ['a b c e', 'a w e', 'l c e']",
        output: "['a b c e', 'a w e', 'l c e']",
        explanation: "Decode the alien message using the given dictionary."
      },
      {
        input: "message = '5678', dictionary = { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }\nOutput: ['f g h i']",
        output: "['f g h i']",
        explanation: "Decode the alien message using the given dictionary."
      }
    ],
    inputLimits: {
      size: "1 <= message.length <= 1000",
      numberOfInputs: "Mapping is an object",
      note: "Mapping keys are strings, values are strings."
    },
    status: "unattempted",
    starterCode: `function decodeAlienMessage(message, dictionary) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['1234', { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }], output: ['a b c e', 'a w e', 'l c e'] },
      { input: ['5678', { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }], output: ['f g h i'] }
    ]
  },
  {
    id: 6,
    title: "Magical Pet Sitter I",
    difficulty: "Easy",
    description: "You're a pet sitter for magical creatures. Each pet has a name, type, and list of care requirements. Your task is to create a schedule of care activities for each pet, ensuring that no two pets requiring the same care are scheduled at the same time.",
    examples: [
      {
        input: "pets = [\n  { name: 'Fluffy', type: 'Dragon', care: ['feed', 'exercise'] },\n  { name: 'Sparky', type: 'Phoenix', care: ['feed', 'groom'] },\n  { name: 'Whiskers', type: 'Cat', care: ['feed'] }\n]\nOutput: { 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] }",
        output: "{ 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] }",
        explanation: "Create a schedule for Fluffy, Sparky, and Whiskers."
      },
      {
        input: "pets = [\n  { name: 'Pet1', type: 'Type1', care: ['care1'] },\n  { name: 'Pet2', type: 'Type2', care: ['care2'] }\n]\nOutput: { 'care1': ['Pet1', 'Pet2'] }",
        output: "{ 'care1': ['Pet1', 'Pet2'] }",
        explanation: "Create a schedule for Pet1 and Pet2."
      }
    ],
    inputLimits: {
      size: "1 <= pets.length <= 1000",
      numberOfInputs: "Each pet has a name, type, and care array",
      note: "Care instructions are strings."
    },
    status: "unattempted",
    starterCode: `function createPetSchedule(pets) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [[
          { name: 'Fluffy', type: 'Dragon', care: ['feed', 'exercise'] },
          { name: 'Sparky', type: 'Phoenix', care: ['feed', 'groom'] },
          { name: 'Whiskers', type: 'Cat', care: ['feed'] }
        ]], 
        output: { 'feed': ['Fluffy', 'Sparky', 'Whiskers'], 'exercise': ['Fluffy'], 'groom': ['Sparky'] } 
      },
      { 
        input: [[
          { name: 'Pet1', type: 'Type1', care: ['care1'] },
          { name: 'Pet2', type: 'Type2', care: ['care2'] }
        ]], 
        output: { 'care1': ['Pet1', 'Pet2'] } 
      }
    ]
  },
  {
    id: 8,
    title: "Dragon's Treasure Sorter I",
    difficulty: "Easy",
    description: "You're a dragon organizing your treasure hoard. Each treasure has a value and a category. Your task is to sort the treasures by category and then by value within each category. If two treasures have the same value, sort them alphabetically by name.",
    examples: [
      {
        input: "treasures = [ { name: 'Ruby', value: 100, category: 'gems' }, { name: 'Gold', value: 50, category: 'metals' }, { name: 'Diamond', value: 100, category: 'gems' } ]",
        output: "[ { name: 'Diamond', value: 100, category: 'gems' }, { name: 'Ruby', value: 100, category: 'gems' }, { name: 'Gold', value: 50, category: 'metals' } ]",
        explanation: "Sort by category, then by value, then by name."
      },
      {
        input: "treasures = [ { name: 'Emerald', value: 200, category: 'gems' }, { name: 'Silver', value: 50, category: 'metals' } ]",
        output: "[ { name: 'Emerald', value: 200, category: 'gems' }, { name: 'Silver', value: 50, category: 'metals' } ]",
        explanation: "Already sorted."
      }
    ],
    inputLimits: {
      size: "1 <= treasures.length <= 1000",
      numberOfInputs: "Each treasure has a name, value, and category",
      note: "Values are integers."
    },
    status: "unattempted",
    starterCode: `function sortTreasures(treasures) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [[
          { name: 'Ruby', value: 100, category: 'gems' },
          { name: 'Gold', value: 50, category: 'metals' },
          { name: 'Diamond', value: 100, category: 'gems' }
        ]], 
        output: [
          { name: 'Diamond', value: 100, category: 'gems' },
          { name: 'Ruby', value: 100, category: 'gems' },
          { name: 'Gold', value: 50, category: 'metals' }
        ] 
      },
      { 
        input: [[
          { name: 'Emerald', value: 200, category: 'gems' },
          { name: 'Silver', value: 50, category: 'metals' }
        ]], 
        output: [
          { name: 'Emerald', value: 200, category: 'gems' },
          { name: 'Silver', value: 50, category: 'metals' }
        ] 
      }
    ]
  },
  {
    id: 9,
    title: "Time Traveler's Log III",
    difficulty: "Easy",
    description: "You're keeping a log of your time travel adventures. Each entry has a date, location, and list of events. Your task is to find all locations visited in a given time period.",
    examples: [
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },\n  { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },\n  { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }\n],\nstartDate = '2024-03-01',\nendDate = '2024-03-03'\nOutput: ['London', 'Rome', 'Paris']",
        output: "['London', 'Rome', 'Paris']",
        explanation: "Find all locations visited between the given dates."
      },
      {
        input: "log = [\n  { date: '2024-03-01', location: 'Location1', events: ['Event1'] },\n  { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }\n],\nstartDate = '2024-03-03',\nendDate = '2024-03-04'\nOutput: []",
        output: "[]",
        explanation: "No locations visited between the given dates."
      }
    ],
    inputLimits: {
      size: "1 <= log.length <= 1000",
      numberOfInputs: "Dates are in 'YYYY-MM-DD' format",
      note: "Locations are strings."
    },
    status: "unattempted",
    starterCode: `function findVisitedLocations(log, startDate, endDate) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Rome', events: ['Met Caesar', 'Visited Colosseum'] },
            { date: '2024-03-02', location: 'Paris', events: ['Saw Notre Dame'] },
            { date: '2024-03-03', location: 'London', events: ['Tower of London', 'Big Ben', 'Buckingham Palace'] }
          ],
          '2024-03-01',
          '2024-03-03'
        ], 
        output: ['London', 'Rome', 'Paris'] 
      },
      { 
        input: [
          [
            { date: '2024-03-01', location: 'Location1', events: ['Event1'] },
            { date: '2024-03-02', location: 'Location2', events: ['Event1', 'Event2'] }
          ],
          '2024-03-03',
          '2024-03-04'
        ], 
        output: [] 
      }
    ]
  },
  {
    id: 12,
    title: "Alien Message Decoder II",
    difficulty: "Hard",
    description: "You've received a message from an alien civilization that uses a unique encoding system. The message is a sequence of numbers where each number represents a word in their language. However, the encoding is ambiguous - the same sequence could represent different messages. Your task is to find all possible valid messages based on a given dictionary.",
    examples: [
      {
        input: "message = '1234', dictionary = { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }\nOutput: ['a b c e', 'a w e', 'l c e']",
        output: "['a b c e', 'a w e', 'l c e']",
        explanation: "Decode the alien message using the given dictionary."
      },
      {
        input: "message = '5678', dictionary = { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }\nOutput: ['f g h i']",
        output: "['f g h i']",
        explanation: "Decode the alien message using the given dictionary."
      }
    ],
    inputLimits: {
      size: "1 <= message.length <= 1000",
      numberOfInputs: "Mapping is an object",
      note: "Mapping keys are strings, values are strings."
    },
    status: "unattempted",
    starterCode: `function decodeAlienMessage(message, dictionary) {\n  // Write your code here\n}`,
    testCases: [
      { input: ['1234', { '1': 'a', '12': 'l', '2': 'b', '23': 'w', '3': 'c', '34': 'd', '4': 'e' }], output: ['a b c e', 'a w e', 'l c e'] },
      { input: ['5678', { '5': 'f', '6': 'g', '7': 'h', '8': 'i' }], output: ['f g h i'] }
    ]
  },
  {
    id: 19,
    title: "Space Station Power Grid",
    difficulty: "Hard",
    description: "You're managing the power grid of a space station. The station has multiple power sources and consumers. Each power source has a maximum output, and each consumer has a required input. Your task is to determine if the power grid can satisfy all consumers' needs. The grid is represented as a directed graph where edges represent power lines with maximum capacity.",
    examples: [
      {
        input: "grid = {\n  'solar': { 'habitat': 100, 'lab': 50 },\n  'nuclear': { 'habitat': 50, 'lab': 100 },\n  'habitat': { 'required': 120 },\n  'lab': { 'required': 130 }\n}\nOutput: true",
        output: "true",
        explanation: "The power grid can satisfy all consumers' needs."
      },
      {
        input: "grid = {\n  'solar': { 'habitat': 50, 'lab': 50 },\n  'nuclear': { 'habitat': 50, 'lab': 50 },\n  'habitat': { 'required': 120 },\n  'lab': { 'required': 130 }\n}\nOutput: false",
        output: "false",
        explanation: "The power grid cannot satisfy all consumers' needs."
      }
    ],
    inputLimits: {
      size: "1 <= grid.length <= 1000",
      numberOfInputs: "Grid cells are 'solar', 'nuclear', 'habitat', or 'lab'",
      note: "Values are integers."
    },
    status: "unattempted",
    starterCode: `function canPowerGridMeetDemand(grid) {\n  // Write your code here\n}`,
    testCases: [
      { 
        input: [{
          'solar': { 'habitat': 100, 'lab': 50 },
          'nuclear': { 'habitat': 50, 'lab': 100 },
          'habitat': { 'required': 120 },
          'lab': { 'required': 130 }
        }], 
        output: true 
      },
      { 
        input: [{
          'solar': { 'habitat': 50, 'lab': 50 },
          'nuclear': { 'habitat': 50, 'lab': 50 },
          'habitat': { 'required': 120 },
          'lab': { 'required': 130 }
        }], 
        output: false 
      }
    ]
  },
  {
    id: 103,
    title: "Enchanted Forest Path Finder",
    difficulty: "Medium",
    description: "You are lost in an enchanted forest represented as a grid. Some cells are blocked by magical barriers. Write a function to find the shortest path from the entrance to the exit, avoiding barriers.",
    examples: [
      {
        input: "forest = [['E', '.', '#'], ['.', '#', '.'], ['.', '.', 'X']]\nOutput: 5",
        output: "5",
        explanation: "Shortest path from 'E' to 'X' is 5 steps."
      },
      {
        input: "forest = [['E', '#', '.'], ['.', '.', '.'], ['#', '.', 'X']]\nOutput: 4",
        output: "4",
        explanation: "Shortest path from 'E' to 'X' is 4 steps."
      }
    ],
    inputLimits: {
      size: "1 <= forest.length, forest[0].length <= 100",
      numberOfInputs: "Grid cells are 'E', 'X', '.', or '#'",
      note: "'#' is a barrier, '.' is open."
    },
    status: "unattempted",
    starterCode: `function shortestForestPath(forest) {\n  // Write your code here\n}`,
    testCases: [
      { input: [[['E', '.', '#'], ['.', '#', '.'], ['.', '.', 'X']]], output: 5 },
      { input: [[['E', '#', '.'], ['.', '.', '.'], ['#', '.', 'X']]], output: 4 }
    ]
  },
];

// Ensure inputLimits is always present
const challengesWithLimits = challenges.map(challenge => ({
  ...challenge,
  inputLimits: challenge.inputLimits || defaultInputLimits
}));

export { challenges }; 