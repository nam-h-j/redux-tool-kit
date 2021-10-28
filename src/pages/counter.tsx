import type { NextPage } from "next";
import Button from "../component/Atoms/Button";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slice/CounterSlice";
import { useRouter } from "next/router";

const Counter: NextPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        btnText={"increment"}
        onclick={() => dispatch(increment())}
      ></Button>
      <span>{count}</span>
      <Button
        btnText={"decrement"}
        onclick={() => dispatch(decrement())}
      ></Button>
      <Button btnText={"modoru"} onclick={() => router.push("/")} />
    </div>
  );
};

export default Counter;
