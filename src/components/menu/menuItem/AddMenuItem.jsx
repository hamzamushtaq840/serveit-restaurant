import { Form, Formik } from "formik"
import React, { useState } from "react"
import Dropzone from "react-dropzone"
import { IoMdClose } from "react-icons/io"
import { MdDeleteOutline } from "react-icons/md"
import Select from "react-select"
import Creatable from "react-select/creatable"
import Input from "../../generic/Input"
import Select2 from "../../generic/Select"

const AddMenuItem = ({ setOpen }) => {
  const initialValues = {
    imageUrl: "",
    name: "",
    description: "",
    category: "",
    price: "",
    salePrice: "",
    options: [],
    inventory: [],
  }
  const [file, setFile] = useState(null)

  const handleChange = file => {
    setFile(file)
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={addCategory}
      onSubmit={fields => {
        setOpen(false)
      }}>
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="fixed left-1/2 top-1/2 z-[50] inline-block h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 transform ">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="modalContainer z-[100] flex max-h-[95vh] w-[43.70364583333333vw] min-w-[550px] flex-col overflow-auto rounded-lg bg-white">
            <header className="border-b p-5">
              <h1 className="text-xl font-bold">Add Menu Item</h1>
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
                label={"Item Name"}
                name={"name"}
                type={"name"}
                placeholder={"Name"}
                width={"100%"}
                errors={errors}
                touched={touched}
                showError={true}
              />
              <Input
                label={"Item Description"}
                name={"name"}
                type={"name"}
                placeholder={"Description"}
                width={"100%"}
                mt={"10px"}
                errors={errors}
                touched={touched}
                showError={true}
                component="textarea"
                rows={5}
              />

              <div className="mt-2 flex gap-3">
                <div className="w-1/2">
                  <Select2
                    label={"Category"}
                    name={"category"}
                    options={["A", "B", "C", "D"]}
                    placeholder={""}
                    showError
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <Input
                  label={"Price"}
                  name={"name"}
                  type={"name"}
                  placeholder={"$"}
                  width={"50%"}
                  errors={errors}
                  touched={touched}
                  showError={true}
                />
              </div>

              {values.options.map((option, index) => (
                <div>
                  <label
                    htmlFor="colors"
                    className="mb-1 mt-3 flex items-center gap-2 font-medium">
                    Select Option
                  </label>
                  <div className="flex w-full items-center justify-between gap-1">
                    <Creatable
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
                          value: "Size",
                          label: "Size",
                        },
                        {
                          value: "Pieces",
                          label: "Pieces",
                        },
                      ]}
                      placeholder="Size"
                      onChange={newValue => {
                        let tempOptions = [...values.options]
                        tempOptions[index].optionName = newValue
                          ? newValue.value
                          : "" // Assuming newValue is an object with a value property
                        setFieldValue("options", tempOptions)
                      }}
                      value={{
                        value: option.optionName,
                        label: option.optionName,
                      }}
                      className="basic-multi-select w-[95%]"
                      classNamePrefix="select"
                    />
                    <MdDeleteOutline
                      onClick={() => {
                        setFieldValue(
                          "options",
                          values.options.filter((_, i) => i !== index)
                        )
                      }}
                      className="h-6 w-6 cursor-pointer text-red-400 hover:text-red-500"
                    />
                  </div>

                  {values.options[index].optionName !== "" && (
                    <div className="flex flex-col">
                      {values.options[index].options.map((o, i) => (
                        <div className="ml-2 mt-2 flex items-center gap-4">
                          <span className="mr-2 w-3 pt-6 font-semibold">
                            {i + 1}.
                          </span>
                          <div className="flex w-[33%] flex-col">
                            <label for="email" className="text-sm font-medium">
                              Name
                            </label>
                            <div class="mt-1">
                              <input
                                placeholder={"i.e Small, Medium or  Large"}
                                className={`w-full rounded-lg border-0 px-2 py-1 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
                              />
                            </div>
                          </div>
                          <div className="flex w-[33%] flex-col">
                            <label for="email" className="text-sm font-medium">
                              Price
                              <span className="text-xs text-grey ">
                                &nbsp; (Optional)
                              </span>
                            </label>
                            <div class="mt-1">
                              <input
                                className={`w-full rounded-lg border-0 px-2 py-1 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
                              />
                            </div>
                          </div>

                          {i !== 0 && (
                            <MdDeleteOutline
                              onClick={() => {
                                let temp = [...values.options]
                                temp[index].options = temp[
                                  index
                                ].options.filter((_, j) => j !== i)
                                setFieldValue("options", temp)
                              }}
                              className="mt-6 h-6 w-6 cursor-pointer text-red-400 hover:text-red-500"
                            />
                          )}
                        </div>
                      ))}
                      <span
                        onClick={() => {
                          let temp = [...values.options]
                          temp[index].options = [
                            ...temp[index].options,
                            { name: "", price: "" },
                          ]
                          setFieldValue("options", temp)
                        }}
                        className="ml-1 mt-2 flex cursor-pointer justify-end text-sm text-blue-500 hover:underline">
                        &nbsp;Add another variant
                      </span>
                    </div>
                  )}
                </div>
              ))}

              <span
                onClick={() => {
                  let temp = [...values.options]
                  temp.push({
                    optionName: "",
                    options: [{ optionValue: "", price: "" }],
                  })
                  setFieldValue("options", temp)
                }}
                className="mt-3 cursor-pointer text-sm font-medium text-primary hover:underline">
                {values.options.length === 0
                  ? "Add option"
                  : "Add another option"}
              </span>

              <label
                htmlFor="colors"
                className="mb-1 mt-3 flex items-center font-medium">
                Select Inventory
                <span className="text-xs text-grey ">&nbsp; (Optional)</span>
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
                    value: "Chicken",
                    label: "Chicken",
                  },
                  {
                    value: "Bun",
                    label: "Bun",
                  },
                ]}
                onChange={selectedOptions => {
                  const newInventoryItems = selectedOptions.map(option => ({
                    name: option.value,
                    quantity: "",
                    units: "Grams (g)",
                  }))
                  setFieldValue("inventory", newInventoryItems)
                }}
                value={values.inventory.map(item => ({
                  value: item.name,
                  label: item.name,
                }))}
                placeholder="Select Inventory Used For this item"
                className="basic-multi-select"
                classNamePrefix="select"
              />

              {values.inventory.map((v, i) => {
                return (
                  <div className="mt-2 flex items-center gap-4">
                    <span className="w-4 pt-7">{i + 1}.</span>
                    <div className="flex w-[33%] flex-col">
                      <label for="email" className="text-sm font-medium">
                        Name
                      </label>
                      <div class="mt-1">
                        <input
                          disabled
                          value={v.name}
                          placeholder={"i.e Small"}
                          className={`w-full cursor-not-allowed rounded-lg border-0 px-2 py-1 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div className="flex w-[33%] flex-col">
                      <label for="email" className="text-sm font-medium">
                        Quantity
                      </label>
                      <div class="mt-1">
                        <input
                          placeholder="Qty used on this item"
                          className={`w-full rounded-lg border-0 px-2 py-1 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>
                    <div className="flex w-[33%] flex-col">
                      <label for="email" className="text-sm font-medium">
                        Units
                      </label>
                      <div class="mt-1">
                        <input
                          value={v.units}
                          disabled
                          className={`w-full cursor-not-allowed rounded-lg border-0 px-2 py-1 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
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
                Add
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default AddMenuItem
