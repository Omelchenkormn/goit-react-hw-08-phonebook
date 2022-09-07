import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from './Page/HomePage/HomePage';
import { ContactsPage } from './Page/ContactsPage/ContactsPage';
import { RegistredPage } from './Page/RegistredPage/RegistredPage';
import { NotFoundPage } from './Page/NotFoundPage';
import { RequireAuth } from './hocPrivateRoute/RequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetCurrentUserQuery } from 'redux/auth/authApi';
import authSelectors from 'redux/selector/authSelector';
import { setUser } from 'redux/userSlice';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data } = useGetCurrentUserQuery(null, {
    skip: !token,
  });
  console.log(data);
  console.log(token);

  useEffect(() => {
    if (data) {
      dispatch(setUser({ name: data.name, email: data.email }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/contacts"
            element={
              <RequireAuth>
                <ContactsPage />
              </RequireAuth>
            }
          />
          <Route path="/registred" element={<RegistredPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
