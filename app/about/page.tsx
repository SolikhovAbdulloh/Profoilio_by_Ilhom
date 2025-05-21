"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Film, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function AboutPage() {
  const { t } = useLanguage();

  // Portfolio works data
  const portfolioWorks = [
    {
      id: 1,
      title: "Urban Legendsas",
      description:
        "A collaborative student project exploring urban myths through diverse animation styles.",
      thumbnail:
        "https://img.freepik.com/free-vector/character-playing-online-video-games_23-2148519980.jpg?semt=ais_hybrid&w=740",
      author: "Animation Workshop Group",
      videoUrl: "videos/Doniyor-13.mp4",
    },
    {
      id: 2,
      title: "The Last Leaf",
      description:
        "A touching adaptation of O. Henry's story using traditional animation techniques.",
      thumbnail:
        "https://img.freepik.com/free-vector/character-playing-online-video-games_23-2148519980.jpg?semt=ais_hybrid&w=740",
      author: "Maria K.",
      videoUrl: "videos/final.mp4",
    },
    {
      id: 3,
      title: "Mechanical Heart",
      description:
        "A steampunk-inspired animation showcasing advanced character rigging and environment design.",
      thumbnail:
        "https://img.freepik.com/free-vector/character-playing-online-video-games_23-2148519980.jpg?semt=ais_hybrid&w=740",
      author: "Alex T.",
      videoUrl: "videos/Husanjon-24.mp4",
    },
    {
      id: 4,
      title: "Dream Sequence",
      description:
        "An experimental animation exploring the surreal nature of dreams through fluid transitions.",
      thumbnail:
        "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-student-on-computer-vector-png-image_6998285.png",
      author: "Sophia R.",
      videoUrl: "videos/Shohruh-16.mp4",
    },
    {
      id: 5,
      title: "The Lighthouse",
      description:
        "A moody atmospheric piece combining 2D and 3D elements to create a unique visual style.",
      thumbnail:
        "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-student-on-computer-vector-png-image_6998285.png",
      author: "Daniel M.",
      videoUrl: "videos/Doniyor-17.mp4",
    },
    {
      id: 6,
      title: "Floating Islands",
      description:
        "A fantasy-inspired animation with detailed environment design and character animation.",
      thumbnail:
        "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-student-on-computer-vector-png-image_6998285.png",
      author: "Elena V.",
      videoUrl: "videos/Doniyor-13.mp4",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <ScrollAnimation variant="fade-right">
                <article>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {t("aboutMeTitle")}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    {t("aboutMeSubtitle")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link
                        href="https://t.me/ilkhom_karimov"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("contactMe")}
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="#portfolio">{t("viewMyWork")}</Link>
                    </Button>
                  </div>
                </article>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-left">
                <figure className="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden ">
                  <Image
                    src="images/ilhom.png"
                    alt="Ilhom Karimov"
                    fill
                    className="object-contain"
                  />
                  <figcaption className="sr-only">
                    Portrait of Ilhom Karimov
                  </figcaption>
                </figure>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16">
          <div className="container">
            <ScrollAnimation variant="fade-up">
              <article className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight mb-8">
                  {t("myJourney")}
                </h2>

                <div className="space-y-6 text-lg">
                  <p>{t("journeyText1")}</p>
                  <p>{t("journeyText2")}</p>
                  <p>{t("journeyText3")}</p>
                  <p>{t("journeyText4")}</p>
                </div>
              </article>
            </ScrollAnimation>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <ScrollAnimation variant="fade-up">
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">
                  {t("skillsExpertise")}
                </h2>
              </header>
            </ScrollAnimation>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollAnimation variant="fade-up" delay={100}>
                <article className="bg-background p-6 rounded-lg shadow-sm">
                  <Film className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("animationTechniques")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>2D Traditional Animation</li>
                    <li>Digital 2D Animation</li>
                    <li>3D Character Animation</li>
                    <li>Stop Motion</li>
                    <li>Motion Graphics</li>
                  </ul>
                </article>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-up" delay={200}>
                <article className="bg-background p-6 rounded-lg shadow-sm">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("storytelling")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Narrative Development</li>
                    <li>Character Design</li>
                    <li>Storyboarding</li>
                    <li>Visual Composition</li>
                    <li>Timing & Pacing</li>
                  </ul>
                </article>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-up" delay={300}>
                <article className="bg-background p-6 rounded-lg shadow-sm">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("education")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Animation Workshops</li>
                    <li>One-on-One Mentoring</li>
                    <li>Curriculum Development</li>
                    <li>Technical Instruction</li>
                    <li>Portfolio Review</li>
                  </ul>
                </article>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-up" delay={400}>
                <article className="bg-background p-6 rounded-lg shadow-sm">
                  <Award className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t("softwareProficiency")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Adobe Animate</li>
                    <li>Toon Boom Harmony</li>
                    <li>Blender</li>
                    <li>Maya</li>
                    <li>After Effects</li>
                  </ul>
                </article>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16">
          <div className="container">
            <ScrollAnimation variant="fade-up">
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">
                  {t("portfolio")}
                </h2>
              </header>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioWorks.map((work, index) => (
                <ScrollAnimation
                  key={work.id}
                  variant="fade-up"
                  delay={(index % 3) * 100}
                >
                  <VideoCard
                    title={work.title}
                    description={work.description}
                    thumbnail={work.thumbnail}
                    videoUrl={work.videoUrl}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        {/* <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <ScrollAnimation variant="fade-right">
                <figure className="relative aspect-video md:aspect-auto md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Teaching animation"
                    fill
                    className="object-cover"
                  />
                  <figcaption className="sr-only">Ilhom Karimov teaching animation</figcaption>
                </figure>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-left">
                <article>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">{t("teachingPhilosophy")}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{t("teachingText1")}</p>
                  <p className="text-lg text-muted-foreground mb-6">{t("teachingText2")}</p>
                  <Button asChild>
                    <Link href="/students">{t("studentWorks")}</Link>
                  </Button>
                </article>
              </ScrollAnimation>
            </div>
          </div>
        </section> */}

        {/* Contact CTA */}
        <section className="py-16">
          <div className="container text-center">
            <ScrollAnimation variant="fade-up">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {t("getInTouch")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {t("getInTouchSubtitle")}
              </p>
              <Button size="lg" asChild>
                <Link
                  href="https://t.me/ilkhom_karimov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contactViaTelegram")}
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
