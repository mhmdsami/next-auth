import { LoginButton } from "@/components/navbar";
import Head from "next/head";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data } = useSession();
  return (
    <>
      <Head>
        <title>NextAuth</title>
        <link rel="icon" type="image/svg+xml" href="/ticket.svg" />
        <meta name="description" content="siam's first try with next-auth" />
      </Head>
      <div className="flex flex-col gap-2 h-screen justify-center items-center text-white">
        <LoginButton />
        {data ? (
          <>Hello there!, {data.user?.name}</>
        ) : (
          <>Please Try Logging in</>
        )}
      </div>
    </>
  );
};

export default Home;
