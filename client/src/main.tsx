import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store/store.js';
import App from './App.tsx';
import './index.css';
import { CreateCompany } from './components/company/createCompany.tsx';
import { CompanyList } from './components/company/companyList.tsx';
import { CreateOrganization } from './components/organization/createOrganization.tsx';
import { CreateDepartment } from './components/department/createDepartment.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <CompanyList />,
    children: [
      {
        index: true,
        element: <CompanyList />,
      },
      {
        path: '/comcreate',
        element: <CreateCompany />,
      },
      {
        path: '/orgcreate',
        element: <CreateOrganization />,
      },
      {
        path: '/deptcreate',
        element: <CreateDepartment />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<>... loading ...</>}
        persistor={persistStore(store)}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
