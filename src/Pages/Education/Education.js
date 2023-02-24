import React from "react";

const Education = () => {
  return (
    <div className="my-5 mx-[10%] mt-3" id="education">
      <div className="text-center mb-5">
        <h3 className="text-4xl font-bold mb-5">EDUCATION</h3>{" "}
        <hr className="border-1 border-blue-500 cursor-pointer hover:border-orange-500 duration-500" />
      </div>

      <div className="py-10 mx-auto px-5">
        <div className="relative">
          <div className="border-r-4 border-black absolute h-full top-0"></div>

          <ul className="list-none m-0 p-0">
            <li className="mb-5">
              <div className="flex group items-center ">
                <div className="bg-gray-800 group-hover:bg-cyan-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div className="bg-black h-1 w-6 items-center ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                  <div className="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-white text-2xl text-left">
                      Bachelor of Science in Computer Science and Engineering
                    </h3>
                    <hr />
                    <div className="pb-4 text-sm text-gray-100 text-left">
                      <span className="text-lg">
                        Chittagong University of Engineering & Technology (CUET)
                      </span>
                      <h3 className="text-white text-left mt-2">
                        Passing Year: 2014
                      </h3>
                      <h3 className="text-white text-left mt-2">
                        CGPA : 3.27 (Scale 4.00)
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="mb-5">
              <div className="flex group items-center ">
                <div className="bg-gray-800 group-hover:bg-cyan-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div className="bg-black h-1 w-6 items-center ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                  <div className="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-white text-2xl text-left">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <hr />
                    <div className="pb-4 text-sm text-gray-100 text-left">
                      <span className="text-lg">
                        New Govt. Degree College, Rajshahi
                      </span>
                      <h3 className="text-white text-left mt-2">
                        Passing Year: 2009
                      </h3>
                      <h3 className="text-white text-left mt-2">
                        GPA: 5.00 (Scale 5.00)
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="mb-5">
              <div className="flex group items-center ">
                <div className="bg-gray-800 group-hover:bg-cyan-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div className="bg-black h-1 w-6 items-center ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                  <div className="order-1 space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-12/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-white text-2xl text-left">
                      Secondary School Certificate (SSC)
                    </h3>
                    <hr />
                    <div className="pb-4 text-sm text-gray-100 text-left">
                      <span className="text-lg">
                        Sabuj Kanan High School, Sirajganj
                      </span>
                      <h3 className="text-white text-left mt-2">
                        Passing Year: 2007
                      </h3>
                      <h3 className="text-white text-left mt-2">
                        GPA: 5.00 (Golden) (Scale 5.00)
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
