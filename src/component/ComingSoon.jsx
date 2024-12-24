
const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#0A0029] relative overflow-hidden font-metropolis">
      <div className="absolute left-0 top-[45%] -translate-y-1/2">
        <img
          src="/images/green.png"
          alt="Green Ellipse"
          className="w-28"
        />
      </div>
      <div className="absolute right-0 bottom-0 ">
        <img
          src="/images/yellow.png"
          alt="Yellow Ellipse"
          className="w-36"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto px-4">
        <img
          src="/images/uxloom.png"
          alt="UXloom Logo"
          className="w-48"
        />
        <img
          src="/images/Male Investor Riding Scooter.gif"
          alt="Male Investor"
          className="w-[400px] mb-2"
        />
        <div className="text-center text-white mb-2">
          <p className="text-lg font-metropolis font-normal">
            Transforming Ideas Into Designs
          </p>
          <h2 className="text-4xl font-extrabold font-sans mb-4 flex items-center justify-center gap-2">
            <span className="text-[#1F979F]">We&apos;re Launching</span>{" "}
            <span className="text-[#D0BD28]">Soon!</span>
          </h2>
          <div className="flex w-full justify-center items-center mb-2">
          <hr className="w-[50%] border-2 border-solid border-[#D0BD28] items-center"/>
          </div>
          <div>
            <h3 className="text-lg font-sans font-semibold">Contact us</h3>
            <div className="flex items-center justify-center gap-8 text-lg font-sans">
              <a
                href="mailto:hello@uxloom.in"
                className="hover:text-[#1F979F] transition-colors "
              >
                Email: hello@uxloom.in
              </a>
              <a
                href="tel:+918178652544"
                className="hover:text-[#1F979F] transition-colors"
              >
                Phone: +91 81786 52544
              </a>
            </div>
          </div>
        </div>
        <div className="absolute left-24 bottom-0">
          <img
            src="/images/Astronot.gif"
            alt="Astronaut"
            className="w-80 h-72"
          />
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;