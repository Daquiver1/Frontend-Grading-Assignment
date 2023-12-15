export default class MissingGrade {
  reports: any[];
  constructor() {
    this.reports = [
      {
        courseCode: "DCIT 101",
        creditHours: "3",
        courseName: "Intro to Comp Sci",
        nameOfLecturer: "Prof Ferdinard",
        expectedGrade: "A",
        explanation:
          "Lorem ipsum  hjsdbjsbd jsdbnsjkdbkjs bdjskdskdsds jdsbdsnd  sndsmndfsds",
      },
      {
        courseCode: "DCIT 103",
        creditHours: "3",
        courseName: "Office Productivity Tools",
        nameOfLecturer: "Mr Mark Attah",
        expectedGrade: "A",
        explanation:
          "Lorem ipsum  hjsdbjsbd jsdbnsjkdbkjs bdjskdskdsds jdsbdsnd  sndsmndfsds",
      },
      {
        courseCode: "DCIT 105",
        creditHours: "3",
        courseName: "Mathematics for IT",
        nameOfLecturer: "Dr Solomon",
        expectedGrade: "A",
        explanation:
          "Lorem ipsum  hjsdbjsbd jsdbnsjkdbkjs bdjskdskdsds jdsbdsnd  sndsmndfsds",
      },
      {
        courseCode: "DCIT 102",
        creditHours: "3",
        courseName: "Hardware Fundamentals",
        nameOfLecturer: "Mr Aziz Dumfour",
        expectedGrade: "A",
        explanation:
          "Lorem ipsum  hjsdbjsbd jsdbnsjkdbkjs bdjskdskdsds jdsbdsnd  sndsmndfsds",
      },
      {
        courseCode: "DCIT 104",
        creditHours: "3",
        courseName: "Programming Fundamentals",
        nameOfLecturer: "Mr Micahael Soli",
        expectedGrade: "A",
        explanation:
          "Lorem ipsum  hjsdbjsbd jsdbnsjkdbkjs bdjskdskdsds jdsbdsnd  sndsmndfsds",
      },
      {
        courseCode: "DCIT 201",
        creditHours: "3",
        courseName: "Programming I",
        nameOfLecturer: "Mr Paul Armah",
        expectedGrade: "A",
        explanation:
          "Lorem ipsum  hjsdbjsbd jsdbnsjkdbkjs bdjskdskdsds jdsbdsnd  sndsmndfsds",
      },
    ];
  }

  getAllReports() {
    return this.reports;
  }

  addReport(newReport: any) {
    this.reports.push(newReport);
  }

  deleteReport(courseCode: string) {
    this.reports = this.reports.filter(
      (report) => report.courseCode !== courseCode
    );
  }
}
