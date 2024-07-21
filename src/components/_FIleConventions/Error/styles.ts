import tw from "tailwind-styled-components";

export const Container = tw.section`
  flex
  h-screen
  w-screen
  flex-col
  items-center
  justify-center
  gap-10
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

export const Text = tw.p`
  text-lg
  font-semibold
  italic
`;
