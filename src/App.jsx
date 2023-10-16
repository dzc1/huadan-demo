import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PopularList from "./components/PopularList";
import SingleMovie from "./components/SingleMovie";
import PageNotFound from "./components/PageNotFound";

// import { Link } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/Movie"> Movie</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
