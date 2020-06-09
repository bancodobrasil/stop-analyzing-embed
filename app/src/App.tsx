import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <main>
      <section className="container">
        <div className="row vh-100">
          <div className="col-12 my-auto">
            <div className="row text-center">
              <div className="col-lg-6 mb-4">
                <Card />
              </div>
              <div className="col-lg-6 mb-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
