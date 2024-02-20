import React, { useState } from "react"
import Dropzone from "react-dropzone"
import { IoMdClose } from "react-icons/io"
import Input from "../generic/Input"
import Select from "react-select"
import { addCategory } from "../../utils/schema"
import { Form, Formik } from "formik"

const AddCategory = ({ setOpen }) => {
  const initialValues = {
    imageUrl: "",
    name: "",
  }
  const [file, setFile] = useState(null)

  const handleChange = file => {
    setFile(file)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addCategory}
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
              <h1 className="text-xl font-bold">Add Category</h1>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
                <IoMdClose className="h-[20px] w-[20px]" />
              </button>
            </header>
            <div className="w-full">
              <Dropzone onDrop={acceptedFiles => handleChange(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section
                    {...getRootProps()}
                    className="mx-6 mt-4 flex h-[250px] border-spacing-5 cursor-pointer items-center justify-center rounded border border-dashed border-black hover:border-primary">
                    <input
                      {...getInputProps()}
                      className="h-full w-full bg-red-400"
                    />
                    <div>
                      {!Array.isArray(file) && (
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      )}
                      {Array.isArray(file) && (
                        <div>
                          <img
                            className="max-h-[250px]"
                            src={
                              Array.isArray(file)
                                ? URL.createObjectURL(file[0])
                                : ""
                            }
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <body className="flex flex-col p-6">
              <Input
                label={"Category Name"}
                name={"name"}
                type={"name"}
                placeholder={"Name"}
                width={"100%"}
                errors={errors}
                touched={touched}
                showError={true}
              />
              <label
                htmlFor="colors"
                className="mb-1 mt-4 flex items-center gap-2  text-sm font-medium">
                Assign Menu Items{" "}
                <div className="text-xs text-[#ada9a9cc]">(optional)</div>
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
                isMulti
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
                className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="rounded-md bg-primary px-6 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Add
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddCategory
