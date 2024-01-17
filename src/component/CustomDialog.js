import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle
} from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { PizaBase, PizaSize, PizaType } from "../helper";
import CustomSelect from "./CustomSelect";
import { useDispatch } from "react-redux";
import { confirmOrder } from "../store/addPizzaSlice";

const validationSchema = Yup.object({
  types: Yup.string().required("Select an option"),
  size: Yup.string().required("Select an option"),
  base: Yup.string().required("Select an option"),
});

const CustomDialog = ({ setIsOpen, isOpen, isOrder }) => {
  const dispatch = useDispatch()
  const { touched, handleSubmit, handleBlur, handleChange, values, errors } =
    useFormik({
      initialValues: {
        types: "",
        size: "",
        base: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        dispatch(confirmOrder(values))
        setIsOpen(!isOpen)
      },
    });

  return (
    <Dialog
      open={isOpen}
      onClose={()=> isOrder && setIsOpen(!isOpen)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ minWidth: 320, width: 450 }}>
        {isOrder ? "Not taking any order for now":"Hey! Buddy Order Your Pizza"}
      </DialogTitle>
     {!isOrder && <DialogContent>
        <form onSubmit={handleSubmit}>
          <Box sx={{ paddingTop: 2 }}>
            <CustomSelect
              data={PizaType}
              label={"Types"}
              name={"types"}
              value={values.types}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              error={touched.types && Boolean(errors.types)}
              helperText={!!touched.types && !!errors.types ? errors.types : ""}
            />
          </Box>
          <Box sx={{ paddingTop: 2 }}>
            <CustomSelect
              data={PizaSize}
              label={"Size"}
              name={"size"}
              value={values.size}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              error={touched.size && Boolean(errors.size)}
              helperText={!!touched.size && !!errors.size ? errors.size : ""}
            />
          </Box>
          <Box sx={{ paddingTop: 2 }}>
            <CustomSelect
              data={PizaBase}
              label={"Base"}
              name={"base"}
              value={values.base}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              error={touched.base && Boolean(errors.base)}
              helperText={!!touched.base && !!errors.base ? errors.base : ""}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 2,
            }}
          >
            <Button onClick={()=>setIsOpen(!isOpen)} variant="contained" type="button" color="error">
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="success">
              Confirm
            </Button>
          </Box>
        </form>
      </DialogContent>}
    </Dialog>
  );
};

export default React.memo(CustomDialog);
