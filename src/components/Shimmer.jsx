const Shimmer = () => {
  return (
    <div>
      {" "}
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shimmer"
          >
            <div className="shimmer-image"></div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full shimmer-available"></p>
                <p className="shimmer-text shimmer-available"></p>
              </div>
              <p className="shimmer-text shimmer-name"></p>
              <p className="shimmer-text shimmer-speciality"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
