import React, { useState } from "react"
import Dropzone from "react-dropzone"
import { IoMdClose } from "react-icons/io"
import Input from "../generic/Input"
import { Form, Formik } from "formik"
import Select from "react-select"
import Select2 from "../generic/Select"

const AssignWaiter = ({ setOpen }) => {
  const initialValues = {
    name: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={fields => {
        setOpen(false)
      }}>
      {({ errors, touched }) => (
        <Form className="fixed left-1/2 top-1/2 z-[50] inline-block h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 transform ">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="modalContainer z-[100] flex w-[43.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
            <header className="border-b p-5">
              <h1 className="text-xl font-bold">Assign Server To Tables</h1>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
                <IoMdClose className="h-[20px] w-[20px]" />
              </button>
            </header>
            <body className="flex flex-col p-6">
              <Select2
                label={"Sever"}
                name={"category"}
                options={["A", "B", "C", "D"]}
                placeholder={""}
                showError
                errors={errors}
                touched={touched}
              />
              <label
                htmlFor="colors"
                className="mb-1 mt-3 flex items-center font-medium">
                Select Tables
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
                name="colors"
                isMulti
                options={[
                  {
                    value: "1",
                    label: "1",
                  },
                  {
                    value: "2",
                    label: "2",
                  },
                ]}
                // onChange={selectedOptions => {
                //   const newInventoryItems = selectedOptions.map(option => ({
                //     name: option.value,
                //     quantity: "",
                //     units: "Grams (g)",
                //   }))
                //   setFieldValue("inventory", newInventoryItems)
                // }}
                // value={values.inventory.map(item => ({
                //   value: item.name,
                //   label: item.name,
                // }))}
                placeholder="Select Tables to Assign Server"
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </body>
            <div className="my-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="rounded-md bg-primary px-6 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Assign
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AssignWaiter
