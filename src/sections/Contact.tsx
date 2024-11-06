import Arrowup from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl  md:text-left text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8  md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorem soluta expedita quis officia perferendis consectetur
                labore iste id odio.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <Arrowup className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
