import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { DisableContainer2 } from "./components/DisableDiv";

function Page2() {
  const [isDisabled, setIsDisabled] = useState(false);
  
  // Generate 500+ TextFields
  const inputCount = 500;
  const inputs = Array.from({ length: inputCount }, (_, index) => (
    <TextField
      key={index}
      label={`Input ${index + 1}`}
      variant="outlined"
      fullWidth
      sx={{ maxWidth: 400, marginBottom: 1 }}
    />
  ));

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
        React DisableContainer2 Test (1000+ Inputs)
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

      {/* DisableContainer2 with 1000+ Inputs */}
      <Typography variant="subtitle1" color="text.secondary">
        Inside DisableContainer2 (div-based, {inputCount} Inputs):
      </Typography>
      <DisableContainer2 disabled={isDisabled}>
        {inputs}
      </DisableContainer2>
    </Box>
  );
}

export default Page2;