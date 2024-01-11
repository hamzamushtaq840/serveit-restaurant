import { ErrorMessage } from "formik"
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
}) => {
  return (
    <div style={{ width: width, marginTop: mt }} className={`relative`}>
      <label for="email" className="text-sm font-medium">
        {label}
      </label>
      <div class="mt-2">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={`focus:ring-focus ring-ring w-full rounded-lg border-0 px-2 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
        />
      </div>
      {showError && (
        <ErrorMessage
          name={name}
          component={div}
          className="absolute bottom-[10px] text-red-500"
        />
      )}
    </div>
  )
}

export default Input
