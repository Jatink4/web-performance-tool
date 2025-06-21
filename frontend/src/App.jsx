import { useEffect, useState } from 'react';

function App() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('/api/tests/all')
      .then(res => res.json())
      .then(data => setTests(data))
      .catch(err => console.error('Fetch failed:', err));
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">🧪 Performance Test Results</h1>
      {tests.length === 0 ? (
        <p className="text-gray-500">No test results yet.</p>
      ) : (
        <div className="space-y-4">
          {tests.map((test, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{test.target}</h2>
              <p className="text-sm text-gray-500">Type: {test.testType}</p>
              <div className="mt-2">
                <p>Performance: {test.scores?.performance}</p>
                <p>Accessibility: {test.scores?.accessibility}</p>
                <p>SEO: {test.scores?.seo}</p>
                <p>Best Practices: {test.scores?.bestPractices}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
