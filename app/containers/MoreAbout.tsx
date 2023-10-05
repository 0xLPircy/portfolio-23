import React from "react";

const MoreAbout = () => {
  return (
    //   <div className="grid pt-20 grid-cols-3">
    //     <div className="col-span-1">
    //       <h2 className="text-2xl tracking-[-0.1rem] font-semibold">
    //         STILL CURIOUS?
    //       </h2>
    //       <h4 className="text-xl font-extralight">Click To Know Me Better</h4>
    //     </div>
    //     <div className="col-span-2 justify-self-end pr-32">
    //       <div className="bg-[#212121] rounded-2xl max-w-[195px] text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f] rotate12">
    //         <h3 className="text-4xl px-9 py-12">5 THINGS ABOUT ME!</h3>
    //       </div>
    //     </div>
    //   </div>
    <div className="grid pt-20 lg:grid-cols-5 md:grid-flow-row">
      <div className="col-span-1">
        <h2 className="text-2xl tracking-[-0.1rem] font-semibold">
          STILL CURIOUS?
        </h2>
        <h4 className="text-xl font-extralight pb-6">5 Things About Me!</h4>
      </div>
      <div className="lg:col-span-4 justify-self-end pr-9 grid lg:grid-flow-col grid-flow-row gap-3">
        <div className="bg-[#212121] rounded-2xl text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f]">
          <h3 className="text-md font-light px-6 py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
            similique, possimus corporis a dignissimos.
          </h3>
        </div>
        <div className="bg-[#212121] rounded-2xl text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f]">
          <h3 className="text-md font-light px-6 py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
            similique, possimus corporis a dignissimos.
          </h3>
        </div>
        <div className="bg-[#212121] rounded-2xl text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f]">
          <h3 className="text-md font-light px-6 py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
            similique, possimus corporis a dignissimos.
          </h3>
        </div>
        <div className="bg-[#212121] rounded-2xl text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f]">
          <h3 className="text-md font-light px-6 py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
            similique, possimus corporis a dignissimos.
          </h3>
        </div>
        <div className="bg-[#212121] rounded-2xl text-[#eeeeee] place-items-end shadow-md shadow-[#4f4f4f]">
          <h3 className="text-md font-light px-6 py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex
            similique, possimus corporis a dignissimos.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
