# JavaScript Modules 

This JavaScript project demonstrates the use of ES6 modules to organize and reuse code effectively. The project comprises three primary files: `index.html`, `script.js`, and `user.js`, each with a specific role.

## File Descriptions

### `index.html`

- **Purpose:** Entry point for the project.
- **Functionality:** Includes the `script.js` module using the `<script type="module">` tag.

### `script.js`

- **Purpose:** Illustrates importing functionality from the `user.js` module.
- **Functionality:**
  - Imports the `User` class and specific functions from `user.js`.
  - Creates a new `User` instance and logs it.
  - Calls the imported functions to display user data.

### `user.js`

- **Purpose:** Defines the `User` class and related functions.
- **Functionality:**
  - Defines the `User` class with a constructor for name and age.
  - Implements functions to print the user's name and age.
  - Exports the `User` class as the default export.
  - Exports the `printName` and `printAge` functions using named exports.

