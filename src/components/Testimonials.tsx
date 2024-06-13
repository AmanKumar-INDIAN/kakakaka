

import Container from "./Container";
import ChartOne from "./chart/Chartone";
import ChartTwo from "./chart/AchartTwo";
import ChartThree from "./chart/ChartTwo";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col text-white justify-between w-full h-full bg-black  rounded-2xl py-14 ">
  <h1 className=" text-2xl text-center font-bold ">Trading Aporchnity</h1>
<ChartOne/>
          </div>
        </div>
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col text-white justify-between w-full h-full bg-black  rounded-2xl py-14 ">
  <h1 className=" text-2xl text-center font-bold ">Total Profite </h1>
<ChartTwo/>
          </div>
        </div>
                <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col text-white justify-between w-full h-full bg-black  rounded-2xl py-14 ">
  <h1 className=" text-2xl text-center font-bold ">Monthy Rrevenue Profit</h1>
<ChartThree/>
          </div>
        </div>
      </div>
    </Container>
  );
};




