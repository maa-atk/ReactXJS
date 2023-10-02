# Notes on React and JSX

## Create React App

- To create a new React application, you can use the command: `npx create-react-app my-app`.
- This command sets up a new React project with the necessary files and dependencies.

## Node Package Manager (NPM)

- Node Package Manager (NPM) is a tool that helps with the installation and management of external packages in a Node.js project.

## React Components

- React components are typically defined as functions or classes.
- Component function names should start with a capital letter and are usually self-closing (`<ComponentName />`).
- Components need to be exported before they can be used in other parts of the application.

## JSX (JavaScript XML)

- JSX is a syntax extension for JavaScript used in React for rendering components.
- It allows you to return HTML-like elements within JavaScript functions, injecting JavaScript logic into the HTML.

## JSX Naming Conventions

- Component names in JSX should start with a capital letter.
- A JSX function should return a single element with one parent element wrapping all the content.

## Inline CSS

- Note that some external libraries in React may include inline CSS styles that affect the appearance of components.

## JSX Must Return Something

- In JSX, every function must return something. It should return a valid HTML element or React component.

## Using Props

- Props (short for properties) are used to pass data from a parent component to a child component.
- Props sent via the HTML tag can be accessed inside the component using `props.propertyName`.

## Children Prop

- To render content passed as a "children" prop, you must pass the content when using the component.
- If you destructure props, "children" must be one of the destructured properties.

## Prop Drilling

- Prop drilling is the process of passing data from a parent component to a child component, and subsequently to grandchild components.
- Data flows from the top-level parent down to child and grandchild components, but not the other way around.
