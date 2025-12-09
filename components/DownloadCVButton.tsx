interface DownloadCVButtonProps {
  className?: string;
}

export default function DownloadCVButton({
  className = "",
}: DownloadCVButtonProps) {
  return (
    <a
      href="/cv.pdf"
      download
      className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-linear-to-r from-[#A78BFA] via-[#60A5FA] to-[#FCA5A5] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20 border border-[#A78BFA]/30 ${className}`}
    >
      Download CV
    </a>
  );
}
