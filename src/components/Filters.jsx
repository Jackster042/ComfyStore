import React from "react";
import FormInput from "./FormInput";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  // const { meta } = useLoaderData();
  const { meta, params } = useLoaderData();
  // console.log(meta);
  // console.log(params);

  const { search, company, category, shipping, order, price } = params;

  return (
    <>
      <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* SEARCH */}
        <FormInput
          type="search"
          label="search product"
          size="input-sm"
          name="search"
          defaultValue={search}
        />
        <FormSelect
          label="select category"
          name="category"
          list={meta.categories}
          defaultValue={category}
          size="select-sm"
        />
        <FormSelect
          label="select company"
          name="company"
          list={meta.companies}
          defaultValue={company}
          size="select-sm"
        />
        <FormSelect
          label="sort by"
          name="order"
          list={["a-z", "z-a", "high", "low"]}
          defaultValue={order}
          size="select-sm"
        />

        {/* RANGE */}
        <FormRange
          label="select price"
          name="price"
          defaultValue={price}
          size="range-sm"
        />
        {/* CHECKBOX */}
        <FormCheckbox
          label="free shipping"
          name="shipping"
          defaultValue={shipping}
          size="checkbox-sm"
        />
        {/* BUTTONS */}
        <button type="submit" className="btn btn-primary btn-sm">
          search
        </button>
        <Link tp="/products" className="btn btn-accent btn-sm">
          reset
        </Link>
      </Form>
    </>
  );
}

export default Filters;
