import DefaultLayout from 'layouts/Default';
import { Suspense } from 'react';
import Demo from 'pages/Demo';

const routes = () => [
  {
    path: '/',
    element: (
      <Suspense fallback={'Loading...'}>
        <DefaultLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={'Loading...'}>
            <Demo />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
