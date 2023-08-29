import { FC } from "react"

import { motion } from "framer-motion"

const SeoIcon: FC = () => {
  return (
    <div>
      <div className="relative h-small-icon w-small-icon  rounded-icon-glass border bg-gradient-to-b from-white to-black/5 shadow-xl shadow-black/20">
        <div className="absolute inset-md rounded-icon bg-gradient-to-bl from-gray-600 to-black p-sm shadow-xl shadow-green-600/15">
          <div className="relative h-[100%] w-[100%] rounded-[18px] bg-black transition-shadow shadow-[1px_-1px_1px_rgba(255,69,93,.3),1px_1px_1px_rgba(64,215,99,.3)]">
            <div className="absolute right-0 -left-1 top-1/2 -translate-y-1/2 space-y-xs  overflow-hidden rounded-[18px] text-2xs saturate-150">
              {/**style="opacity: 0.6; ;" */}

              <motion.div
                animate={{
                  y: [24, 2],
                  x: [0, 0],
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                }}
              >
                <motion.div
                  animate={{
                    opacity: 0.7,
                    x: [0, 8],
                  }}
                  initial={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 3,
                    duration: 1,
                  }}
                >
                  <div className="whitespace-nowrap pl-1.5 leading-none">
                    `id` <span className="text-green-600">bigint</span> unsigned
                  </div>
                  {/**style="opacity: 0.6; transform: translateX(8px) translateZ(0px);" */}
                  <div className="whitespace-nowrap pl-1.5 leading-none">
                    `email`{" "}
                    <span className="text-green-600">
                      varchar(<span className="text-purple-500">255</span>)
                    </span>
                  </div>
                </motion.div>
              </motion.div>
              <div className="!my-[3px]">
                <motion.div
                  animate={{
                    opacity: 1,
                    x: [200, 0],
                  }}
                  className="relative z-1 flex items-center border-l-2 transition border-red-500 bg-red-700/40 text-red shadow-[16px_-2px_16px_4px_rgba(255,69,93,.4)] backdrop-blur-sm"
                  initial={{
                    opacity: 0,
                  }}
                  style={{ height: "16px" }}
                  transition={{
                    delay: 1.8,
                    duration: 2,
                  }}
                >
                  <div className="absolute inset-0 border-y border-red-600/30" />
                  <div className="whitespace-nowrap">
                    <span
                      className="inline-flex flex-center"
                      style={{ width: "14px" }}
                    >
                      <div style={{ opacity: "1" }}>-</div>
                    </span>
                    `admin` tinyint(1) DEFAULT
                  </div>
                </motion.div>
                <div style={{ height: "16px", overflow: "visible" }}>
                  <div className="relative whitespace-nowrap border-l-2 border-[#40D763] bg-[#10481D]/50 py-px pl-sm text-green-600 shadow-[16px_2px_16px_4px_rgba(64,215,99,.4)] backdrop-blur-sm">
                    {/**style="transform: translateX(0%) translateZ(0px);" */}
                    <div className="absolute inset-0 border-y border-[#40D763]/40" />
                    + <span className="text-primary">`role`</span> varchar
                    <span className="text-primary">(</span>
                    <span className="text-purple-500">255</span>
                    <span className="text-primary">)</span>,
                  </div>
                </div>
              </div>
              {/**style="opacity: 0.6; transform: translateX(8px) translateZ(0px);" */}
              <div className="whitespace-nowrap pl-1.5 leading-none">
                `created_at` <span className="text-green-600">datetime</span>
              </div>
              {/**style="opacity: 0.6; transform: translateX(8px) translateZ(0px);" */}
              <div className="whitespace-nowrap pl-1.5 leading-none">
                `updated_at` <span className="text-green-600">datetime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeoIcon
