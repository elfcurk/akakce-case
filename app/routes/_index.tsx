import { useLoaderData, useNavigate } from "@remix-run/react";
import HorizontalProducts from "~/components/HorizontalProducts";
import VerticalProducts from "~/components/VerticalProducts";
import { loaderProducts } from "~/loaders/LoaderProducts";
import { useState, useEffect } from "react";
import { IProduct, IProductListResponse } from "~/types/IProducts";

export const loader = loaderProducts;

function Index() {
  const { horizontalProductList, productList, nextUrl } = useLoaderData<IProductListResponse>();
  const navigate = useNavigate();

  // Vertical ürünlerin state yönetimi
  const [allVerticalProducts, setAllVerticalProducts] = useState(productList);
  const [currentNextUrl, setCurrentNextUrl] = useState<string | null>(nextUrl); // İlk nextUrl
  const [isLoading, setIsLoading] = useState(false); // "Daha Fazla Yükle" için yükleniyor durumu

  const handleProductClick = (product: IProduct) => {
    navigate(`/product/${product.code}`); // Ürün detay rotasına yönlendirme
  };

  const handleLoadMore = async () => {
    if (!currentNextUrl) return;
    setIsLoading(true);

    try {
      const response = await fetch(currentNextUrl);

      if (!response.ok) {
        throw new Error("Ürünler yüklenirken bir hata oluştu.");
      }

      const data: IProductListResponse = await response.json();

      // Yeni ürünlerin mevcut listeye eklenmesi
      setAllVerticalProducts((prev) => [
        ...prev,
        ...data.productList.map((product) => ({
          ...product,
          code: product.code,
        })),
      ]);

      // Yeni nextUrl'in güncellenmesi
      setCurrentNextUrl(data.nextUrl || null); // Eğer `nextUrl` null ise güncelle
    } catch (error) {
      console.error("Daha fazla ürün yüklenirken hata oluştu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  }, [currentNextUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Ana Sayfa</h1>

      {/* Yatay ürünler */}
      <section className="mb-12">
        <HorizontalProducts
          horizontalProductList={horizontalProductList}
          onProductClick={handleProductClick}
        />
      </section>

      {/* Dikey ürünler, pagination ve nextUrl */}
      <section>
        <VerticalProducts productList={allVerticalProducts} onProductClick={handleProductClick} />
        {currentNextUrl && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`px-6 py-2 rounded transition ${isLoading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
            >
              {isLoading ? "Yükleniyor..." : "Daha Fazla Yükle"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Index;
