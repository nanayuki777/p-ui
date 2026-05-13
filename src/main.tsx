import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppShell from "@/layouts/AppShell";
import SchoolDashboard from "@/pages/school-admin/SchoolDashboard";
import StudentHome from "@/pages/student/StudentHome";
import AiChat from "@/pages/student/AiChat";
import ParentHome from "@/pages/parent/ParentHome";
import CommunityDesk from "@/pages/community/CommunityDesk";
import CounselorDesk from "@/pages/counselor/CounselorDesk";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Navigate to="/school" replace />} />
          <Route path="/school" element={<SchoolDashboard />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/student/chat" element={<AiChat />} />
          <Route path="/parent" element={<ParentHome />} />
          <Route path="/community" element={<CommunityDesk />} />
          <Route path="/counselor" element={<CounselorDesk />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
