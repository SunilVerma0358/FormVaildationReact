import React, { useState } from "react";

const FormValidation = () => {
  const [inputData, setInputData] = useState({
    Name: "",
    Phone: "",
    Password: "",
    ConfirmPassword: "",
    Email: "",
  });
  const [formError, setFormError] = useState({
    Name: "",
    Phone: "",
    Password: "",
    ConfirmPassword: "",
    Email: "",
  });
  const [Success, setSuccess] = useState(false);
  const inputControl = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      Phone: /^\d{10}$/,
      Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
      ConfirmPassword:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[a-zA-Z\d@]{8,}$/,
    };
    const error = {};
    if (!regex.name.test(inputData.name)) {
      error.name = "Name is invaild";
    }
    if (!regex.Phone.test(inputData.Phone)) {
      error.Phone = " Phone is invaild";
    }
    if (!regex.Password.test(inputData.Password)) {
      error.Password = " Password is invaild";
    }
    if (!regex.ConfirmPassword.test(inputData.ConfirmPassword)) {
      error.ConfirmPassword = "Confirm password is invaild";
    }
    if (inputData.Password !== inputData.ConfirmPassword) {
      error.ConfirmPassword = "confirm password is not match password";
    }
    setFormError(error);
    if (Object.keys(error).length === 0) {
      setSuccess(true);
    }
  };
  const handlePopupClose = () => {
    setSuccess(false);
    setInputData({
      Name: "",
      Phone: "",
      Password: "",
      ConfirmPassword: "",
      Email: "",
    });
    setFormError({
      Name: "",
      Phone: "",
      Password: "",
      ConfirmPassword: "",
      Email: "",
    });
  };
  // const handlePopupOk = () => {
  //   setSuccess(false);
  //   setInputData({
  //     Name: "",
  //     Phone: "",
  //     Password: "",
  //     ConfirmPassword: "",
  //     Email: "",
  //   });
  // };

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="bg-gray-600 rounded-lg border border-gray-900 px-3 py-5 text-center">
          <h2 className="font-bold text-center text-white text-[35px]">
            Form Validation
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 pt-6">
              <div>
                <input
                  onChange={inputControl}
                  type="text"
                  placeholder="Name"
                  className="border-white border rounded-md py-2 px-3 outline-none font-semibold text-gray-600 "
                  required
                  name="Name"
                  value={inputData.Name}
                />{" "}
                {formError.Name && (
                  <p className="text-red-600 mt-1">{formError.Name}</p>
                )}
              </div>
              <div>
                <input
                  onChange={inputControl}
                  type="number"
                  placeholder="Phone"
                  className="
                   border rounded-md py-2 px-3 outline-none font-semibold text-gray-600"
                  required
                  name="Phone"
                  value={inputData.Phone}
                />{" "}
                {formError.Phone && (
                  <p className=" text-red-600 mt-1">{formError.Phone}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <div>
                {" "}
                <input
                  onChange={inputControl}
                  type="password"
                  placeholder="Password"
                  className="border-white border rounded-md py-2 px-3  outline-none font-semibold text-gray-600"
                  required
                  name="Password"
                  value={inputData.Password}
                />{" "}
                {formError.Password && (
                  <p className="text-red-600 mt-1">{formError.Password}</p>
                )}
              </div>
              <div>
                {" "}
                <input
                  onChange={inputControl}
                  type="password"
                  placeholder="Confirm Password"
                  className="border-white border rounded-md py-2 px-3 outline-none font-semibold text-gray-600"
                  required
                  name="ConfirmPassword"
                  value={inputData.ConfirmPassword}
                />
                {formError.ConfirmPassword && (
                  <p className="text-red-600 mt-1">
                    {formError.ConfirmPassword}
                  </p>
                )}
              </div>
            </div>

            <input
              onChange={inputControl}
              type="email"
              placeholder="Your Email"
              className="border-white border rounded-md py-2 px-3 outline-none font-semibold text-gray-600 w-full mt-5 "
              required
              name="Email"
              value={inputData.Email}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white text-center mt-5 py-2 w-full rounded-lg hover:bg-blue-700 font-semibold "
            >
              Submit
            </button>
          </form>
          {Success && (
            <div className="bg-white px-4 py-3 rounded-md fixed top-[50%] left-[50%] translate-x-[-10%] translate-y-[50%]  ">
              <p className="text-black font-semibold text-center  ">
                Form submitted successfully
              </p>
              <div className="flex items-center gap-3 justify-center pt-5">
                {/* <button
                  onClick={handlePopupOk}
                  className="bg-blue-700 text-white rounded-lg px-3 py-2"
                >
                  Ok
                </button> */}
                <button
                  onClick={handlePopupClose}
                  className="bg-blue-700 text-white rounded-lg px-3 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FormValidation;
