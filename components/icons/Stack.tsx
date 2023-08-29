import { FC } from "react"

type Props = {
  className: string
}

const StackIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      className={`h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-indigo-500/[.12] ${className}`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 40 40"
    >
      <path
        className="fill-indigo-50 stroke-indigo-500"
        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
      />
      <path
        className="stroke-indigo-500/50"
        d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
      />
      <path
        className="stroke-indigo-500"
        d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
      />
    </svg>
  )
}

export default StackIcon
