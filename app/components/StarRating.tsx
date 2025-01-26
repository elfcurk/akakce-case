import React from "react";
import { Star, StarHalf, Star as StarOutline } from "lucide-react"; // Lucide'den ikonları kullanıyoruz

interface StarRatingProps {
    rating: number;
    maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
    // Dolmuş, yarım ve boş yıldızların hesaplanması
    const fullStars = Math.floor(rating); // Tam yıldızlar
    const halfStar = rating % 1 >= 0.5; // Yarım yıldız olma durumu
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0); // Boş yıldızlar

    return (
        <div className="flex items-center gap-1">
            {/* Dolmuş Yıldızlar */}
            {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                    <Star key={`full-${index}`} className="w-6 h-6 text-yellow-500" />
                ))}

            {/* Yarım Yıldız */}
            {halfStar && <StarHalf className="w-6 h-6 text-yellow-500" />}

            {/* Boş Yıldızlar */}
            {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                    <StarOutline key={`empty-${index}`} className="w-6 h-6 text-gray-300" />
                ))}
        </div>
    );
};

export default StarRating;
