import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

/*
Kesimpulan Alur Kerja
User klik tombol "Make priority" ➝ fetcher.Form mengirim permintaan PATCH.

React Router menangani action ➝ updateOrderAction dipanggil.

Fungsi updateOrder melakukan API request ➝ Order diperbarui di backend.

Komponen Order diperbarui ➝ Badge "Priority" muncul.
*/
