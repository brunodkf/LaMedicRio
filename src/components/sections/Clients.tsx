import Image from "next/image";
import { clients } from "@/lib/data";

export function Clients() {
  // Two copies → -50% translateX lands exactly at the start of the second set (seamless loop)
  const items = [...clients, ...clients];

  return (
    <section
      className="py-8 bg-white border-y border-slate-100 overflow-hidden"
      aria-label="Parceiros e clientes"
    >
      <div
        className="flex items-center gap-10 w-max
          hover:[animation-play-state:paused]
          motion-reduce:[animation-play-state:paused]"
        style={{
          animation: "marquee 30s linear infinite",
          willChange: "transform",
        }}
      >
        {items.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            aria-hidden={idx >= clients.length || undefined}
            className="relative flex-shrink-0 h-10 w-32
              grayscale opacity-40
              hover:grayscale-0 hover:opacity-75
              transition-all duration-300"
          >
            <Image
              src={client.image}
              alt={idx < clients.length ? client.name : ""}
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
