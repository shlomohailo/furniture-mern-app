import React from "react";
import { VerticalBarChart } from "../../fechers/VerticalBarChart/VerticalBarChart";
import { dataContext } from "../../../context/dataContext";
import { useContext } from "react";
import { PieChart } from "../../fechers/PieChart/PieChart";
import { AreaChart } from "../../fechers/AreaChart/AreaChart";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { DoughnutChart } from "../../fechers/DoughnutChart/DoughnutChart";
import Table from "../../fechers/table/Table";
import Card from "../../fechers/Cards/Cards";
import ChatsSales from "../../fechers/ChartSales/ChartSales";
import "./dashborad.css";
import Navbar from "../../fechers/Navbar/Navbar";
function Dashboard() {
  const { products, orders, sales, cities } = useContext(dataContext);

  return (
    <div id="body">
      
      <Navbar/>

      <MDBContainer fluid className="mt-2">
        <MDBRow className="lg-mt-5 lg-mb-5 justify-content-center  ">
          <MDBCol
            id="verChart"
            className="justify-content-end  d-flex col-lg-5 mx-1 shadow"
          >
            <VerticalBarChart item={orders} />
          </MDBCol>
          <MDBCol className="pieChart justify-content-center  d-flex col-lg-5 mx-1 ">
            <PieChart item={products} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow className=" m-5">
          <MDBCol className="d-flex flex-column  ">
            <MDBCol className="d-flex flex-row">
              <MDBCol className="big ">
                <div className="small ">
                  <div className="circle">388</div>
                </div>
              </MDBCol>
              <MDBCol>
                <div className="small">
                  <div className="circle">722</div>
                </div>
              </MDBCol>
            </MDBCol>
            <MDBCol className="d-flex flex-row">
              <MDBCol>
                <div className="small">
                  <div className="circle">358</div>
                </div>
              </MDBCol>
              <MDBCol>
                <div className="small">
                  <div className="circle">455</div>
                </div>
              </MDBCol>
            </MDBCol>
          </MDBCol>
          <MDBCol id="orders" className=" justify-content-center d-flex ">
            <AreaChart item={cities} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className="CardContainer mb-5">
        <MDBRow className=" d-flex flex-wrap col-lg-12 col-9 small-mb-1">
          <MDBCol className="cards ">
            <Card item={products} />
          </MDBCol>
          <MDBCol className="cards">
            <Card item={products} />
          </MDBCol>
          <MDBCol className="cards">
            <Card item={products} />
          </MDBCol>
          <MDBCol className="cards">
            <Card item={products} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow className="doughnutChartRow">
          <MDBCol className="doughnutChart">
            <DoughnutChart item={products} />
          </MDBCol>
          <MDBCol className="status">
            <h1>Thursday</h1>
            <p>Past Status</p>
            <p>Last Month: Friday</p>
            <p>Last week: Monday</p>
            <p>2 Week Ago: Thursday</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow className="">
          <MDBCol>
            <Table item={products} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="d-flex justify-content-center ">
        <div id="chanSales">
          <ChatsSales item={sales} />
        </div>
      </MDBContainer>
    </div>
  );
}

export default Dashboard;
