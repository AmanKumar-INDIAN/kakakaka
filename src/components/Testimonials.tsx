
import React from "react";

import Container from "./Container";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Share a real <Mark>testimonial</Mark>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas inventore consequatur quos!
            </p>

            <Avatar
              image={"/user.jpg"}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Make surthe <Mark>right sentence</Mark>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, sit.
            </p>

            <Avatar
              image={"/user.jpg"}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Thj  edfgdafn <Mark>awessome</Mark> l kabuote I&apos;ve
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, molestiae?
            </p>

            <Avatar
              image={"/user.jpg"}
              name="Gabrielle Winn"
              title="Co-founder of Acme Inc"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: string;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
     

        <img
             src={props.image}
          width="40"
          height="40"
          alt="Avatar"
        
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className=" bg-green-400 rounded-lg p-0.5">
        {props.children}
      </mark>{" "}
    </>
  );
}
