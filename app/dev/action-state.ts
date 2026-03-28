export type DevActionState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const INITIAL_DEV_ACTION_STATE: DevActionState = {
  status: "idle",
  message: "",
};
