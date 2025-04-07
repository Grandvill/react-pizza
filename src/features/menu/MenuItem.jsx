// MenuItem.jsx
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const curentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = curentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="overflow-hidden bg-white shadow-md hover:shadow-xl">
      <div className="w-full">
        <img
          src={imageUrl}
          alt={name}
          className={`h-48 w-full object-cover px-1.5 py-1.5 ${soldOut ? "opacity-70 grayscale" : ""}`}
        />
      </div>
      <div className="p-6">
        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
        <p className="mb-4 text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>

        {soldOut ? (
          <p className="text-sm font-medium uppercase text-stone-500">
            SOLD OUT
          </p>
        ) : (
          <div className="space-y-4">
            <p className="font-medium text-blue-500">
              {formatCurrency(unitPrice)}
            </p>

            {isInCart ? (
              <div className="flex items-center gap-3">
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={curentQuantity}
                />
                <DeleteItem pizzaId={id} />
              </div>
            ) : (
              <div className="flex justify-center gap-3">
                <Button
                  type="small"
                  className="btn btn-primary btn-sm w-full rounded-md px-8 py-2"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
