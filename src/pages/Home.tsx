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
                className="px-8 py-4 text-lg  text-center text-gray-900 font-bold bg-yellow-500 rounded-md ">
                Start Earning
              </a>

            </div>
          </div>
        </div>

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
