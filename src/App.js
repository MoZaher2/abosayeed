import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import BlogPage from "./Pages/BlogPage";
import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import TripPage from "./Pages/TripPage/TripPage";
import AddTrip from "./Pages/Dashboard/AddTrip";
import AllTrips from "./Pages/Dashboard/AllTrips";
import DetaileTrip from "./Pages/DetailesPage/DetaileTrip";
import AddBlog from "./Pages/Dashboard/AddBlog";
import AllBlogs from "./Pages/Dashboard/AllBlogs";
import SearchPage from "./Pages/SearchPage/SearchPage";
import UpdateCurrentTrip from "./Pages/Dashboard/UpdateCurrentTrip";
import ContactMessage from "./Pages/Dashboard/ContactMessage";
import Orders from "./Pages/Dashboard/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/ourTrips",
    element: <TripPage />,
  },
  {
    path: "/details",
    element: <DetaileTrip/>,
  },

  {
    path: "/addTrip",
    element: <AddTrip />,
  },
  {
    path: "/allTrips",
    element: <AllTrips />,
  },
  {
    path: "/addBlog",
    element: <AddBlog />,
  },
  {
    path: "/allBlogs",
    element: <AllBlogs />,
  },
  {
    path: "/contactmessage",
    element: <ContactMessage />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },

  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/updateTrip",
    element: <UpdateCurrentTrip />,
  },
  

]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
