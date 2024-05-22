import Image from "next/image";
import { send } from "./action";

export default async function Home({ params, searchParams }: any) {
  let data = await fetch("http://localhost:3000/api");
  let jsonData = data.json();
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      {JSON.stringify(jsonData)}
      {searchParams.hello}
      <form action={send}>
        <button>send it</button>
      </form>
    </main>
  );
}
