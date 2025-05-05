"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  const { t } = useLanguage()

  // Featured works data
  const featuredWorks = [
    {
      id: 1,
      title: "The Journey Within",
      description:
        "An animated short film exploring the inner world of emotions through vibrant visuals and dynamic character animation.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "#",
    },
    {
      id: 2,
      title: "City of Dreams",
      description: "A stylized animation showcasing urban landscapes with a blend of 2D and 3D techniques.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "#",
    },
    {
      id: 3,
      title: "Nature's Symphony",
      description:
        "An experimental animation celebrating the harmony of nature through fluid motion and organic transitions.",
      thumbnail: "/placeholder.svg?height=400&width=600",
      videoUrl: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        {/* Featured Works */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <ScrollAnimation variant="fade-up">
              <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">{t("featuredWorks")}</h2>
                  <p className="text-muted-foreground">{t("featuredWorksSubtitle")}</p>
                </div>
                <Button variant="link" asChild className="hidden md:flex">
                  <Link href="/about">{t("viewAllWorks")} →</Link>
                </Button>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorks.map((work, index) => (
                <ScrollAnimation key={work.id} variant="fade-up" delay={(index + 1) * 100}>
                  <VideoCard
                    title={work.title}
                    description={work.description}
                    thumbnail={work.thumbnail}
                    videoUrl={work.videoUrl}
                  />
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation variant="fade-up" delay={400}>
              <div className="mt-10 text-center md:hidden">
                <Button variant="outline" asChild>
                  <Link href="/about">{t("viewAllWorks")}</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <ScrollAnimation variant="fade-right">
                <figure className="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden bg-black">
                  <Image src="/images/ilhom-karimov.png" alt="Ilhom Karimov" fill className="object-contain" />
                  <figcaption className="sr-only">Portrait of Ilhom Karimov</figcaption>
                </figure>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-left">
                <article>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">{t("aboutMeTitle")}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{t("journeyText1")}</p>
                  <p className="text-lg text-muted-foreground mb-8">{t("journeyText2")}</p>
                  <Button asChild>
                    <Link href="/about">{t("aboutMe")}</Link>
                  </Button>
                </article>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Student Showcase */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <ScrollAnimation variant="fade-up">
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{t("studentShowcase")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("studentShowcaseSubtitle")}</p>
              </header>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollAnimation variant="fade-up" delay={100}>
                <VideoCard
                  title="Urban Legends"
                  description="A collaborative student project exploring urban myths through diverse animation styles."
                  thumbnail="/placeholder.svg?height=400&width=600"
                  author="Animation Workshop Group"
                />
              </ScrollAnimation>
              <ScrollAnimation variant="fade-up" delay={200}>
                <VideoCard
                  title="The Last Leaf"
                  description="A touching adaptation of O. Henry's story using traditional animation techniques."
                  thumbnail="/placeholder.svg?height=400&width=600"
                  author="Maria K."
                />
              </ScrollAnimation>
              <ScrollAnimation variant="fade-up" delay={300}>
                <VideoCard
                  title="Mechanical Heart"
                  description="A steampunk-inspired animation showcasing advanced character rigging and environment design."
                  thumbnail="/placeholder.svg?height=400&width=600"
                  author="Alex T."
                />
              </ScrollAnimation>
            </div>

            <ScrollAnimation variant="fade-up" delay={400}>
              <div className="mt-10 text-center">
                <Button variant="outline" asChild>
                  <Link href="/students">{t("viewAllStudentWorks")}</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container text-center">
            <ScrollAnimation variant="fade-up">
              <h2 className="text-3xl font-bold tracking-tight mb-4">{t("letsWorkTogether")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("workTogetherSubtitle")}</p>
              <Button size="lg" asChild>
                <Link href="https://t.me/ilkhom_karimov" target="_blank" rel="noopener noreferrer">
                  {t("contactViaTelegram")}
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
