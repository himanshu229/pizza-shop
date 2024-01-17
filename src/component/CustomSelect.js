import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const CustomSelect = ({
  label,
  error,
  value,
  onChange,
  onBlur,
  data,
  helperText,
  name,
}) => {
  return (
    <FormControl fullWidth error={error}>
      <InputLabel id={"InputLabel-" + label}>{label}</InputLabel>
      <Select
        labelId={"InputLabel-" + label}
        id={"select-" + label}
        label={label}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}
      >
        {data.map((ele, index) => {
          return (
            <MenuItem key={index} value={ele.key}>
              {ele.value}
            </MenuItem>
          );
        })}
      </Select>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default React.memo(CustomSelect);
