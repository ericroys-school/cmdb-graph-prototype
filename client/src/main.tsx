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
import { CreateOrganization } from './components/organization/createOrganization.tsx';
import { CreateDepartment } from './components/department/createDepartment.tsx';
import { CompanyPage } from './pages/company/index.tsx';
import { Company } from './components/company/company.tsx';
import { Organization } from './components/organization/organization.tsx';
import { OrganizationList } from './components/organization/organizationList.tsx';
import { Department } from './components/department/department.tsx';
import { AboutPage } from './pages/about/index.tsx';
import { ErrorPage } from './components/error/error.tsx';
import { EditCompany } from './components/company/editCompany.tsx';
import { EditOrganization } from './components/organization/editOrganization.tsx';
import { EditDepartment } from './components/department/editDepartment.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: '/comedit/:id',
        element: <EditCompany />,
      },
      {
        path: '/orgcreate',
        element: <CreateOrganization />,
      },
      {
        path: '/orgedit/:id',
        element: <EditOrganization />,
      },
      {
        path: '/deptcreate',
        element: <CreateDepartment />,
      },
      {
        path: '/deptedit/:id',
        element: <EditDepartment />,
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
        path: '/orgcreate/:id',
        element: <CreateOrganization />,
      },
      {
        path: '/orglist/:id',
        element: <OrganizationList />,
      },
      {
        path: '/department/:id',
        element: <Department />,
      },
      {
        path: '/deptcreate/:id',
        element: <CreateDepartment />,
      },
      {
        path: '/about',
        element: <AboutPage />,
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
