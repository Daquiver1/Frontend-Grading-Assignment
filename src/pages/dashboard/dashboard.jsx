import { IconButton } from "@material-tailwind/react";
import { DashboardData } from "../../data/index";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  return (
    <div className="h-full bg-gray-100 overflow-hidden">
      <section className="relative block h-[10vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black bg-cover bg-center" />
      </section>

      <section className="mx-auto max-w-screen-2xl container p-8">
        <div className="flex flex-row space-x-4 justify-between">
          {DashboardData.map(({ description, color, title, icon }) => (
            <div className="w-full flex flex-row justify-between items-center bg-white p-5 rounded-xl">
              <div className="space-y-3">
                <h1 className="font-bold text-lg">{title}</h1>
                <p>{description}</p>
              </div>

              <div>
                <AcademicCapIcon className="w-6 h-6 text-gray-500" />
                {/* Adjust the className based on your styling preferences */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-row  justify-between space-x-4 mx-auto max-w-screen-2xl container p-8">
        <h1 className="font-bold text-xl text-blue-700">NEWS</h1>
      </div>

      <section className="flex flex-row  justify-between space-x-4 mx-auto max-w-screen-2xl container p-8">
        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">
              New Feature Alert: Grade Notifications!
            </p>

            <p>
              Our innovative functionality alerts you to missing grades
              instantly. Receive timely reminders to resolve problems and update
              academic records.
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/premium-photo/online-banking-finance-banking-e-banking-concept_166258-42.jpg?size=626&ext=jpg&ga=GA1.1.188659820.1702060780&semt=ais"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">
              Enhanced Filtering Options Now Available
            </p>

            <p>
              We added powerful filtering to the Grade Report page. Sort grades
              by semester or academic year for a more efficient and personalised
              experience.
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/upgrade-update-new-version-better-graphics-concept_53876-132183.jpg?size=626&ext=jpg&ga=GA1.1.188659820.1702060780&semt=ais"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-row  justify-between space-x-4 mx-auto max-w-screen-2xl container p-8">
        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">
              Important Update: Revised Missing Grade Form
            </p>

            <p>
              Your input counts! We simplified the Missing Grade Form for
              reporting. See how the updated style and features make reporting
              missing grades easier.
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/student-id-card-identification-data-information-education-concept_53876-132190.jpg?size=626&ext=jpg&ga=GA1.1.188659820.1702060780&semt=ais"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">
              Instructor Contact: Simulated Email Feature Live!
            </p>

            <p>
              Our Instructor Contact page's simulated email lets you easily
              communicate with instructors. It's not email, but it's useful for
              communicating and clarifying grades.
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-recording-herself_23-2149272201.jpg?size=626&ext=jpg&ga=GA1.1.188659820.1702060780&semt=ais"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-row  justify-between space-x-4 mx-auto max-w-screen-2xl container p-8">
        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">
              Tech Support at Your Fingertips
            </p>

            <p>
              Need assistance? Our Help and Support page includes a contact form
              for technical support. Reach out with any questions and our
              support team will get back to you.
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/ethnic-businessman-pointing-up_23-2147768611.jpg?size=626&ext=jpg&ga=GA1.1.188659820.1702060780&semt=ais"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">
              Coming Soon: Mobile App for On-the-Go Access
            </p>

            <p>
              Great news! We're finishing the Missing Grade Report System
              smartphone app. Soon, you may check grades, missing grade reports,
              and more on your phone.
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/schedule-time-management-planner-concept_53876-121130.jpg?size=626&ext=jpg&ga=GA1.1.188659820.1702060780&semt=ais"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
