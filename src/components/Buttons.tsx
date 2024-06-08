import { Link } from "react-router-dom"

interface buttonPrpr{
    title:string,
    rederectTo :string,
    classname?:string
}

function Buttons({title,rederectTo,classname}:buttonPrpr) {
  return <div className="w-full">
     <Link
              to={rederectTo}
              className=" text-white text-md "
            >
  <div className={`bg-green-600  h-10  flex justify-center items-center rounded-lg ${classname}`}  >
       
             {title}
           
  </div>
   </Link>
  </div> 
  

}

export default Buttons
