import Link from "next/link";
import Image from "next/image";
import type { ServiceContentBlock } from "@/data/service-deep-content";

export function ServiceDetailBody({ blocks }: { blocks: readonly ServiceContentBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {blocks.map((block, idx) => {
        if (block.type === "p") {
          return (
            <p key={idx} className="font-editorial text-lg leading-relaxed text-mm-light md:text-xl">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2 key={idx} className="font-display text-2xl font-semibold tracking-tight text-mm-cream md:text-3xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={idx} className="group/fig space-y-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-mm-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] md:aspect-[2.1/1]">
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover/fig:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 42rem"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-mm-black/45 via-transparent to-mm-royal/15" />
              </div>
            </figure>
          );
        }
        if (block.type === "bullets") {
          return (
            <div key={idx} className="space-y-4">
              {block.title ? (
                <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-mm-gold">{block.title}</h3>
              ) : null}
              <ul className="space-y-3 border-l border-mm-gold/35 pl-5">
                {block.items.map((item) => (
                  <li key={item} className="font-editorial text-base leading-relaxed text-mm-cream/90 md:text-[17px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (block.type === "ctas") {
          return (
            <div key={idx} className="flex flex-wrap gap-4 pt-2">
              {block.items.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-mm-gold transition hover:gap-3 hover:text-mm-cream"
                >
                  → {c.label}
                </Link>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
