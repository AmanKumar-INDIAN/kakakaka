
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-black">
      <h2 className="text-title-md2 font-semibold text-white bg-black">
        {pageName}
      </h2>


    </div>
  );
};

export default Breadcrumb;
