interface SectionTitleProps {
  title: string;
  description: string;
  className?: string;
}

export default function SectionTitle({
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 ${className}`}
    >
      <button className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-white font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20">
        {title}
      </button>
      <p className="text-white/90 text-center text-sm sm:text-base md:text-lg max-w-2xl px-4">
        {description}
      </p>
    </div>
  );
}
