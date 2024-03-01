import { Form, Formik } from "formik"
import React from "react"
import { IoMdClose } from "react-icons/io"
import Select from "react-select"
import Input from "../generic/Input"

const CreatePackage = ({ setOpen, fromEdit }) => {
  const initialValues = {
    imageUrl: "",
    name: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={addCategory}
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
              <h1 className="text-xl font-bold">{fromEdit ? 'Edit Package' : 'Create Package'}</h1>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
                <IoMdClose className="h-[20px] w-[20px]" />
              </button>
            </header>

            <body className="flex flex-col p-6">
              <Input
                label={"Package Name"}
                name={"name"}
                type={"name"}
                placeholder={"Name"}
                width={"100%"}
                errors={errors}
                touched={touched}
                showError={true}
              />

              <div className="flex gap-4 mt-3">
                <Input
                  label={"Amount"}
                  name={"amount"}
                  type={"amount"}
                  placeholder={"Minimum amount spent to avail this package"}
                  width={"50%"}
                />
                <Input
                  label={"Points"}
                  name={"points"}
                  type={"points"}
                  placeholder={"Points required for this package"}
                  width={"50%"}
                />
              </div>
              <label
                htmlFor="colors"
                className="mb-1 mt-4 flex items-center gap-2  text-sm font-medium">
                Select Menu Item{" "}
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
                onClick={() => setOpen(false)}
                type="button"
                className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
                Cancel
              </button>
              <button
                onClick={() => { }}
                className="rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Create
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default CreatePackage
