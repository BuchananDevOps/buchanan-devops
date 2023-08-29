import { FC } from "react"

import WebDesignDark from "../icons/WebDesignDark"
import SectionVertical from "../page/SectionVertical"

const IntroWebDesign: FC = () => {
  return (
    <SectionVertical
      button={{ name: "Learn More", route: "/web-design" }}
      description="Lorem ipsum extended parargraph about whatever. Define the usefulness of developing a custom website and include additional information to make this parapgraph longer and more intelligable."
      heading="Web Design"
      icon={<WebDesignDark />}
      id="web-design"
      subHeading="Web Design intro large title"
    >
      <div className=" inset-x-0 h-[37.5rem] [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-slate-100/[0.03] bg-[center_top_-1px] border-t border-slate-100/5 xl:top-8">
        <div className="container">
          <h1 className="pt-20 pb-20">Testing Section</h1>
        </div>
      </div>
    </SectionVertical>
  )
}

export default IntroWebDesign
