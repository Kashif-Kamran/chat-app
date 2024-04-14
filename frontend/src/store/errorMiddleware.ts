import { Middleware, PayloadAction } from "@reduxjs/toolkit";

function isAsyncThunkRejectedAction(action: PayloadAction<void>) {
  return action.type.endsWith("/rejected");
}

const errorMiddleware: Middleware = (store) => (next) => (action: any) => {
  if (!isAsyncThunkRejectedAction(action)) return next(action);
  console.log(">> Error while dispatching reducer <<", action.payload);
  return next(action);
};

export default errorMiddleware;
