import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import StarRating from "~/components/StarRating";
import { loaderProductDetail } from "~/loaders/LoaderProductDetail";
import { IProductDetail } from "~/types/IProductDetail";
import { formatLanguage, replaceIphoneLetter } from "~/utils/FormatLanguage";

export const loader = loaderProductDetail;

function ProductDetailPage() {
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);

  const handleStorageClick = (storage: string) => {
    setSelectedStorage(storage);
  };

  const productDetail = useLoaderData<IProductDetail>();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-500 mb-2 font-bold">{productDetail.mkName}</p>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {replaceIphoneLetter(productDetail.productName)}
        </h2>
        <p className="mb-4 bg-yellow-100 text-gray-800 p-2 rounded-md font-semibold">
          {productDetail.badge}
        </p>

        <div className="flex justify-center items-center">
          <img
            src={productDetail.imageUrl}
            alt={productDetail.productName}
            className="w-64 h-64 rounded-md mb-6 shadow-lg"
          />
        </div>
        {/* Yıldız Derecelendirme */}
        <div className="flex justify-center items-center mb-4">
          <StarRating rating={productDetail.rating} />
          <p className="ml-2 text-sm text-gray-600 font-bold">({productDetail.rating})</p>
        </div>

        {/* Kapasite - depolama seçenekleri */}
        <p className="text-center mt-4 mb-4 text-gray-600">Kapasite seçenekleri</p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {productDetail.storageOptions.map((storage, index) => (
            <button
              key={index}
              onClick={() => handleStorageClick(storage)}
              className={`px-4 py-2 border rounded-lg font-bold${selectedStorage === storage
                ? "px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r bg-[#247ec5] shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                : "bg-white font-bold text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}
            >
              {storage}
            </button>
          ))}
        </div>

        {/* Ek Bilgiler */}
        <div className="space-y-4">
          <p className="text-sm text-center font-extrabold">{productDetail.countOfPrices} satıcı içinde kargo dahil en ucuz fiyat seçeneği</p>
          <p className="text-center text-4xl font-bold text-gray-800">
            {productDetail.price.toLocaleString("tr-TR")}
            <span className="text-base text-gray-500 ml-1">,00₺</span>
          </p>
          {productDetail.freeShipping ? (
            <p className="text-center text-green-700 font-bold">Ücretsiz kargo</p>
          ) : null}
          <p className="text-center text-gray-400 font-bold">
            Son Güncelleme: {formatLanguage(productDetail.lastUpdate)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
