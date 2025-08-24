import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
    alert("User registered successfully with Formik!");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-3 p-4 border rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold">Formik Registration Form</h2>

        <Field name="username" type="text" placeholder="Username" className="p-2 border rounded" />
        <ErrorMessage name="username" component="div" className="text-red-500" />

        <Field name="email" type="email" placeholder="Email" className="p-2 border rounded" />
        <ErrorMessage name="email" component="div" className="text-red-500" />

        <Field name="password" type="password" placeholder="Password" className="p-2 border rounded" />
        <ErrorMessage name="password" component="div" className="text-red-500" />

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
      </Form>
    </Formik>
  );
}
