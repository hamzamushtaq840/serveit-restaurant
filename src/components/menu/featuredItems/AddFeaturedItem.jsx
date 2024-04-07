import { Form, Formik } from "formik"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import Select from "react-select"
import { addCategory } from "../../../utils/schema"
import Input from "../../generic/Input"

const AddFeaturedItem = ({ setCurrentTab, setOpen, errors, touched }) => {
  return (
    <div>
      <header className="border-b p-5">
        <h1 className="text-xl font-bold">Add Featured Item - 3</h1>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
          <IoMdClose className="h-[20px] w-[20px]" />
        </button>
      </header>
      <body className="flex flex-col p-6">
        <Input
          label={"Title of item"}
          name={"name"}
          type={"name"}
          placeholder={"i.e Best Burger In Town"}
          width={"100%"}
          errors={errors}
          touched={touched}
          showError={true}
        />
        <Input
          label={"Short Description"}
          name={"description"}
          type={"description"}
          placeholder={"i.e burger with fajitos and guacamole"}
          width={"100%"}
          errors={errors}
          touched={touched}
          showError={true}
          mt={"16px"}
        />
        <label
          htmlFor="colors"
          className="mb-1 mt-4 flex items-center gap-2 font-medium">
          Assign Menu Item{" "}
        </label>
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#eda677" : "#9E9E9E",
              borderWidth: "1px",
              padding: "2px 0 ",
            }),
          }}
          theme={theme => ({
            ...theme,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: "#9E9E9E",
            colors: {
              ...theme.colors,
              primary25: "#FDF0E7",
              primary: "#eda677",
            },
          })}
          isMulti={false}
          name="colors"
          options={[
            {
              value: "ocean",
              label: "Ocean",
            },
            {
              value: "blue",
              label: "Blue",
            },
            { value: "purple", label: "Purple" },
            {
              value: "red",
              label: "Red",
            },
            { value: "orange", label: "Orange" },
            { value: "yellow", label: "Yellow" },
            { value: "green", label: "Green" },
            { value: "forest", label: "Forest" },
            { value: "slate", label: "Slate" },
            { value: "silver", label: "Silver" },
          ]}
          className="basic-multi-select "
          classNamePrefix="select"
        />
      </body>
      <div className="my-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setCurrentTab("featured")}
          className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
          Back
        </button>
        <button
          onClick={() => {}}
          className="rounded-md bg-primary px-6 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Add
        </button>
      </div>
    </div>
  )
}

export default AddFeaturedItem
