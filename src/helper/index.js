export const PizaType = [
  { key: "Veg", value: "Veg" },
  { key: "Non-Veg", value: "Non-Veg" },
];
export const PizaSize = [
  { key: "Small", value: "Small" },
  { key: "Medium", value: "Medium" },
  { key: "Large", value: "Large" },
];
export const PizaBase = [
  { key: "Thin", value: "Thin" },
  { key: "Thik", value: "Thik" },
];

export const columnData = [
  { value: "Order Id", key: "orderID" },
  { value: "Stage", key: "stage" },
  { value: "Total time spent (time from order placed)", key: "totalTime" },
  { value: "Action", key: "action" },
];

export const columnDataStage = [
  { value: "Order Placed", key: "orderPlaced" },
  { value: "Order in Making", key: "orderMaking" },
  { value: "Order Ready", key: "orderReady" },
  { value: "Order Picked", key: "orderPicked" },
];

export const statusDetails = {
  placed: "Order Placed",
  marking: "Order in Making",
  ready: "Order Ready",
  picked: "Order Picked",
  done: "Order Delivered"
};

export const enableCancel = ["placed", "marking"]
