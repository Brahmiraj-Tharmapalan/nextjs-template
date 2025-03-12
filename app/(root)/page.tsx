import { LandingPage } from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPage
        badge="🔥 Next.js Starter Template"
        heading="Welcome to Next.js"
        description="A minimal starter template for your Next.js projects. Build fast, scale easily, and deploy anywhere."
        buttons={{
          primary: {
            text: "Get Started",
            url: "https://nextjs.org/docs",
          },
          secondary: {
            text: "GitHub Repo",
            url: "https://github.com/vercel/next.js",
          },
        }}
      />
    </>
  );
}
