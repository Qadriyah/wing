"use client";
import React from "react";
import moment from "moment";
import Image from "next/image";
import { OrderType } from "../types/entities";
import { convertTimeToHoursMin, formatCurrency } from "../utils/helpers";

const OrderList = () => {
  const [orders, setOrders] = React.useState<OrderType[]>([]);
  const [slicedOrders, setSlicedOrders] = React.useState<OrderType[]>([]);

  const rowsPerPage = 5;
  const pageCount = Math.ceil(orders.length / rowsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  const sliceData = React.useCallback(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return orders.slice(startIndex, endIndex);
  }, [currentPage, orders]);

  const handleChangePage = (event: React.MouseEvent<HTMLDivElement>) => {
    const page = event.currentTarget.innerText;
    setCurrentPage(+page);
  };

  React.useEffect(() => {
    (async () => {
      const { default: data } = await import(`@/data/orders.json`);
      const sliced = sliceData();
      setOrders(data);
      setSlicedOrders(sliced);
    })();
  }, [sliceData, currentPage]);

  return (
    <div className="rounded-lg border border-[#DCDFE4] min-w-[200px] overflow-scroll">
      <table className="w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Date</th>
            <th>Time spent</th>
            <th>Order Value</th>
            <th>Commission</th>
          </tr>
        </thead>
        <tbody>
          {slicedOrders.map((order) => (
            <tr key={order.id}>
              <td>
                <div className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={order.thumbnail}
                      width={40}
                      height={40}
                      alt="thumb"
                    />
                  </div>
                  <p>{order.product}</p>
                </div>
              </td>
              <td>
                <div>
                  <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                    {moment(order.date).format("DD MMM 'YYYY")}
                  </p>
                  <p className="text-[0.75rem] font-normal">
                    {moment(order.date).format("hh:mm A")}
                  </p>
                </div>
              </td>
              <td className="text-ellipsis overflow-hidden whitespace-nowrap">
                {convertTimeToHoursMin(
                  moment(order.delivered).diff(order.date)
                )}
              </td>
              <td>{formatCurrency(order.quantity * order.price)}</td>
              <td>{formatCurrency(order.commission)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-5 float-right">
        <div className="flex gap-1">
          {Array.from({ length: pageCount }).map((el, i) => (
            <div
              key={i}
              className={`rounded-lg w-10 h-10 flex justify-center items-center hover:bg-gray-200 cursor-pointer ${
                currentPage === i + 1 ? "border border-blue-500" : ""
              }`}
              onClick={handleChangePage}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
