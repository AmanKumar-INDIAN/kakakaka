import React from "react";
import Container from "./Container";


interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container classname=" ">
      {props.preTitle && (
        <div className="text-md font-bold tracking-wider text-green-400 uppercase">
          {props.preTitle}
        </div>
      )}
<div className=" text-center">
      {props.title && (
        <h2 className=" mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-100 lg:leading-tight lg:text-4xl dark:text-white text-center">
          {props.title}
        </h2>
      )}


</div>

      {props.children && (
        <p className=" py-4 text-lg leading-normal text-gray-200 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

