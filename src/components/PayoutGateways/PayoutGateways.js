import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import paypal from "../../img/paypal.png";
import payoneer from "../../img/payoneer.png";
import skrill from "../../img/skrill_logo 1.png";
import coolpay from "../../img/coolpay.png";
import goodbit from "../../img/goodbit.png";
const Payoutgateways = () => {
  return (
    <>
      <div className="container m-auto pb-36" data-aos='zoom-in'>
        <div className="w-4/5 mx-auto pb-16">
          <h1 className="xl:text-5xl pt-4 xl:pt-0 text-3xl text-gray-800 text-center font-extrabold mb-4">
            Payout Gateways
          </h1>
        </div>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          // sideSize={.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div>
            <img alt="" src={paypal} height="20px" width="20px" />
          </div>
          <div>
            <img alt="" src={payoneer} />
          </div>
          <div>
            <img alt="" src={goodbit} />
          </div>
          <div>
            <img alt="" src={skrill} />
          </div>
          <div>
            <img alt="" src={coolpay} />
          </div>
        </InfiniteCarousel>
      </div>
    </>
  );
};

export default Payoutgateways;
