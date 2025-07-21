# ShipmentTracker

Shipment Tracker is a modular Angular application that demonstrates best practices in scalable web app architecture and code quality.

---

## Project Structure (v2)

The project is organized using a modular folder structure for maintainability and scalability:

- `core/` — Application-wide singletons, interceptors, and core services
- `shared/` — Shared UI components and utilities
- `features/` — Feature modules (e.g. Shipments, About)
- `layouts/` — Layout and shell components
- `models/` — Shared models and interfaces
- `utils/` — Pure helper functions and utilities
- `assets/` — Static assets

Each feature (e.g. shipments, about) is encapsulated in its own folder under `features/` with components, services, data, and models grouped together. Shared components are placed in `shared/components` for reuse.

---

## About Page

For a detailed overview of the modular architecture, code quality practices, and developer commands (lint, format, test, pre-commit hooks), see the in-app **About** page at `/about` or `src/app/features/about/about.component.html`.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
