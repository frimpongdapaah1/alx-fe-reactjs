import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; 
  

function App() {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
