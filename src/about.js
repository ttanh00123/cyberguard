import React from "react";
import Layout from "./Layout";

export default function AboutPage() {
  return (
    <Layout
      children={
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold mb-4">About us</h1>
            <p className="text-lg text-gray-700">
              CyberGuard helps users learn how to spot scams, identify
              misinformation, and navigate the internet safely. Our goal is to
              make the web a safer place for everyone.
            </p>
          </div>
        </div>
      }
    />
  );
}
