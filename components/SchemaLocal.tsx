import React, { FC } from "react"

import { SnapDown } from "@/components/motion/SnapDown"
import { SnapLeft } from "@/components/motion/SnapLeft"
import { SnapUp } from "@/components/motion/SnapUp"

const SchemaLocal: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" h-auto w-icon rounded-icon-glass border-[6px] border-green-100 bg-gradient-to-b from-white to-black/5 shadow-xl shadow-black/20">
        <div className=" inset-md rounded-icon bg-gradient-to-bl from-gray-600 to-black p-sm shadow-xl shadow-green-600">
          <div className="relative w-full h-full rounded-[18px] bg-black transition-shadow shadow-[1px_-1px_1px_rgba(255,69,93,.3),1px_1px_1px_rgba(64,215,99,.3)]">
            <div className=" right-0 -left-1 top-1/2 space-y-1 overflow-hidden rounded-[18px] text-sm saturate-150">
              <SnapUp delay={1.5}>
                <div className="whitespace-nowrap pl-1.5 pt-2 ">
                  &quot;@type&quot;:{" "}
                  <span className="text-green-700">&quot;Service&quot;</span>
                </div>
                <div className="whitespace-nowrap pl-1.5 ">
                  &quot;serviceType&quot;:{""}
                  <span className="text-green-700">
                    &quot;General Contractor&quot;
                  </span>
                </div>
              </SnapUp>
              <div className="!my-[3px]">
                <SnapUp delay={1.5}>
                  <div
                    className="relative z-[1]  flex items-center border-l-2 transition border-red-500 bg-red-700/40 text-red-600 shadow-[16px_-2px_16px_4px_rgba(255,69,93,.4)] backdrop-blur-sm"
                    style={{ height: "28px" }}
                  >
                    <div className=" inset-0 border-y border-red-600/30" />
                    <div className="whitespace-nowrap">
                      <span
                        className="inline-flex flex-center"
                        style={{ width: "14px" }}
                      >
                        <div style={{ opacity: "1" }}>-</div>{" "}
                      </span>
                      &quot;@type&quot;: &quot;WebPage&quot;,
                    </div>
                  </div>
                </SnapUp>
                <SnapLeft delay={3.0}>
                  <div style={{ overflow: "visible" }}>
                    <div className=" whitespace-nowrap transition  border-l-2 border-[#40D763] bg-[#10481D]/50 py-px pl-sm text-green-700 shadow-[16px_2px_16px_4px_rgba(64,215,99,.4)] backdrop-blur-sm">
                      <div className=" inset-0 border-y border-[#40D763]/40" />+
                      {""}{" "}
                      <span className="text-white">&quot;provider&quot;:</span>{" "}
                      {"{"} <br />
                      <span className="text-white pl-8">
                        &quot;@type&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;LocalBusiness&quot;,
                      </span>{" "}
                      <br />
                      <span className="text-white pl-8">&quot;name&quot;:</span>
                      <span className="text-green-700 pl-2">
                        {" "}
                        &quot;ACME Contractors&quot;
                      </span>{" "}
                      <br />
                      <span className="text-green-700 pl-8">{"}"}</span>,
                    </div>
                  </div>
                  <div className=" inset-0 border-y border-[#40D763]/40" />
                </SnapLeft>
              </div>
              <SnapDown delay={1.5} position={-55}>
                <div className="whitespace-nowrap pl-1.5 ">
                  &quot;areaServed&quot;: {"{"} <br />
                  <span className="text-white pl-4">&quot;@type&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;State&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-4">&quot;name&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Delaware&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-4">{"}"}</span>,
                </div>
                <div className="whitespace-nowrap pl-1.5 ">
                  &quot;hasOfferCatalog&quot;: {"{"} <br />
                  <span className="text-white pl-4">&quot;@type&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;OfferCatalog&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-4">&quot;name&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Contractor Services&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-4">
                    &quot;itemListElement&quot;:
                  </span>
                  <span className=" pl-2">{"["}</span> <br />
                  <span className=" pl-8">{"{"}</span>
                  <br />
                  <span className="text-white pl-10">&quot;@type&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Offer&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-10">
                    &quot;itemOffered&quot;:
                  </span>
                  <span className=" pl-2">{"{"}</span> <br />
                  <span className="text-white pl-12">&quot;@type&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Service&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-12">&quot;name&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Commercial Installs&quot;,
                  </span>{" "}
                  <br />
                  <span className=" pl-6">{"}"},</span>
                  <br />
                  <span className=" pl-4">{"]"},</span>
                  <br />
                  <span className=" pl-2">{"}"}</span>,
                </div>
              </SnapDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchemaLocal
