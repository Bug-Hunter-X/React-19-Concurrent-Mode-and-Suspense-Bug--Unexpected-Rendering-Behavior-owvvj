import React, { useState, Suspense, lazy } from 'react';

const MyComponent = lazy(() => import('./MyComponent'));

function App() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      // Simulate an asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData({ message: 'Data fetched!' });
    };
    fetchData();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {data && <MyComponent data={data} />}
    </Suspense>
  );
}

export default App;