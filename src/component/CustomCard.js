import { Button, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../store/addPizzaSlice";
const CustomCard = ({ item, status }) => {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let intervalId = null;
    if (status !== "done") {
      intervalId = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [minutes, seconds]);

  const isRed = React.useMemo(() => {
    if (item.size === "Small") {
      return minutes >= 3;
    } else if (item.size === "Medium") {
      return minutes >= 4;
    }else if(item.size === "Large"){
        return minutes >= 5;
    }
    return false;
  }, [minutes]);

  return (
    <Card
      sx={{
        width: 160,
        textAlign: "center",
        background: isRed ? "red" : "",
        borderRadius: 2,
        margin: "10px 0px",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, color: isRed ? "white" : "" }}
          color="text.secondary"
          gutterBottom
        >
          Order {String(item.id).padStart(3, "0")}
        </Typography>
        {status !== "done" && (
          <Typography
            sx={{ fontSize: 14, color: isRed ? "white" : "" }}
            color="text.secondary"
            gutterBottom
          >
            {minutes > 0 && minutes + " min"}{" "}
            {seconds < 10 ? `0${seconds}` : seconds} sec
          </Typography>
        )}
        <Button
          onClick={() =>
            dispatch(
              updateOrderStatus({
                id: item.id,
                status: status,
                totaltime: minutes * 60 + seconds,
              })
            )
          }
          variant="contained"
          color="info"
        >
          {status === "done" ? "Picked" : "Next"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default React.memo(CustomCard);
