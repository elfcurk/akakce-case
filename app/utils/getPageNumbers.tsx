export function getPageNumbers(
    currentPage: number,
    totalPages: number
  ): (number | string)[] {
    const pages: (number | string)[] = [];
    if (totalPages <= 3) {
      // Eğer toplam sayfa sayısı 3 veya daha azsa, tüm sayfaları göster
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Daha fazla sayfa varsa, araya "..." ekle
      if (currentPage > 3) pages.push(1, "...");
      for (
        let i = Math.max(1, currentPage - 2);
        i <= Math.min(totalPages, currentPage + 2);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...", totalPages);
    }
    return pages;
  }
  