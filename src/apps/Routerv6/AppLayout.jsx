import { Outlet } from "react-router-dom";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation()

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
//2-render routes here
