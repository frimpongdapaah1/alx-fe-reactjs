import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert("User registered: " + JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <div>
          <label>Username:</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
