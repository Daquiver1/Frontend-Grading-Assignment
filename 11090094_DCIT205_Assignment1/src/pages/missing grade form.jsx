export const Missing_Grade_Form = () => {
  return (
    <div>
      <form>
        <h2 className="text-4xl font-bold text-black text-center">
          MISSING GRADES?
        </h2>
        <p>
          <small className="text-xl">
            <em>Fill the form below</em>
          </small>
        </p>
        <div>
          <select
            id="courses"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select a course</option>
            <option value="US">DCIT 201</option>
            <option value="CA">DCIT 203</option>
            <option value="FR">DCIT 205</option>
            <option value="DE">DCIT 207</option>
          </select>
        </div>
        <div>
          <select
            id="courses"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select your Instructor</option>
            <option value="US">Mr Emmanuel Asare</option>
            <option value="CA">Mr David Berko</option>
            <option value="FR">Dr. Melissa Kwarteng</option>
          </select>
          <div>
            <select
              id="courses"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Your Expected Grade</option>
              <option value="US">A</option>
              <option value="CA">B</option>
              <option value="FR">C</option>
              <option value="DE">D</option>
              <option value="DE">E</option>
              <option value="DE">F</option>
            </select>
          </div>
          <div>
            <label>Explanation</label>
            <textarea
              id="messages"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Elaborate....."></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};
