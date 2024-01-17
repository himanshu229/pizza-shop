import { Box, Button, Container, TableCell, Typography } from "@mui/material";
import React, { useMemo } from "react";
import CustomTable from "../component/CustomTable";
import { columnData, enableCancel, statusDetails } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../store/addPizzaSlice";

const MainSection = () => {
  const orderData = useSelector((state) => state.pizza.orders);
  const dispatch = useDispatch();
  const rowData = useMemo(() => {
    const removeCancel = orderData.filter((item) => item.status !== "cancel");
    const count = orderData.filter((item) => item.status === "done")?.length ?? 0;
    removeCancel.push({
        isTotal: true,
        title: "Total order delivered",
        totalOrder: String(count).padStart(3, "0")
    })
    return removeCancel.map((ele) => {
      return !ele.isTotal ? (
        <>
          <TableCell>Order Id: {String(ele.id).padStart(3, "0")}</TableCell>
          <TableCell>{statusDetails[ele.status]}</TableCell>
          <TableCell>
            {ele.totaltime > 60 && Math.floor(ele.totaltime / 60) + " Min"}{" "}
            {ele.totaltime % 60} Sec
          </TableCell>
          <TableCell>
            {enableCancel.includes(ele.status) && (
              <Button
                onClick={() =>
                  dispatch(cancelOrder({ id: ele.id, status: "cancel" }))
                }
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
            )}
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>{ele.title}</TableCell>
          <TableCell colSpan={2}>{ele.totalOrder}</TableCell>
          <TableCell></TableCell>
        </>
      );
    });
  }, [orderData]);
  return (
    <Box mt={2} >
      <Container fixed>
        <Typography component="h1">
          <b>Main Section</b>
        </Typography>
        <Box mt={2}>
          <CustomTable
            columnData={columnData}
            rowData={rowData}
            isMainData={true}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MainSection;
