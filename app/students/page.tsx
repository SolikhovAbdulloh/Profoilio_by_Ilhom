"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/lib/i18n/language-context";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function StudentsPage() {
  const { t } = useLanguage();

  // Student works data
  const studentWorks = {
    featured: [
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
    ],
    recent: [
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
    ],
    beginner: [
      {
        id: 7,
        title: "First Steps",
        description:
          "A collection of animation exercises showcasing fundamental principles of movement and timing.",
        thumbnail:
          "https://static.vecteezy.com/system/resources/previews/060/539/493/non_2x/student-boy-sitting-at-home-office-desk-doing-school-homework-surfing-internet-on-desktop-computer-flat-illustration-isolated-on-white-vector.jpg",
        author: "Beginner Workshop Group",
        videoUrl: "videos/Shohruh-16.mp4",
      },
      {
        id: 8,
        title: "Character Walk Cycles",
        description:
          "A study of different personality types expressed through walking animations.",
        thumbnail:
          "https://static.vecteezy.com/system/resources/previews/060/539/493/non_2x/student-boy-sitting-at-home-office-desk-doing-school-homework-surfing-internet-on-desktop-computer-flat-illustration-isolated-on-white-vector.jpg",
        author: "Introductory Class",
        videoUrl: "videos/Doniyor-13.mp4",
      },
      {
        id: 9,
        title: "Emotional Expressions",
        description:
          "A series of character facial animations demonstrating various emotional states.",
        thumbnail:
          "https://static.vecteezy.com/system/resources/previews/060/539/493/non_2x/student-boy-sitting-at-home-office-desk-doing-school-homework-surfing-internet-on-desktop-computer-flat-illustration-isolated-on-white-vector.jpg",
        author: "Animation Fundamentals Class",
        videoUrl: "videos/Husanjon-24.mp4",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/nana.png"
              alt="Night cityscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0  from-background/70 via-background/80 to-background/10 dark:from-background/80 dark:via-background/60 dark:to-background/40" />
          </div>

          <div className="container relative z-10 text-center text-[white]">
            <ScrollAnimation variant="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6  drop-shadow-md">
                {t("studentWorksTitle")}
              </h1>
              <p className="text-xl text-white/100 max-w-3xl mx-auto mb-8 drop-shadow">
                {t("studentWorksSubtitle")}
              </p>
              <Button
                size="lg"
                className="backdrop-blur-sm bg-[#00b900]  hover:bg-white/30 border border-white/40 text-white"
                asChild
              >
                <Link href="#student-showcase">
                  {t("exploreStudentProjects")}
                </Link>
              </Button>
            </ScrollAnimation>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <ScrollAnimation variant="fade-right">
                <article>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">
                    {t("teachingApproach")}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {t("teachingApproachText1")}
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t("teachingApproachText2")}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">
                          {t("foundationalPrinciples")}
                        </h3>
                        <p className="text-muted-foreground">
                          {t("foundationalPrinciplesText")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">
                          {t("technicalSkills")}
                        </h3>
                        <p className="text-muted-foreground">
                          {t("technicalSkillsText")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">
                          {t("creativeDevelopment")}
                        </h3>
                        <p className="text-muted-foreground">
                          {t("creativeDevelopmentText")}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-left">
                <figure className="relative aspect-video md:aspect-auto md:h-[550px] rounded-lg overflow-hidden">
                  <Image
                    src="images/ilhom.png"
                    alt="Animation teaching session"
                    fill
                    className="object-contain max-w-full max-h-full"
                  />
                  <figcaption className="sr-only">
                    Animation teaching session with students
                  </figcaption>
                </figure>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Student Showcase */}
        <section id="student-showcase" className="py-16 bg-muted/50">
          <div className="container">
            <ScrollAnimation variant="fade-up">
              <header className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">
                  {t("studentShowcaseTitle")}
                </h2>
              </header>
            </ScrollAnimation>

            <Tabs defaultValue="featured" className="w-full">
              <ScrollAnimation variant="fade-up">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="featured">
                      {t("featuredTab")}
                    </TabsTrigger>
                    <TabsTrigger value="recent">{t("recentTab")}</TabsTrigger>
                    <TabsTrigger value="beginner">
                      {t("beginnerTab")}
                    </TabsTrigger>
                  </TabsList>
                </div>
              </ScrollAnimation>

              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentWorks.featured.map((work, index) => (
                    <ScrollAnimation
                      key={work.id}
                      variant="fade-up"
                      delay={index * 100}
                    >
                      <VideoCard
                        title={work.title}
                        description={work.description}
                        thumbnail={work.thumbnail}
                        videoUrl={work.videoUrl}
                        author={work.author}
                      />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentWorks.recent.map((work, index) => (
                    <ScrollAnimation
                      key={work.id}
                      variant="fade-up"
                      delay={index * 100}
                    >
                      <VideoCard
                        title={work.title}
                        description={work.description}
                        thumbnail={work.thumbnail}
                        videoUrl={work.videoUrl}
                        author={work.author}
                      />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="beginner">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentWorks.beginner.map((work, index) => (
                    <ScrollAnimation
                      key={work.id}
                      variant="fade-up"
                      delay={index * 100}
                    >
                      <VideoCard
                        title={work.title}
                        description={work.description}
                        thumbnail={work.thumbnail}
                        videoUrl={work.videoUrl}
                        author={work.author}
                      />
                    </ScrollAnimation>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        

        {/* Course Information */}
        {/* <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <ScrollAnimation variant="fade-right">
                <figure className="relative aspect-video md:aspect-auto md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Animation workshop"
                    fill
                    className="object-cover"
                  />
                  <figcaption className="sr-only">
                    Animation workshop with students
                  </figcaption>
                </figure>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-left">
                <article>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">
                    {t("coursesWorkshops")}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t("coursesText")}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-background p-4 rounded-lg">
                      <h3 className="font-semibold mb-1">
                        {t("introToAnimation")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("introToAnimationText")}
                      </p>
                    </div>

                    <div className="bg-background p-4 rounded-lg">
                      <h3 className="font-semibold mb-1">
                        {t("characterAnimation")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("characterAnimationText")}
                      </p>
                    </div>

                    <div className="bg-background p-4 rounded-lg">
                      <h3 className="font-semibold mb-1">
                        {t("oneOnOneMentoring")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("oneOnOneMentoringText")}
                      </p>
                    </div>
                  </div>

                  <Button asChild>
                    <Link
                      href="https://t.me/ilkhom_karimov"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("inquireAboutCourses")}
                    </Link>
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
                {t("startJourney")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                {t("startJourneyText")}
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
