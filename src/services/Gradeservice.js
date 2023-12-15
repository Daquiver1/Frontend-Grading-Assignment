// services/GradeService.js
class GradeService {
    static async getGrades() {
      // Assume an API call or some asynchronous logic to fetch grades
      // Returns a promise that resolves to an array of grade objects
      return new Promise(resolve => {
        setTimeout(() => {
          const studentGrades = [
            { id: 1, course: 'DCIT101', grade: 'A' },
            { id: 2, course: 'DCIT102', grade: 'B' },
            { id: 3, course: 'DCIT103', grade: '' }, // Missing grade
            { id: 4, course: 'DCIT105', grade: 'A-' },
            // Add more grades as needed
          ];
          resolve(studentGrades);
        }, 1000); // Simulate a delay for the asynchronous call
      });
    }
  }
  
  export default GradeService;
  