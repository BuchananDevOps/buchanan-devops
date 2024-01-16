import { FC } from "react"

import clsx from "clsx"

type Props = {
  category: "Web Design" | "Seo" | "Development" | string
}

const CategoryBadge: FC<Props> = ({ category }) => {
  return (
    <div
      className={clsx("px-2 text-white rounded text-sm flex items-center", {
        "bg-blue-600": category === "Web Design",
        "bg-green-800": category === "Seo",
        "bg-teal-800": category === "Development",
      })}
      id="category-badge"
    >
      {category}
    </div>
  )
}

export default CategoryBadge
