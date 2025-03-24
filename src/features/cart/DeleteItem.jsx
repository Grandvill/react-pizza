import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div>
      {/* dispatch disini digunakan untuk mengimport action deleteItem pada cartSlice yang sudah di export */}
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
