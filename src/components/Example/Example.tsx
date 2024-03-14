const Example = (): JSX.Element => {
  return (
    <section className=" flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-gradient-to-r from-[#00facd] to-[#2e2deb] p-10">
      <h1 className="text-4xl font-bold">
        ❄ Next.js & TypeScript starter template ❄
      </h1>
      <p className="text-lg">
        You can start by editting this component in{" "}
        <span className="animate-pulse font-semibold italic underline">
          src/components/Example.tsx.
        </span>
      </p>
    </section>
  );
};

export default Example;
