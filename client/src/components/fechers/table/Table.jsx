import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Table({ item }) {
  return (
    <MDBTable responsive bordered borderColor="primary" hover className=" mt-5">
      <MDBTableHead>
        <tr>
          <th scope="col">productName</th>
          <th scope="col">model</th>
          <th scope="col">orders</th>
          <th scope="col">price</th>
          <th scope="col">quantity</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {item.map((data, i) => {
          return (
            <tr key={i}>
              <td>{data.productName}</td>
              <td>{data.model}</td>
              <td>{data.orders}</td>
              <td>{data.price}</td>
              <td>{data.quantity}</td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  );
}
