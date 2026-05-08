import Image from "next/image";
import { clients } from "@/lib/data";

export function Clients() {
  // Triple the list so the marquee looks seamless at any screen size
  const items = [...clients, ...clients, ...clients];

  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div
        className="flex items-center gap-14 w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {items.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="relative w-36 h-14 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-80 transition-all duration-400"
          >
            <Image
              src={client.image}
              alt={client.name}
              fill
              className="object-contain"
              sizes="144px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
