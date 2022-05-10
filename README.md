# React Component Library

This project is part of a bachelor's project that explores the use of a react component library

### Build the library

```
npm run rollup
```

### Publish the library

```
npm publish
```

### Run tests

```
npm run test
```

### Run storybook locally

```
npm run storybook
```

### Build storybook

```
npm run build-storybook
```

## Introduction

To include the library in your react project:

```bash
npm install @ilyem/em-component-library
```

```jsx
import MyCustomComponent from "@ilyem/em-component-library";

const MyApp = () => {
  return (
    <div>
      <MyCustomComponent />
    </div>
  );
};
```
