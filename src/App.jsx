import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { DisableContainer } from "./components/DisableContainer";
import { DisableContainer2 } from "./components/DisableDiv";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 4,
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Header */}
      <Typography variant="h4" align="center" gutterBottom>
        React Disable Container Demo
      </Typography>

      {/* Toggle Switch */}
      <FormControlLabel
        control={
          <Switch
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
            color="primary"
          />
        }
        label={isDisabled ? "Container Disabled" : "Container Enabled"}
        sx={{ alignSelf: "center" }}
      />

      {/* Outside Input (Unaffected) */}
      <Typography variant="subtitle1" color="text.secondary">
        Outside Container (Always Enabled):
      </Typography>
      <TextField
        label="Input Outside Container"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 400 }}
      />

      {/* DisableContainer2 Example (using div) */}
      <Typography variant="subtitle1" color="text.secondary">
        Inside DisableContainer2 (div-based):
      </Typography>
      <DisableContainer2 disabled={isDisabled}>
        <TextField
          label="Input Inside DisableContainer2"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 400 }}
        />
      </DisableContainer2>

      {/* DisableContainer Example */}
      <Typography variant="subtitle1" color="text.secondary">
        Inside DisableContainer (MUI Container-based):
      </Typography>
      <DisableContainer disabled={isDisabled}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
          }}
        >
          <TextField label="Input 1" variant="outlined" fullWidth />
          <TextField label="Input 2" variant="outlined" fullWidth />
          <Button variant="contained" color="primary">
            Click Me
          </Button>
          {/* Nested Structure */}
          <Box sx={{ padding: 2, border: "1px dashed #ccc", borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Nested Section
            </Typography>
            <TextField label="Nested Input" variant="outlined" fullWidth />
          </Box>
        </Box>
      </DisableContainer>
    </Box>
  );
}

export default App;