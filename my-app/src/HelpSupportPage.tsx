// Page1.tsx, Page2.tsx, Page3.tsx, Page4.tsx, Page5.tsx
import React from 'react';

interface PageProps {
  pageName: string;
}

const Page: React.FC<PageProps> = ({ pageName }) => {
  return (
    <div>
      <h2>{pageName}</h2>
      <p>This is {pageName} content.</p>
    </div>
  );
};

export default Page;
