import { TextRevealTW } from "./h1.js";
import { FetchContact } from "./components/fetchContact.js";
function App() {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <TextRevealTW />
      <FetchContact />
    </div>
  );
}

export default App;
