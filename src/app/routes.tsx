import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Businesses } from "./pages/Businesses";
import { Construction } from "./pages/businesses/Construction";
import { Logistics } from "./pages/businesses/Logistics";
import { AnimalNutrition } from "./pages/businesses/AnimalNutrition";
import { AlliedProducts } from "./pages/businesses/AlliedProducts";
import { FarmFresh } from "./pages/businesses/PraFarmFresh";
import { Products } from "./pages/Products";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Certificates } from "./pages/Certificates";
import { NotFound } from "./pages/NotFound";
import { Careers } from "./pages/Careers";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "businesses", Component: Businesses },
      { path: "businesses/construction", Component: Construction },
      { path: "businesses/logistics", Component: Logistics },
      { path: "businesses/animal-nutrition", Component: AnimalNutrition },
      { path: "businesses/allied-products", Component: AlliedProducts },
      { path: "businesses/farm-fresh", Component: FarmFresh },
      { path: "products", Component: Products },
      { path: "projects", Component: Projects },
      { path: "about", Component: About },
      { path: "certificates", Component: Certificates },
      { path: "contact", Component: Contact },
      { path: "careers", Component: Careers },
      { path: "*", Component: NotFound },
    ],
  },
]);
