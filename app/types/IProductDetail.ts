// Ürün detay API'sinden dönen yanıt tipi
export interface IProductDetail {
    mkName: string; // Marka adı
    productName: string; // Ürün adı
    badge: string; //Ürün rozeti
    rating: number; // Ürün puanı
    imageUrl: string; // Ürün görsel URL'i
    storageOptions: string[]; // Depolama seçenekleri
    countOfPrices: number; // Fiyat karşılaştırma sayısı
    price: number; // Ürün fiyatı
    freeShipping: boolean; // Ücretsiz kargo bilgisi
    lastUpdate: string; // Son güncelleme zamanı
}
