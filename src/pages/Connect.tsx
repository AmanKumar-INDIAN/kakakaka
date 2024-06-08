import Buttons from "../components/Buttons"
import Container from "../components/Container"
import Inputfilde from "../components/Inputfilde"


function Connect() {
  return <div className="">
    <Container>
      <div className=" md:flex w-full justify-center items-center  my-10">
   
      <div className=" justify-center flex mx-auto md:w-1/2 border-gray-950 border-2">
        <img src="/user.jpg" className=" bg-center rounded-3xl"  alt="" />
      </div>

         <div className="text-white md:w-1/2  my-10 justify-center flex border-gray-950 border-2 rounded-3xl ">
<div className="w-full">
  <h1 className=" text-3xl my-8"> Contect</h1>
  <div className="w-full">
    <Inputfilde placeholder="Name .." onchange={(e)=>{console.log(e)}} label="Name" classname=" px-10 my-10"/>
  <Inputfilde placeholder="Email Id .." onchange={(e)=>{console.log(e.target.value)}} label="Email" classname=" px-10 my-10"/>

  <Inputfilde placeholder="347.." onchange={(e:string)=>{console.log(e)}} label="Phone Num" classname=" px-10 my-10"/>
  <Inputfilde placeholder="Address ...." onchange={(e)=>{console.log(e)}} label="Address" classname=" px-10 my-1o"/>
  </div>
  <Buttons title="Connoct"  classname=" my-10 w-3/4 mx-auto "/>
</div>
      </div>
      </div>

    </Container>
  </div>
}

export default Connect
