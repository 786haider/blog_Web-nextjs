import Link from "next/link";
import BgHome from "../../public/homebg.jpg";

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "white" }}>
      <div
        style={{
          backgroundImage: `url(${BgHome.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          zIndex: 1,
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 className="flex justify-center text-6xl mt-10">
          Welcome to the Home Page
        </h1>
        <p className="flex justify-center text-2xl mt-5 text-black">
          Read blog about three great oceans
        </p>
        <div className="flex justify-center mt-5">
          <Link
            href={"/blogs"}
            className="  border rounded-xl bg-black w-20 h-7 flex justify-center hover:bg-blue-500 hover:text-white"
          >
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
