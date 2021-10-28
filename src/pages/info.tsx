import type { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../component/Atoms/Button";

const Info: NextPage = () => {
  const router = useRouter();
  return (
    <>
      hello my name is info page
      <Button btnText={"modoru"} onclick={() => router.push("/")} />
    </>
  );
};

export default Info;
