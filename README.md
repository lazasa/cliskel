# Cliskel

`cli` is a lightweight, generic CLI tool (housed in the `cliskel` repository) designed to enhance developer experience (DX) by enabling easy integration of customizable command-line interfaces into your projects. Using `npm link`, developers can add CLI functionality without direct installation, making it seamless to extend project workflows.

## Features
- Generic CLI framework for Node.js projects
- Configurable via `cli.config.js` or `package.json` using `cosmiconfig`
- Schema-driven configuration defined in `schema.json`
- Integrates via `npm link` for quick setup
- Lightweight and developer-friendly
- Built-in debugging with `src/utils/log.js`

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lazasa/cliskel.git
   ```
2. Navigate to the project directory:
   ```bash
   cd cliskel
   ```
3. Link the package globally using npm:
   ```bash
   npm link
   ```

## Usage
1. In your project, link `cli` to use it locally:
   ```bash
   npm link cli
   ```
2. Run the CLI with:
   ```bash
   cli [command]
   ```
3. Customize commands by defining them in the `commands` directory and configuring them via `cli.config.js` or `package.json` (see [Configuration](#configuration)).

### Example
```bash
cli --start
```
This shows in console: "Starting app..."

## Configuration
`cli` uses [`cosmiconfig`](https://www.npmjs.com/package/cosmiconfig) to load configuration from either:
- A `cli.config.js` file in your project root.
- A `cli` property in your `package.json`.

The configuration structure is defined in `schema.json` located in the `cliskel` repository. This schema ensures your configuration adheres to the expected format for commands and options.

### Example Configuration
In `cli.config.js`:
```javascript
module.exports = {
  strictMode: true 
};
```

Or in `package.json`:
```json
{
  "cli": {
    "strictMode": true
  }
}
```

## Command Functions
- **Storage**: Command functions are stored in the `commands` directory of your project or the `cliskel` repository.
- **Usage**: Each command function is defined as a JavaScript module (e.g., `commands/start.js`) and referenced in the configuration by its handler name.
- **Integration**: The `bin/index.js` file serves as the entry point, parsing the configuration and mapping command names to their respective functions in the `commands` directory. **Important**: Ensure you add the command argument and handler to `bin/index.js` to register new commands. For example:
  ```javascript
  const start = require('../src/commands/start')

  const args = arg({
    '--start': Boolean,
  })

  if (args['--start']) {
    start()
  }
  ```

### Example Command
In `commands/start.js`:
```javascript
module.exports = function start() {
  log.highlight('Starting the app...')
};
```

This function is invoked when running `cli --start` based on the configuration.

## Debug
Enable easy debugging using the debug library integrated in `src/utils/log.js`. To activate debug logs:
1. Set the `DEBUG` environment variable:
   ```bash
   export DEBUG=*
   ```
2. Run your CLI command to see debug output:
   ```bash
   cli init
   ```
The `src/utils/log.js` module provides structured logging for easier troubleshooting during development.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
