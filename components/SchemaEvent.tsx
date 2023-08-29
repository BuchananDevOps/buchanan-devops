import { FC } from "react"

import { SnapDown } from "@/components/motion/SnapDown"
import { SnapLeft } from "@/components/motion/SnapLeft"
import { SnapUp } from "@/components/motion/SnapUp"

const SchemaEvent: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" h-full w-icon rounded-icon-glass border-[6px] border-green-100 bg-gradient-to-b from-white to-black/5 shadow-xl shadow-black/20">
        <div className=" inset-md h-full rounded-icon bg-gradient-to-bl from-gray-600 to-black p-sm shadow-xl shadow-green-600">
          <div className="relative w-full h-full rounded-[18px] bg-black transition-shadow shadow-[1px_-1px_1px_rgba(255,69,93,.3),1px_1px_1px_rgba(64,215,99,.3)]">
            <div className=" right-0 -left-1 top-1/2 space-y-1 overflow-hidden rounded-[18px] text-sm saturate-150">
              <SnapUp delay={1.5}>
                <div
                  className="whitespace-nowrap pl-1.5 pt-1.5 "
                  style={{
                    opacity: "1",
                    transform: "translateX(8px) translateZ(0px)",
                  }}
                >
                  &quot;@type&quot;:{" "}
                  <span className="text-green-700">&quot;Event&quot;</span>
                </div>
                <div
                  className="whitespace-nowrap pl-1.5 "
                  style={{
                    opacity: "1",
                    transform: "translateX(8px) translateZ(0px)",
                  }}
                >
                  &quot;eventType&quot;:{""}
                  <span className="text-green-700">&quot;Concert&quot;</span>
                </div>
              </SnapUp>
              <div className="!my-[3px]">
                <SnapUp delay={1.5}>
                  <div
                    className="relative z-[1] flex items-center border-l-2 transition border-red-500 bg-red-700/40 text-red-600 shadow-[16px_-2px_16px_4px_rgba(255,69,93,.4)] backdrop-blur-sm"
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
                    <div className=" whitespace-nowrap  border-l-2 border-[#40D763] bg-[#10481D]/50 py-px pl-0 text-green-700 shadow-[16px_2px_16px_4px_rgba(64,215,99,.4)] backdrop-blur-sm">
                      <div className=" inset-0 border-y border-[#40D763]/40" />+
                      {""}{" "}
                      <span className="text-white">&quot;location&quot;:</span>{" "}
                      {"{"} <br />
                      <span className="text-white pl-6">
                        &quot;@type&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;Place&quot;,
                      </span>
                      <br />
                      <span className="text-white pl-6">
                        &quot;address&quot;:
                      </span>
                      <span className="text-green-white pl-2">{"{"}</span>{" "}
                      <br />
                      <span className="text-white pl-8">
                        &quot;@type&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;PostalAddress&quot;,
                      </span>{" "}
                      <br />
                      <span className="text-white pl-8">
                        &quot;addressLocality&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;Hampton&quot;,
                      </span>{" "}
                      <br />
                      <span className="text-white pl-8">
                        &quot;adressRegion&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;VA&quot;,
                      </span>{" "}
                      <br />
                      <span className="text-white pl-8">
                        &quot;postalCode&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;23666&quot;,
                      </span>{" "}
                      <br />
                      <span className="text-white pl-8">
                        &quot;streetAddress&quot;:
                      </span>
                      <span className="text-green-700 pl-2">
                        &quot;1000 Coliseum Dr&quot;,
                      </span>{" "}
                      <br />
                      <span className="text-green-700 pl-6">{"}"},</span>
                      <br />
                      <span className="text-white pl-4">&quot;name&quot;:</span>
                      <span className="text-green-700 pl-2">
                        {" "}
                        &quot;The Hi-Dive&quot;
                      </span>{" "}
                      <br />
                      <span className="text-green-700 pl-8">{"}"}</span>,
                    </div>
                  </div>
                  <div className=" inset-0 border-y border-[#40D763]/40" />
                </SnapLeft>
              </div>
              <SnapDown delay={1.5} position={-200}>
                <div className="whitespace-nowrap">
                  <span className=" pl-2">&quot;name&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Basscenter XI&quot;,
                  </span>{" "}
                  <br />
                  <span className="pl-2">&quot;offers&quot;: {"{"}</span> <br />
                  <span className="text-white pl-6">&quot;@type&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;Offer&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-6">&quot;price&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;146.00&quot;,
                  </span>{" "}
                  <br />
                  <span className="text-white pl-6">
                    &quot;priceCurrency&quot;:
                  </span>
                  <span className="text-green-700 pl-2">&quot;USD&quot;,</span>{" "}
                  <br />
                  <span className="text-white pl-6">&quot;url&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;http://www.ticketfly.com/xyz&quot;,
                  </span>{" "}
                  <br />
                  <span className=" pl-6">{"}"}</span>,<br />
                  <span className=" pl-2">&quot;startDate&quot;:</span>
                  <span className="text-green-700 pl-2">
                    &quot;2023-09-4T18:30&quot;,
                  </span>{" "}
                  <br />
                </div>
              </SnapDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchemaEvent
