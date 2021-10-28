import type { NextPage } from "next";
import { useRouter } from "next/router";
import Button from "../component/Atoms/Button";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Button
        btnText={"to CounterPage(Testing)"}
        onclick={() => router.push(`/counter`)}
      />
      <Button btnText={"to InfoPage"} onclick={() => router.push(`/info`)} />
    </>
  );
};

export default Home;
