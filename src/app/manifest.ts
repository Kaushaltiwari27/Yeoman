import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yeoman Exim Private Limited",
    short_name: "Yeoman Exim",
    description: "International Aluminium Scrap Trading & Global Import Export based in Surat, Gujarat, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#063B63",
    theme_color: "#063B63",
    icons: [
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/logo/yeoman-emblem.png",
        sizes: "851x740",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
