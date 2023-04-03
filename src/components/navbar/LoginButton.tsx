import { Button } from "@/components/shared";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub } from "react-icons/bs";

const LoginButton = () => {
  const { data } = useSession();

  if (data) {
    return (
      <Button onClick={() => signOut()}>
        <BsGithub className="w-6 h-6" />
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
