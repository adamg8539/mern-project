import React, { useState, useEffect } from "react";
import "./App.css";
import CourseInfo from "./components/course_info";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home_page";
import FindCoursesPage from "./pages/find_courses";
import DevPage from "./pages/dev_page";
import ContactPage from "./pages/contact";
import Courses from "./pages/courses";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/fetch_courses/',
    element: <FindCoursesPage />,
  },
  {
    path: '/courses?',
    element: <Courses />,
  },
  {
    path: '/dev',
    element: <DevPage />,
  }
])

export default router;
