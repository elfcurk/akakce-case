// API'den gelen ürün tipi
export interface IProduct {
    code: string; // Ürün kodu
    name: string; // Ürün adı
    imageUrl: string; // Ürün görsel URL'i
    dropRatio: number; // Ürün indirim oranı
    price: number; // Ürün fiyatı
    countOfPrices: number; // Fiyat karşılaştırma sayısı
    followCount: number; // Takip eden kişi sayısı
    url: string; // Ürün detay sayfası URL'si
}

// Listeleme API'sinden gelen yanıt tipi
export interface IProductListResponse {
    horizontalProductList: IProduct[]; // Yatay kaydırmalı ürünler
    productList: IProduct[]; // Dikey listelenecek ürünler
    nextUrl: string | null; // Bir sonraki sayfa için URL
}
