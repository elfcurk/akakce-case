import HorizontalScroll from "~/components/HorizontalScroll";
import { IProduct } from "~/types/IProducts";
import { replaceIphoneLetter } from "~/utils/FormatLanguage";

interface ProductsProps {
  horizontalProductList: IProduct[];
  onProductClick: (product: IProduct) => void;
}

function HorizontalProducts({
  horizontalProductList,
  onProductClick,
}: ProductsProps) {
  if (horizontalProductList.length === 0) {
    return <p className="text-center text-gray-500">Hiç ürün bulunamadı.</p>;
  }

  return (
    <div>
      <HorizontalScroll>
        {horizontalProductList.map((product) => (
          <a
            key={product.code}
            href={`/product/${product.code}`}
            onClick={(e) => {
              e.preventDefault();
              onProductClick(product);
            }}
            className="border border-gray-300 p-6 min-w-[450px] cursor-pointer rounded-lg flex flex-row gap-6 items-center hover:shadow-xl transition-shadow"
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-40 h-40 rounded-lg shadow-md"
              />
              {/* İndirim etiketi */}
              {product.dropRatio > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-md font-bold px-2 py-1 rounded-full shadow-lg">
                  %{product.dropRatio}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-4 text-left">
              <p className="font-semibold text-gray-500 text-lg">{replaceIphoneLetter(product.name)}</p>
              <p className="font-extrabold text-2xl">
                {product.price.toLocaleString("tr-TR")}
                <span className="text-lg text-gray-500 ml-1">,00₺</span>
              </p>
              <p className="font-semibold text-gray-500 text-base">
                {product.followCount.toLocaleString("tr-TR")}+ takip
              </p>
            </div>
          </a>
        ))}
      </HorizontalScroll>
    </div>
  );
}

export default HorizontalProducts;
