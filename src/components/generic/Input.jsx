import { ErrorMessage, Field } from "formik"
import React from "react"

const Input = ({
  label,
  showError = false,
  name,
  onChange,
  type = "text",
  placeholder,
  width = "100%",
  mt,
  errors,
  touched,
}) => {
  return (
    <div style={{ width: width, marginTop: mt }} className={`relative`}>
      <label for="email" className="font-medium">
        {label}
      </label>
      <div class="mt-1">
        {!showError && (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-ring placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-focus sm:text-sm sm:leading-6`}
          />
        )}
        {showError && (
          <Field
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${errors[name] && touched[name]
                ? "ring-red-500  focus:ring-red-500"
                : "ring-ring  focus:ring-focus"
              }`}
          />
        )}
      </div>
      {showError && (
        <ErrorMessage
          name={name}
          component={"div"}
          className="absolute bottom-[-18px] text-[13px] text-red-500"
        />
      )}
    </div>
  )
}

export default Input
