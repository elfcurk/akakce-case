# Akakçe Case Çalışması

Bu proje, belirli istenilen gereksinimlere uygun şekilde, Remix framework’ü ile React kullanılarak ürünlerin yatay ve dikey olarak listelenmeleri ve ürün detaylarına ulaşılabilmesi için geliştirilmiş bir web uygulamasıdır.

## Proje Gereksinimleri ve Çözümler

### Ana Sayfa ve Detay Sayfası
  - Ana sayfa ve detay sayfasında Remix framework'ünün loader fonksiyonu kullanılarak veriler server-side'da API'den çekildi
  - Dikey ürün listesindeki veriler server-side’da çekildi ve client-side’da pagination (sayfalama) uygulandı. (Pagination'da sunucuya yeni bir istek atılmıyor.Tüm veri önceden alınıyor ve pagination tarayıcıda yapılıyor)
  - Pagination işlemi client-side’da React state yönetimi ile yapıldı.
  - API'nin döndürdüğü "nextUrl" parametresi yalnızca dikey (vertical) listelenen ürünler için kullanıldı.
  - Dikey (vertical) listelenen tüm ürünler tek seferde alınıyor ve client-side’da pagination ile gösteriliyor.
  - NextUrl, null gelene kadar dikey listelenen ürünleri çekmek için server-side’da kullanıldı.
  - Yatay listelenen ürünler için yatay scroll ve sağ-sol oklar eklendi.
  - Dikey listelenen ürünler İki sütunlu grid yapısı ile, 2'li ve pagination kullanılarak listelendi.
  - Dikey listelenen ürünlerdeki pagination client-side şeklinde yapıldı.
  - Ürün detay isteğinden dönen response’taki bilgiler kullanılarak ürün detay sayfası oluşturuldu. 
  - Response'ta bulunan ve bir sonraki sayfa url'ini ifade eden "nextUrl" parametresi null gelene kadar,   ürünler çekilerek listelendi. (Bunun için hem pagination, hem de "Daha fazla göster" butonu eklendi)
  - Projede Tailwind CSS framework'ü ağırlıklı olarak kullanıldı.
  - Projede Remix framework’ü ile birlikte React ve TypeScript kullanılmıştır.
  - Proje genel olarak SOLID Prensiplerine uymaktadır.
  - Proje MVVM mimarisine dikkat edilerek geliştirilmiştir.
  - İstenen tasarıma uygun, benzer bir tasarım oluşturulmuştur.
  - Ürün detay sayfasındaki detay bilgileri, `code` parametresi ile server-side'da API’den çekildi.
  - Ürün detay sayfasında ürün markası,adı(modeli), popülerliği, görseli, puanı, depolama seçenekleri,   fiyatı, güncellenme zamanı gibi özellikler gösterildi.
  - Ürün puanı (rating) yıldız - star rating (tam, yarım, boş olacak şekilde) bileşeni ile eklendi. 
  
### Teknik Detaylar
- **API İstekleri:**
  - `fetch` yerine `Loader` yapısı kullanıldı ve API verileri server-side'da çekildi.
  - Gereksinimlere uygun olarak, ana sayfa ve ürün detay istekleri server-side, pagination'da client-side yapıldı.
- **State Yönetimi:**
  - Dikey (vertical) listelenen ürünlerde state kullanılarak pagination ile veri yönetimi sağlandı.
- **Responsive Tasarım:**
  - Hem ana sayf, hem de detay sayfası, kısacası tüm bileşenler masaüstü ve mobil cihazlar için optimize edildi.
- **TypeScript Kullanımı:**
  - API'den gelen veri tipleri ayrı bir sayfalarda arayüzlerle tanımlandı.
- **SOLID Prensipleri:**
  - Her bileşen tek bir sorumluluğa sahip olacak şekilde düzenlendi. (SRP)
  - Loader fonksiyonları ve yardımcı işlevler bağımsız dosyalara ayrıldı.(DIP)

---

## Kullanılan Teknolojiler
- **React**: Remix framework'ü ile kullanıldı.Komponent bazlı yapı ve React'ın state yönetimi gibi özellikleri uygulandı.
- **Remix**: Server-side rendering (SSR) ve client-side rendering (CSR) özellikleri birlikte kullanıldı.
- **Tailwind CSS**: Tasarımı hızlı bir şekilde oluşturmak için.
- **TypeScript**: Statik tip kontrolü ve daha güvenli kod yazımı için.
- **Node.js**: API isteklerini işlemek için.
- **Tailwind CSS**: Esnek bir şekilde CSS stilleri uygulandı.Responsive tasarım ve modern UI elemanları için kullanıldı.
- **3rd Party Kütüphaneler - Lucide React**: Bazı ikonlar için kullanıldı (ok işaretleri).
