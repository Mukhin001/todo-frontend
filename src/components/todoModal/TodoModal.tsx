import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeModal } from "../../features/modal/modalSlice";
import { modalContent } from "../containerTodo/type";
import Modal from "../modal/Modal";

interface Props {
  onDeleteTask: (id: number) => void;
}

const TodoModal = ({ onDeleteTask }: Props) => {
  const modal = useAppSelector((state) => state.modal.modal);
  const dispatch = useAppDispatch();

  if (!modal) {
    return null;
  }

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal onClose={() => handleClose}>
      <h3>{modalContent[modal.type].title}</h3>
      <p>{modalContent[modal.type].message}</p>
      {modal.type === "delete" ? (
        <div>
          <button onClick={() => handleClose}>Cancel</button>
          <button
            onClick={() => {
              onDeleteTask(modal.id);
              handleClose();
            }}
          >
            Delete
          </button>
        </div>
      ) : (
        <button onClick={() => handleClose}>OK</button>
      )}
    </Modal>
  );
};

export default TodoModal;
