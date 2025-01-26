import { json } from "@remix-run/node";
import { IProductListResponse } from "~/types/IProducts";

export async function loaderProducts() {
  const response = await fetch("https://mock.akakce.dev/page.json");

  if (!response.ok) {
    throw new Error("API isteği başarısız oldu.");
  }

  const data: IProductListResponse = await response.json();

  // Yatay Ürünler (horizontalProductList): Sadece ilk sayfada bulunur
  const horizontalProductList = data.horizontalProductList.map((product) => ({
    ...product,
    code: product.code,
  }));

  // Dikey Ürünler (productList): İlk sayfa + nextUrl 
  // nextUrl null gelene kadar, diğer sayfalarda da bulunmaya devam eder
  const productList = data.productList.map((product) => ({
    ...product,
    code: product.code,
  }));

  // Sadece vertical ürünler için nextUrl
  const nextUrl = data.nextUrl || null;

  return json({ horizontalProductList, productList, nextUrl });
}
