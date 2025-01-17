"use client";
import { useEffect, useState } from "react";
import {
  SfButton,
  SfIconShoppingCart,
  SfIconPerson,
  SfIconExpandMore,
  SfInput,
  SfIconSearch,
  SfIconMenu,
} from "@storefront-ui/react";

export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: "",
      ariaLabel: "Cart",
      role: "button",
      onclick: () =>{
        window.location.href = "/cart";
      } 
    },
    {
      label: "Log in",
      icon: <SfIconPerson />,
      ariaLabel: "Log in",
      role: "login",
    },
  ];

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Successfully found 10 results for ${inputValue}`);
  };

  return (
    <header className="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 text-white border-0 bg-primary-700">
      <div className="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
        <a
          href="/products"
          aria-label="SF Homepage"
          className="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source
              srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg"
              media="(min-width: 768px)"
            />
            <img
              src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
              alt="Sf Logo"
              className="w-8 h-8 md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"
            />
          </picture>
        </a>
        <SfButton 
          aria-label="Open categories"
          className="lg:hidden order-first lg:order-1 mr-4 text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
          square
          variant="tertiary"
        >
          <SfIconMenu />
        </SfButton>
        <SfButton
          className="hidden lg:flex lg:mr-4 text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
          type="button"
          variant="tertiary"
          slotSuffix={<SfIconExpandMore className="hidden lg:block" />}
        >
          <span className="hidden lg:flex whitespace-nowrap">
            Browse products
          </span>
        </SfButton>
        <form
          role="search"
          className="flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0"
          onSubmit={search}
        >
          <SfInput
            value={inputValue}
            type="search"
            className="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapperClassName="flex-1 h-10 pr-0"
            size="base"
            slotSuffix={
              <span className="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  className="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            }
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
        <nav className="flex-1 flex justify-end lg:order-last lg:ml-4">
          <div className="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <SfButton
                key={actionItem.ariaLabel}
                className="mr-2 -ml-0.5 rounded-md text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
                // route to cart page
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                square
                slotPrefix={actionItem.icon}
                onClick={actionItem.onclick}
              >
                {actionItem.role === "login" && (
                  <p className="hidden xl:inline-flex whitespace-nowrap">
                    {actionItem.label}
                  </p>
                )}
              </SfButton>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
function setIsClient(arg0: boolean) {
  throw new Error("Function not implemented.");
}

