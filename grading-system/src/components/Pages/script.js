<script>
        document.addEventListener("DOMContentLoaded", function () {
  const gradeData = [
    {
      CODE: "DCIT 102",
      COURSETITLE: "COMPUTER HARDWARE FUNDAMAENTALS AND CIRCUITS",
      CREDIT: "3",
      GRADE: "B+",
      GPT: "10.5",
    },
    {
      CODE: "DCIT 104",
      COURSETITLE: "PROGRAMMING FUNDAMENTALS ",
      CREDIT: "3",
      GRADE: "A",
      GPT: "12",
    },
    {
      CODE: "MATH 122",
      COURSETITLE: "CALCULUS I",
      CREDIT: "3",
      GRADE: "A",
      GPT: "12",
    },
    {
      CODE: "MATH 126",
      COURSETITLE: "ALGEBRA AND GEOMETRY",
      CREDIT: "3",
      GRADE: "B",
      GPT: "9",
    },
    {
      CODE: "STAT 112",
      COURSETITLE: "INTRODUCTIONTO STATISTICS AND PROBABILITY II",
      CREDIT: "3",
      GRADE: "B+",
      GPT: "10.5",
    },
    {
      CODE: "UGRC 110",
      COURSETITLE: "ACADEMIC WRITING I",
      CREDIT: "3",
      GRADE: "B+",
      GPT: "10.5",
    },
  ];

  const semesterDropdown = document.getElementById("semester");
  const gradeList = document.getElementById("grade-list");

  // Populate the table based on the selected semester
  function updateGradeReport() {
    const selectedSemester = semesterDropdown.value;
    const filteredData = gradeData.filter(
      (course) => course.semester === selectedSemester
    );

    // Clear previous entries
    gradeList.innerHTML = "";

    // Populate the table with the filtered data
    filteredData.forEach((course) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${course.CODE}</td><td>${course.COURSETITLE}</td><td>${course.CREDIT}</td><td>${course.GRADE}</td><td>${course.GTP}</td>`;
      gradeList.appendChild(row);
    });
  }

  // Event listener for the semester dropdown
  semesterDropdown.addEventListener("change", updateGradeReport);

  // Initial population of the grade report
  updateGradeReport();
});

      </script>