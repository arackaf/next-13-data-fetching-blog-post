export default function (a: any, b: any, c: any) {
  console.log({ a, b, c });

  console.log(a?.params?.slug);
  return <h1>Hi</h1>;
}
