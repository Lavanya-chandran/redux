import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import RootLayout from "./components/RootLayout";
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"

import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        
      </Route>
      
    )
  );
  return (
    <div className="App" >
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;