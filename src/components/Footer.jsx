const Footer = () => {
  return (
    <div className=" md:mx-10">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div>
          {" "}
          <img
            className=" mb-5 w-40"
            src="https://i.ytimg.com/vi/TkHxyR75vZE/maxresdefault.jpg"
            alt="footer-logo"
          />
          <p className=" w-full md:w2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed{" "}
            <br />
            iste quia a, beatae ullam quasi maxime quo animi <br /> inventore
            itaque reprehenderit vitae iure!
          </p>
        </div>
        {/* centre */}
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        {/* right */}
        <div>
          <p className=" text-xl font-medium mb-5"> Get in Touch</p>
          <ul className=" flex flex-col gap-2 text-gray-600">
            <li> +917974075143</li>
            <li> xyz.sahu2001@gmail.coom</li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <hr />
        <p className=" py-5 text-sm text-center">
          CopyRight 2024@ HealthBuddy - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
