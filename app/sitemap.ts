import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "/",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "/releases",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}