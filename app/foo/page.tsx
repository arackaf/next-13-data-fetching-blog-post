import Link from "next/link";
import { FooClient } from "./prefetch";

export default function () {
  console.log("RENDER Foo");
  return (
    <section>
      <h1>Foo page</h1>
      <FooClient />
      <Link href="/">Go home</Link>
    </section>
  );
}
