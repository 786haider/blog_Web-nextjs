"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { posts } from "../../data/posts";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    const foundPost = posts.find((p) => p.id === parseInt(id as string));
    setPost(foundPost || null);
  }, [id]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="\oceans\5743316-uhd_3840_2160_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1 className="flex justify-center text-5xl">{post.title}</h1>
        <p className="text-2xl mt-2 flex justify-center text-white">
          {post.content}
        </p>

        <form onSubmit={handleAddComment} className="mt-5 flex justify-center">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className=""
          />
          <br />
          <button
            type="submit"
            className="bg-black text-white w-32 border rounded-xl ml-5 hover:bg-blue-500 hover:text-white"
          >
            Comment
          </button>
        </form>

        <ul>
          {comments.map((cmt, index) => (
            <li key={index} className="text-black">
              {cmt}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-5">
          <Link
            href={"/blogs"}
            className="  border rounded-xl bg-black text-white w-20 h-7 flex justify-center hover:bg-blue-500 hover:text-white"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
