export function Dashboard({ user }) {
  return (
    <section className="col-span-3 p-10">
      <div className="flex gap-10">
        <div className="bg-green-100 p-5 w-[300px] h-[200px] rounded-xl flex justify-center items-center  ">
          <h2 className="text-3xl text-slate-600">Grade: {user.grade} </h2>
        </div>
        <div className="bg-blue-100 p-5 w-[400px] h-[200px] rounded-xl flex flex-col justify-center items-center">
          <h2 className="underline text-slate-400">Motivational Message</h2>
          <p className="text-xl flex-wrap text-center text-slate-500">
            The only way to justify privilege is by solving the world&apos;s biggest problems and by doing hard things.
          </p>
        </div>
      </div>

      <div className="py-10 my-10 bg-slate-400 px-10 rounded-md">
        <h2 className="text-2xl text-slate-100 ">
          Programme: {user.programme}
        </h2>
      </div>

      <div>
        <h2 className="text-xl font-bold">Courses offered</h2>
        {user.courses.length > 0 ? (
          <div>
            {user.courses.map((course) => {
              return (
                <article
                  key={course.id}
                  className="flex justify-between py-5 px-5 my-5"
                >
                  <span>{course.code}</span> <span>{course.name}</span>
                  <span>{course.credits} credits</span>
                </article>
              );
            })}
          </div>
        ) : (
          " No courses found "
        )}
      </div>
    </section>
  );
}
