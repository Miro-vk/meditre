import type { Metadata } from "next";
import { site } from "@/lib/data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = site.ogImage,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}