import MyForm from "@/components/MyForm";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="bg-slate-300 w-1/2 m-auto rounded-full">
        <div className=" w-full">
          <div className="flex justify-center gap-3 mt-10">
            <Image
              src="/img/kfhi.png"
              alt="ppjlc logo"
              width={236}
              height={0}
              className="mt-10"
            />
            <Image
              src="/img/ppjlc.png"
              alt="ppjlc logo"
              width={100}
              height={0}
              className="mt-10"
            />
          </div>
          <h1 className="font-sans font-medium text-5xl text-center text-green-800 mt-7 mb-11">
            PPJLC Dormitory
          </h1>
        </div>

        <MyForm />
      </div>
    </>
  );
};

export default Home;
