const Grade = () => {
  return (
    <div className="Grade-report">
      <h1>Grade Report</h1>

      <div class="filter">
        <label for="semester">Select Semester:</label>
        <select id="semester">
          <option value="spring">2022/2023 FIRST SEMESTER</option>
          <option value="fall">2022/2023 SECOND SEMESTER</option>
          <option value="spring">2023/2024 FIRST SEMESTER</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th> CODE</th>
            <th>COURSE TITLE</th>
            <th>CREDIT</th>
            <th>GRADE</th>
            <th>GPT</th>
          </tr>
        </thead>
        <tbody id="grade-list">
          <tr>
            <td>DCIT 101</td>
            <td>INTRODUCTION TO COMPUTER SCIENCE</td>
            <td>3</td>
            <td>B+</td>
            <td>10.5</td>
          </tr>
          <tr>
            <td>DCIT 103</td>
            <td>OFFICE PRODUCTIVITY TOOLS</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
          </tr>
          <tr>
            <td>MATH 121</td>
            <td>ALGEBRA AND TRIGONOMETRY</td>
            <td>3</td>
            <td>B+</td>
            <td>10.5</td>
          </tr>
          <tr>
            <td>MATH 123</td>
            <td>VECTORS AND GEOMETRY</td>
            <td>3</td>
            <td>B</td>
            <td>9</td>
          </tr>
          <tr>
            <td>STAT 111</td>
            <td>INTRODUCTION TO STATISTICS I</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
          </tr>
          <tr>
            <td>UGRC 150</td>
            <td>CRITICAL THINKING AND PRACTICAL REASONING</td>
            <td>3</td>
            <td>A</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Grade;
