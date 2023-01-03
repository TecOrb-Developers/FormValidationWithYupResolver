import * as Yup from "yup";


export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});



