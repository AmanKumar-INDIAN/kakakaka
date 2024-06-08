interface Compoprop{
    tit?:string,
    imgsrc:string
}

function Complogo({tit,imgsrc}:Compoprop) {
  return <div className=" mx-7">
<img src={imgsrc} alt="" className=" w-48 h-36 bg-center rounded-3xl" />

<p>{tit}</p>
  </div>
}

export default Complogo
