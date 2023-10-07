## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Vite and JSX Files](#vite-and-jsx-files)
- [Building for Production](#building-for-production)
- [React Hooks](#react-hooks)
  - [useState Hook](#usestate-hook)
  - [useEffect Hook](#useeffect-hook)
  - [useRef Hook](#useref-hook)
- [Context API](#context-api)
- [Gleam Extension](#gleam-extension)
- [Contributing](#contributing)
- [License](#license)

### Installation

1. Create a new Vite React app with the following command:

2. Navigate to the app directory:

3. Install dependencies:

### Development

Start the development server:

## Vite and JSX Files

Vite requires the use of `.jsx` files for React components instead of `.js`.

## Building for Production

To build your Vite app for production, use the following command:

The production build will be located in the `dist` folder.

## React Hooks

React hooks are essential for managing state and side effects in functional components. Here are some key points:

### useState Hook

- `useState` manages state values.
- It triggers re-renders when the state changes.
- The `setState` function is asynchronous.

### useEffect Hook

- `useEffect` runs on every render by default.
- An empty dependency array (`[]`) ensures it runs only on the initial render.
- It's used for conditionally rendering, running functions, subscriptions, data fetching, and updating the DOM.
- You can't directly return promises from `useEffect`.

### useRef Hook

- `useRef` doesn't trigger re-renders.
- It's useful for scenarios like downloads or when a value should start after an event.

## Context API

The Context API is used to avoid prop drilling by providing a way to pass data down the component tree without manually passing props. It consists of a Provider and a Consumer and is typically initiated at the main parent component.
