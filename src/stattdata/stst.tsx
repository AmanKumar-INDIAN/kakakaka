import { FaCediSign } from "react-icons/fa6";
import userone from "/bitre.png"
import pichartpic from "/pie.png"
import growth from "/growth.jpg"
import { CgChart } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { MdOilBarrel } from "react-icons/md";
import { HiGift } from "react-icons/hi";
import { SiUnicode } from "react-icons/si";



export  const dataa=[
    {
        title:"Microsoft",
        imageurl:"/microsoft.jpg"
    },

       {
        title:"Nasa",
        imageurl:"/nasa.jpg"
    },
       {
        title:"Netflix",
        imageurl:"/net.jpg"
    },
       {
        title:"Tesela",
        imageurl:"/tasla.jpg"
    },
       {
        title:"Apple",
        imageurl:"/app.jpg"
    },
       {
        title:"",
        imageurl:"/bit.jpg"
    },
       {
        title:"Facebook",
        imageurl:"/fb2.jpg"
    },
       {
        title:"Google",
        imageurl:"/google.jpg"
    },
       {
        title:"Ibm",
        imageurl:"/ibm.jpg"
    },
          {
        title:"Gta",
        imageurl:"/gta2.jpg"
    },
]



const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: pichartpic,
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

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: userone,
  bullets: [
    {
      title: "kjdc sd vsad d gddfg ",
      desc: "This will be your last bullet point in this section..",
      icon: <MdOilBarrel />,
    },
    {
      title: "rghf rtdh dfgh  g asdga",
      desc: "This will be your last bullet point in this section.",
      icon: <HiGift />,
    },
    {
      title: "Dark & Light Mode",
      desc: "ikusdqw wfne qgewt wrth ert  ret h  erfh erwt hr ",
      icon: <SiUnicode />,
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
