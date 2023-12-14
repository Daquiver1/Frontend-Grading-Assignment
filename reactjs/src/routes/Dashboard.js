
import "./Dashboard.css"
import GPAChart from '../components/GPAChart';






const Dashboard = () => {
    return (

        <div>
            
            <main class="main-container">
        <div class="main-title">
          <h2>DASHBOARD</h2>
        </div>

        <div class="main-cards">

          <div class="card">
            <div class="card-inner">
              <h2>GPA</h2>
              <span class="material-icons-outlined">first class</span>
            </div>
            <h1>3.8</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>Level 200</h2>
              <span class="material-icons-outlined">year 2023</span>
            </div>
            <h1>Semester 1</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>Course</h2>
              <span class="material-icons-outlined">groups</span>
            </div>
            <h1>Computer Science</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>MESSAGES</h2>
              <span class="material-icons-outlined">new</span>
            </div>
            <h1>56</h1>
          </div>

        </div>

        <div class="products">

          <div class="product-card">
            <h2 class="product-description"></h2>
            <p class="text-secondary">
              <GPAChart/>
            </p>
           
          </div>

          <div class="social-media">
            <div class="product">

              <div>
                <div class="product-icon background-red">
                  <i class="bi bi-twitter"></i>
                </div>
                <h1 class="text-red">A+</h1>
                <p class="text-secondary">(90-100): Excellent - Outstanding performance; 
                consistently demonstrates a deep understanding of the subject matter.</p>
              </div>
  
              <div>
                <div class="product-icon background-green">
                  <i class="bi bi-instagram"></i>
                </div>
                <h1 class="text-green">B+</h1>
                <p class="text-secondary"> (80-89): Good - Strong performance;
                 consistently meets or exceeds expectations</p>
              </div>
  
              <div>
                <div class="product-icon background-orange">
                  <i class="bi bi-facebook"></i>
                </div>
                <h1 class="text-orange">C+</h1>
                <p class="text-secondary"> (70-79): Satisfactory - Acceptable performance; 
                meets basic requirements.</p>
              </div>
  
              <div>
                <div class="product-icon background-blue">
                  <i class="bi bi-linkedin"></i>
                </div>
                <h1 class="text-blue">D+</h1>
                <p class="text-secondary">(60-69): Needs Improvement - Below-average performance; 
                does not fully meet expectations.</p>
              </div>
              
            </div>
          </div>

        </div>
      </main>
                
            
        </div>
        
    );
}
export default Dashboard