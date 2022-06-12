/*eslint-disable*/
import Admin from "layouts/Admin";
import Auth from "layouts/Auth";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Maps from "./admin/Maps";
import Tables from "./admin/Tables";
import Settings from "./admin/Settings";

import Landing from "./Landing";
import StudentsList from "./students/StudentsList";
import EditStudent from "./students/EditStudent";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tables" element={<Tables />} />
            <Route path="maps" element={<Maps />} />
            <Route path="students" element={<StudentsList />} />
            <Route path="students/:userId" element={<EditStudent />} />
          </Route>
          <Route path="" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
