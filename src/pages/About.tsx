
import Certificate from "../components/Certificate"
import Container from "../components/Container"
import { SectionTitle } from "../components/SectionTitle"



function About() {
  return<>
  <Container classname=" bg-black">

  <div className=" flex flex-wrap">


       <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
WELCOME TO  ANGEL BITCOINER

            </h1>
            <p className="py-5 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl dark:text-gray-300">
      Angel bitconier revolutionary crypto arbitrage software stands as a beacon of
       innovation in the digital asset realm. Powered by cutting-edge algorithms and 
       advanced machine learning, this genius software meticulously scans multiple
        cryptocurrency exchanges in real-time, identifying price differentials and 
        arbitrage opportunities with lightning speed and precision. Seamlessly executing 
        trades across platforms, it capitalizes on even 
      the slightest market inefficiencies, generating consistent profits for Angel bitcoiner and its 
      user's
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
    <img src="/bitnetwork.jpg"  alt="nvidia"/>
          </div>
        </div>
          </div>



  <div className=" w-full my-20 flex justify-center  items-center mx-auto text-center">

   <SectionTitle
        preTitle="Partner's Benefits"
        title=" "
      >
We are aimed at accelerating the implementation of digital solutions in human life and providing opportunities to earn money on new innovative trading projects. We continuously examine the cryptocurrency market and participate in the development of perspective blockchain solutions so that you can be the first to use successfully the new market trends. We put the focus on uniting people, sharing our knowledge and experience with them, educating them to manage digital assets and preparing to keep up with the trends of digital market.

You don’t have to worry about the devaluation of the local currency or low income from bank deposits, Start mining with us, you will get the passive income 24/7/365. We are professionals of the market consulting about cryptocurrencies and giving recommendations about further reinvestments for getting higher returns
      </SectionTitle>
  </div>



 <Certificate/>

</Container>

  </>
}

export default About
