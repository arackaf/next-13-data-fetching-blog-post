import "../styles/globals.css";

export default function RootLayout(props: any) {
  console.log("layout", { props });
  return (
    <html>
      <head></head>
      <body>{props.children}</body>
    </html>
  );
}
