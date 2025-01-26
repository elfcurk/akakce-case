import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HorizontalScroll({
  children,
  showArrows = true,
  maxWidth = "785px",
}: {
  children: React.ReactNode;
  showArrows?: boolean; 
  maxWidth?: string; 
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sol ok tıklandığında kaydırma
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth", //Yumuşak geçiş tercihi
      });
    }
  };

  // Sağ ok tıklandığında kaydırma
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {showArrows && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-hide scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          padding: "16px 0",
          maxWidth,
          margin: "0 auto",
        }}
      >
        {children}
      </div>

      {showArrows && (
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}
    </div>
  );
}
export default HorizontalScroll;