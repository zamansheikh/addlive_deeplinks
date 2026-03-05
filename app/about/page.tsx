import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - AddaLive",
  description: "Learn about AddaLive — the premier live streaming and social platform.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About AddaLive</h1>

      <p className="mb-5">
        AddaLive is a premier live streaming and social platform designed to bring people together. Whether you want to
        showcase your talent, meet new friends, or just hang out in audio rooms, AddaLive is the place to be.
      </p>

      <p className="mb-5">
        Our mission is to create a safe, fun, and engaging environment for everyone. We believe in the power of real-time
        connection and strive to provide the best tools for our community.
      </p>

      <p className="mb-5">Join millions of users worldwide and start your journey today!</p>

      <div className="mt-16 pt-5 border-t border-gray-200 text-center space-x-6">
        <Link href="/" className="text-pink-500 hover:underline">Home</Link>
        <Link href="/contact" className="text-pink-500 hover:underline">Contact Us</Link>
      </div>
    </div>
  );
}
