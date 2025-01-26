import { useState } from "react";
import Pagination from "~/components/Pagination";
import { IProduct } from "~/types/IProducts";
import { replaceIphoneLetter } from "~/utils/FormatLanguage";

function VerticalProducts({
  productList,
  onProductClick,
}: {
  productList: IProduct[];
  onProductClick: (product: IProduct) => void;
}) {
  const productsPerPage = 4; // Sayfa başına gösterilecek ürün sayısı
  const [currentPage, setCurrentPage] = useState(1);

  // Sayfa sayısınının hesaplanması
  const totalPages = Math.ceil(productList.length / productsPerPage);

  // Şu anki sayfada bulunan ürünlerin hesaplanması
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const visibleProducts = productList.slice(startIndex, endIndex);

  return (
    <div className="py-8 px-4">
      <div
        className="grid grid-cols-2 gap-6 justify-center"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {visibleProducts.map((product) => (
          <a
            key={product.code}
            href={`/product/${product.code}`}
            onClick={(e) => {
              e.preventDefault();
              onProductClick(product);
            }}
            className="border border-gray-300 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          >

            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-48 h-48 rounded-md mt-4 mb-4 mx-auto shadow-md"
              />
              {/* İndirim etiketi */}
              {product.dropRatio > 0 && (
                <span className="absolute -top-3 left-3 bg-red-500 text-white text-lg font-bold px-2 py-1 rounded-full shadow-lg">
                  %{product.dropRatio}
                </span>
              )}
            </div>
            <p className="text-center font-semibold text-center text-gray-500 text-lg">{replaceIphoneLetter(product.name)}</p>
            <p className="text-center font-extrabold text-xl">
              {product.price.toLocaleString("tr-TR")}
              <span className="text-base text-gray-500 ml-1">,00₺</span>
            </p>
            <p className="text-center font-semibold text-gray-500 text-sm">
              {product.followCount.toLocaleString("tr-TR")}+ takip
            </p>
          </a>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // Sayfa değişimi için state'i günceller
      />
    </div>
  );
}
export default VerticalProducts;