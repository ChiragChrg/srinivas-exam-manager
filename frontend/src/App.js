import "./App.css";
import "./pages/Registration/Registration.css";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import TimeTable from "./pages/TimeTable";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Registration from "./pages/Registration/Registration";
import Student from "./pages/Registration/Student";
import Faculty from "./pages/Registration/Faculty";
import Staff from "./pages/Registration/Staff";
import Evaluator from "./pages/Registration/Evaluator";

import ProtectedRoute from "./components/ProtectedRoute";

import Courses from "./components/Admin/Course/Course";
import Layout from "./components/Layout";
import Approval from "./components/Approval/Approval";
import ApprovalDetailsView from "./components/Approval/ApprovalDetailsView";
import TotalUsers from "./components/Users/TotalUsers";
import UserDetails from "./components/Users/UserDetails/UserDetails";
import Create from "./components/Admin/Course/Create/Create";
import InternalMarks from "./components/Faculty/InternalMarks/InternalMark";
import IndentRegular from "./components/Staff/Indent/IndentRegular";
import IndentRepeater from "./components/Staff/Indent/IndentRepeater";
import PaymentsRegular from "./components/Staff/Payments/PaymentsRegular";
import PaymentsRepeater from "./components/Staff/Payments/PaymentsRepeater";
import ApplicationRegular from "./components/Student/Application/ApplicationRegular";
import ApplicationRepeater from "./components/Student/Application/ApplicationRepeater";

function App() {
  //MUI Components Fonts
  const theme = createTheme({
    typography: {
      fontFamily: ["Lato"].join(","),
    },
  });
  //MUI Components Fonts[/]

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Browser>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="registration/student" element={<Student />} />
            <Route path="registration/faculty" element={<Faculty />} />
            <Route path="registration/staff" element={<Staff />} />
            <Route path="registration/evaluator" element={<Evaluator />} />

            <Route element={<Layout />}>
              {/* Admin Access */}
              <Route element={<ProtectedRoute allowedRole={["admin"]} />}>
                <Route path="courses" element={<Courses />} />
                <Route path="courses/new-course" element={<Create />} />
                <Route path="approve/staff" element={<Approval />} />
                <Route path="approve/evaluator" element={<Approval />} />
                <Route path="approve/staff/:staffId" element={<ApprovalDetailsView />}/>
                <Route path="approve/evaluator/:evaluatorId" element={<ApprovalDetailsView />}/>
              </Route>

              {/* Staff Access*/}
              <Route element={<ProtectedRoute allowedRole={["staff"]} />}>
                <Route path="approve/student" element={<Approval />} />
                <Route path="approve/faculty" element={<Approval />} />
                <Route path="approve/student/:studentId" element={<ApprovalDetailsView />} />
                <Route path="approve/faculty/:facultyId" element={<ApprovalDetailsView />} />
                <Route path="indent/regular" element={<IndentRegular/>} />
                <Route path="indent/repeater" element={<IndentRepeater/>} />
                <Route path="payments/regular" element={<PaymentsRegular/>} />
                <Route path="payments/repeater" element={<PaymentsRepeater/>} />
              </Route>

              {/* Faculty Access*/}
              <Route element={<ProtectedRoute allowedRole={["faculty"]} />}>
                <Route path="internal" element={<InternalMarks/>} />
              </Route>
              
              {/* Student Access*/}
              <Route element={<ProtectedRoute allowedRole={["student"]} />}>
                <Route path="application/regular" element={<ApplicationRegular/>} />
                <Route path="application/repeater" element={<ApplicationRepeater/>} />
              </Route>

              {/* Faculty and Student access*/}
              <Route element={<ProtectedRoute allowedRole={["student","faculty"]} />}>
                <Route path="attendance" element={<Attendance/>} />
              </Route>

              {/*Admin, Student and Evaluator access*/}
              <Route element={<ProtectedRoute allowedRole={["student","evaluator","faculty","admin"]} />}>
                <Route path="timetable" element={<TimeTable/>} />
              </Route>


              {/* Admin and Staff Access */}
              <Route element={<ProtectedRoute allowedRole={["admin", "staff"]} />}>
                <Route path="users/student" element={<TotalUsers />} />
                <Route path="users/faculty" element={<TotalUsers />} />
                <Route path="users/staff" element={<TotalUsers />} />
                <Route path="users/evaluator" element={<TotalUsers />} />

                <Route path="users/student/:userId" element={<UserDetails />} />
                <Route path="users/faculty/:userId" element={<UserDetails />} />
                <Route path="users/staff/:userId" element={<UserDetails />} />
                <Route path="users/evaluator/:userId"element={<UserDetails />}/>
              </Route>

              {/*Common Protected Routes */}
              <Route
                element={<ProtectedRoute allowedRole={["admin", "student","faculty", "staff"]} />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
            {/* Page Not Found Route */}
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Browser>
      </div>
    </ThemeProvider>
  );
}

export default App;
