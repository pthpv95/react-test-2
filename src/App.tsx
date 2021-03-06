import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";

const ShowsPage = lazy(() => import("./pages/ShowsPage/ShowsPage"));
const ShowDetailPage = lazy(() => import("./pages/ShowDetails/ShowDetails"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="*" element={<div>NOT FOUND</div>} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ShowsPage />} />
          <Route path="/episodes/:id" element={<ShowDetailPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
