"use client";
import React from "react";
import { Container, Row } from "reactstrap";

const WidgetsGenralContainer = () => {
  return (
    <Container fluid className='general-widget'>
      <Row>
        <div className='col-xxl-2 col-md-4 col-sm-6 box-col-4'>
          <div className='card online-order'>
            <div className='card-header pb-0'>
              <div className='d-flex'>
                <div className='order bg-light-primary'>
                  <svg>
                    <use href='../assets/svg/icon-sprite.svg#basket'></use>
                  </svg>
                </div>
                <div className='arrow-chart'>
                  <svg>
                    <use href='../assets/svg/icon-sprite.svg#arrow-chart-up'></use>
                  </svg>
                  <span className='font-success'>+5.4%</span>
                </div>
              </div>
              <div className='online'>
                <span>Online Sales </span>
                <h4 className='num-counter' data-target='36256'>
                  0
                </h4>
              </div>
            </div>
            <div className='card-body pt-0 ps-2 pe-2'>
              <div id='general-online-chart'> </div>
            </div>
          </div>
        </div>
        <div className='col-xxl-2 col-md-4 col-sm-6 box-col-4'>
          <div className='card online-order'>
            <div className='card-header pb-0'>
              <div className='d-flex'>
                <div className='order bg-light-secondary'>
                  <svg>
                    <use href='../assets/svg/icon-sprite.svg#delivery'></use>
                  </svg>
                </div>
                <div className='arrow-chart'>
                  <svg>
                    <use href='../assets/svg/icon-sprite.svg#arrow-chart'></use>
                  </svg>
                  <span className='font-danger'>-4.7%</span>
                </div>
              </div>
              <div className='online'>
                <span>Offline Sales</span>
                <h4 className='num-counter' data-target='12341'>
                  0
                </h4>
              </div>
            </div>
            <div className='card-body pt-0 ps-2 pe-2'>
              <div className='offline-chart' id='general-offline-chart'></div>
            </div>
          </div>
        </div>
        <div className='col-xxl-2 col-md-4 col-sm-5 box-col-4'>
          <div className='card online-order'>
            <div className='card-header pb-0'>
              <div className='d-flex'>
                <div className='order bg-light-success'>
                  <svg>
                    <use href='../assets/svg/icon-sprite.svg#increased'></use>
                  </svg>
                </div>
                <div className='arrow-chart'>
                  <svg>
                    <use href='../assets/svg/icon-sprite.svg#arrow-chart-up'></use>
                  </svg>
                  <span className='font-success'>+8.2%</span>
                </div>
              </div>
              <div className='online'>
                <span>Total Profit</span>
                <h4 className='num-counter' data-target='85478'>
                  0
                </h4>
              </div>
            </div>
            <div className='card-body pt-0 ps-2 pe-2'>
              <div className='revenue' id='general-revenue-chart'></div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default WidgetsGenralContainer;
