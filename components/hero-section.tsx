"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { ScrollAnimation } from "@/components/scroll-animation"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-100/20 z-0 dark:from-purple-500/10 dark:to-pink-500/10" />

      <div className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
        <ScrollAnimation variant="fade-down">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{t("heroTitle")}</h1>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={200}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">{t("heroSubtitle")}</p>
        </ScrollAnimation>

        <ScrollAnimation variant="fade-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/about">{t("aboutMe")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/students">{t("studentWorks")}</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
