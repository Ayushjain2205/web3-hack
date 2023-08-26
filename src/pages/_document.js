import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="lemonade" lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <body>
        <div className="navbar bg-primary">
          <div className="flex-1">
            <a className="btn btn-secondary btn-outline normal-case text-xl">
              Carbon Clean &nbsp; <i class="fa-brands fa-pagelines"></i>
            </a>
          </div>

          <div className="flex-none">
            <button className="btn btn-ghost">
              <a href="/optimize">Offset</a>
            </button>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
