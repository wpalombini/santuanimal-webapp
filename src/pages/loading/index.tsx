import * as React from 'react';
import Spinner from 'components/ui/spinner';

const LoadingPage = () => (
  <div
    style={{
      display: 'flex',
      margin: 'calc(50vh - 70px) 0 0',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    }}
  >
    <Spinner />
  </div>
);

export default LoadingPage;
