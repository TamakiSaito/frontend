import Hello from "../components/Hello";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Hello />
      <Counter initialValue={0}/>
    </div>
  );
}
