"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const creators = [
  { id: 1, image: "/ronaldo.jpg" },
  { id: 2, image: "/mrbeast.jpg" },
  { id: 3, image: "/kendal.jpg" },
  { id: 4, image: "/aston.jpg" },
  { id: 5, image: "/kylie.jpg" },
  { id: 6, image: "/iman.jpg" },
];

export default function Home() {
  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Send className="text-white font-bold text-2xl tracking-tighter" />
                <h1 className="text-white font-bold text-2xl tracking-tighter">Slide</h1>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button className="bg-white font-bold text-black">
                <Link href="/sign-in">Login</Link>
              </Button>
            </div>

            {/* Hero Content */}
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Transform Your Instagram Engagement
              </h1>
              <p className="mt-14 text-lg text-blue-200">
                Slide revolutionizes how you connect with your audience on Instagram. Automate
                responses and boost engagement effortlessly, turning interactions into valuable business
                opportunities.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400 hover:bg-blue-900/50">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Infinite Scroll Creators Section */}
            <div className="mt-20 overflow-hidden relative">
              <div className="w-max flex gap-8 animate-marquee">
                {[...creators, ...creators].map((creator, index) => (
                  <Card
                    key={index}
                    className="w-[250px] h-[300px] flex-shrink-0 bg-white/10 backdrop-blur-md p-0 overflow-hidden rounded-tr-[3rem]"
                  >
                    <CardContent className="p-0 h-full w-full relative">
                      <Image
                        src={creator.image}
                        alt={`Creator ${index + 1}`}
                        fill
                        className="object-cover w-full h-full rounded-tr-[3rem]"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for marquee effect */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
