export function FAQ() {
    return (
      <section className="col-span-3 p-10">
        <header className="my-10">
          <h2 className="text-3xl text-slate-400 ">
            Frequently Asked Questions
          </h2>
        </header>
        <section>
          <article className="border p-5 w-fit my-5">
            <h2 className="text-xl text-gray-500">How to reset user pin?</h2>
            <p className="text-slate-600">
              See your head of department with a letter explaining why you need
              a pin reset
            </p>
          </article>
          <article className="border p-5 w-fit my-5">
            <h2 className="text-xl text-gray-500">How to discard a reported grade?</h2>
            <p className="text-slate-600">
              See your head of department with a letter explaining why you reported the grade in the first place
            </p>
          </article>
          <article className="border p-5 w-fit my-5">
            <h2 className="text-xl text-gray-500">Where to find Head of Department?</h2>
            <p className="text-slate-600">
              Visit the department office
            </p>
          </article>
        </section>
      </section>
    );
}