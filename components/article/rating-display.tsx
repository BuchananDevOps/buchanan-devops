import React, { FC } from "react"

import { StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid"

type Props = {
  aggregateRating: string
}

const DisplayRating: FC<Props> = ({ aggregateRating }) => {
  const filledStars = parseInt(aggregateRating, 10)
  const unfilledStars = 5 - filledStars

  // Assuming FilledStarIcon and StarIcon are components that represent filled and unfilled stars
  const filledStarElements = Array.from({ length: filledStars }, (_, index) => (
    <FilledStarIcon key={index} className=" h-6 w-6 fill-yellow-300" />
  ))

  const unfilledStarElements = Array.from(
    { length: unfilledStars },
    (_, index) => (
      <StarIcon
        key={filledStars + index}
        className="h-6 w-6 stroke-yellow-300"
      />
    )
  )

  return (
    <div className="flex flex-row">
      {filledStarElements}
      {unfilledStarElements}
    </div>
  )
}

export default DisplayRating
