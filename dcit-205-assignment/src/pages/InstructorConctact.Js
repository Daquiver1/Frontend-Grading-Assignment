import Header from "../components/Header";
import Footer from "../components/Footer";
import lectures from "../scripts/lecturers";
export default function InstuctorContact() {
  return (
    <>
      <Header />
      <section className="bg-slate-100 pt-20">
        <h1 className="text-center font-bold text-5xl text-teal-900 mb-4">Contact Your Instructors</h1>
        <div className="px-24  flex flex-wrap items-center justify-center">
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y={175}
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              />
              <img className="relative w-40" src={lectures[0].image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {lectures[0].position}
              </span>
              <div className="flex flex-col justify-between">
                <span className="block font-semibold text-xl">
                  {lectures[0].name}
                </span>
                <div className="flex flex-row justify-between">
                  <span className="block font-semibold text-xl">
                    {lectures[0].course}
                  </span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none items-center">
                    Email
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y={175}
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              />
              <img className="relative w-40" src={lectures[1].image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {lectures[1].position}
              </span>
              <div className="flex flex-col justify-between">
                <span className="block font-semibold text-xl">
                  {lectures[1].name}
                </span>
                <div className="flex flex-row justify-between">
                  <span className="block font-semibold text-xl">
                    {lectures[1].course}
                  </span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none items-center">
                    Email
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y={175}
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              />
              <img className="relative w-40" src={lectures[0].image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {lectures[2].position}
              </span>
              <div className="flex flex-col justify-between">
                <span className="block font-semibold text-xl">
                  {lectures[2].name}
                </span>
                <div className="flex flex-row justify-between">
                  <span className="block font-semibold text-xl">
                    {lectures[2].course}
                  </span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none items-center">
                    Email
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-cyan-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y={175}
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              />
              <img className="relative w-40" src={lectures[1].image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {lectures[3].position}
              </span>
              <div className="flex flex-col justify-between">
                <span className="block font-semibold text-xl">
                  {lectures[3].name}
                </span>
                <div className="flex flex-row justify-between">
                  <span className="block font-semibold text-xl">
                    {lectures[3].course}
                  </span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none items-center">
                    Email
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-yellow-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y={175}
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              />
              <img className="relative w-40" src={lectures[4].image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {lectures[4].position}
              </span>
              <div className="flex flex-col justify-between">
                <span className="block font-semibold text-xl">
                  {lectures[4].name}
                </span>
                <div className="flex flex-row justify-between">
                  <span className="block font-semibold text-xl">
                    {lectures[4].course}
                  </span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none items-center">
                    Email
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
              style={{ transform: "scale(1.5)", opacity: "0.1" }}
            >
              <rect
                x="159.52"
                y={175}
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width={152}
                height={152}
                rx={8}
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: "0.2",
                }}
              />
              <img className="relative w-40" src={lectures[5].image} alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">
                {lectures[5].position}
              </span>
              <div className="flex flex-col justify-between">
                <span className="block font-semibold text-xl">
                  {lectures[5].name}
                </span>
                <div className="flex flex-row justify-between">
                  <span className="block font-semibold text-xl">
                    {lectures[5].course}
                  </span>
                  <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none items-center">
                    Email
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
