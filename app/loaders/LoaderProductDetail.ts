import { json } from "@remix-run/node";
import { IProductDetail } from "~/types/IProductDetail";

export async function loaderProductDetail({ params }: { params: { code: string } }) {
    if (!params.code) {
        throw new Response("Geçersiz ürün kodu", { status: 400 });
    }

    const response = await fetch(`https://mock.akakce.dev/product${params.code}.json`);
    if (!response.ok) {
        throw new Response("Ürün bulunamadı", { status: 404 });
    }

    const productDetail: IProductDetail = await response.json();
    return json(productDetail);
}
