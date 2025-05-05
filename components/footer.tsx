"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ilhom Karimov</h3>
            <p className="text-muted-foreground">{t("footerAbout")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("quickLinks")}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("home")}
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("about")}
              </Link>
              <Link href="/students" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("studentWorks")}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <address className="not-italic space-y-2">
              <Link
                href="https://t.me/ilkhom_karimov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8L5 12.5 9.5 14M18 8l-8.5 6M18 8l-4 10.5L9.5 14"></path>
                </svg>
                Telegram
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@ilhomkarimov.com">contact@ilhomkarimov.com</a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
