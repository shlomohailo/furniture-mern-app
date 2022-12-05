import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
 
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Card({ item }) {
   
  return (
    <MDBCard className="">
      <MDBCardImage
        src="/images/tv.avif"
        position="top"
        alt="..."
        style={{ height: "323px" }}
      />
      <MDBCardBody>
        <MDBCardTitle>
          {item.map((item) => {
            if (item.productName === "TV") {
              return item.productName;
            }
          })}
        </MDBCardTitle>
      
        <MDBBtn href="#">view full report</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
