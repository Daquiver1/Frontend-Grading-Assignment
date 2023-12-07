import React from 'react';

const MissingGradeFormPage = () => {
  return (
    <body>
    <div className="grade-report-page">
      <h2 className="banner-title">Missing Grade Form</h2>

      <div className="banner-title">
        <iframe
          src="https://forms.gle/hexgzae2UgtJiPyP8"
          title="Missing Grade Form"
          className="form-iframe"
          width={800}
          height={500}
        ></iframe>
      </div>
    </div>    
    </body>
  );
};

export default MissingGradeFormPage;


