import {
  SfAccordionItem,
  SfButton,
  SfCounter,
  SfIconClose,
  SfIconChevronLeft,
  SfIconCheck,
  SfListItem,
  SfSelect,
  SfCheckbox,
} from "@storefront-ui/react";
import { Fragment, useState } from "react";
import classNames from "classnames";

const sortOptions = [
  { id: "sort1", label: "Price: Low to High", value: "price low to high" },
  { id: "sort2", label: "Price: High to Low", value: "price high to low" },
];

type FilterDetail = {
  id: string;
  label: string;
  value: string;
  counter?: number;
  link?: string;
};

type Node = {
  id: string;
  summary: string;
  type: string;
  details: FilterDetail[];
};

const filtersData: Node[] = [
  {
    id: "acc2",
    summary: "Category",
    type: "category",
    details: [
      {
        id: "CLOTHING",
        label: "Clothing",
        value: "clothing",
        counter: 30,
      },
      {
        id: "SHOES",
        label: "Shoes",
        value: "shoes",
        counter: 11,
      },
      {
        id: "ACCESSORIES",
        label: "Accessories",
        value: "accessories",
        counter: 56,
      },
      {
        id: "WEARABLES",
        label: "Wearables",
        value: "wearables",
        counter: 12,
      },
      {
        id: "FOOD_DRINKS",
        label: "Food & Drinks",
        value: "food and drinks",
        counter: 52,
      },
    ],
  },
  {
    id: "acc4",
    summary: "Brand",
    type: "checkbox",
    details: [
      { id: "b1", label: "Conroy", value: "conroy", counter: 10 },
      { id: "b2", label: "Goyette", value: "goyette", counter: 100 },
      { id: "b3", label: "Ledner & Ward", value: "lednerward", counter: 0 },
      { id: "b4", label: "Pacocha", value: "pacocha", counter: 3 },
    ],
  },
  
];

export default function FiltersSideBar() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [opened, setOpened] = useState<string[]>(
    filtersData.map((item) => item.id)
  );

  const isAccordionItemOpen = (id: string) => opened.includes(id);
  const isFilterSelected = (selectedValue: string) =>
    selectedFilters.includes(selectedValue);

  const handleFilterSelection = (selectedValue: string) => {
    if (selectedFilters.indexOf(selectedValue) > -1) {
      setSelectedFilters([
        ...selectedFilters.filter((value) => value !== selectedValue),
      ]);
    } else {
      setSelectedFilters([...selectedFilters, selectedValue]);
    }
  };

  const handleToggle = (id: string) => (open: boolean) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <aside className="w-full md:max-w-[376px]">
      <div className="flex items-center justify-between mb-4">
        <h4 className="px-2 font-bold typography-headline-4">
          Browse Products
        </h4>
        <button
          type="button"
          className="sm:hidden text-neutral-500"
          aria-label="Close filters panel"
        >
          <SfIconClose />
        </button>
      </div>
      <h5 className="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Sort by
      </h5>
      <div className="px-2">
        <SfSelect aria-label="Sorting">
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))
          }
        </SfSelect >
      </div>
      <h5 className="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Filter
      </h5>
      {filtersData.map((section) => (
        <Fragment key={section.id}>
          <SfAccordionItem
            onToggle={handleToggle(section.id)}
            open={isAccordionItemOpen(section.id)}
            summary={
              <div className="flex justify-between p-2 mb-2">
                <p className="mb-2 font-medium typography-headline-5">
                  {section.summary}
                </p>
                <SfIconChevronLeft
                  className={classNames(
                    "text-neutral-500",
                    `${
                      isAccordionItemOpen(section.id)
                        ? "rotate-90"
                        : "-rotate-90"
                    }`
                  )}
                />
              </div>
            }
          >
            {section.type === "category" && (
              <ul className="mt-2 mb-6">
                {section.details.map(
                  ({ id, link, label, counter }, categoryIndex) => (
                    <li key={id}>
                      <SfListItem
                        size="sm"
                        as="a"
                        href={link}
                        className={classNames(
                          "first-of-type:mt-2 rounded-md active:bg-primary-100",
                          {
                            "bg-primary-100 hover:bg-primary-100 font-medium":
                              categoryIndex === 0,
                          }
                        )}
                        slotSuffix={
                          categoryIndex === 0 && (
                            <SfIconCheck
                              size="sm"
                              className="text-primary-700"
                            />
                          )
                        }
                      >
                        <span className="flex items-center">
                          {label}
                          <SfCounter className="ml-2 typography-text-sm font-normal">
                            {counter}
                          </SfCounter>
                        </span>
                      </SfListItem>
                    </li>
                  )
                )}
              </ul>
            )}
            {section.type === "checkbox" &&
              section.details.map(({ label, value, counter }) => (
                <SfListItem
                  key={value}
                  as="label"
                  size="sm"
                  disabled={counter === 0}
                  className={classNames(
                    "px-1.5 bg-transparent hover:bg-transparent",
                    {
                      "font-medium": isFilterSelected(value),
                    }
                  )}
                  slotPrefix={
                    <SfCheckbox
                      className="flex items-center"
                      disabled={counter === 0}
                      value={value}
                      checked={isFilterSelected(value)}
                      onChange={(event) => {
                        handleFilterSelection(event.target.value);
                      }}
                    />
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
          </SfAccordionItem>
          <hr className="my-4" />
        </Fragment>
      ))}
      <div className="flex justify-between">
        <SfButton
          variant="secondary"
          className="w-full mr-3"
          onClick={handleClearFilters}
        >
          Clear all filters
        </SfButton>
        <SfButton className="w-full"
        >Show products</SfButton>
      </div>
    </aside>
  );
}
