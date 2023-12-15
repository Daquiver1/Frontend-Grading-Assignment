import Image from "next/image";
import Link from "next/link";
import bg from "../../assets/bg.png";
// import "../../app/style.css"

const Help = () => {
  return (
    <section className="mt-5 mx-5 lg:mx-15 md:mx-12">
      <h1 className="text-base cursor-pointer font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
        <Link href="/">MGRS</Link>
      </h1>
      <article className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Image
            src={bg}
            alt="Picture of the me"
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            className="lg:h-[60vh] lg:w-[40vw] md:flex lg:flex"
          />
        </div>
        <div className="my-auto" data-aos="fade-left">
          <h1 className="mb-2  text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
            Need Help
          </h1>
          <p className="text-gray-400 mt-2  text-sm sm:text-base md-text-xl lg:text-xl ">
            If you are having any issues with the website, please contact us at
            <a href="mailto:test@gmail.com" />
            <span className="text-blue-500"> test@gmail.com </span>
            or call us at
            <a href="tel:123-456-7890" />
            <span className="text-blue-500"> 123-456-7890</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Help;
