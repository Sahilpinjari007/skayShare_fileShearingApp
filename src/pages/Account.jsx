import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";

const Account = () => {
  const { setPageOpen, setPricingPage } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "Sahil",
    surname: "Pinjari",
    email: "sahilpinjari51209@gmail.com",
  });

  const [inputsFocuse, setInputsFocuse] = useState({
    input1: false,
    input2: false,
    input3: false,
  });

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(false);
  });
  return (
    <div className="pb-6 min-h-[calc(100%-4.0625em)] pt-[3.5em] px-[80px] relative my-0 mx-auto max-w-[80rem]">
      <div className="flex flex-wrap max-w-[80rem] my-0 mx-auto gap-[1.5em]">
        <div className=" font-normal flex-grow-[2] box-border">
          <div className=" box-border font-normal">
            <div className="mb-[1em] flex flex-col gap-[10px] box-border">
              <span className=" text-sm font-medium leading-[150%] text-[#707070] uppercase pb-[1rem] tracking-[.1em] box-border">
                Sahil Pinjari
              </span>
              <div className="flex items-center flex-row gap-[1.5rem] justify-between box-border font-normal">
                <h1 className="text-[36px] font-bold leading-[120%] text-[#161616]">
                  Profile and security
                </h1>
              </div>
              <div className="mt-0 h-[1px] w-full bg-[#d6d6d6] box-border"></div>
            </div>

            <div className="flex flex-col gap-6 mt-6 items-start self-stretch">
              <p className="text-[20px] text-[#161616] font-bold m-0 leading-[1.5em]">
                Profile
              </p>
              <form className="w-full">
                <div className="mb-5 relative box-border">
                  <input className="bottom-0 h-[1px] left-0 opacity-0 absolute w-[1px]" />
                  <div className=" bg-[rgba(236,219,204)] inline-flex align-top mr-5 w-[5rem] h-[5rem] justify-center items-center rounded-[50%] overflow-hidden box-border">
                    <abbr
                      title="Sahil Pinjari"
                      className="text-[2.125rem] leading-[1] font-bold uppercase no-underline text-[rgba(102,58,0)]"
                    >
                      SP
                    </abbr>
                  </div>
                  <div className=" inline-block absolute top-[50%] translate-y-[-50%] align-top box-border">
                    <button className="mt-0 inline-block mb-0 static mr-[.625rem] items-center rounded-2xl shadow-none box-border cursor-pointer text-base font-medium h-12 leading-[1] p-4 outline-0 no-underline select-none w-fit transition-[all] duration-[150ms] ease-[cubic-bezier(.4,0,.2,1)] bg-transparent border border-[#3767ea] text-[#3767ea]">
                      Upload avatar
                    </button>
                    <button className="mt-0 inline-block mb-0 static mr-[.625rem] items-center rounded-2xl shadow-none box-border cursor-pointer text-base font-medium h-12 leading-[1] p-4 outline-0 no-underline select-none w-fit transition-[all] duration-[150ms] ease-[cubic-bezier(.4,0,.2,1)] bg-transparent border border-[#3767ea] text-[#3767ea] opacity-[.4] pointer-events-none">
                      Delete avatar
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-[.625rem] box-border font-normal">
                  <div>
                    <div
                      className={`h-[56px] items-center bg-[#ff] border-0 rounded-2xl text-[#161616] flex text-base font-normal gap-2 leading-[1.2] m-[2px] outline-none px-4 relative transition-[all] duration-[150ms] ease-[cubic-bezier(.4,0,.2,1)]
                    ${
                      inputsFocuse.input1
                        ? "shadow-[0_0_0_2px_#353535]"
                        : "shadow-[0_0_0_1px_#d6d6d6]"
                    }`}
                    >
                      <label className="flex flex-col flex-grow gap-[1px] relative w-full text-base font-normal leading-[1.2]">
                        <sapn className="text-[12px] font-normal leading-[1.2] pt-[2px] text-[#676767]  w-full box-border transition-[font-size,padding-top] duration-[200ms] ease-in-out">
                          First name
                        </sapn>
                        <input
                          onFocus={() =>
                            setInputsFocuse({ ...inputsFocuse, input1: true })
                          }
                          onBlur={() =>
                            setInputsFocuse({ ...inputsFocuse, input1: false })
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                          value={formData.name}
                          name="name"
                          type="text"
                          className="opacity-100 p-0 appearance-none bg-none text-base font-normal h-full leading-[1.5] outline-0 w-full"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <div
                      className={`h-[56px] items-center bg-[#ff] border-0 rounded-2xl text-[#161616] flex text-base font-normal gap-2 leading-[1.2] m-[2px] outline-none px-4 relative transition-[all] duration-[150ms] ease-[cubic-bezier(.4,0,.2,1)]
                    ${
                      inputsFocuse.input2
                        ? "shadow-[0_0_0_2px_#353535]"
                        : "shadow-[0_0_0_1px_#d6d6d6]"
                    }`}
                    >
                      <label className="flex flex-col flex-grow gap-[1px] relative w-full text-base font-normal leading-[1.2]">
                        <sapn className="text-[12px] font-normal leading-[1.2] pt-[2px] text-[#676767]  w-full box-border transition-[font-size,padding-top] duration-[200ms] ease-in-out">
                          Surname
                        </sapn>
                        <input
                          onFocus={() =>
                            setInputsFocuse({ ...inputsFocuse, input2: true })
                          }
                          onBlur={() =>
                            setInputsFocuse({ ...inputsFocuse, input2: false })
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                          value={formData.surname}
                          name="surname"
                          type="text"
                          className="opacity-100 p-0 appearance-none bg-none text-base font-normal h-full leading-[1.5] outline-0 w-full"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <div
                      className={`h-[56px] items-center bg-[#ff] border-0 rounded-2xl text-[#161616] flex text-base font-normal gap-2 leading-[1.2] m-[2px] outline-none px-4 relative transition-[all] duration-[150ms] ease-[cubic-bezier(.4,0,.2,1)]
                    ${
                      inputsFocuse.input3
                        ? "shadow-[0_0_0_2px_#353535]"
                        : "shadow-[0_0_0_1px_#d6d6d6]"
                    }`}
                    >
                      <label className="flex flex-col flex-grow gap-[1px] relative w-full text-base font-normal leading-[1.2]">
                        <sapn className="text-[12px] font-normal leading-[1.2] pt-[2px] text-[#676767]  w-full box-border transition-[font-size,padding-top] duration-[200ms] ease-in-out">
                          Email adress
                        </sapn>
                        <input
                          onFocus={() =>
                            setInputsFocuse({ ...inputsFocuse, input3: true })
                          }
                          onBlur={() =>
                            setInputsFocuse({ ...inputsFocuse, input3: false })
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                          value={formData.email}
                          name="email"
                          type="text"
                          className=" opacity-100 p-0 appearance-none bg-none text-base font-normal h-full leading-[1.5] outline-0 w-full"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4 box-border">
                  <button className=" opacity-[.4] pointer-events-none items-center rounded-2xl box-border cursor-pointer flex text-base font-medium gap-2 h-12 justify-center leading-[1] outline-0 p-4 no-underline select-none w-fit bg-[#3767ea] bottom-0 text-[#f5f8ff] transition-[all] duration-[150ms] ease-[cubic-bezier(.4,0,.2,1)]">
                    Save changes
                  </button>
                </div>
              </form>
              <div className="h-[1px] w-full bg-[#d6d6d6] box-border"></div>
              <p className="text-[20px] text-[#161616] font-bold m-0 leading-[1.5em]">
                Password and security
              </p>
              <div className=" font-normal box-border">
                <div className="text-[#484a4d] box-border font-normal">
                  <h3 className="my-4 box-border text-[1.17em] block font-bold text-[#484a4d]">
                    Change your password
                  </h3>
                  <p className="text-[.875em] leading-[1.5em] box-border text-[#484a4d] font-normal">
                    {
                      " Need a little (password) change? We got you. Just hit the button below and we’ll send an email to "
                    }{" "}
                    <span className="text-[#17181a] box-border text-[.875em] leading-[1.5em] font-normal">
                      sahilpinjari51209@gmail.com
                    </span>{" "}
                    {" with a link to change your password."}
                  </p>
                  <button className="bg-[#5268ff] text-[#fff] cursor-pointer font-medium border-0 rounded-[5px] text-[.875em] h-[3.5714285714em] mt-[1.2857142857em] py-0 px-[1.2857142857em] relative no-underline box-border transition-[border-color_.2s_cubic-bezier(.77,0,.175,1),background-color_.2s_cubic-bezier(.77,0,.175,1),color_.2s_cubic-bezier(.77,0,.175,1)] hover:bg-[#3741d9]">
                    Send email
                  </button>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#d6d6d6] box-border"></div>
              <p className="text-[20px] text-[#161616] font-bold m-0 leading-[1.5em]">
                Account
              </p>
              <div>
                <p className="text-[.875em] leading-6 mt-0 box-border font-normal">
                  If you choose to delete your WeTransfer account, all your
                  data, settings, and content will be permanently lost. This
                  action cannot be undone.
                </p>
                <button className="bg-[#e65050] text-[#fff] cursor-pointer font-medium border-0 rounded-[5px] text-[.875em] h-[3.5714285714em] mt-[1.2857142857em] py-0 px-[1.2857142857em] relative no-underline transition-[border-color_.2s_cubic-bezier(.77,0,.175,1),background-color_.2s_cubic-bezier(.77,0,.175,1),color_.2s_cubic-bezier(.77,0,.175,1)] box-border">
                  Delete account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
