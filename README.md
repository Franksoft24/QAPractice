# Movie Search Platform - QA Testing Challenge


A comprehensive QA testing suite for the Movie Search Platform using Cypress for automated end-to-end and API testing.

## Issues found: 

  
### I01 - System testing | The load more button shouldn't display when there is no more movies to show
**Severity:** Low | **Risk:** Low


**Expected Behavior:**

- The load more button shouldn't display or be active when there is no more movie to show.  

**Observed Behavior:**
- The load more button is displayed when there is no more movie to show.

**Steps to replicate:**
- Open the main URL. http://localhost:3001
- Type in the search bar: Gambito
- Click search.
- There is only 1 movie displayed, but load more button is present 

**Evidence:** [Screenshot](https://prnt.sc/gWmD1WznV16X)

---

### I02 - API Testing | Post endpoint doesn't validate the correct ID format 
**Severity:** High | **Risk:** High 

**Expected Behavior:**
  - The app should validate that the data provided by the user meets the expected data type.

**Observed Behavior:**
  - The endpoint allow to create movie only using int values as the imdbID.

**Steps to reproduce:**
  - Create a new movie via API and assign a numeric imdbID only

**Evidence:** [Screenshot](https://prnt.sc/Ngf2M3iDGSxv)      

---

### I03 - System Testing | Remove button doesn't remove a movie with a numeric ID
**Severity:** High | **Risk:** Low

**Expected Behavior:**
- Remove button shuld remove the movie selected. 

**Observed Behavior:**
- If the ID is numeric format the remove button doesn't work. 

**Steps to reproduce:**
- Create a new movie via API with a numeric **imdbID**. 
- Navigate to http://localhost:3001
- Click remove button on the movie created with the numeric imdbID. 

**Evidence:** [Screenshot](https://prnt.sc/-VwufjyA_O10)

---

### I04 - System Testing - Loading error seen when the movie comes without image
**Severity:** Low | **Risk:** Low

**Expected Behavior:**
- Navigate to http://localhots:3001
- Search for movie: Gambito. (The movie doesn't have an image)

**Observed Behavior:**
- 404 error spam the console looking for a placeholder image in the code. Can we add a placeholde.jpg

**Evidence:** [Screenshot](https://prnt.sc/rDxx8AohNFRl)

---

### I05 - System Testimg - The favorite image list doesn't show the movie posters 
**Severity:** Low | **Risk:** Low

**Expected Behavior:**
- The page should display the movies added to the favorite list. 

**Observed Behavior:**
- Navigate to http://localhost:3001
- The movies added to favorites doesn't show the poster. 

**Evidence:** [Screenshot](https://prnt.sc/QDrR_kiqQIVx)

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

### Run All Tests and create report
```bash
npm run test
```

### Open Cypress Test Runner (Interactive)
```bash
npm run open
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
