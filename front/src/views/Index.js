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
import EditTeacher from "./teachers/EditTeacher";
import TeachersList from "./teachers/TeachersList";
import CreateTeacher from "./teachers/createTeacher";
import CreateStudent from "./students/createStudent";
import CreateSpeciality from "./speciality/createSpeciality";
import SpecialitiesList from "./speciality/SpecialitiesList";
import EditSpeciality from "./speciality/EditSpeciality";
import CreateClasse from "./classe/createClasse";
import CLassesList from "./classe/ClassesList";
import EditClasse from "./classe/EditClasse";
import CreateBlog from "./blog/createBlog";
import BlogList from "./blog/BlogList";
import EditBlog from "./blog/EditBlog";
import CreateEvent from "./events/createEvent";
import EventsList from "./events/EventsList";
import EditEvent from "./events/EditEvents";

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
            <Route path="createStudent" element={<CreateStudent/>} />
            <Route path="students" element={<StudentsList />} />
            <Route path="students/:userId" element={<EditStudent />} />
            <Route path="createTeacher" element={<CreateTeacher/>} />
            <Route path="teachers" element={<TeachersList />} />
            <Route path="teachers/:teacherId" element={<EditTeacher />} />
            <Route path="createSpeciality" element={<CreateSpeciality/>} />
            <Route path="specialities" element={<SpecialitiesList />} />
            <Route path="specialities/:specialityId" element={<EditSpeciality />} />
            <Route path="createClasse" element={<CreateClasse/>} />
            <Route path="classes" element={<CLassesList />} />
            <Route path="classes/:classeId" element={<EditClasse />} />
            <Route path="createBlog" element={<CreateBlog/>} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="blogs/:blogId" element={<EditBlog/>} />
            <Route path="createEvent" element={<CreateEvent/>} />
            <Route path="events" element={<EventsList />} />
            <Route path="events/:eventId" element={<EditEvent/>} />
            </Route>
          <Route path="" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
