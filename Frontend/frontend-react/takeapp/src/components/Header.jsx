import { useEffect } from "react";
import useTakeApp from "../store";



const Header = () => {

  // ejecutar loadConfigStore del store
  const loadConfigStore = useTakeApp((state) => state.loadConfigStore);

  useEffect( () => {
    loadConfigStore();
  } );


  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-3xl font-bold">TakeApp</h1>
    </header>
  );
}
export default Header;