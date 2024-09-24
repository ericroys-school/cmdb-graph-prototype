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
import { CompanyPage } from './pages/company/index.tsx';
import { Company } from './components/company/company.tsx';
import { Organization } from './components/organization/organization.tsx';
import { OrganizationList } from './components/organization/organizationList.tsx';
import { Department } from './components/department/department.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <CompanyList />,
    children: [
      {
        index: true,
        element: <CompanyPage />,
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
      {
        path: '/company/:id',
        element: <Company />,
      },
      {
        path: '/organization/:id',
        element: <Organization />,
      },
      {
        path: 'orgcreate/:id',
        element: <CreateOrganization />,
      },
      {
        path: 'orglist/:id',
        element: <OrganizationList />,
      },
      {
        path: 'department/:id',
        element: <Department />,
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
