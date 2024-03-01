import { Form, Formik } from "formik"
import React from "react"
import { IoMdClose } from "react-icons/io"
import Input from "../generic/Input"
import Switch from "react-switch";

const Setting = ({ setOpen }) => {
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
              <h1 className="text-xl font-bold">Setting</h1>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
                <IoMdClose className="h-[20px] w-[20px]" />
              </button>
            </header>

            <body className="flex flex-col p-6">
              <div className="flex gap-3 mb-6 justify-between">
                <label for="email" className="font-medium">
                  Rewards
                </label>
                <Switch
                  onColor="#EA6A11"
                  onHandleColor="#FDF6E4"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  width={30}
                  height={10}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  className="react-switch "
                  id="material-switch"
                />
              </div>
              <Input
                label={"Points Per Dollar"}
                name={"points"}
                type={"points"}
                placeholder={"Points"}
                width={"100%"}
                errors={errors}
                touched={touched}
                showError={true}
              />

            </body>
            <div className="my-4 mb-8 flex items-center justify-center gap-3">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
                Cancel
              </button>
              <button
                onClick={() => { }}
                className="rounded-md bg-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Setting
