import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../context/AppContext";

const Header = ({handleLogOut}) => {
  const { user } = useContext(Context);
  return (
    <>
      <Link to={'/'} className="text-base font-normal leading-[1.5] text-inherit no-underline items-center bg-none cursor-pointer inline-flex gap-2 absolute top-4 z-[90] h-12 box-border left-5">
        <div className=" relative after:content-[''] after:block after:h-0 after:w-1/2 after:absolute after:left-1/4 after:top-1/2 after:z-[1] after:shadow-[0_2px_12px_9px_rgba(0,0,0,0.3)]">
          <img
            src="/logo.white.svg"
            className=" text-[#fff] relative z-10 box-border w-[45px] h-[45px] fill-none overflow-hidden text-base font-normal leading-[1.5] cursor-pointer"
          />
        </div>
      </Link>
      <nav className="items-center justify-end flex gap-2 p-4 absolute right-0 top-0 z-50 box-border">
        <div className="flex gap-2 box-border">
          {user ? (
            <>
              <div className="items-center bg-white rounded-xl inline-flex text-sm font-medium gap-0 h-12 p-0 outline-1 outline outline-[rgba(0,0,0,.05)] leading-tight">
                <NavLink
                  to={"/transfers"}
                  className="pr-0 items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden sm:flex"
                >
                  Transfers
                </NavLink>
                <NavLink
                  to={"/pricing"}
                  className="pr-0 items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden md:flex"
                >
                  Pricing
                </NavLink>
                <NavLink className="pr-0 items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden lg:flex">
                  Branding
                </NavLink>
                <NavLink
                  to={"/contacts"}
                  className="items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden lg:flex"
                >
                  Contacts
                </NavLink>

                <span className="lg:hidden text-sm font-medium leading-[1.2] box-border">
                  <button className="text-[#353535] self-stretch flex leading-[1.25rem] py-[.875rem] px-[1.5rem] text-left whitespace-nowrap gap-1 items-center text-sm font-medium no-underline bg-none border-none box-border group/navSelector">
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M5.172 8 8 10.828 10.83 8"
                        className=" box-border w-4 h-4 overflow-hidden text-[#353535] leading-[1.25rem] text-left whitespace-nowrap text-sm font-medium"
                      ></path>
                    </svg>
                    <div className="group-hover/navSelector:visible fixed invisible top-0 left-0 translate-x-[calc(100vw-482px)] translate-y-[64px] z-[90] box-border text-[#676767] leading-[1.25rem] text-left whitespace-nowrap text-sm font-medium cursor-pointer">
                      <div className=" w-auto max-h-[617px] max-w-[887px] overflow-auto flex-col p-6  flex cursor-default flex-wrap min-w-[14rem] bg-[#f9f9f9] rounded-2xl box-border text-[#676767] leading-[1.25rem] text-left whitespace-nowrap text-sm font-medium mt-2 shadow-[0_32px_64px_0_rgba(0,0,0,0.2),_inset_0_1px_0_0_#fff,_inset_0_-1px_0_0_rgba(0,0,0,0.1)] transition-opacity duration-100 ease-in-out gap-6">
                        <NavLink
                          to={"/transfers"}
                          className="sm:hidden flex p-0 text-[#353535] items-center gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left"
                        >
                          Transfers
                        </NavLink>
                        <NavLink
                          to={"/pricing"}
                          className="md:hidden flex p-0 text-[#353535] items-center gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left"
                        >
                          Pricing
                        </NavLink>
                        <NavLink className=" p-0 text-[#353535] items-center flex gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left">
                          Branding
                        </NavLink>
                        <NavLink
                          to={"/contacts"}
                          className="lg:hidden flex p-0 text-[#353535] items-cente gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left"
                        >
                          Contacts
                        </NavLink>
                      </div>
                    </div>
                  </button>
                </span>
              </div>
              <div className=" items-center bg-white rounded-xl inline-flex text-sm font-medium gap-0 h-12 p-0 outline-1 outline outline-[rgba(0,0,0,.05)] leading-tight cursor-default ">
                <div className=" items-center self-center inline-flex box-border text-sm font-medium leading-tight">
                  <a
                    className=" text-[#8e21cc] items-center flex gap-1 leading-tight py-[.875rem] px-6 whitespace-normal text-sm font-medium decoration-[none] bg-none border-0 box-border"
                    href="/pricing"
                  >
                    <span className=" text-[16px] items-center inline-flex justify-center leading-none box-border text-[#8e21cc] whitespace-normal font-medium cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        className=" w-4 h-4 box-border overflow-hidden text-[16px] leading-none"
                        role="img"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M15.797 28.892c-.371.54-1.217.277-1.216-.378l.012-9.58H5.358a.667.667 0 0 1-.528-1.075l11.576-14.98c.389-.503 1.194-.228 1.194.407v9.78h7.8c.537 0 .853.602.55 1.045L15.796 28.89z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>{" "}
                    Upgrade
                  </a>
                </div>
                <div className=" items-center self-center inline-flex box-border text-sm font-medium leading-tight">
                  <span className="self-stretch flex box-border text-sm font-medium leading-tight  before:content-[''] before:block before:h-[60%] before:w-px before:bg-[#f1f1f1] before:m-0 group/accountSelector">
                    <div className=" text-[#353535] pr-2 self-stretch leading-tight text-left whitespace-nowrap items-center gap-1 text-sm font-medium decoration-[none] bg-none border-0 cursor-pointer box-border">
                      <div className="items-center flex gap-3 box-border text-[#353535] leading-tight text-left whitespace-nowrap text-sm font-medium cursor-pointer">
                        <div className="flex flex-col gap-0 box-border text-[#353535] leading-tight text-left whitespace-nowrap text-sm font-medium">
                          <div className=" text-inherit text-sm font-medium leading-tight max-w-48 text-ellipsis box-border block text-left whitespace-nowrap">
                            {user?.email}
                          </div>
                          <div className="text-[#676767] text-[10px] font-normal leading-tight box-border block  text-left whitespace-nowrap">
                            Free plan
                          </div>
                        </div>
                        <img
                          className=" rounded-[8px] h-8 w-8 box-border text-[#353535] leading-tight text-left whitespace-nowrap text-sm font-medium cursor-pointer"
                          src="https://helios-assets.wetransfer.net/default/team_placeholder_01.png"
                        ></img>
                      </div>

                      <div
                        className="fixed overflow-visible top-0 right-0 z-[90]  box-border text-[#676767] text-left  whitespace-nowrap leading-[1.25] text-sm font-medium cursor-pointer invisible group-hover/accountSelector:visible"
                        style={{ transform: "translate(-17px, 64px)" }}
                      >
                        <div className="w-auto max-h-[617px] max-w-[856px] overflow-auto transition-opacity cursor-default flex flex-row flex-wrap gap-6 mt-2 min-w-56 py-4 px-6 rounded-2xl bg-[#f9f9f9] box-border text-[#676767] text-left whitespace-nowrap leading-[1.25] text-sm font-medium opacity-0 group-hover/accountSelector:opacity-100 ">
                          <div className="flex flex-1 flex-col box-border text-sm font-medium leading-5 text-left whitespace-nowrap text-[#676767] cursor-default">
                            <div className=" text-sm font-medium leading-5 text-left whitespace-nowrap text-[#676767] cursor-default box-border flex flex-col gap-4 px-0 pt-1 pb-4">
                              <div className=" items-center cursor-default flex gap-2 justify-between p-0 box-border0">
                                <div className=" items-center flex gap-3 box-border cursor-default text-[#676767] leading-5  text-left whitespace-nowrap text-sm font-medium">
                                  <img
                                    className=" rounded-lg h-8 w-8 box-border cursor-default text-[#676767] leading-5 text-left whitespace-nowrap text-sm font-medium overflow-clip"
                                    src="https://helios-assets.wetransfer.net/default/team_placeholder_01.png"
                                  />
                                  <div className="flex flex-col gap-0 box-border cursor-default text-[#676767] leading-5 text-left font-medium whitespace-nowrap text-sm">
                                    <div className=" text-inherit text-sm font-medium leading-[1.2] max-w-48 overflow-hidden text-ellipsis box-border block cursor-default text-left whitespace-nowrap">
                                     {user?.email}
                                    </div>
                                    <div className=" text-[#676767] text-[10px] font-normal leading-[1.2] box-border block cursor-default text-left whitespace-nowrap">
                                      Free Plan
                                    </div>
                                  </div>
                                </div>
                                <span className=" text-inherit items-center inline-flex justify-center leading-[1] box-border cursor-default">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="none"
                                    className="h-[1em] w-[1em] box-border text-inherit leading-[1] cursor-default text-[#676767] text-left whitespace-nowrap font-medium"
                                    role="img"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.5"
                                      d="m6.667 14.889 7.86 7.778L25.332 9.333"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className=" text-sm font-medium leading-5 text-left whitespace-nowrap text-[#676767] cursor-default box-border border-t border-[#f1f1f1] py-2 px-0 block">
                              <a className=" pr-0 text-[#35353] py-3 px-0 items-center flex gap-1 leading-5 whitespace-normal text-sm font-medium no-underline box-border hover:text-[#353535]">
                                Workspace settings
                              </a>
                              <NavLink
                                to={"/account"}
                                className=" pr-0 text-[#35353] py-3 px-0 items-center flex gap-1 leading-5 whitespace-normal text-sm font-medium no-underline box-border hover:text-[#353535]"
                              >
                                Account settings
                              </NavLink>
                              <a className=" pr-0 text-[#35353] py-3 px-0 items-center flex gap-1 leading-5 whitespace-normal text-sm font-medium no-underline box-border hover:text-[#353535]">
                                Features
                              </a>
                              <a className=" pr-0 text-[#35353] py-3 px-0 items-center flex gap-1 leading-5 whitespace-normal text-sm font-medium no-underline box-border hover:text-[#353535]">
                                Help
                              </a>
                              <a className=" pr-0 text-[#35353] py-3 px-0 items-center flex gap-1 leading-5 whitespace-normal text-sm font-medium no-underline box-border hover:text-[#353535]">
                                Legal & Privacy
                              </a>
                            </div>
                            <div
                              className=" text-sm font-medium leading-5 text-left 
                      whitespace-nowrap text-[#676767] box-border border-t border-[#f1f1f1] py-2 px-0 pb-0"
                            >
                              <button
                                onClick={() => handleLogOut()}
                                className=" text-[#353535] whitespace-nowrap py-3 px-0 items-center flex gap-1 text-sm font-medium no-underline bg-none border-0 cursor-pointer box-border"
                              >
                                Log out
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="items-center bg-white rounded-xl inline-flex text-sm font-medium gap-0 h-12 p-0 outline-1 outline outline-[rgba(0,0,0,.05)] leading-tight">
                <NavLink className="pr-0 items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden sm:flex">
                  Features
                </NavLink>
                <NavLink
                  to={"/pricing"}
                  className="pr-0 items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden md:flex"
                >
                  Pricing
                </NavLink>
                <NavLink className="pr-0 items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden lg:flex">
                  Use cases
                </NavLink>
                <NavLink className="items-center gap-1 leading-tight whitespace-normal py-[0.875rem] px-6 text-sm font-medium text-[#353535] hidden lg:flex">
                  Resources
                </NavLink>

                <span className="lg:hidden text-sm font-medium leading-[1.2] box-border">
                  <button className="text-[#353535] self-stretch flex leading-[1.25rem] py-[.875rem] px-[1.5rem] text-left whitespace-nowrap gap-1 items-center text-sm font-medium no-underline bg-none border-none box-border group/navSelector">
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M5.172 8 8 10.828 10.83 8"
                        className=" box-border w-4 h-4 overflow-hidden text-[#353535] leading-[1.25rem] text-left whitespace-nowrap text-sm font-medium"
                      ></path>
                    </svg>
                    <div className="group-hover/navSelector:visible fixed invisible top-0 left-0 translate-x-[calc(100vw-482px)] translate-y-[64px] z-[90] box-border text-[#676767] leading-[1.25rem] text-left whitespace-nowrap text-sm font-medium cursor-pointer">
                      <div className=" w-auto max-h-[617px] max-w-[887px] overflow-auto flex-col p-6  flex cursor-default flex-wrap min-w-[14rem] bg-[#f9f9f9] rounded-2xl box-border text-[#676767] leading-[1.25rem] text-left whitespace-nowrap text-sm font-medium mt-2 shadow-[0_32px_64px_0_rgba(0,0,0,0.2),_inset_0_1px_0_0_#fff,_inset_0_-1px_0_0_rgba(0,0,0,0.1)] transition-opacity duration-100 ease-in-out gap-6">
                        <NavLink className="sm:hidden flex p-0 text-[#353535] items-center gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left">
                          Features
                        </NavLink>
                        <NavLink
                          to={"/pricing"}
                          className="md:hidden flex p-0 text-[#353535] items-center gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left"
                        >
                          Pricing
                        </NavLink>
                        <NavLink className=" p-0 text-[#353535] items-center flex gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left">
                          Use cases
                        </NavLink>
                        <NavLink
                          to={"/contacts"}
                          className="lg:hidden flex p-0 text-[#353535] items-cente gap-1 leading-5 whitespace-normal text-[15px] font-medium no-underline bg-none border-none cursor-pointer  box-border text-left"
                        >
                          Resources
                        </NavLink>
                      </div>
                    </div>
                  </button>
                </span>
              </div>

              <div className=" gap-6 pr-2 items-center bg-[#fff] rounded-[12px] inline-flex text-sm font-medium h-12 leading-[1.2] outline-1 outline outline-[rgba(0,0,0,.05)] p-0 box-border shadow-[0_4px_8px_0_rgba(0,0,0,0.05)]">
                <a
                  href={`${
                    import.meta.env.VITE_API_CLIENT_AUTH_URL
                  }/login?redirect_uri=${
                    import.meta.env.VITE_API_CLIENT_REDIRECT_URL
                  }`}
                  className="pr-0 text-[#353535] whitespace-nowrap items-center flex gap-1 leading-5 py-[.875rem] px-6 text-sm font-medium bg-none cursor-pointer"
                >
                  Log in
                </a>
                <a
                  href={`${
                    import.meta.env.VITE_API_CLIENT_AUTH_URL
                  }/signup?redirect_uri=${
                    import.meta.env.VITE_API_CLIENT_REDIRECT_URL
                  }`}
                  className=" whitespace-nowrap text-sm font-medium leading-[1] rounded-lg h-8 py-[.375rem] px-3 items-center shadow-none box-border cursor-pointer flex gap-2 justify-center outline-0 no-underline select-none w-fit bg-[#353535] border-0 text-[#f1f1f1] transition-all duration-150 ease-in-out"
                >
                  Sign up
                </a>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
