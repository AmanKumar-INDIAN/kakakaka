import Tablee from "../../components/tabel/Tabel";

import DefaultLayout from "../../layout/DefaultLayout";




const TableOne = () => {




  return (

    <DefaultLayout>
 <Tablee title="Top Teams" />

<div className="my-20">

<h1 className=" text-2xl my-2 mx-auto  text-green-500  text-center " >My Team</h1>

   <Tablee title="My Teams" classname={" shadow-green-900 border-green-100"} />
</div>

        </DefaultLayout>

  );
};

export default TableOne;
