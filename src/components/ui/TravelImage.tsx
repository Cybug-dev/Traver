import { useState } from "react";

type TravelImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
};

function ImageContent({ src, alt, className = "", priority = false, loading = "lazy" }: TravelImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div
      aria-busy={status === "loading"}
      className={`relative h-full w-full overflow-hidden bg-surface-muted ${className}`}
      data-image-state={status}
    >
      {status === "loading" && (
        <span aria-hidden="true" className="travel-image-placeholder absolute inset-0" />
      )}
      {status === "error" ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-xs text-secondary" role="img" aria-label={`${alt}. Photo unavailable.`}>
          <svg aria-hidden="true" className="size-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="m3 17 5-5 4 4 3-3 6 5" />
            <circle cx="15" cy="8" r="1.5" />
          </svg>
          <span>Photo unavailable</span>
        </div>
      ) : (
        <img
          alt={alt}
          className={`travel-image h-full w-full object-cover ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          height="1125"
          loading={priority ? "eager" : loading}
          onError={() => setStatus("error")}
          onLoad={() => setStatus("loaded")}
          src={src}
          width="900"
        />
      )}
    </div>
  );
}

export default function TravelImage(props: TravelImageProps) {
  // A new URL gets fresh loading state, even when this component is reused.
  return <ImageContent key={props.src} {...props} />;
}
