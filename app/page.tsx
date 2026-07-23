import Image from "next/image";
import { siteConfig } from "./site-config";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy px-5 py-7 text-white sm:px-8 sm:py-10">
      <section className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-[42rem] flex-col items-center justify-center text-center sm:min-h-[calc(100vh-5rem)]">
        <div className="w-full">
          <p className="mb-10 font-brand-black font-black text-[1.35rem] uppercase leading-none tracking-[0.12em] text-white sm:mb-14 sm:text-[1.65rem]">
            {siteConfig.brand}
          </p>

          <h1 className="mx-auto max-w-[11ch] font-brand-black font-black text-4xl leading-[1.04] sm:text-5xl md:text-6xl">
            {siteConfig.title}
          </h1>

          <div className="mx-auto mt-7 max-w-[35rem] space-y-1 font-brand-light font-light text-base leading-6 text-white/90 sm:mt-8 sm:text-lg sm:leading-7">
            <p>{siteConfig.description}</p>
            <p>{siteConfig.accessPrompt}</p>
          </div>

          <div className="mx-auto mt-9 flex w-full max-w-[27rem] flex-col gap-4 sm:mt-10">
            <a
              className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-brand-gold px-5 py-3 font-brand-bold font-bold text-base text-brand-navy outline-none transition-colors hover:bg-[#f3c929] focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy active:bg-[#c29300] sm:text-lg"
              href={siteConfig.primaryAction.href}
            >
              {siteConfig.primaryAction.label}
            </a>

            <div className="mt-3">
              <p className="mx-auto max-w-[27rem] font-brand-light font-light text-sm leading-5 text-white/80 sm:text-base">
                {siteConfig.supportPrompt}
              </p>
              <a
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border border-white/70 bg-transparent px-5 py-3 font-brand-bold font-bold text-base text-white outline-none transition-colors hover:border-white hover:bg-white/10 focus-visible:ring-4 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-navy active:bg-white/20"
                href={siteConfig.supportAction.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/wpp-icon.webp"
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden="true"
                />
                {siteConfig.supportAction.label}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[34rem] font-brand-light font-light text-xs leading-5 text-white/60 sm:mt-12 sm:text-sm">
          {siteConfig.notice}
        </p>
      </section>
    </main>
  );
}
