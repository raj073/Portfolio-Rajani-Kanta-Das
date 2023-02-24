import React from "react";
import "./CarCruiseBD.css";
import car from "../../../assets/carcruisebd/car.png";
import car1 from "../../../assets/carcruisebd/car1.png";
import car2 from "../../../assets/carcruisebd/car2.png";
import car3 from "../../../assets/carcruisebd/car3.png";
import car4 from "../../../assets/carcruisebd/car4.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const CarCruiseBD = () => {
  return (
    <div className="my-3 mx-[5%] mt-20">
      <Link to={"/"} className="pb-5">
        <button
          class="bg-transparent hover:bg-blue-500 font-semibold
         text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Back to Home
        </button>
      </Link>
      {/* Header Text */}
      <div className="text-center mb-5">
        <h3
          className="text-4xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-cyan-500 to-blue-500 mb-5"
        >
          PROJECT DETAILS: CAR CRUISE BD
        </h3>{" "}
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500 mb-10" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mb-10">
        <PhotoProvider
          toolbarRender={({ rotate, onRotate }) => {
            return (
              <svg
                className="PhotoView-Slider__toolbarIcon"
                onClick={() => onRotate(rotate + 90)}
              />
            );
          }}
        >
          <PhotoView src={car1}>
            <img
              className="object-cover w-full border"
              src={car1}
              alt="Image1"
            />
          </PhotoView>
          <PhotoView src={car2}>
            <img
              className="object-cover w-full border"
              src={car2}
              alt="Image2"
            />
          </PhotoView>
          <PhotoView src={car3}>
            <img
              className="object-cover w-full border"
              src={car3}
              alt="Image3"
            />
          </PhotoView>
          <PhotoView src={car4}>
            <img
              className="object-cover w-full border"
              src={car4}
              alt="Image4"
            />
          </PhotoView>
        </PhotoProvider>
      </div>

      {/* Project Details Card */}
      <div className="grid place-items-center font-mono">
        <div className="rounded-md bg-gray-800 shadow-lg">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={car}
                alt="pic"
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold ml-4">Car Cruise BD</p>
              <hr className="hr-text" data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <p className="flex text-md px-4 my-2">
                  React.js | Firebase | Tailwind CSS | daisyUI | Node.js |
                  MongoDB
                </p>
              </div>
              <p className="ml-7">
                Online Car Reseller Website for buying and selling reconditioned
                or second-hand car
              </p>
              <p className="md:block px-4 my-4 text-sm text-left ml-8">
                <ul className="list-decimal">
                  <li>This is a Second-hand Car sale web Portal</li>
                  <li>
                    Here is the homepage you will find the different type car
                    brand category, customers testimonial, advertisement product
                    and featured blog and a dynamic dashboard
                  </li>
                  <li>
                    If anyone wants, he can click the car cruise bd details and
                    will find detail information about the portal.
                  </li>
                  <li>
                    In Buyer section Clicking category product details of
                    category product will open and from that anyone can book the
                    product and a buyer can add to wishlist the the product and
                    from dashboard payment will be done.
                  </li>
                  <li>
                    InSeller Section Seller can add a product and make
                    advertise.
                  </li>
                  <li>
                    Seller can view the product and also can delete the product.
                  </li>
                  <li>
                    Admin can add the seller and buyer and a reported items
                    route
                  </li>
                  <li>
                    Admin can make a seller verified. Once Verified it will be
                    shown in product page as verified.
                  </li>
                </ul>
              </p>

              <p className="flex text-md px-4 my-2 ml-2">
                Credentials Admin Email: rajoni@gmail.com
                <span className="font-bold px-2">|</span>
                Admin Password: 123456
              </p>

              <div className="text-xs">
                <a
                  href="https://car-cruise-bd.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    LIVE LINK
                  </button>
                </a>

                <a
                  href="https://github.com/raj073/Car-Cruise-BD-Client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    GITHUB CLIENT
                  </button>
                </a>

                <a
                  href="https://github.com/raj073/Car-Cruise-BD-Server"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="border font-bold border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    GITHUB SERVER
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center px-4 mb-4 w-full mt-5">
            <div className="flex">
              <i className="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i className="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i className="material-icons ml-2 text-yellow-600">
                sentiment_very_satisfied
              </i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCruiseBD;
