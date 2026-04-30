import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header>this will be the layout - Header </header>
      <main>
        <Outlet />
      </main>
      <footer>this will be the layout - Footer </footer>
    </div>
  );
}

export default AppLayout;
//render routes here
