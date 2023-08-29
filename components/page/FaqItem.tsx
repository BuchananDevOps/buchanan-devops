import { FC } from "react"

type Props = {
  name: string
  text: string
}

const FaqItem: FC<Props> = ({ name, text }) => {
  return (
    <dl
      className="divide-y divide-slate-100"
      id={`${name}`.replace(/\s+/g, "-").toLowerCase()}
    >
      <details className="group py-3 marker:content-['']">
        <summary className="flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-sky-600 [&amp;::-webkit-details-marker]:hidden">
          {name}
          <svg
            className="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-sky-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 12H6" />
            <path className="group-open:hidden" d="M12 6v12" />
          </svg>
        </summary>
        <div className="pb-6 pt-6">
          <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-sky-600 hover:prose-a:text-sky-500">
            <p>{text}</p>
          </div>
        </div>
      </details>
    </dl>
  )
}

export default FaqItem
