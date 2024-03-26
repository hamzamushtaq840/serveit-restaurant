import { Form, Formik } from "formik"
import { default as React } from "react"
import { IoMdClose } from "react-icons/io"
import Input from "../../generic/Input"
import Select from "../../generic/Select"

const AddQuestion = ({ close }) => {
  return (
    <Formik
      // initialValues={initialValues}
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
              <h1 className="text-xl font-bold">Add Review Question</h1>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 hover:bg-secondary">
                <IoMdClose className="h-[20px] w-[20px]" />
              </button>
            </header>
            <div className="mx-5">
              <Input
                label={"Title"}
                name={"title"}
                type={"title"}
                placeholder={"Title"}
                width={"100%"}
                mt={"10px"}
              />
            </div>
            <div className="my-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => close()}
                className=" rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ">
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="rounded-md bg-primary px-6 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddQuestion
