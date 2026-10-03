import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ModalState =
  | {
      type: "delete";
      id: number;
    }
  | {
      type: "error";
    }
  | {
      type: "success";
    };

const initialState = null as ModalState | null;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (_, action: PayloadAction<ModalState>) => {
      return action.payload;
    },

    closeModal: () => {
      return null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
