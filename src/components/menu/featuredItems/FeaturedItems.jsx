import { Form, Formik } from "formik"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import Select from "react-select"
import { addCategory } from "../../../utils/schema"
import Input from "../../generic/Input"
import SelectFeatured from "./SelectFeatured"
import AddFeaturedItem from "./AddFeaturedItem"

const FeaturedItems = ({ setOpen }) => {
  const [currentTab, setCurrentTab] = useState("featured")

  const render = {
    featured: (
      <SelectFeatured setCurrentTab={setCurrentTab} setOpen={setOpen} />
    ),
  }

  const initialValues = {
    imageUrl: "",
    name: "",
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
            {currentTab === "featured" && (
              <SelectFeatured setCurrentTab={setCurrentTab} setOpen={setOpen} />
            )}
            {currentTab === "add" && (
              <AddFeaturedItem
                setOpen={setOpen}
                errors={errors}
                setCurrentTab={setCurrentTab}
                touched={touched}
              />
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FeaturedItems
