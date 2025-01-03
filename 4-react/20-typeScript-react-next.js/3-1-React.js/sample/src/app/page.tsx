import Hello from "../components/Hello";
// import Counter from "../components/Counter";
// import Parent from "../components/Parent";
import UseMemoSample from "../components/UseMemoSample";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Hello />
      {/* <Counter initialValue={0}/>
      <Parent /> */}
      <UseMemoSample />
    </div>
  );
}
