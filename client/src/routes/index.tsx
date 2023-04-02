import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import GuestRoute from "./GuestRoute";

export const routes = (
  <Route path="/" element={<RootLayout />}>
    <Route path="signin" element={<GuestRoute outlet={<SigninPage />} />} />
    <Route path="signup" element={<GuestRoute outlet={<SignupPage />} />} />
  </Route>
);

export const routeElements = createRoutesFromElements(routes);

export default createBrowserRouter(createRoutesFromElements(routes));
