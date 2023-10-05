const Education = () => {
  return (
    <div className="pt-20">
      <h2 className="text-2xl tracking-[-0.1rem] font-semibold">EDUCATION</h2>
      <div>
        <div className="grid md:gap-6 md:grid-cols-8 grid-cols-1">
          <h5 className="text-md font-extralight md:col-span-2 col-span-2">
            Sep 2021 - Aug 2025
          </h5>
          <h3 className="text-xl font-light md:col-span-2 col-span-1">
            Manipal University Jaipur
          </h3>
          <h4 className="text-xl font-light col-span-3 text-right">
            B.Tech. Information Technology
          </h4>
          <p className="text-sm font-semibold italic text-right md:col-span-1">
            8.73 CGPA
          </p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
      </div>
    </div>
  );
};

export default Education;
