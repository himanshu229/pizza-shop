import { createSlice } from "@reduxjs/toolkit";
const addPizzaSlice = createSlice({
  name: "addPizza",
  initialState: {
    orders: [],
  },
  reducers: {
    confirmOrder: (state, { payload }) => {
      const order = [...state.orders];
      order.push({
        id: order.length + 1,
        ...payload,
        status: "placed",
        totaltime: 0,
      });
      state.orders = order;
    },
    updateOrderStatus: (state, { payload }) => {
      const order = [...state.orders].map((item) => {
        if (payload.id === item.id) {
          return {
            ...item,
            status: payload.status,
            totaltime: item.totaltime + payload.totaltime
          };
        }
        return item;
      });
      state.orders = order;
    },
    cancelOrder: (state, { payload }) => {
      const order = [...state.orders].map((item) => {
        if (payload.id === item.id) {
          return {
            ...item,
            status: payload.status,
          };
        }
        return item;
      });
      state.orders = order;
    },
  },
});

export const { confirmOrder, updateOrderStatus, cancelOrder } = addPizzaSlice.actions;
export default addPizzaSlice.reducer;
