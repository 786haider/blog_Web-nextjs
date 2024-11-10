import Link from "next/link";
import { posts } from "../data/posts";
import BgImage from "../../../public/bgimage.jpg";

export default function BlogPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "white" }}>
      <div
        style={{
          backgroundImage: `url(${BgImage.src})`,
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
        <h1 className="text-5xl flex justify-center font-extrabold text-black">
          Blog: The Three Great Oceans
        </h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="flex justify-center mt-5 text-3xl text-black font-bold">
              <Link href={`/blogs/${post.id}`} className="hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
          </div>
        ))}
        <div className="flex justify-center mt-5">
          <Link
            href={"/"}
            className="  border rounded-xl bg-black w-20 h-7 flex justify-center hover:bg-blue-500 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
