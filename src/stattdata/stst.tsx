import { FaCediSign, FaPeopleGroup } from "react-icons/fa6";
import userone from "/back2.png"
import pichartpic from "/Side1.jpg"
import growth from "/growth.jpg"
import { CgChart } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { MdOilBarrel } from "react-icons/md";
import { HiGift } from "react-icons/hi";

import { FcCustomerSupport } from "react-icons/fc";




export  const dataa=[
    {
        title:"Microsoft",
        imageurl:"/mov2.png"
    },

       {
        title:"Nasa",
        imageurl:"/check1.png"
    },
       {
        title:"Netflix",
        imageurl:"/check2.png"
    },
       {
        title:"Tesela",
        imageurl:"/check3.png"
    },
       {
        title:"Apple",
        imageurl:"/check4.png"
    },
       {
        title:"",
        imageurl:"/check5.png"
    },
       {
        title:"Facebook",
        imageurl:"/check12.png"
    },
       {
        title:"Google",
        imageurl:"/check7.png"
    },
       {
        title:"Ibm",
        imageurl:"/check9.png"
    },
          {
        title:"Gta",
        imageurl:"/check11.png"
    },
]



const benefitOne = {
  title: " Nvidia Profit Partner  BENEFITS",
  desc: "We provides more protection and  benefits to our users  ",
 image:pichartpic,
  bullets: [
    {
      title: "PROFESSIONAL TEAM",
      desc: "We are team of professional traders in Forex & Crypto Exchange and Coins trading and Crypto Mining who know how to grab the profit end of the day..",
      icon: <FaPeopleGroup/>,
    },
    {
      title: "DDOS PROTECTION",
      desc: "We are using one of most experienced , professional and trusted DDoS Protection and mitigation provider.",
      icon: <CgChart />,
    },
    {
      title: "COMODO ESSENTIAL-SSL SECURITY",
      desc: "Our website using Comodo Essential-SSL Security encryption and that confirms that the presented content is the genuine and legitimate.",
      icon: <BiArrowBack/>,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits ",
  desc: " Nvidia Profit Partner ",
  image: userone,
  bullets: [
    {
      title: "REGISTERED COMPANY ",
      desc: "We are a legal company registered in the United Kingdom, providing its investment services to the members all around the world.",
      icon: <MdOilBarrel />,
    },
    {
      title: "FAST WITHDRAWALS",
      desc: "Get your payment fast! Minimum withdrawal is  5$. There is no fee for withdrawals.",
      icon: <HiGift />,
    },
    {
      title: "24/7 CUSTOMER SUPPORT",
      desc: "Please don't hesitate to contact us should you have any questions and we will get back to you in 24 Hours, 7 days a week! ",
      icon: <FcCustomerSupport />,
    },
  ],
};


const benefitThree = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: growth,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaCediSign/>,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <CgChart />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <BiArrowBack/>,
    },
  ],
};

export {benefitOne, benefitTwo,benefitThree};
