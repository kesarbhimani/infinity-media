"use client";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Phone, ChevronDown, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "./components/ui/dialog";
import { X } from "lucide-react";
import Header from "./components/Header";


export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 280;
  const CARD_SPACING = 24;
  const SCROLL_DISTANCE = CARD_WIDTH + CARD_SPACING;

  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  const [isVisible, setIsVisible] = useState({
    portfolio: false,
    about: false,
    services: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const portfolio = document.getElementById('portfolio');
      const about = document.getElementById('about');
      const services = document.getElementById('services');

      if (portfolio && isElementInViewport(portfolio)) {
        setIsVisible(prev => ({ ...prev, portfolio: true }));
      }

      if (about && isElementInViewport(about)) {
        setIsVisible(prev => ({ ...prev, about: true }));
      }

      if (services && isElementInViewport(services)) {
        setIsVisible(prev => ({ ...prev, services: true }));
      }
    };

    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <Header />


      {/* Hero Section */}
      <section className={`relative h-screen overflow-hidden ${isScrolled ? 'scrolled' : ''}`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-white/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-gray-800 px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-sm uppercase tracking-widest border-b border-coral-600 pb-2 mb-6">Premium Video Editing Services</span>
            <h1 className="font-playfair text-5xl md:text-7xl mb-6 leading-tight">
              Transform Your <span className="text-coral-600">Raw Footage</span> Into Cinematic Stories
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Wedding highlights, pre-wedding films, engagement sessions and more - professionally edited with emotion and artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+919081884211">
                <Button size="lg" className="bg-coral-600 text-white hover:bg-coral-700 rounded-full flex items-center">
                  <Phone className="mr-2 h-5 w-5" /> Let&apos;s Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a href="#portfolio" className="animate-bounce p-2 bg-coral-100 rounded-full shadow-md">
            <ChevronDown className="h-6 w-6 text-coral-600" />
          </a>
        </div>
      </section>


      {portfolioItems && services && (
        <>
          {/* Featured Work Section */}
          <section id="portfolio" className={`py-24 bg-gradient-to-b from-gray-50 to-white text-gray-800 transition-opacity duration-1000 ${isVisible.portfolio ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-coral-600 uppercase tracking-widest mb-2">Our Portfolio</span>
                <h2 className="font-playfair text-4xl md:text-5xl mb-4">Featured Work</h2>
                <div className="w-20 h-1 bg-coral-500 mb-6"></div>
                <p className="max-w-2xl text-gray-600">
                  Discover how we transform ordinary footage into extraordinary visual stories
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.slice(0, visibleItems).map((item, index) => (
                  <Card key={index} className="bg-white border border-gray-100 overflow-hidden group rounded-lg shadow-md transition-all duration-300 hover:shadow-coral-300/50 hover:-translate-y-1">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 600px) 100vw, 280px"
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <button
                        className="text-coral-600 text-sm flex items-center hover:text-coral-700 transition-colors"
                        onClick={() => setVideoUrl(item.videoUrl)}
                      >
                        Watch Now <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>

              {visibleItems < portfolioItems.length && (
                <div className="mt-12 text-center">
                  <Button
                    variant="outline"
                    className="border-coral-600 text-coral-600 hover:bg-coral-600 hover:!text-white"
                    onClick={loadMoreItems}
                  >
                    View All Projects
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className={`py-24 bg-coral-50 text-gray-800 transition-opacity duration-1000 ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <span className="text-coral-600 uppercase tracking-widest mb-2 block">Our Story</span>
                  <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-gray-800">Crafting Memories That Last Forever</h2>
                  <div className="w-20 h-1 bg-coral-500 mb-6"></div>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    At Infinity Media, we&apos;re passionate about turning life&apos;s special moments into beautiful films that you can cherish forever. What started as a love for capturing memories has grown into a commitment to creating cinematic stories that reflect your unique journey.
                  </p>
                  <p className="mb-6 text-gray-700 leading-relaxed">
                    Whether it&apos;s a wedding, pre-wedding shoot, engagement, maternity shoot, or a simple highlight reel, we take your raw footage and craft it into something truly special. With creativity and care, our team works to ensure every moment is captured and transformed into a film you&apos;ll treasure for a lifetime.
                  </p>
                  <div className="flex gap-4">
                    <div className="p-4 border border-coral-200 bg-white rounded-lg shadow-sm flex-1">
                      <h3 className="font-bold text-xl mb-2 text-coral-600">1000+</h3>
                      <p className="text-gray-700">Projects Completed</p>
                    </div>
                    <div className="p-4 border border-coral-200 bg-white rounded-lg shadow-sm flex-1">
                      <h3 className="font-bold text-xl mb-2 text-coral-600">3+ Years</h3>
                      <p className="text-gray-700">Professional Experience</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <div className="absolute -right-6 -top-6 w-40 h-40 bg-coral-400 rounded-lg -z-10"></div>
                    <Image
                      src="/images/team-at-work.webp"
                      alt="Team at work"
                      fill
                      sizes="(max-width: 600px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute -left-6 -bottom-6 w-40 h-40 bg-coral-600 rounded-lg -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className={`py-24 bg-white text-gray-800 transition-opacity duration-1000 ${isVisible.services ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-coral-600 uppercase tracking-widest mb-2">What We Offer</span>
                <h2 className="font-playfair text-4xl md:text-5xl mb-4">Premium Editing Services</h2>
                <div className="w-20 h-1 bg-coral-500 mb-6"></div>
                <p className="max-w-2xl text-gray-600">
                  We specialize in transforming your raw footage into polished, cinematic masterpieces
                </p>
              </div>

              {/* Desktop Slider */}
              <div className="hidden md:block relative">
                <div className="relative px-4 md:px-12">
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-coral-100 p-3 rounded-full z-10 hover:bg-coral-200 transition-colors shadow-md hidden md:block"
                    onClick={scrollLeft}
                  >
                    <ChevronLeft className="h-6 w-6 text-coral-600" />
                  </button>

                  <div
                    ref={scrollRef}
                    className="flex overflow-x-auto overflow-y-hidden space-x-6 scroll-smooth md:hide-scrollbar touch-pan-x py-8 snap-x"
                    style={{
                      scrollBehavior: "smooth",
                      msOverflowStyle: "none",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {services.map((service) => (
                      <div key={service.id} className="flex-none w-[280px] snap-center">
                        {service.image === "none" ? (
                          <div className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-xl shadow-md p-6 h-full border border-coral-200 hover:border-coral-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-center text-center">
                            <div className="mb-6">
                              <ArrowRight className="h-12 w-12 text-coral-600 mb-4" />
                            </div>
                            <h3 className="text-coral-600 text-xl font-bold mb-3">
                              {service.title}
                            </h3>
                            <p className="text-gray-700 mb-6">
                              {service.description}
                            </p>
                            <Link href="tel:+919081884211">
                              <Button className="bg-coral-600 text-white hover:bg-coral-700">
                                Contact Us
                              </Button>
                            </Link>
                          </div>
                        ) : (
                          <div className="bg-white rounded-xl shadow-md p-6 h-full border border-gray-100 hover:border-coral-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                            <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 600px) 100vw, 250px"
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-coral-500/60 to-transparent"></div>
                            </div>
                            <h3 className="text-coral-600 text-xl font-bold mb-3">
                              {service.title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                              {service.description}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-coral-100 p-3 rounded-full z-10 hover:bg-coral-200 transition-colors shadow-md hidden md:block"
                    onClick={scrollRight}
                  >
                    <ChevronRight className="h-6 w-6 text-coral-600" />
                  </button>
                </div>
              </div>

              {/* Mobile Grid */}
              <div className="md:hidden grid grid-cols-1 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-coral-300 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
                  >
                    {service.image === "none" ? (
                      <div className="bg-gradient-to-br from-coral-50 to-coral-100 p-8 flex flex-col items-center text-center">
                        <div className="mb-6">
                          <ArrowRight className="h-12 w-12 text-coral-600" />
                        </div>
                        <h3 className="text-coral-600 text-xl font-bold mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 mb-6">
                          {service.description}
                        </p>
                        <Link href="tel:+919081884211">
                          <Button className="bg-coral-600 text-white hover:bg-coral-700">
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <>
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-coral-600 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <br />
        </>
      )}

      {/* Video Dialog */}
      {videoUrl && (
        <Dialog open={!!videoUrl} onOpenChange={() => setVideoUrl(null)}>
          <div className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-1 rounded-lg w-full max-w-4xl relative shadow-2xl">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 rounded-full bg-coral-600/10 hover:bg-coral-600/20 text-coral-600 z-50"
                onClick={() => setVideoUrl(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <iframe
                width="100%"
                height="500"
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
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
    title: "Ayush & Mehak | Cocktail Party",
    description: "A joyful cocktail night celebrating Ayush & Mehak! 🥂✨",
    thumbnail: "https://img.youtube.com/vi/9LcBC7Fcl8s/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9LcBC7Fcl8s",
  },
  {
    title: "Nishit & Pari | Ring Ceremony",
    description: "A captivating highlight of Nishit and Paris ring ceremony. 💍✨",
    thumbnail: "https://img.youtube.com/vi/VvEFekIh9xc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/VvEFekIh9xc",
  },
  {
    title: "Shashank & Disha | Wedding Teaser",
    description: "A love story unfolds – stay tuned! ✨",
    thumbnail: "https://img.youtube.com/vi/564ipZC9dwI/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/564ipZC9dwI",
  },
  {
    title: "Mahima & Viren | Wedding Highlight",
    description: "A beautiful glimpse of Mahima & Viren's wedding day! ❤️",
    thumbnail: "https://img.youtube.com/vi/Tn1YrlzRPH0/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Tn1YrlzRPH0",
  },
  {
    title: "Sayam & Krina | Wedding Teaser",
    description: "Sayam & Krina's big day is on the way! 💖",
    thumbnail: "https://img.youtube.com/vi/O11SK0PoaFE/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/O11SK0PoaFE",
  },
  {
    title: "Yash & Bhavya | Sangeet Teaser",
    description: "Dance, music, and love – Yash & Bhavya's Sangeet! 💫🎤",
    thumbnail: "https://img.youtube.com/vi/wKPyBMCRUQc/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/wKPyBMCRUQc",
  },
  {
    title: "Kashi | Series Teaser",
    description: "Experience the essence of Kashi.",
    thumbnail: "https://img.youtube.com/vi/3hMMR9T_JSw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/3hMMR9T_JSw",
  },
  {
    title: "Dhruv & Priya | Wedding Teaser",
    description: "Love in the air: Dhruv & Priya's story coming soon! 💕",
    thumbnail: "https://img.youtube.com/vi/S94srXLyuPQ/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/S94srXLyuPQ",
  },
  {
    title: "Saumitra & Anisha | Short Film",
    description: "A short film that captures the essence of Saumitra & Anisha's love story. ❤️",
    thumbnail: "https://img.youtube.com/vi/SYcBrm3rzec/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/SYcBrm3rzec",
  },
  {
    title: "Rushi & Vruddhi | Couple Reel",
    description: "Couple goals in every frame – Rushi & Vruddhi! 💑",
    thumbnail: "https://img.youtube.com/vi/lwXxBHaAltw/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/lwXxBHaAltw",
  },
];

const services = [
  {
    id: 1,
    title: "Traditional Full Film",
    description: "A complete and professionally edited film that preserves every moment of your wedding ceremony and cultural rituals in their full essence.",
    image: "/images/traditional-full-film.webp",
  },
  {
    id: 2,
    title: "Cinematic Highlight",
    description: "A beautifully crafted, cinematic short film that captures the most emotional and breathtaking moments of your special day.",
    image: "/images/cinematic-highlight.webp",
  },
  {
    id: 3,
    title: "Reels",
    description: "Engaging and shareable short-form videos tailored for social media, capturing the best highlights of your wedding or event.",
    image: "/images/reels.webp",
  },
  {
    id: 4,
    title: "Wedding Teaser",
    description: "A short, exciting preview that builds anticipation by showcasing the most magical moments from your wedding day.",
    image: "/images/wedding-teaser.webp",
  },
  {
    id: 5,
    title: "Pre-Wedding Teaser",
    description: "A visually captivating teaser that offers a glimpse into your love story, setting the stage for your big day.",
    image: "/images/pre-wedding-teaser.webp",
  },
  {
    id: 6,
    title: "Pre-Wedding Song",
    description: "A music video-style film that beautifully blends pre-wedding moments with song, creating a memorable love story.",
    image: "/images/pre-wedding-song.webp",
  },
  {
    id: 7,
    title: "Baby Shower Highlight",
    description: "A heartwarming video that captures the joy, love, and excitement of your baby shower, preserving memories to cherish forever.",
    image: "/images/baby-shower-highlight.webp",
  },
  {
    id: 8,
    title: "Engagement Highlight",
    description: "A vibrant and emotional highlight reel that showcases the love and happiness of your engagement celebration.",
    image: "/images/engagement-highlight.webp",
  },
  {
    id: 9,
    title: "Need Something Custom?",
    description: "Looking for a unique editing style or custom package? Contact us to discuss your vision and let's create something special together.",
    image: "none", // flag for contact card
  }
];
