import { Box, Button, Container, TableCell, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import CustomCard from "../component/CustomCard";
import CustomDialog from "../component/CustomDialog";
import CustomTable from "../component/CustomTable";
import { columnDataStage, enableCancel } from "../helper";
import { useSelector } from "react-redux";
const PizzaStageSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const orderData = useSelector((state) => state.pizza.orders);
  const rowData = useMemo(() => {
    const categorizedData = orderData.reduce((acc, item) => {
      acc[item.status] = [...(acc[item.status] || []), item];
      return acc;
    }, {});
    return (
      <>
        <TableCell style={{ verticalAlign: "top" }}>
          {categorizedData["placed"] &&
            categorizedData["placed"].map((item, index) => (
              <CustomCard key={index} status="marking" item={item}/>
            ))}
        </TableCell>
        <TableCell style={{ verticalAlign: "top" }}>
          {categorizedData["marking"] &&
            categorizedData["marking"].map((item, index) => (
              <CustomCard key={index} status="ready" item={item}/>
            ))}
        </TableCell>
        <TableCell style={{ verticalAlign: "top" }}>
          {categorizedData["ready"] &&
            categorizedData["ready"].map((item, index) => (
              <CustomCard key={index} status="picked" item={item}/>
            ))}
        </TableCell>

        <TableCell style={{ verticalAlign: "top" }}>
          {categorizedData["picked"] &&
            categorizedData["picked"].map((item, index) => (
              <CustomCard key={index} status="done" item={item}/>
            ))}
        </TableCell>
      </>
    );
  }, [orderData]);

  const isOrder = useMemo(()=>{
    return orderData.filter((ele)=>enableCancel.includes(ele.status)).length === 10 
  },[orderData])
  return (
    <Box mt={2}>
      <Container fixed>
        <Box sx={{ float: "right", marginBottom: 4 }}>
          <Button onClick={() => setIsOpen(!isOpen)} variant="contained">
            Create Order
          </Button>
        </Box>
        <Box mt={2}>
          <Typography component="h1">
            <b>Pizza Stages Section</b>
          </Typography>
          <CustomTable
            columnData={columnDataStage}
            rowData={rowData}
            isMainData={false}
          />
        </Box>
      </Container>
      {isOpen && <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} isOrder={isOrder}/>}
    </Box>
  );
};

export default PizzaStageSection;
