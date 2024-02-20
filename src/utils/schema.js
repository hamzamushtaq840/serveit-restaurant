import * as Yup from "yup"

export const addCategory = Yup.object().shape({
  imageUrl: Yup.string(),
  name: Yup.string().required("Name is required"),
})

export const addKitchenUser = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
})
export const addServer = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
})
