import { Field, Form, Formik } from "formik"
import React from "react"
import { IoMdClose } from "react-icons/io"
import { addServer } from "../../utils/schema"
import Input from "../generic/Input"

const AddServerModal = ({ setOpen }) => {
  const initialValues = {
    fullName: "",
    email: "",
    tableColor: "",
    password: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addServer}
      onSubmit={fields => {
        setOpen(false)
      }}>
      {({ errors, touched, values, handleChange }) => (
        <Form className="fixed left-1/2 top-1/2 z-[50] inline-block h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 transform ">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="modalContainer z-[100] flex w-[43.70364583333333vw] min-w-[550px] flex-col rounded-lg bg-white">
            <header className="border-b p-5">
              <h1 className="text-xl font-bold">Add Server</h1>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
                <IoMdClose className="h-[20px] w-[20px]" />
              </button>
            </header>
            <body className="flex flex-col gap-4 p-6">
              <Input
                label={"Name"}
                name={"fullName"}
                // type={"text"}
                placeholder={"Full Name"}
                width={"100%"}
                errors={errors}
                touched={touched}
                showError={true}
              />
              <Input
                label={"Email Address"}
                name={"email"}
                type={"email"}
                placeholder={"Email"}
                width={"100%"}
                errors={errors}
                touched={touched}
                showError={true}
              />
              <div className="grid grid-cols-3 items-start gap-2 ">
                <div className="col-span-2">
                  <Input
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    placeholder={"Password"}
                    errors={errors}
                    touched={touched}
                    showError={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="colors"
                    id={"tableColor"}
                    name={"tableColor"}
                    className="mb-1 mt-1 flex items-center  gap-2 text-sm font-medium">
                    Assign Table Color{" "}
                    <div className=" text-[#ada9a9cc]">(optional)</div>
                  </label>
                  <div className="flex h-[40px] items-center justify-between rounded-lg border border-[#9E9E9E] px-2 text-gray-900 shadow-sm">
                    <span className="text-[#8D8D8D]">{values.tableColor}</span>
                    <input
                      id="tableColor"
                      name="tableColor"
                      onChange={e => {
                        handleChange(e)
                      }}
                      type="color"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </body>
            <div className="my-8 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setOpen(false)
                }}
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

export default AddServerModal
