"use client";
import { Button } from "../app/components/ui/button";
import { Card } from "../app/components/ui/card";
import { Play, Package, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "../app/components/ui/dialog";
import { X } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 280; // Width of card
  const CARD_SPACING = 24; // space-x-6 = 1.5rem = 24px
  const SCROLL_DISTANCE = CARD_WIDTH + CARD_SPACING;

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -SCROLL_DISTANCE,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: SCROLL_DISTANCE,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/videos/hero-section-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-5xl md:text-7xl mb-6">
              Infinity Media
            </h1>
            <p className="text-lg md:text-xl mb-8">Choice of your creation</p>
            <Button size="lg" className="bg-white text-white">
              <Link href="#portfolio" className="text-black">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {portfolioItems && services && (
        <>
          {/* Portfolio Section */}
          <section id="portfolio" className="py-24 bg-background">
            <div className="container">
              <h2 className="font-playfair text-[#37474F] text-4xl text-center mb-12">
                Our Portfolio
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="aspect-video relative">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="outline"
                          className="text-white border-white hover:text-black hover:bg-white transition-colors group"
                          onClick={() => setVideoUrl(item.videoUrl)}
                        >
                          <Play className="mr-2 h-4 w-4 group-hover:text-black transition-colors" />
                          <span className="group-hover:text-black transition-colors">
                            Watch Film
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-playfair text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-playfair text-4xl mb-6 text-[#37474F]">Our Story</h2>
                  <p className="mb-4 text-justify">
                    At Infinity Media, we&apos;re passionate about turning life&apos;s
                    special moments into beautiful films that you can cherish
                    forever. What started as a love for capturing memories has
                    grown into a commitment to creating cinematic stories that
                    reflect your unique journey. Whether it&apos;s a wedding,
                    pre-wedding shoot, engagement, maternity shoot, or a simple
                    highlight reel, we take your raw footage and craft it into
                    something truly special. With creativity and care, our team
                    works to ensure every moment is captured and transformed
                    into a film you&apos;ll treasure for a lifetime.
                  </p>
                  <p className="text-justify">
                    Our skilled team pours heart and soul into every project,
                    ensuring each frame is filled with emotion, artistry, and
                    authenticity. Your story deserves to be celebrated, and
                    we&apos;re here to bring it to life with creativity and care.
                  </p>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/images/team-work.jpeg"
                    alt="Team at work"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-background">
            <div className="container">
              <h2 className="font-playfair text-4xl text-center mb-12 text-[#37474F]">
                Our Services
              </h2>
              <div className="relative">
                <button
                  className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
                  onClick={scrollLeft}
                >
                  <ChevronLeft className="h-6 w-6 text-black" />
                </button>
                <div
                  ref={scrollRef}
                  className="flex overflow-x-auto overflow-y-hidden space-x-6 scroll-smooth hide-scrollbar touch-pan-x"
                  style={{
                    scrollBehavior: "smooth",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                  }}
                >
                  {services.map((service) => (
                    <div key={service.id} className="flex-none w-[250px]">
                      <div className="bg-[#37474F] rounded-xl shadow-lg p-6 h-full card-hover-effect">
                        <div className="relative h-40 mb-4">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <h3 className="text-white text-xl font-bold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition-colors"
                  onClick={scrollRight}
                >
                  <ChevronRight className="h-6 w-6 text-black" />
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {videoUrl && (
        <Dialog open={!!videoUrl} onOpenChange={() => setVideoUrl(null)}>
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-background p-4 rounded-lg w-full max-w-4xl relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -right-3 -top-3 rounded-full bg-white hover:bg-gray-100 z-50"
                onClick={() => setVideoUrl(null)}
              >
                <X className="h-4 w-4 text-black" />
              </Button>
              <iframe
                width="100%"
                height="500"
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}


const portfolioItems = [
  {
    title: "Riya & Arjun's Wedding",
    description: "A beautiful traditional ceremony in Udaipur",
    thumbnail: "/images/traditional-coverage.webp",
    videoUrl: "https://www.youtube.com/embed/qJFPtcK8qBg",
  },
  {
    title: "Priya & Rahul's Celebration",
    description: "Modern fusion wedding in Mumbai",
    thumbnail: "/images/traditional-coverage.webp",
    videoUrl: "https://www.youtube.com/embed/qJFPtcK8qBg",
  },
  {
    title: "Riya & Arjun's Wedding",
    description: "A beautiful traditional ceremony in Udaipur",
    thumbnail: "/images/traditional-coverage.webp",
    videoUrl: "https://www.youtube.com/embed/qJFPtcK8qBg",
  },
  {
    title: "Priya & Rahul's Celebration",
    description: "Modern fusion wedding in Mumbai",
    thumbnail: "/images/traditional-coverage.webp",
    videoUrl: "https://www.youtube.com/embed/qJFPtcK8qBg",
  },
  {
    title: "Riya & Arjun's Wedding",
    description: "A beautiful traditional ceremony in Udaipur",
    thumbnail: "/images/traditional-coverage.webp",
    videoUrl: "https://www.youtube.com/embed/qJFPtcK8qBg",
  },
  {
    title: "Priya & Rahul's Celebration",
    description: "Modern fusion wedding in Mumbai",
    thumbnail: "/images/traditional-coverage.webp",
    videoUrl: "https://www.youtube.com/embed/qJFPtcK8qBg",
  },
];

const services = [
  {
    id: 1,
    title: "Traditional Full Film",
    description: "Professional editing of complete wedding ceremonies and cultural events into a comprehensive film",
    image: "/images/traditional-coverage.webp",
    features: [
      "Multi-angle footage compilation",
      "Seamless transitions between sequences",
      "Professional audio mixing and enhancement",
      "Color grading and correction",
      "Complete narrative structure",
    ],
  },
  {
    id: 2,
    title: "Cinematic Highlight",
    description: "Artistic editing that transforms raw footage into emotionally compelling cinematic highlights",
    image: "/images/cinematic-film.jpg",
    features: [
      "Dramatic color grading",
      "Custom sound design",
      "Dynamic pacing and transitions",
      "Music synchronization",
    ],
  },
  {
    id: 3,
    title: "Reels",
    description: "Expert editing of short-form content optimized for social media engagement and shareability",
    image: "/images/reels.jpg",
    features: [
      "Attention-grabbing opening sequences",
      "Strategic cuts for maximum impact",
      "Trending effects and transitions",
      "Platform-specific aspect ratios",
    ],
  },
  {
    id: 4,
    title: "Wedding Teaser",
    description: "Quick-turnaround editing that captures the essence of wedding celebrations in a brief preview",
    image: "/images/wedding-teaser.jpg",
    features: [
      "Fast-paced montage editing",
      "Emotional highlight selection",
      "Music-driven storytelling",
    ],
  },
  {
    id: 5,
    title: "Pre-Wedding Teaser",
    description: "Stylized editing of pre-wedding moments that builds anticipation for the main event",
    image: "/images/pre-wedding.webp",
    features: [
      "Atmospheric color grading",
      "Cinematic transitions",
      "Narrative-focused editing",
    ],
  },
  {
    id: 6,
    title: "Pre-Wedding Song",
    description: "Music video-style editing that synchronizes pre-wedding footage with meaningful songs",
    image: "/images/pre-wedding-song.png",
    features: [
      "Beat-matched editing",
      "Lyrics-synchronized visuals",
      "Mood-enhancing color treatment",
    ],
  },
  {
    id: 7,
    title: "Baby Shower Highlight",
    description: "Gentle, emotive editing that captures the joy and anticipation of baby shower celebrations",
    image: "/images/baby-shower.jpg",
    features: [
      "Soft color palettes",
      "Thoughtful pacing for emotional impact",
      "Reaction shot compilation",
      "Memory-focused narrative structure",
    ],
  },
  {
    id: 8,
    title: "Engagement Highlight",
    description: "Dynamic editing that showcases the romance and excitement of engagement celebrations",
    image: "/images/engagement-highlight.webp",
    features: [
      "Couple-focused storytelling",
      "Reaction shot integration",
      "Romantic visual effects",
      "Custom color grading profiles",
    ],
  },
];