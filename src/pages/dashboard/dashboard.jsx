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

            <p className="font-bold text-lg text-black">Latest News</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure adipisci, ipsum vel magni explicabo deserunt eos sapiente nam
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892563.jpg?w=1060&t=st=1702332834~exp=1702333434~hmac=8c4d1af40d323cfb747946f076a395152540dbb671382941ae9e61f222e3f04c"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">Latest News</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure adipisci, ipsum vel magni explicabo deserunt eos sapiente nam
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892563.jpg?w=1060&t=st=1702332834~exp=1702333434~hmac=8c4d1af40d323cfb747946f076a395152540dbb671382941ae9e61f222e3f04c"
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

            <p className="font-bold text-lg text-black">Latest News</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure adipisci, ipsum vel magni explicabo deserunt eos sapiente nam
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892563.jpg?w=1060&t=st=1702332834~exp=1702333434~hmac=8c4d1af40d323cfb747946f076a395152540dbb671382941ae9e61f222e3f04c"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">Latest News</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure adipisci, ipsum vel magni explicabo deserunt eos sapiente nam
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892563.jpg?w=1060&t=st=1702332834~exp=1702333434~hmac=8c4d1af40d323cfb747946f076a395152540dbb671382941ae9e61f222e3f04c"
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

            <p className="font-bold text-lg text-black">Latest News</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure adipisci, ipsum vel magni explicabo deserunt eos sapiente nam
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892563.jpg?w=1060&t=st=1702332834~exp=1702333434~hmac=8c4d1af40d323cfb747946f076a395152540dbb671382941ae9e61f222e3f04c"
            />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 w-full flex flex-row justify-between space-x-5">
          <div className="max-w-sm space-y-1 ">
            <h1 className="font-semibold text-gray-700">
              Grade System Report{" "}
            </h1>

            <p className="font-bold text-lg text-black">Latest News</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure adipisci, ipsum vel magni explicabo deserunt eos sapiente nam
            </p>

            <p className="pt-5 font-semibold text-blue-400">Read more</p>
          </div>

          <div>
            <img
              className="rounded-md"
              src="https://img.freepik.com/free-photo/african-woman-teaching-children-class_23-2148892563.jpg?w=1060&t=st=1702332834~exp=1702333434~hmac=8c4d1af40d323cfb747946f076a395152540dbb671382941ae9e61f222e3f04c"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
