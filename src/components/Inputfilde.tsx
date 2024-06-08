
interface InputPrpo{
    placeholder:string,
    label:string,
    classname?:string,
    onchange:(e:React.ChangeEvent<HTMLInputElement>)=>string
}

function Inputfilde({label,placeholder,classname,onchange}:InputPrpo) {
  return <div className={`${classname} w-full`}>

    <h1 className=" my-2 text-lg text-white">{label}</h1>

            <input
            onChange={(e)=>onchange(e)}
            type="text" placeholder={placeholder} className=" w-full bg-black border-2 border-green-900 p-2 rounded-3xl text-white" />

    
  </div>
}

export default Inputfilde
