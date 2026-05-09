import Image from "next/image";

interface EspecialidadeCardProps {
  title: string;
  image: string;
  items: string[];
}

export function EspecialidadeCard({ title, image, items }: EspecialidadeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="w-14 h-14 rounded-xl bg-brand-700 flex items-center justify-center mb-5">
        <Image
          src={image}
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
