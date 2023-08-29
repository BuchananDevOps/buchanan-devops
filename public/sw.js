if (!self.define) {
  let e,
    i = {}
  const c = (c, o) => (
    (c = new URL(c + ".js", o).href),
    i[c] ||
      new Promise(i => {
        if ("document" in self) {
          const e = document.createElement("script")
          ;(e.src = c), (e.onload = i), document.head.appendChild(e)
        } else (e = c), importScripts(c), i()
      }).then(() => {
        let e = i[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (o, s) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href
    if (i[a]) return
    let r = {}
    const n = e => c(e, a),
      d = { module: { uri: a }, exports: r, require: n }
    i[a] = Promise.all(o.map(e => d[e] || n(e))).then(e => (s(...e), r))
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
          url: "/_next/static/Qnre5JRAX60gP32aKczb4/_buildManifest.js",
          revision: "91000bb53d67445030eee2f47709367d",
        },
        {
          url: "/_next/static/Qnre5JRAX60gP32aKczb4/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/109.dfc0ca26eeb9ec6c.js",
          revision: "dfc0ca26eeb9ec6c",
        },
        {
          url: "/_next/static/chunks/149.0ea4e9e9e29b8262.js",
          revision: "0ea4e9e9e29b8262",
        },
        {
          url: "/_next/static/chunks/158.38b4d531a108b436.js",
          revision: "38b4d531a108b436",
        },
        {
          url: "/_next/static/chunks/163.1a67f73464c26cd1.js",
          revision: "1a67f73464c26cd1",
        },
        {
          url: "/_next/static/chunks/220.a8be044a44a4f7ac.js",
          revision: "a8be044a44a4f7ac",
        },
        {
          url: "/_next/static/chunks/240.dbe5887f4a570fe8.js",
          revision: "dbe5887f4a570fe8",
        },
        {
          url: "/_next/static/chunks/273.c54278a5d3eaefa5.js",
          revision: "c54278a5d3eaefa5",
        },
        {
          url: "/_next/static/chunks/291.4a41176ad8331953.js",
          revision: "4a41176ad8331953",
        },
        {
          url: "/_next/static/chunks/308-8f66c8a75f3af006.js",
          revision: "8f66c8a75f3af006",
        },
        {
          url: "/_next/static/chunks/34.32a0e43dc4882ff0.js",
          revision: "32a0e43dc4882ff0",
        },
        {
          url: "/_next/static/chunks/424.e0b04fe9a1808d50.js",
          revision: "e0b04fe9a1808d50",
        },
        {
          url: "/_next/static/chunks/473.277c881c0307a373.js",
          revision: "277c881c0307a373",
        },
        {
          url: "/_next/static/chunks/506.c0e83be93e6e0fc5.js",
          revision: "c0e83be93e6e0fc5",
        },
        {
          url: "/_next/static/chunks/554.ccdc2026b116bbd2.js",
          revision: "ccdc2026b116bbd2",
        },
        {
          url: "/_next/static/chunks/646.459153ac38fd18e8.js",
          revision: "459153ac38fd18e8",
        },
        {
          url: "/_next/static/chunks/660.c1c4d15029f36a81.js",
          revision: "c1c4d15029f36a81",
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
          url: "/_next/static/chunks/704.2ce1ded3b7df3998.js",
          revision: "2ce1ded3b7df3998",
        },
        {
          url: "/_next/static/chunks/749.37717558e473374f.js",
          revision: "37717558e473374f",
        },
        {
          url: "/_next/static/chunks/763.493d8f11fa1fb0a7.js",
          revision: "493d8f11fa1fb0a7",
        },
        {
          url: "/_next/static/chunks/799.d4a23916142db02a.js",
          revision: "d4a23916142db02a",
        },
        {
          url: "/_next/static/chunks/805.3dbc5ffda4949ccd.js",
          revision: "3dbc5ffda4949ccd",
        },
        {
          url: "/_next/static/chunks/879-74bf886743cb1041.js",
          revision: "74bf886743cb1041",
        },
        {
          url: "/_next/static/chunks/883.f955789c256e4772.js",
          revision: "f955789c256e4772",
        },
        {
          url: "/_next/static/chunks/884.6d4db75b9b73127d.js",
          revision: "6d4db75b9b73127d",
        },
        {
          url: "/_next/static/chunks/909.3b97658ea58bee09.js",
          revision: "3b97658ea58bee09",
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
          url: "/_next/static/chunks/pages/_app-baac8ed21c808e49.js",
          revision: "baac8ed21c808e49",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/contact-ac86b8ac8dc5dae7.js",
          revision: "ac86b8ac8dc5dae7",
        },
        {
          url: "/_next/static/chunks/pages/index-b1bad7ec852fc9ef.js",
          revision: "b1bad7ec852fc9ef",
        },
        {
          url: "/_next/static/chunks/pages/seo-efc91e9ed92d7bed.js",
          revision: "efc91e9ed92d7bed",
        },
        {
          url: "/_next/static/chunks/pages/showcase-bf1121e01dc62319.js",
          revision: "bf1121e01dc62319",
        },
        {
          url: "/_next/static/chunks/pages/testing-comps-60b1cf7ced3e9553.js",
          revision: "60b1cf7ced3e9553",
        },
        {
          url: "/_next/static/chunks/pages/web-design-466721948eca4865.js",
          revision: "466721948eca4865",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-958ecd666f58fbc1.js",
          revision: "958ecd666f58fbc1",
        },
        {
          url: "/_next/static/css/4d94fcd3fb181288.css",
          revision: "4d94fcd3fb181288",
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
          url: "/brand/google-partner.jpg",
          revision: "64d1008806ec05e1e281fb460f0d7b3e",
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
          url: "/bussin/hex-mesh.svg",
          revision: "1e9f2b71edeab2fbc2b2af2097886b0c",
        },
        {
          url: "/bussin/hex.svg",
          revision: "69488753f5a5f212aa23aba61225583b",
        },
        {
          url: "/bussin/large-chart.svg",
          revision: "b3efb06abff8d24300df5453e6a94f25",
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
              event: c,
              state: o,
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
