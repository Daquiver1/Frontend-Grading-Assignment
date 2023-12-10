import { FAQ, Contact } from "../../components/support/index";

export function Support() {
  return (
    <>
      <section className="relative block h-[10vh] overflow-hidden">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>

      <FAQ />

      <Contact />
    </>
  );
}

export default Support;
