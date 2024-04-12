import { Outlet } from 'react-router-dom';
import LoggedInTopNav from '@components/common/LoggedInTopNav';

function LoggedInLayout() {
  return (
    <>
      <LoggedInTopNav />
      <Outlet />
    </>
  );
}

export default LoggedInLayout;
