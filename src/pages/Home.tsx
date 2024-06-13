import Marquee from "react-fast-marquee"
import Container from "../components/Container"
import Complogo from "../components/Complogo"
import { benefitOne, benefitTwo, dataa } from "../stattdata/stst"
import { SectionTitle } from "../components/SectionTitle"
import { Video } from "../components/Video"
import { Testimonials } from "../components/Testimonials"
import { Benefits } from "../components/Benefits"
import { Link } from "react-router-dom"
import Certificate from "../components/Certificate"


function Home() {
  return <>
  
<Container classname=" bg-black h-full ">

<img src="/bullback.jpg" className=" absolute z-0 sm:w-[80%] bg-cover bg-center w-[95%] opacity-50" alt="" />

  <div className=" flex flex-wrap z-30 relative">


       <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
               Angel bitcoiner 
               
             

            </h1>
            <p className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white "> PROFITABLE STRIDE</p>
            <p className="py-5 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl dark:text-gray-300">
Angel bitcoiner revolutionary crypto arbitrage software stands as a beacon of innovation in the digital asset realm. Powered by cutting-edge algorithms and advanced machine learning, this genius software meticulously scans multiple cryptocurrency exchanges in real-time, identifying price differentials and arbitrage opportunities with lightning speed and precision. Seamlessly executing trades across platforms, it capitalizes on even the slightest market inefficiencies, generating consistent profits for Angel bitconier  and its users.


            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/auth/singup"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Start Earning
              </a>
              {/* <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a> */}
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
    <img src="/homepic.jpg"  alt="nvidia"/>
          </div>
        </div> */}
          </div>

</Container>

<Container>
<Marquee className=" bg-black">


  {dataa.map((item)=>(
      <Complogo imgsrc={item.imageurl}/>
  ))}
</Marquee>


<div className=" my-10">


      <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-300 dark:text-white">
            Trusted by <span className="text-green-600">200+ Million</span>{" "}
            customers worldwide
          </div>
  </div>
</div>


</Container>

<Container>
    <Testimonials/>

</Container>

  <Testimonials/>



<Container classname=" mx-auto w-full">
  <div className=" w-full flex justify-center rounded-xl  items-center mx-auto text-center h-full">

   <SectionTitle
        preTitle="Benifite with us"
        title=" GET STARTED INVESTING WITH Angel bitcoiner TODAY."
      >
In the midst of a roaring bull market, Angel bitcoiner  finds itself in a profitable stride. Riding the wave of rising crypto prices and investor optimism, Angel's investments flourish, yielding handsome returns. With astute decision-making and a keen eye on market trends, Angel bitcoiner capitalizes on opportunities presented by the bullish sentiment, maximizing gains across various sectors.

As portfolios swell and revenues soar, Angel bitcoiner solidifies its position as a savvy player in the financial landscape, reaping the rewards of a buoyant market environment. With each successful trade and strategic maneuver, Angesl"s stands as a testament to navigating and thriving amidst market euphoria.
      </SectionTitle>
  </div>







<Benefits data={benefitOne} />
    <Benefits imgPos="right" data={benefitTwo} />


  <div className=" w-full flex justify-center  items-center mx-auto text-center">

   <SectionTitle
        preTitle="REFERRAL COMMISSION"
        title="Grow more earn more "
      >
Spread the word about the platform to your friends, family, and social media followers. Make sure to include your unique referral link so that you get commission for the referrals.
      </SectionTitle>
  </div>


<Certificate/>


<Video videoId="ULkRZQiBrN5vQgGs" />




<Link to={"/workspace"} className=" text-white  border-2 border-red-600">Workspace check</Link>
</Container>


  </>
}

export default Home
