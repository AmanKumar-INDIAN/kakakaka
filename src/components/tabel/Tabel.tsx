

interface BRAND {
        avtar:string,
    name: string,
    Investment: string,
    revenues: string,
    team : number,
    conversion: string,
}


const brandData: BRAND[] = [
  {
    avtar: "James",
    name: 'James',
    Investment:"1M" ,
    revenues: '781K',
    team: 8812,
    conversion: "9%",
  },
  {
    avtar: "James",
    name: 'James',
    Investment:"1M" ,
    revenues: '781K',
    team: 8812,
    conversion: "9%",
  },
    {
    avtar: "James",
    name: 'James',
    Investment:"1M" ,
    revenues: '781K',
    team: 8812,
    conversion: "9%",
  },
      {
    avtar: "James",
    name: 'James',
    Investment:"1M" ,
    revenues: '781K',
    team: 8812,
    conversion: "9%",
  },
  
  
  
];

const Tablee = ({title,classname}:{title?:string,classname?:string}) => {

//data fetch kr k aayga 


  return (




    <div className={`rounded-md border border-green-400 bg-[#091205]   px-5 pt-6 pb-2.5 shadow-xl shadow-green-900   ${classname}   sm:px-7 xl:pb-1`}>
      <h4 className="mb-6 text-xl font-semibold text-white">
        {title}
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2  sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Visitors
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Sales
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
             <h1 className="  test-xl h-10 w-10  bg-green-700 rounded-full font-semibold blur-md "></h1>
             <p className=" relative font-extrabold bottom-8 left-3">{brand.avtar.substring(0,2)}</p>

              </div>
              <p className=" text-white sm:block font-mono mb-1">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.team}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.Investment}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  

  );
};

export default Tablee;
