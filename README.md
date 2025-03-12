
# react-disable-container

A React component to disable a container and all its child elements recursively.

## Installation
```bash
npm install react-disable-container
```

## Simple Example

This example demonstrates the basic usage of `DisableContainer` with a toggle to enable/disable it.

```jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Switch, FormControlLabel } from "@mui/material";
import { DisableContainer } from "./components/DisableContainer";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <Typography>React Disable Container Demo</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
          />
        }
        label={isDisabled ? "Container Disabled" : "Container Enabled"}
      />
      <Typography>Outside Container (Always Enabled):</Typography>
      <TextField label="Input Outside Container" />
      <Typography>Inside DisableContainer:</Typography>
      <DisableContainer disabled={isDisabled}>
        <TextField label="Input 1" />
        <TextField label="Input 2" />
        <Button variant="contained">Click Me</Button>
        <div>
          <Typography>Nested Section</Typography>
          <TextField label="Nested Input" />
        </div>
      </DisableContainer>
    </>
  );
}

export default App;
```

## What It Is

`react-disable-container` is a lightweight React component that allows you to disable an entire container and all its child elements with a single `disabled` prop. It:

- Recursively applies the `disabled` prop to all nested components that support it (e.g., `TextField`, `Button`).
- Prevents interaction (clicks, keyboard navigation) with the container and its children when disabled.
- Works with any React component, including custom ones, as long as they handle the `disabled` prop or rely on the container’s `pointerEvents: 'none'` fallback.

In this example:
- A `Switch` toggles the `disabled` state of the `DisableContainer`.
- An input outside the container remains interactive regardless of the toggle.
- Inputs, a button, and a nested section inside the `DisableContainer` become disabled/enabled based on the toggle.

This is useful for forms, modals, or sections of a UI that need to be temporarily locked without manually disabling each child component.

## Props
- `disabled` (boolean): Disables the container and its children (default: `false`).

Run this example locally by including it in a React project with MUI and the `react-disable-container` package installed.
