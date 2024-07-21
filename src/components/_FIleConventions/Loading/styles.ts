import tw from "tailwind-styled-components";

export const Credits = tw.span`
  absolute
  bottom-0
`;

export const Container = tw.section`
  flex
  h-screen
  w-screen
  flex-col
  items-center
  justify-center
  space-y-4
  bg-gradient-to-r
  from-[#00facd]
  to-[#2e2deb]
  p-10
`;

export const Title = tw.h1`
  text-4xl
  font-bold
`;
