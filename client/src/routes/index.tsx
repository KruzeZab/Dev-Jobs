import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
// import GuestRoute from './GuestRoute';

export const routes = <Route path="/" element={<RootLayout />}></Route>;

export const routeElements = createRoutesFromElements(routes);

export default createBrowserRouter(createRoutesFromElements(routes));
