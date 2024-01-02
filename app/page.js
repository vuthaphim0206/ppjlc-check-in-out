import MyForm from "@/components/MyForm";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="bg-pink-400 w-5/6 md:w-2/3 m-auto rounded-t-2xl">
        <div className=" w-full">
          <div className="flex justify-center gap-3 mt-5">
            <Image
              src="/img/kfhi.png"
              alt="ppjlc logo"
              width={236}
              height={0}
              className="mt-5"
            />
            {/* <Image
              src="/img/ppjlc.png"
              alt="ppjlc logo"
              width={100}
              height={0}
              className="mt-10"
            /> */}
          </div>
          <h1 className="font-sans font-medium text-4xl sm:text-5xl text-center text-green-800 mt-3 mb-10">
            PPJLC Dormitory
          </h1>
          <hr className="bg-pink-700 border-pink-700 border-2"/>
        </div>

        <MyForm />
      </div>
    </>
  );
};

export default Home;
