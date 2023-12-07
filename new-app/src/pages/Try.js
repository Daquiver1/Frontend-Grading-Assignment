import React from 'react';
import Collapsible from './Collapsible';

function App() {
 return (
    <div className="App">
      <Collapsible title="Section 1">
        <p>Content for section 1.</p>
      </Collapsible>
      <Collapsible title="Section 2">
        <p>Content for section 2.</p>
      </Collapsible>
      <Collapsible title="Section 3">
        <p>Content for section 3.</p>
      </Collapsible>
    </div>
 );
}

export default App;