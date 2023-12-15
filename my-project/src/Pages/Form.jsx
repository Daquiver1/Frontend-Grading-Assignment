import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    instructorName: "",
    expectedGrade: "",
    explanation: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };

  return (
    <div style={{ background: "#c0c0c0", minHeight: "100vh", padding: "20px" }}>
      <header
        style={{
          background: "#01027d",
          color: "#fff",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Report Missing Grade
        </h1>
      </header>
      <div style={{ maxWidth: "800px", margin: "auto", padding: "1rem" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "0.5rem",
            padding: "1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Missing Grade Form
          </h2>

          {isSubmitted ? (
            <div
              style={{
                background: "#c3a356",
                border: "1px solid #01027d",
                color: "#fff",
                padding: "0.75rem",
                borderRadius: "0.25rem",
                marginBottom: "1rem",
              }}
            >
              <strong style={{ fontWeight: "bold" }}>Grade Reported!</strong>{" "}
              Thank you for reporting the missing grade.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="courseName"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#01027d",
                  }}
                >
                  Course Name:
                </label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  style={{
                    marginTop: "0.25rem",
                    padding: "0.5rem",
                    border: "1px solid #01027d",
                    borderRadius: "0.25rem",
                    width: "100%",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="instructorName"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#01027d",
                  }}
                >
                  Instructor Name:
                </label>
                <input
                  type="text"
                  id="instructorName"
                  name="instructorName"
                  value={formData.instructorName}
                  onChange={handleChange}
                  style={{
                    marginTop: "0.25rem",
                    padding: "0.5rem",
                    border: "1px solid #01027d",
                    borderRadius: "0.25rem",
                    width: "100%",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="expectedGrade"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#01027d",
                  }}
                >
                  Expected Grade:
                </label>
                <input
                  type="text"
                  id="expectedGrade"
                  name="expectedGrade"
                  value={formData.expectedGrade}
                  onChange={handleChange}
                  style={{
                    marginTop: "0.25rem",
                    padding: "0.5rem",
                    border: "1px solid #01027d",
                    borderRadius: "0.25rem",
                    width: "100%",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="explanation"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#01027d",
                  }}
                >
                  Explanation:
                </label>
                <textarea
                  id="explanation"
                  name="explanation"
                  value={formData.explanation}
                  onChange={handleChange}
                  style={{
                    marginTop: "0.25rem",
                    padding: "0.5rem",
                    border: "1px solid #01027d",
                    borderRadius: "0.25rem",
                    width: "100%",
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "#01027d",
                  color: "#fff",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.25rem",
                  cursor: "pointer",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Report Missing Grade
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
