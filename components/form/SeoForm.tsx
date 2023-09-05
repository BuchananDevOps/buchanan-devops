import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"

import useAxios from "axios-hooks"

const SeoForm: FC = () => {
  const [domain, setDomain] = useState("")
  const [email, setEmail] = useState("")
  const [pageUri, setPageUri] = useState<string>()

  const router = useRouter()

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/api/audit",
      method: "POST",
      data: { domain, email, pageUri },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setDomain("")
      setEmail("")
    }
  }, [data?.success, loading, error])

  useEffect(() => {
    setPageUri(window.location.href)
  })

  useEffect(() => {
    if (data?.success === true) {
      router.push("/thank-you")
    }
  }, [data?.success])

  return (
    <form className="form">
      <fieldset className="space-y-2">
        <div className="grid grid-cols-12 items-end gap-2">
          <div className="col-span-12 sm:col-span-5">
            <label className="flex flex-1 flex-col gap-0.5">
              <input
                required
                className="text-neutral-900 ring-1 focus:text-neutral-200 valid:text-green-400"
                placeholder="https://yourwebsite.com"
                type="text"
                value={domain}
                onChange={e => setDomain(e.target.value)}
              />
            </label>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <label className="flex flex-1 flex-col gap-0.5">
              <input
                required
                className="text-neutral-900 ring-1 focus:text-neutral-200 valid:text-green-400"
                placeholder="example@company.com"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="col-span-12 sm:col-span-2">
            <button
              className="bg-slate-900/50 mt-2 hover:bg-slate-700/50 focus:outline-none ring-1  hover:ring-green-400 text-white font-semibold h-10 w-full px-6 rounded-lg flex items-center justify-center"
              type="submit"
              onClick={() => refetch()}
            >
              Send
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default SeoForm
