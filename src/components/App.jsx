import NavBar from './NavBar/NavBar';
import UserRoutes from 'Routes/Routes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from 'Redux/Auth/authOperation';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <UserRoutes />
    </div>
  );
}
