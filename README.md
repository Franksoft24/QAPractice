# Movie Search Platform - QA Testing Challenge


A comprehensive QA testing suite for the Movie Search Platform using Cypress for automated end-to-end and API testing.

## Issues found: 

  
### I01 - System Testing | Search Endpoint Returns 500 Error   
**Severity:** High | **Risk:** High


**Expected Behavior:**

- The endpoint should return the desired movie by the title typed on the search box. 
- expected call request: url/movies/?apikey=any&s=testMovie&page=1

**Observed Behavior:**
- The request is bad formatted. And it gives a 401 error in the logs.  
- The endpoint returns error 500. 
- Actual request: url/movies/search?q=test&page=1

***Steps to replicate:***
- Open the main URL. http://localhost:3001
- Type in the search bar a movie name. (Be sure the movie is added in the database)
- Click search. 

**Evidence:** [Screenshot 1](https://prnt.sc/8Blgmdu8vS5Y) [Screenshot 2](https://prnt.sc/dJIxYo4PrBqd)

---

### I02 - System Testing | The remove movie endpoint doesn't work if the movie ID is integer:
**Severity:** High | **Risk:** Low

***Expected Behavior***
  - The movie should be removed after click Remove button. 

***Observed Behavior***
  - The endpoint allow to create movie using int values. But the delete button doesn't remove the movie. 
***Steps to reproduce:***
  - Create a new movie via Postman and assign a numeric imdbID
  - Open the APP http://localhost:3001
  - Click remove button on the recently created movie. It won't be removed. 

**Evidence:** [Screenshot 1](https://prnt.sc/8Blgmdu8vS5Y) | [Screenshot 2](https://prnt.sc/dJIxYo4PrBqd)      

---

### I03 - API Testing | Search Endpoint Returns Empty Movie Object
**Severity:** High | **Risk:** High

**Expected Behavior:**
- Request to `/movies/search?apikey=demo&s=movietitle&page=1` should return the movie data

**Observed Behavior:**
- The endpoint returns an empty object

**Evidence:** [Screenshot](https://prnt.sc/kJc9nStzpEyW)

---

## Installation

### Prerequisites
- Node.js 14+ (with npm)
- Cypress 12.0+

### Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd QAPractice
   ```

2. **Install dependencies:**
   ```bash
   cd Test
   npm install
   ```

## Running Tests

### Run All Tests
```bash
npm run test
```

### Open Cypress Test Runner (Interactive)
```bash
npm run cypress:open
```

### Run Specific Test Suite
```bash
npx cypress run --spec "cypress/e2e/QAPractice.cy.js"
```

### Run API Endpoint Tests
```bash
npx cypress run --spec "cypress/e2e/EndpointTestSuite.cy.js"
```

## Project Structure

```
QAPractice/
├── Test/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── QAPractice.cy.js          # UI and E2E tests
│   │   │   └── EndpointTestSuite.cy.js   # API endpoint tests
│   │   ├── fixtures/                      # Test data
│   │   └── support/
│   │       ├── commands.js                # Custom Cypress commands
│   │       └── e2e.js                     # Cypress configuration
│   ├── cypress.config.js                  # Cypress configuration
│   └── package.json                       # Project dependencies
└── README.md                              # This file
```

## Technologies

- **[Cypress](https://www.cypress.io/)** - E2E and API testing framework
- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[npm](https://www.npmjs.com/)** - Package manager

## Contributing

When adding new test cases, ensure:
- Tests follow the existing naming convention
- Tests are organized in appropriate `e2e` files
- Use custom commands from `support/commands.js` when applicable
- Document any new test data in `fixtures/`

## Contact

For issues or questions, please refer to the [GitHub Issues](https://github.com/Franksoft24/QAPractice/issues)
