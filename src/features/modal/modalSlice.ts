import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ModalType = "delete" | "error" | "success";

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

interface ModalSliceState {
  modal: ModalState | null;
}

const initialState: ModalSliceState = {
  modal: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      state.modal = action.payload;
    },

    closeModal: (state) => {
      state.modal = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
