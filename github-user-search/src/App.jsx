import Placeholder from "./components/Placeholder";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-10">
      <h1 className="text-3xl font-bold mb-2">GitHub User Search App</h1>
      <p className="text-gray-600 mb-8">Setup complete. Ready for development.</p>
      <Search />
      <div className="mt-8">
        <Placeholder />
      </div>
    </div>
  );
}

export default App;
