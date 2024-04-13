import { Outlet } from 'react-router-dom';
import LoggedInTopNav from '@components/common/LoggedInTopNav';
import { Provider } from "react-redux";
import store from '@store';

function LoggedInLayout() {
  return (
    <Provider store={store}>
      <LoggedInTopNav />
      <Outlet />
    </Provider>
  );
}

export default LoggedInLayout;
