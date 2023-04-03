import { Button } from "@/components/shared";
import { useSession, signIn, signOut } from "next-auth/react";
import { MdAccountCircle } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const LoginButton = () => {
  const { data } = useSession();

  if (data) {
    return (
      <Button onClick={() => signOut()}>
        {data.user?.image ? (
          <Image
            src={data.user?.image}
            alt="user avatar"
            width={28}
            height={28}
            className="rounded-full"
          />
        ) : (
          <MdAccountCircle className="w-6 h-6" />
        )}
        Sign out
      </Button>
    );
  } else {
    return (
      <Button onClick={() => signIn()}>
        <BsGithub className="w-6 h-6" />
        Sign in
      </Button>
    );
  }
};

export default LoginButton;
