import { useEffect, useRef } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoScrollInterval?: number;
}

export default function Carousel<T>({
  items,
  renderItem,
  autoScrollInterval = 3000,
}: CarouselProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    stopAutoScroll();

    intervalRef.current = window.setInterval(() => {
      const scrollAmount = container.offsetWidth * 0.9;

      const isAtEnd =
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 10;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, autoScrollInterval);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [autoScrollInterval]);

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() =>
          containerRef.current?.scrollBy({
            left: -300,
            behavior: "smooth",
          })
        }
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                   bg-white/90 shadow-md rounded-full p-2 hover:bg-white"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth={2}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Carousel */}
      <div
        ref={containerRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        onTouchStart={stopAutoScroll}
        onTouchEnd={startAutoScroll}
        className="flex overflow-x-auto gap-4 px-2 -mx-2 pb-6
                   snap-x snap-mandatory scroll-smooth
                   scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[85vw] md:min-w-[320px]
                       max-w-[85vw] md:max-w-[320px]
                       snap-center shrink-0"
          >
            {renderItem(item, index)}
          </div>
        ))}

        <div className="min-w-4 shrink-0" />
      </div>

      {/* Right Arrow */}
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() =>
          containerRef.current?.scrollBy({
            left: 300,
            behavior: "smooth",
          })
        }
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                   bg-white/90 shadow-md rounded-full p-2 hover:bg-white"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth={2}
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
