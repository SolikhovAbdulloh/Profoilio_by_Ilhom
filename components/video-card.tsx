"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  author?: string;
}

export function VideoCard({
  title,
  description,
  thumbnail,
  videoUrl,
  author,
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Card
        className="overflow-hidden transition-all hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-12 w-12"
              onClick={() => setShowVideo(true)}
            >
              <Play className="h-6 w-6" />
              <span className="sr-only">Play video</span>
            </Button>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {author && <CardDescription>By {author}</CardDescription>}
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <a href={videoUrl || "#"} target="_blank" rel="noopener noreferrer">
              Watch Full Video
            </a>
          </Button>
        </CardFooter>
      </Card>

      {/* Modal for playing video */}
      {showVideo && videoUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-video p-4">
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full bg-black rounded-lg"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-3xl"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
