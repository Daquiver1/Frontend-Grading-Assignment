const Button = ({ text, destination }) => {
  return (
    <div className="mt-3 flex justify-center items-center cursor-pointer text-white">
      <a
        href={destination}
        // onClick={Press}
        className="bg-neutral-600 px-16 py-5 rounded-full text-base font-bold hover:bg-neutral-400 cursor-pointer"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
