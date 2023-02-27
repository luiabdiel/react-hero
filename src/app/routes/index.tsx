import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { DashBoard } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<DashBoard />} />
        
        <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
      </Switch>
    </BrowserRouter>
  );
}
