import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Landing = () => {
  const { isLoaded,  isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/upload");
    }
  }, [isSignedIn]);

  
  if (!isLoaded) return <Loader/>

  return (
    <div>
      <div>
        <header class="bg-white">
          <div class="mx-auto flex h-16  max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 border-b">
            <img
              alt="logo"
              loading="lazy"
              width="150"
              height="100"
              decoding="async"
              data-nimg="1"
              src="/logo.png"
            />
            <div class="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" class="hidden md:block">
                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/upload"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/upload"
                    >
                      Upload
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="flex items-center gap-4">
                <div class="sm:flex sm:gap-4">
                  <a
                    class="block rounded-md bg-primary px-5 py-2.5  text-sm font-medium text-white  transition hover:bg-blue-700"
                    href="/auth/register"
                  >
                    Get Started
                  </a>
                </div>
                <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span class="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section class=" bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-32  lg:flex ">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              <span class="text-primary">Upload, Save </span>and easily{" "}
              <span class="text-primary">Share</span> your files in one place
            </h1>
            <p class="mt-4 sm:text-xl/relaxed text-gray-500">
              Drag and drop your file directly on our cloud and share it with
              your friends secuarely with password and send it on email
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-primary px-12 py-3 text-sm  font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/auth/register"
              >
                Get Started
              </a>
              <a
                class="block w-full rounded px-12 py-3  text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
