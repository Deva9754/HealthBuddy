import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text=-gray-500">
        <p>
          CONTACT <span className=" text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="contact-image"
        />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className=" text-gray-500">
            57929 Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </p>
          <p className=" text-gray-500">
            {" "}
            Tel:7929131868532 <br /> Email:vbtfgsdbnfik @gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            {" "}
            Careers at HealthBuddy
          </p>
          <p className=" text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <button className=" border border-black px-8 py-4 text-sm rounded-lg hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
