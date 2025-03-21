import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NextLogo from "../public/Logo/Nextjs-logo.svg";

const LandingPage = (params: LandingPageParams) => {
  const { badge, heading, description, buttons } = params;
  return (
    <section className="py-32 px-10 ani-fadeUp">
      <div className="">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" className="ani-delaySideBounce group">
                {badge}
                <div className="group-hover:motion-rotate-out-45 group-hover:-translate-y-0.5 group-hover:duration-300">

                <ArrowUpRight className="ml-2 size-4" />
                </div>
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons?.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                  </a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <Image
            src={NextLogo}
            alt="Next-logo"
            width={800}
            height={800}
            className="max-h-96 w-full rounded-md object-cover invert-0 dark:invert"
          />
        </div>
      </div>
    </section>
  );
};

export { LandingPage };
