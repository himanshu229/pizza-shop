import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const CustomTable = ({ columnData = [], rowData = [], isMainData = true }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnData.map((ele, index) => (
              <TableCell key={index} sx={{background:"#f7e1b9"}}><b>{ele.value}</b></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isMainData &&
            rowData.map((ele, index) => <TableRow key={index}>{ele}</TableRow>)}
          {!isMainData && !!rowData && <TableRow>{rowData}</TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(CustomTable);
