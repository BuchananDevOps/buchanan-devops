if (!self.define) {
  let e,
    i = {}
  const o = (o, c) => (
    (o = new URL(o + ".js", c).href),
    i[o] ||
      new Promise(i => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = o), (e.onload = i), document.head.appendChild(e)
        } else (e = o), importScripts(o), i()
      }).then(() => {
        let e = i[o]
        if (!e) throw new Error(`Module ${o} didn’t register its module`)
        return e
      })
  )
  self.define = (c, s) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href
    if (i[a]) return
    let r = {}
    const n = e => o(e, a),
      b = { module: { uri: a }, exports: r, require: n }
    i[a] = Promise.all(c.map(e => b[e] || n(e))).then(e => (s(...e), r))
  }
}
define(["./workbox-50de5c5d"], function (e) {
  "use strict"
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/GZeN6YugJGe2z3fQ8nJxI/_buildManifest.js",
          revision: "cf3fa9a624e99a47c021c6e74e5fc99b",
        },
        {
          url: "/_next/static/GZeN6YugJGe2z3fQ8nJxI/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/10.ee75080551f20a36.js",
          revision: "ee75080551f20a36",
        },
        {
          url: "/_next/static/chunks/109.df08c7069df3e05c.js",
          revision: "df08c7069df3e05c",
        },
        {
          url: "/_next/static/chunks/116.9bb21f0066230f1d.js",
          revision: "9bb21f0066230f1d",
        },
        {
          url: "/_next/static/chunks/149.0ea4e9e9e29b8262.js",
          revision: "0ea4e9e9e29b8262",
        },
        {
          url: "/_next/static/chunks/157-57f99f277bd74af9.js",
          revision: "57f99f277bd74af9",
        },
        {
          url: "/_next/static/chunks/191.23e684f204eec97b.js",
          revision: "23e684f204eec97b",
        },
        {
          url: "/_next/static/chunks/210.c370873473d075da.js",
          revision: "c370873473d075da",
        },
        {
          url: "/_next/static/chunks/220.4f15ab3077d3bc16.js",
          revision: "4f15ab3077d3bc16",
        },
        {
          url: "/_next/static/chunks/240.ff65b51a3615ebeb.js",
          revision: "ff65b51a3615ebeb",
        },
        {
          url: "/_next/static/chunks/273.8b185bf4d89d6ff6.js",
          revision: "8b185bf4d89d6ff6",
        },
        {
          url: "/_next/static/chunks/298.d93da9254b685ee2.js",
          revision: "d93da9254b685ee2",
        },
        {
          url: "/_next/static/chunks/308.8f66c8a75f3af006.js",
          revision: "8f66c8a75f3af006",
        },
        {
          url: "/_next/static/chunks/34.ca8d137a03b80870.js",
          revision: "ca8d137a03b80870",
        },
        {
          url: "/_next/static/chunks/424.66dc9f52a76d4cc6.js",
          revision: "66dc9f52a76d4cc6",
        },
        {
          url: "/_next/static/chunks/473.277c881c0307a373.js",
          revision: "277c881c0307a373",
        },
        {
          url: "/_next/static/chunks/490.1938f4e9aff3cc54.js",
          revision: "1938f4e9aff3cc54",
        },
        {
          url: "/_next/static/chunks/506.c0e83be93e6e0fc5.js",
          revision: "c0e83be93e6e0fc5",
        },
        {
          url: "/_next/static/chunks/554.e91d423dfab07843.js",
          revision: "e91d423dfab07843",
        },
        {
          url: "/_next/static/chunks/646.30169250247a263c.js",
          revision: "30169250247a263c",
        },
        {
          url: "/_next/static/chunks/660.4f487bf720c87c47.js",
          revision: "4f487bf720c87c47",
        },
        {
          url: "/_next/static/chunks/664-60e06c839f82ba03.js",
          revision: "60e06c839f82ba03",
        },
        {
          url: "/_next/static/chunks/675-7593b213c3990365.js",
          revision: "7593b213c3990365",
        },
        {
          url: "/_next/static/chunks/678.bb9877e52d13ea72.js",
          revision: "bb9877e52d13ea72",
        },
        {
          url: "/_next/static/chunks/704-ff3f08fbde460c80.js",
          revision: "ff3f08fbde460c80",
        },
        {
          url: "/_next/static/chunks/749.06cf40b5d64f17d9.js",
          revision: "06cf40b5d64f17d9",
        },
        {
          url: "/_next/static/chunks/763.5ad247fa87b9ddde.js",
          revision: "5ad247fa87b9ddde",
        },
        {
          url: "/_next/static/chunks/799.d4a23916142db02a.js",
          revision: "d4a23916142db02a",
        },
        {
          url: "/_next/static/chunks/805.9ba1acf923fcce16.js",
          revision: "9ba1acf923fcce16",
        },
        {
          url: "/_next/static/chunks/847.6fc3c2787b874872.js",
          revision: "6fc3c2787b874872",
        },
        {
          url: "/_next/static/chunks/879.83391ab78f76b1dc.js",
          revision: "83391ab78f76b1dc",
        },
        {
          url: "/_next/static/chunks/883.cdd31a84aeaeecf6.js",
          revision: "cdd31a84aeaeecf6",
        },
        {
          url: "/_next/static/chunks/884.6d4db75b9b73127d.js",
          revision: "6d4db75b9b73127d",
        },
        {
          url: "/_next/static/chunks/907.fba4bfd7cab19012.js",
          revision: "fba4bfd7cab19012",
        },
        {
          url: "/_next/static/chunks/909.171eec6368ec3dcd.js",
          revision: "171eec6368ec3dcd",
        },
        {
          url: "/_next/static/chunks/977.fc9a687817023d73.js",
          revision: "fc9a687817023d73",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-ada8e2f8555d51f8.js",
          revision: "ada8e2f8555d51f8",
        },
        {
          url: "/_next/static/chunks/pages/_app-5577d6b69dbf9f7b.js",
          revision: "5577d6b69dbf9f7b",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/articles-e82a8d71a09bc59a.js",
          revision: "e82a8d71a09bc59a",
        },
        {
          url: "/_next/static/chunks/pages/articles/%5Bslug%5D-3772eed0b7da0e33.js",
          revision: "3772eed0b7da0e33",
        },
        {
          url: "/_next/static/chunks/pages/case-studies/%5Bslug%5D-0e7ffa6375d7975d.js",
          revision: "0e7ffa6375d7975d",
        },
        {
          url: "/_next/static/chunks/pages/contact-629909604121fa8b.js",
          revision: "629909604121fa8b",
        },
        {
          url: "/_next/static/chunks/pages/index-4274f619fc547e6d.js",
          revision: "4274f619fc547e6d",
        },
        {
          url: "/_next/static/chunks/pages/seo-b0d952d458e23109.js",
          revision: "b0d952d458e23109",
        },
        {
          url: "/_next/static/chunks/pages/showcase-e473171bd3e8aa07.js",
          revision: "e473171bd3e8aa07",
        },
        {
          url: "/_next/static/chunks/pages/thank-you-1b55183e4ceb66cd.js",
          revision: "1b55183e4ceb66cd",
        },
        {
          url: "/_next/static/chunks/pages/web-design-85982648cddcc0c7.js",
          revision: "85982648cddcc0c7",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-70482ce4672edbfa.js",
          revision: "70482ce4672edbfa",
        },
        {
          url: "/_next/static/css/680a63940ba903c1.css",
          revision: "680a63940ba903c1",
        },
        {
          url: "/_next/static/media/7acres-cta.fc6ea88b.webp",
          revision: "9542373f4eab62c318e87b246e758b6a",
        },
        {
          url: "/_next/static/media/7acres-wd-hero.c27e7efb.webp",
          revision: "025c1dbc5b5d539abd03b80de3fe7124",
        },
        {
          url: "/_next/static/media/FiraCode-VF.1123e8f0.woff2",
          revision: "1123e8f0",
        },
        {
          url: "/_next/static/media/FiraCode-VF.e0ae54f1.woff",
          revision: "e0ae54f1",
        },
        {
          url: "/_next/static/media/Inter-italic-latin.var.884de12f.woff2",
          revision: "884de12f",
        },
        {
          url: "/_next/static/media/Inter-roman-latin.var.18496762.woff2",
          revision: "18496762",
        },
        {
          url: "/_next/static/media/SourceSansPro-Regular.d5e1a122.otf",
          revision: "d5e1a122",
        },
        {
          url: "/_next/static/media/Ubuntu-Mono-bold.37581c03.woff2",
          revision: "37581c03",
        },
        {
          url: "/_next/static/media/aws-apn-select-consulting-partner.600876c9.svg",
          revision: "b5fcd5518c07486d29f31eece4fa877b",
        },
        {
          url: "/_next/static/media/b-corp.f0089a35.svg",
          revision: "030235655f024308d3ec0b029217d8bd",
        },
        {
          url: "/_next/static/media/beams-index-dark@75.8f02ce8a.jpg",
          revision: "062f534966a3b02e9986da8866269547",
        },
        {
          url: "/_next/static/media/beams@75.2e4c33d3.jpg",
          revision: "bfb40ce7cc35c971e2038eaad9f43bb9",
        },
        {
          url: "/_next/static/media/csagroup-wd-hero.e7ddb02d.webp",
          revision: "8fb5fab125a30055bb3877919e5e63d0",
        },
        {
          url: "/_next/static/media/fastest-growing.e7858204.webp",
          revision: "29241c305e5c806e77ad351745c643f2",
        },
        {
          url: "/_next/static/media/goolge-partner-color-2023.5a59c021.svg",
          revision: "3d9d04455a175b0b8fbce4b840d2f051",
        },
        {
          url: "/_next/static/media/gptw.3e0c171a.webp",
          revision: "7275f5eb71d85ff97147ab6902e26d98",
        },
        {
          url: "/_next/static/media/hubspot-elite.b0f19609.webp",
          revision: "3fefef748c1e75c24624e606701ab299",
        },
        {
          url: "/_next/static/media/jp-cxp-cta.8c391cc0.webp",
          revision: "12b07b7fb89920333d7ee870d68d2168",
        },
        {
          url: "/_next/static/media/meta-business-partner.99d3f8ec.svg",
          revision: "c108cd8bb601c1c97bd2c95330991d0f",
        },
        {
          url: "/_next/static/media/microsoft-partner-2023.dc25e14c.svg",
          revision: "808061fb8a0dceb49012f0bec3d8b538",
        },
        {
          url: "/_next/static/media/norwex.5da4fc1d.webp",
          revision: "b2a9802f0883c2308d025ca9dc612993",
        },
        {
          url: "/_next/static/media/ops-1.e1bf8ede.webp",
          revision: "d1593b2ebedf43b73fa33f0958ba2c71",
        },
        {
          url: "/_next/static/media/ops-2.d5196d29.webp",
          revision: "61b7f0ea8a6e10862f5e983b09a23456",
        },
        {
          url: "/_next/static/media/ops-4.c0b174dd.webp",
          revision: "89f2e231048509ad19408d3141d39541",
        },
        {
          url: "/_next/static/media/pierre-cta.c30c12e5.webp",
          revision: "9fdb8a8296e6b29f55d5549f8c378e17",
        },
        {
          url: "/_next/static/media/railworks-wd-hero.cd8be7cb.webp",
          revision: "debdff3c928acc325852d820b264e1e9",
        },
        {
          url: "/_next/static/media/seo-company-2.1c8ca14d.webp",
          revision: "a9ddd95ba638b33348fe2f2fee4ae0e5",
        },
        {
          url: "/_next/static/media/top-clutch-100.77b7150e.webp",
          revision: "b14cfd285b5c88130ea4136148e3b887",
        },
        {
          url: "/_next/static/media/top-web-designer-2022.41df61ae.webp",
          revision: "9e3fbbdfec19146776fed79632cee810",
        },
        {
          url: "/_next/static/media/um.86db4558.webp",
          revision: "47dde3e8e0243b0801fe3e8701e02a8a",
        },
        {
          url: "/_next/static/media/upcity-award.d3d00f7a.webp",
          revision: "7c622acbd62bfaab1973eb07009c4f7c",
        },
        {
          url: "/_next/static/media/web-design-pa-2023.f0ed87ce.webp",
          revision: "41678516667d2d12ec0e6deea30fb8ea",
        },
        {
          url: "/_next/static/media/whisl-cta.c4769f8d.webp",
          revision: "4340992d6c93447f81e35a025223d315",
        },
        {
          url: "/articles/semantics/article-image.webp",
          revision: "623714def54969b2cc8b23b8656adf1b",
        },
        {
          url: "/articles/semantics/non-semantic-vs-semantic.webp",
          revision: "0ed90b1cf1d36916babf53f32b733306",
        },
        {
          url: "/author/headshot-bright.jpg",
          revision: "b36388118ba8bbc840a2a7c09cc468b0",
        },
        {
          url: "/brand/google-partner.jpg",
          revision: "64d1008806ec05e1e281fb460f0d7b3e",
        },
        {
          url: "/brand/iphone-testing.png",
          revision: "57d7173fb746bad8341bf32cc85dcb0c",
        },
        {
          url: "/brand/logo.svg",
          revision: "47daa03aa4c709e2a68c6df795cb6841",
        },
        {
          url: "/brand/personal.webp",
          revision: "2610ea8d658cfe0409b8cf270b2230aa",
        },
        {
          url: "/brand/social/instagram.svg",
          revision: "e6406cae6a5422ad67d3f668d8bdf660",
        },
        {
          url: "/brand/social/linkedin.svg",
          revision: "8c1ce5961ab4914a767c98720c59bb71",
        },
        {
          url: "/brand/social/twitter.svg",
          revision: "5a36c44bdbd1467e761260b3a83b7a28",
        },
        {
          url: "/brand/space-boots.png",
          revision: "9911a123ea2c7ebec5199627b43fde69",
        },
        {
          url: "/bussin/aflac.webp",
          revision: "7eea207f6fd798ae01e526fd8aa86a50",
        },
        {
          url: "/bussin/chart.svg",
          revision: "020190c6b4fd948a9d7aff2dbe0fe69c",
        },
        {
          url: "/bussin/feature-blurp-1.svg",
          revision: "66f1b5ad37e575b1dbb4e5f980366625",
        },
        {
          url: "/bussin/graph.svg",
          revision: "b432688aa5919e65c842a7aeb071c17c",
        },
        {
          url: "/bussin/hero-animation.avif",
          revision: "750003805fef70e9fbd6e93fd6ec247d",
        },
        {
          url: "/bussin/hero-item-1.webp",
          revision: "496ae716312f066908d2ca8c7dd3b492",
        },
        {
          url: "/bussin/hex-mesh.svg",
          revision: "1e9f2b71edeab2fbc2b2af2097886b0c",
        },
        {
          url: "/bussin/hex.svg",
          revision: "69488753f5a5f212aa23aba61225583b",
        },
        {
          url: "/bussin/iphone.svg",
          revision: "e07260ee84a11cbaeef7cd576e6497e7",
        },
        {
          url: "/bussin/large-chart.svg",
          revision: "b3efb06abff8d24300df5453e6a94f25",
        },
        {
          url: "/bussin/macbook.svg",
          revision: "5c35258e828873055a1bbb8abbebcb5e",
        },
        {
          url: "/bussin/norwex-svg.svg",
          revision: "d87bb115adc259552a36bd590218a365",
        },
        {
          url: "/bussin/norwex.webp",
          revision: "b2a9802f0883c2308d025ca9dc612993",
        },
        {
          url: "/bussin/process/step-1.webp",
          revision: "ee2165cbb099da0e42879141030e926e",
        },
        {
          url: "/bussin/process/step-2.webp",
          revision: "1167855b5beb6162944d8f12ccb3465e",
        },
        {
          url: "/bussin/process/step-3.webp",
          revision: "11c9a5e464cefb4b2b1e35dcdd91aaa9",
        },
        {
          url: "/bussin/radient-rainbow.svg",
          revision: "e2e9de1f9c6cc68871f9a65a2b7935f1",
        },
        {
          url: "/bussin/schema.svg",
          revision: "a10808b92fe9d9d41f9c25756ebb4b53",
        },
        {
          url: "/bussin/stack.svg",
          revision: "39eca939b224a75d26e8bb9200084d6b",
        },
        {
          url: "/bussin/texture.svg",
          revision: "0ff32bb029484d94e8f57f4f6ab2ee76",
        },
        {
          url: "/bussin/um.webp",
          revision: "47dde3e8e0243b0801fe3e8701e02a8a",
        },
        {
          url: "/bussin/web-design.svg",
          revision: "c5099c9c321235eca47fbd4dca3b4652",
        },
        {
          url: "/content/Algolia.svg",
          revision: "8bbc37e5a3968d767c1b4e2918591391",
        },
        {
          url: "/content/Auth0.svg",
          revision: "0646c60e393d86aeb74090fb92c7dfbf",
        },
        {
          url: "/content/advanced-navigation-wireframe.svg",
          revision: "bf21fbdaf8cefc452a68108833194f5c",
        },
        {
          url: "/content/badge-1.svg",
          revision: "9073c52fc5efccb983ed1d904b7b49b2",
        },
        {
          url: "/content/badge-2.svg",
          revision: "b8233a439473d12dbe90d11c5be621ff",
        },
        {
          url: "/content/badge-3.svg",
          revision: "51098286a6433db8ecf89b5bd3b6602d",
        },
        {
          url: "/content/badge-4.svg",
          revision: "52fb91230f22e363128add6b91a56d2c",
        },
        {
          url: "/content/badge-5.svg",
          revision: "e285b8c53ac2eabfc9ae275fdff80d96",
        },
        {
          url: "/content/badge-7.svg",
          revision: "b216f2c90cc6f11162ad73061ee79268",
        },
        {
          url: "/content/badge-data-visualization-on-maps.svg",
          revision: "e20319630d7988acf5aa3c4885c1642e",
        },
        {
          url: "/content/badge-desktop-wire-frame.svg",
          revision: "60d1410dea9f16fbb5ac2bb99dc6ab99",
        },
        {
          url: "/content/badge-dogs-website-design.svg",
          revision: "d2eaabc6df167daade55010c6ce0953c",
        },
        {
          url: "/content/badge-google-maps.svg",
          revision: "f92747966e4ca6afbae205a939c3f60c",
        },
        {
          url: "/content/badge-google-product-2.svg",
          revision: "a1d5eca34e5e6fb7ecbba2d9d4d0f008",
        },
        {
          url: "/content/badge-google-product.svg",
          revision: "4cc8cd3689bbaf9fe3ae6fa48126df92",
        },
        {
          url: "/content/badge-mobile-display.svg",
          revision: "a9840c839892b1f348434ba28ec5337e",
        },
        {
          url: "/content/badge-mobile-responsive.svg",
          revision: "812a27d85c5eb0df5aaea3f33aa3c4c2",
        },
        {
          url: "/content/badge-mobile-text-classification.svg",
          revision: "cab69095d9c6b2016473104a4bb213e1",
        },
        {
          url: "/content/badge-plant.svg",
          revision: "6e0e8f33c65b050577615cfd2be13b6b",
        },
        {
          url: "/content/badge-pwa.svg",
          revision: "e58b2416007dfbc89cda1bd22964e3ff",
        },
        {
          url: "/content/badge-to-the-moon.svg",
          revision: "754db409a13c69eb736de91acdce48d2",
        },
        {
          url: "/content/badge-web-media-capture.svg",
          revision: "0c9ce15dc7a70fc28d0127214c290211",
        },
        {
          url: "/content/badge-web-vitals.svg",
          revision: "23df7cd823158842421f8b7160f6aa9b",
        },
        {
          url: "/content/badge-wire-frame.svg",
          revision: "db43c9e801078a1edf250ff9aac8965b",
        },
        {
          url: "/content/checkmark-badge.svg",
          revision: "29e97c0a413d31889cdaa697f9a08f2b",
        },
        {
          url: "/content/checkmark.svg",
          revision: "cf7bbb1031eb470d7b405205547151e1",
        },
        {
          url: "/content/dot-bg.svg",
          revision: "dad4098ec4c22b27fc23d081e67a6d4c",
        },
        {
          url: "/content/google-analytics-chart.svg",
          revision: "5fb6c9ad40aca8928150be7d48faa386",
        },
        {
          url: "/content/google-stack.webp",
          revision: "a61c486938a8caf92cd82f812e58310a",
        },
        {
          url: "/content/icons/action.svg",
          revision: "32678b2760b9140e11503f4c87ef2589",
        },
        {
          url: "/content/icons/app-checklist.svg",
          revision: "ef1cbe40a24289622c86ddd574e22510",
        },
        {
          url: "/content/icons/audience.svg",
          revision: "27329162a095c248074fef42300e4925",
        },
        {
          url: "/content/icons/backend.svg",
          revision: "eebf34f9686ab3f5bed6d759d02a3e96",
        },
        {
          url: "/content/icons/check-shield.svg",
          revision: "325951da260834f27a8ec7d1091274e3",
        },
        {
          url: "/content/icons/cicd.svg",
          revision: "e3aaed8d6180dc4f94a51fb14b41dc71",
        },
        {
          url: "/content/icons/code-search.svg",
          revision: "54516760382a962f0d97c487b7cf1b23",
        },
        {
          url: "/content/icons/code-window.svg",
          revision: "d155ed61fb6e50627c6a187dfa1d54a7",
        },
        {
          url: "/content/icons/collab.svg",
          revision: "43abcc7644bb7118c9388ee95c62646d",
        },
        {
          url: "/content/icons/cpu.svg",
          revision: "8a770a79a5d046443c86c786341739d4",
        },
        {
          url: "/content/icons/devops.svg",
          revision: "fe4f004cb1a51ec8efb27e3326ed1f57",
        },
        {
          url: "/content/icons/document.svg",
          revision: "45728a1b55bef8977fec1030d7b1c7e8",
        },
        {
          url: "/content/icons/graph.svg",
          revision: "9946df46321a52a3b82bcbe7d8db8658",
        },
        {
          url: "/content/icons/matrix.svg",
          revision: "1256030a82c866660133636e9547689c",
        },
        {
          url: "/content/icons/one-document.svg",
          revision: "f5c086bbb0c86e86a13cbd9a147a6357",
        },
        {
          url: "/content/icons/protected.svg",
          revision: "8a81fb64bb6d681f57c624c089fb7e72",
        },
        {
          url: "/content/icons/status.svg",
          revision: "c03aa1d289bd763abda25e8736acd18c",
        },
        {
          url: "/content/icons/telescope.svg",
          revision: "0642ed30295d66710afbb37c02137697",
        },
        {
          url: "/content/icons/users.svg",
          revision: "559d010ef21629a341c8a45dc7a5f5ba",
        },
        {
          url: "/content/labelboxhttps.webp",
          revision: "18b918298a6a2b5df3b4f98a65dae3fb",
        },
        {
          url: "/content/production-dark.svg",
          revision: "978cee52f2ff470ea02b602a4c03f45c",
        },
        {
          url: "/content/production-light.svg",
          revision: "a827e27d6e590d310e3bc3d60d66f099",
        },
        {
          url: "/content/seo-campaign.png",
          revision: "da056ab101ab547088a8e3b5403d0085",
        },
        {
          url: "/content/seo/analytics-graph.svg",
          revision: "ffc66f235f5135e33c67e9ba56b3e1cb",
        },
        {
          url: "/content/seo/google-code-lab.png",
          revision: "6863c869ae4ec1e09064e357876bc2b6",
        },
        {
          url: "/content/seo/ops-1.webp",
          revision: "d1593b2ebedf43b73fa33f0958ba2c71",
        },
        {
          url: "/content/seo/ops-2.webp",
          revision: "61b7f0ea8a6e10862f5e983b09a23456",
        },
        {
          url: "/content/seo/ops-3.webp",
          revision: "397bdad463529b9f73515b11caeb53c0",
        },
        {
          url: "/content/seo/ops-4.webp",
          revision: "89f2e231048509ad19408d3141d39541",
        },
        {
          url: "/content/user-interface-dark.png",
          revision: "722bab1ab0fc9ba5ba8309d530d3f401",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        { url: "/grid.svg", revision: "71270def81f286aab7209f04c762e1e6" },
        {
          url: "/icons/gradient/bar.svg",
          revision: "68e323d41cce4c973e74885675468410",
        },
        {
          url: "/icons/gradient/boost.svg",
          revision: "5f407af3689027af3487fc1cf97ca567",
        },
        {
          url: "/icons/gradient/check.svg",
          revision: "f387ab6667de7b3419b6401b9372363c",
        },
        {
          url: "/icons/gradient/code.svg",
          revision: "3fc2375d1674afa3c91f56cee565faf9",
        },
        {
          url: "/icons/gradient/command.svg",
          revision: "343617b2de5f12d85b829d16508e09c4",
        },
        {
          url: "/icons/gradient/cpu.svg",
          revision: "ba2e5c7bc2921713e2fe63c39a0fe09a",
        },
        {
          url: "/icons/gradient/design.svg",
          revision: "093b163162ac01ae8417c193102ed57b",
        },
        {
          url: "/icons/gradient/desktop.svg",
          revision: "b1c7854610d80de7f9fb4a473987928a",
        },
        {
          url: "/icons/gradient/ethereum.svg",
          revision: "e56144453e641397525665fceabe6f0b",
        },
        {
          url: "/icons/gradient/searchcheck.svg",
          revision: "ff11c69d5fdbc3ea51f59ccf9b352b3d",
        },
        {
          url: "/icons/gradient/searchcode.svg",
          revision: "0376f51ae7a399dde9ca2fc15eaceb8a",
        },
        {
          url: "/icons/gradient/security.svg",
          revision: "7c18f0110a52df2137fdedbcb78893e7",
        },
        {
          url: "/icons/gradient/stack.svg",
          revision: "557045fddeb0a05d1a14ca95fa7765dd",
        },
        {
          url: "/icons/gradient/support.svg",
          revision: "2ab72d88c7d50a8566053eb733c48980",
        },
        {
          url: "/icons/gradient/window.svg",
          revision: "f17f07225866b00d35774bfd045ca70d",
        },
        {
          url: "/icons/heroicons/adjustments.svg",
          revision: "22cf0078716e3045d4dedeb517239224",
        },
        {
          url: "/icons/heroicons/bell-alert.svg",
          revision: "18d8c94174f154bfc12b353a8b6ac710",
        },
        {
          url: "/icons/heroicons/chart-increase.svg",
          revision: "596f12831f8fda40baa5d99950de6108",
        },
        {
          url: "/icons/heroicons/chat-bubble.svg",
          revision: "1adf603ad1e7c85e3783e342d2dc6786",
        },
        {
          url: "/icons/heroicons/clock.svg",
          revision: "92a1d555d9c8092f9ec2678db676b8ca",
        },
        {
          url: "/icons/heroicons/code-box.svg",
          revision: "cc8e7a163bc1b7742f847e7ed65cac4d",
        },
        {
          url: "/icons/heroicons/code-bracket.svg",
          revision: "fcdc915f5b179976d0b185f285f5c615",
        },
        {
          url: "/icons/heroicons/components.svg",
          revision: "422793d28092e5ea0a0110cc34468443",
        },
        {
          url: "/icons/heroicons/cpu.svg",
          revision: "ab5bdcce76a2d7139f4a7e4083bc711b",
        },
        {
          url: "/icons/heroicons/credit-card.svg",
          revision: "a6f5acf83185a3df6291141bafdf5d6d",
        },
        {
          url: "/icons/heroicons/document-magnify.svg",
          revision: "2f6201095e31d71bb3886cf15dac54aa",
        },
        {
          url: "/icons/heroicons/dollar.svg",
          revision: "37c87283ec2584bf83a04126e5a79eca",
        },
        {
          url: "/icons/heroicons/ecommerce.svg",
          revision: "7171c192eca3c0d88690374e8d2df74a",
        },
        {
          url: "/icons/heroicons/envelope.svg",
          revision: "7d69f5e077001084ab9a51685cc9a5ca",
        },
        {
          url: "/icons/heroicons/eye-slash.svg",
          revision: "0c1ab4e5c070379dd864ea6728f533df",
        },
        {
          url: "/icons/heroicons/fingerprint.svg",
          revision: "dfcee1fed2fb2b47e3ef6988ceccce60",
        },
        {
          url: "/icons/heroicons/identification.svg",
          revision: "b31c67e34af180bc40c9a2402c6d00c9",
        },
        {
          url: "/icons/heroicons/infinite.svg",
          revision: "ec155f717b31d866beab999dff6dd42b",
        },
        {
          url: "/icons/heroicons/mobile-phone.svg",
          revision: "2241679be9da752789261caaba1ea61b",
        },
        {
          url: "/icons/heroicons/mobile-responsive.svg",
          revision: "75fd1a6d0ab9ad52342eb155ccf25f85",
        },
        {
          url: "/icons/heroicons/mobile-user-lock.svg",
          revision: "8dd4c043572449415130443fbd7fdf3e",
        },
        {
          url: "/icons/heroicons/person.svg",
          revision: "a2e7fda54a0ebc74e957ca44c68fa61f",
        },
        {
          url: "/icons/heroicons/qr-code.svg",
          revision: "405be038053a626693d7c0d831662c3a",
        },
        {
          url: "/icons/heroicons/search.svg",
          revision: "c29843309027905080152b9b8f8538ae",
        },
        {
          url: "/icons/heroicons/server.svg",
          revision: "d3dd85a2e93c5b2d333facd31d87e342",
        },
        {
          url: "/icons/heroicons/swatch.svg",
          revision: "010ba5110be4ee9827ab8990a2b063fb",
        },
        {
          url: "/icons/heroicons/table.svg",
          revision: "a26f02ea3c03a6b26e2dc346d2b59317",
        },
        {
          url: "/icons/heroicons/team.svg",
          revision: "c03278458b42e6adfc7d2c378a6269af",
        },
        {
          url: "/icons/heroicons/trophy.svg",
          revision: "6ba0a6c0230a873535313fa75170ccea",
        },
        {
          url: "/icons/heroicons/truck.svg",
          revision: "f55c5638627c865d0b3b1de6c2af43a1",
        },
        {
          url: "/icons/heroicons/user.svg",
          revision: "143651e58e213d557ea678c540c6b4e3",
        },
        {
          url: "/icons/heroicons/window.svg",
          revision: "772f4865c5ba5c9231501792b5c0a748",
        },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        {
          url: "/portfolio/1.webp",
          revision: "4d5b3aa3d503316d08d070462d3db8d4",
        },
        {
          url: "/portfolio/10.webp",
          revision: "d1eb8738964aa74ccb603811870a9ac1",
        },
        {
          url: "/portfolio/11.webp",
          revision: "dd4b4ba04d107c9a4ffd3644c40ad91a",
        },
        {
          url: "/portfolio/12.webp",
          revision: "e1df0385daa9be71ecbf72b5df82e0da",
        },
        {
          url: "/portfolio/13.webp",
          revision: "a59fd1c087601a78479c716be10f2e63",
        },
        {
          url: "/portfolio/14.webp",
          revision: "f62ea83a7d0afcf9d6bc0fbd34b11a16",
        },
        {
          url: "/portfolio/15.webp",
          revision: "286b9b2b6aa0a99d25871b79d7323152",
        },
        {
          url: "/portfolio/16.webp",
          revision: "59a854a5036af62731a7d34895507878",
        },
        {
          url: "/portfolio/17.webp",
          revision: "ec95a508b398d77ccf00d4156eef97dd",
        },
        {
          url: "/portfolio/18.webp",
          revision: "7641239c2179bc3924f727976edd757d",
        },
        {
          url: "/portfolio/19.webp",
          revision: "5b879821e3194fb464d0847c96d4850f",
        },
        {
          url: "/portfolio/2.webp",
          revision: "4403afdd6a3405ae7e64df3df5f595b8",
        },
        {
          url: "/portfolio/20.webp",
          revision: "313ef34036b36f2e4003c177b7389880",
        },
        {
          url: "/portfolio/21.webp",
          revision: "66681d99bc8c42178a6f75395cd27bcb",
        },
        {
          url: "/portfolio/22.webp",
          revision: "59b82c233e6e69453d2265f460ab5f3e",
        },
        {
          url: "/portfolio/23.webp",
          revision: "e8df15be1a76dc45a5db302375ed0314",
        },
        {
          url: "/portfolio/24.webp",
          revision: "4a361b1452592dfcb3c935faca0829b6",
        },
        {
          url: "/portfolio/3.webp",
          revision: "67e8b0a30b9367fb0dd9c2814542fcdc",
        },
        {
          url: "/portfolio/4.webp",
          revision: "86b1840e831e22d2189116aa9d9e04dd",
        },
        {
          url: "/portfolio/5.webp",
          revision: "41c976c6d1ad673893f42fcfb7e5bab4",
        },
        {
          url: "/portfolio/6.webp",
          revision: "40579eec8eb6d9be42c4bf7550fc23c1",
        },
        {
          url: "/portfolio/7.webp",
          revision: "37bea11c04d4b2cb972e8fc604e32037",
        },
        {
          url: "/portfolio/8.webp",
          revision: "cdfd9815b417e03bcd8b09d2b51d73f5",
        },
        {
          url: "/portfolio/9.webp",
          revision: "0a0c7b209083955051595210b462835f",
        },
        {
          url: "/portfolio/badges/aws-apn-select-consulting-partner.svg",
          revision: "b5fcd5518c07486d29f31eece4fa877b",
        },
        {
          url: "/portfolio/badges/b-corp.svg",
          revision: "030235655f024308d3ec0b029217d8bd",
        },
        {
          url: "/portfolio/badges/fastest-growing.webp",
          revision: "29241c305e5c806e77ad351745c643f2",
        },
        {
          url: "/portfolio/badges/google-g.webp",
          revision: "3d251d250f05b055fed54498e1612988",
        },
        {
          url: "/portfolio/badges/goolge-partner-color-2023.svg",
          revision: "3d9d04455a175b0b8fbce4b840d2f051",
        },
        {
          url: "/portfolio/badges/gptw.webp",
          revision: "7275f5eb71d85ff97147ab6902e26d98",
        },
        {
          url: "/portfolio/badges/hubspot-elite.webp",
          revision: "3fefef748c1e75c24624e606701ab299",
        },
        {
          url: "/portfolio/badges/hubspot-gold-partner.svg",
          revision: "b1450d018efaa76631e4442a7e0d80b2",
        },
        {
          url: "/portfolio/badges/iso-logo.svg",
          revision: "87abd7850ec274e5e65ffe535d945c24",
        },
        {
          url: "/portfolio/badges/meta-business-partner.svg",
          revision: "c108cd8bb601c1c97bd2c95330991d0f",
        },
        {
          url: "/portfolio/badges/microsoft-partner-2023-color.webp",
          revision: "4241de712a8c92afffc4ce883b7fcfc6",
        },
        {
          url: "/portfolio/badges/microsoft-partner-2023.svg",
          revision: "808061fb8a0dceb49012f0bec3d8b538",
        },
        {
          url: "/portfolio/badges/microsoft.svg",
          revision: "a4e9f7a17dc733edd12863258862da10",
        },
        {
          url: "/portfolio/badges/micrsoft-icon.webp",
          revision: "0681f491ad063ddf051ab4dafd9fca10",
        },
        {
          url: "/portfolio/badges/seo-company-2.webp",
          revision: "a9ddd95ba638b33348fe2f2fee4ae0e5",
        },
        {
          url: "/portfolio/badges/top-clutch-100.webp",
          revision: "b14cfd285b5c88130ea4136148e3b887",
        },
        {
          url: "/portfolio/badges/top-web-designer-2022.webp",
          revision: "9e3fbbdfec19146776fed79632cee810",
        },
        {
          url: "/portfolio/badges/upcity-award.webp",
          revision: "7c622acbd62bfaab1973eb07009c4f7c",
        },
        {
          url: "/portfolio/badges/web-design-pa-2023.webp",
          revision: "41678516667d2d12ec0e6deea30fb8ea",
        },
        {
          url: "/portfolio/cases/7acres/gallery-1.webp",
          revision: "a7cf087847a32960800b2fc954e175fe",
        },
        {
          url: "/portfolio/cases/7acres/gallery-2.webp",
          revision: "070fd8dcdbb2e9e5ec6b708c6c9fc58d",
        },
        {
          url: "/portfolio/cases/7acres/gallery-3.webp",
          revision: "33f424c8fc1c42c3f5a5f0293d90e151",
        },
        {
          url: "/portfolio/cases/7acres/introimage.webp",
          revision: "28016e886b9e170aa71c6e64080b3b55",
        },
        {
          url: "/portfolio/cases/7acres/solutionimage.webp",
          revision: "348ab6cf6e167a4bacb348100e348767",
        },
        {
          url: "/portfolio/cases/canopy/gallery-1.webp",
          revision: "c7c99aadd74a35d12de59cac604cc2c8",
        },
        {
          url: "/portfolio/cases/canopy/gallery-2.webp",
          revision: "65b9f361f9b917500ff730930267c568",
        },
        {
          url: "/portfolio/cases/canopy/gallery-3.webp",
          revision: "4d33a9e1ceadf2f5aaf1b872294fcff0",
        },
        {
          url: "/portfolio/cases/canopy/introimage.webp",
          revision: "a42cb4c6e00d2e1c156c8fc316842c27",
        },
        {
          url: "/portfolio/cases/canopy/solutionimage.webp",
          revision: "cf50bcc5671a2f1436120020285b6796",
        },
        {
          url: "/portfolio/cases/csa-group/gallery-1.webp",
          revision: "256e66f9cdac649f103f72982be6f318",
        },
        {
          url: "/portfolio/cases/csa-group/gallery-2.webp",
          revision: "992f71a753e5367f92f77c178ac5dd81",
        },
        {
          url: "/portfolio/cases/csa-group/gallery-3.webp",
          revision: "3d8f27aaac195dd5d28504a8a63ac22c",
        },
        {
          url: "/portfolio/cases/csa-group/introimage.webp",
          revision: "42aee4a32770d30d97674a3f25f113ea",
        },
        {
          url: "/portfolio/cases/csa-group/solutionimage.webp",
          revision: "0dfc43e96fd55e630dfe8e95136c42a5",
        },
        {
          url: "/portfolio/cases/olistica-group/gallery-1.webp",
          revision: "67e277821fbd058b13721acf34090d16",
        },
        {
          url: "/portfolio/cases/olistica-group/gallery-2.webp",
          revision: "27573395a414f290bb08bb691d7b2075",
        },
        {
          url: "/portfolio/cases/olistica-group/gallery-3.webp",
          revision: "fb9e52fe2ba89bc0e04e8aebc510aa99",
        },
        {
          url: "/portfolio/cases/olistica-group/introimage.webp",
          revision: "37eae05a25f54cb91cf72d9d7b82cb3d",
        },
        {
          url: "/portfolio/cases/olistica-group/solutionimage.webp",
          revision: "cb5b5357397e6ff5bc8a9071e9198020",
        },
        {
          url: "/portfolio/cases/syneos/gallery-1.webp",
          revision: "3dfc227ad54684e12de5cacabaef0977",
        },
        {
          url: "/portfolio/cases/syneos/gallery-2.webp",
          revision: "c81fe2e5e43a12e7bb52aec93355e3d7",
        },
        {
          url: "/portfolio/cases/syneos/gallery-3.webp",
          revision: "ba48d66d4d66de377ccb43e149d8f000",
        },
        {
          url: "/portfolio/cases/syneos/introimage.webp",
          revision: "52bea9be22c0265a9a16036dec79f1ec",
        },
        {
          url: "/portfolio/cases/syneos/solutionimage.webp",
          revision: "c20646a6a16c25232f9f63c7cfdbf7cd",
        },
        {
          url: "/portfolio/cases/tweed/gallery-1.webp",
          revision: "bbda658dac1d9724b560aac9f271d26d",
        },
        {
          url: "/portfolio/cases/tweed/gallery-2.webp",
          revision: "73700d49eef5230bd64ca3dfd1f540bf",
        },
        {
          url: "/portfolio/cases/tweed/gallery-3.webp",
          revision: "4004e31ec10f2d2e53a074ecfc343378",
        },
        {
          url: "/portfolio/cases/tweed/introimage.webp",
          revision: "39753a811572ec935b48aa2ca098a149",
        },
        {
          url: "/portfolio/cases/tweed/solutionimage.webp",
          revision: "0053727dd39c7f501b41736208ec55d3",
        },
        {
          url: "/portfolio/client-logos/7acres.svg",
          revision: "d9cf373518277aab7e611ac10d79a13c",
        },
        {
          url: "/portfolio/client-logos/baldor-logo.png",
          revision: "fa38135bdd15b6dbacf90237b8ed65cc",
        },
        {
          url: "/portfolio/client-logos/canopy-growth-logo-dark.svg",
          revision: "21fcbfe4d5fdd4f374b859a90180990c",
        },
        {
          url: "/portfolio/client-logos/canopy-growth-logo.svg",
          revision: "ddfadec05c19864da9fff64f0f2b2df9",
        },
        {
          url: "/portfolio/client-logos/cascade-logo-white-blue.svg",
          revision: "7f8a53a47afff538f75b2b0732b255e6",
        },
        {
          url: "/portfolio/client-logos/cascade-logo-white.svg",
          revision: "6f4a2727884dc4e9f92cf36094da3338",
        },
        {
          url: "/portfolio/client-logos/companion-ag-logo.png",
          revision: "fab5c82d40307895f8f58bfa425a1e08",
        },
        {
          url: "/portfolio/client-logos/companion-logo-white.svg",
          revision: "61842bb2e714764b3e616250c6608c2f",
        },
        {
          url: "/portfolio/client-logos/csa-logo-black.svg",
          revision: "b147fa2c107434b6638e3b4ecc54979f",
        },
        {
          url: "/portfolio/client-logos/csa-logo-white.svg",
          revision: "182a96bee98b3ec07fe7eb483ebbaf87",
        },
        {
          url: "/portfolio/client-logos/deer-creek-seed-co-logo.svg",
          revision: "8c34be50a93b137c6e6112d848de6b34",
        },
        {
          url: "/portfolio/client-logos/della-terra-logo-color.png",
          revision: "26baa700bb26e405da85363c23cd2c64",
        },
        {
          url: "/portfolio/client-logos/della-terra-logo-white.svg",
          revision: "93f44f3ab8bce262fc432ddec3c71bba",
        },
        {
          url: "/portfolio/client-logos/idv-svg-white.png",
          revision: "f6834ed305dd2749b7fc9a161653e1a5",
        },
        {
          url: "/portfolio/client-logos/inflect-wordmark_black.svg",
          revision: "80d505018dbaed0d55588415d39c0b83",
        },
        {
          url: "/portfolio/client-logos/inflect-wordmark_white.svg",
          revision: "f4c161c30e27e15e870bcccbcaf02183",
        },
        {
          url: "/portfolio/client-logos/jordanprocess-logo-white.svg",
          revision: "856afa4b5a95d2a8ab5e961c90fb3364",
        },
        {
          url: "/portfolio/client-logos/midrive-color.svg",
          revision: "158b2a2a978bdac68334813936f03e03",
        },
        {
          url: "/portfolio/client-logos/midrive-logo.svg",
          revision: "e6ca8958fa697ab8699092a7e7b6e319",
        },
        {
          url: "/portfolio/client-logos/naturea-logo-white.svg",
          revision: "80f622eb228870aacd77ce0cdfb3664f",
        },
        {
          url: "/portfolio/client-logos/naturea-logo.png",
          revision: "6f59f0dcd314ed0617f3073d8f333fb4",
        },
        {
          url: "/portfolio/client-logos/olistica-logo-black.svg",
          revision: "96ae16891c6d42793cf35cc141acf17e",
        },
        {
          url: "/portfolio/client-logos/olistica-logo.svg",
          revision: "c54c2c09f5fd865c96fcb05e5083cd74",
        },
        {
          url: "/portfolio/client-logos/railworks-logo.svg",
          revision: "5968738f6ab7920cddf5e4d438cef9be",
        },
        {
          url: "/portfolio/client-logos/syneos-logo.svg",
          revision: "9ea0441c0cc9ee864cab9c2f4b8310a2",
        },
        {
          url: "/portfolio/client-logos/the-pierre.svg",
          revision: "9a3f92da7a9e943601cd9cee04ae0347",
        },
        {
          url: "/portfolio/client-logos/tweed-logo-green.svg",
          revision: "888784124516ce356bc90fee7c95704a",
        },
        {
          url: "/portfolio/client-logos/whisl.svg",
          revision: "5804c8a2ca7faf408d867dc5948afd3b",
        },
        {
          url: "/portfolio/hero/7acres-cta.webp",
          revision: "9542373f4eab62c318e87b246e758b6a",
        },
        {
          url: "/portfolio/hero/7acres-wd-hero.webp",
          revision: "025c1dbc5b5d539abd03b80de3fe7124",
        },
        {
          url: "/portfolio/hero/baldorfood-wd-full.webp",
          revision: "6b1317d6387536e35f8b016b788ab572",
        },
        {
          url: "/portfolio/hero/csagroup-wd-hero.webp",
          revision: "8fb5fab125a30055bb3877919e5e63d0",
        },
        {
          url: "/portfolio/hero/event-count.webp",
          revision: "33673846fee5f67a5948a3efc653e1fa",
        },
        {
          url: "/portfolio/hero/jp-cxp-cta.webp",
          revision: "12b07b7fb89920333d7ee870d68d2168",
        },
        {
          url: "/portfolio/hero/pierre-cta.webp",
          revision: "9fdb8a8296e6b29f55d5549f8c378e17",
        },
        {
          url: "/portfolio/hero/railworks-wd-hero.webp",
          revision: "debdff3c928acc325852d820b264e1e9",
        },
        {
          url: "/portfolio/hero/react.svg",
          revision: "cbbc9b2ba941caecd748a2f715bff043",
        },
        {
          url: "/portfolio/hero/seo-metrics-hero.webp",
          revision: "e517044912fc5f9d82ab5c17442e87a8",
        },
        {
          url: "/portfolio/hero/seo-roi-increase.webp",
          revision: "3a468055e832bb99f68e75bd56347662",
        },
        {
          url: "/portfolio/hero/tailwindcss.svg",
          revision: "c3de13ed585b4a94c442e29de4b5c46e",
        },
        {
          url: "/portfolio/hero/user-data.webp",
          revision: "d50b785e5ec36cc40b54740be8723c94",
        },
        {
          url: "/portfolio/hero/whisl-cta.webp",
          revision: "4340992d6c93447f81e35a025223d315",
        },
        {
          url: "/portfolio/iphone/tweed-iphone.svg",
          revision: "fa262c77e902924dc60539fd3d6d12ca",
        },
        {
          url: "/portfolio/macbook/7acres-macbook.svg",
          revision: "c022c2bda9b507e7a88baa1aa48920b3",
        },
        {
          url: "/portfolio/macbook/cannopy-macbook.svg",
          revision: "ade9df6208b5cbd9c5102c9a3862bb17",
        },
        {
          url: "/portfolio/macbook/csa-macbook.svg",
          revision: "c5ea41bb3ba5b3096a05a14c75985855",
        },
        {
          url: "/portfolio/macbook/olistica-macbook.svg",
          revision: "829d7160d15c402a94705258af6a94ba",
        },
        {
          url: "/portfolio/macbook/syneos-macbook.svg",
          revision: "e2daffbb7ad5f59c2f4b28df2e327eed",
        },
        {
          url: "/portfolio/macbook/tweed-mackbook.svg",
          revision: "c620e7ab4cd6eb404cf9a6a277ff517a",
        },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: i,
              event: o,
              state: c,
            }) =>
              i && "opaqueredirect" === i.type
                ? new Response(i.body, {
                    status: 200,
                    statusText: "OK",
                    headers: i.headers,
                  })
                : i,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const i = e.pathname
        return !i.startsWith("/api/auth/") && !!i.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith("/api/")
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    )
})
