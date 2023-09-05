import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import useAxios from "axios-hooks"

import FormContainer from "./FormContainer"

const DevopsForm = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [topic, setTopic] = useState("")
  const [message, setMessage] = useState("")
  const [pageUri, setPageUri] = useState<string>()

  const router = useRouter()

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/api/forms",
      method: "POST",
      data: {
        firstname,
        lastname,
        email,
        company,
        phone,
        topic,
        message,
        pageUri,
      },
    },
    { manual: true }
  )

  useEffect(() => {
    if (data?.success === true && !loading) {
      setFirstname("")
      setLastname("")
      setEmail("")
      setCompany("")
      setPhone("")
      setTopic("")
      setMessage("")
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
    <FormContainer
      description="All fields are required. Someone will reach out shortly."
      heading="Get things started today!"
    >
      <form className="form px-4 sm:px-0">
        <fieldset className="space-y-2">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  First name
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  className="text-neutral-900  focus:text-neutral-200  mt-1 block w-full  text-sm shadow-sm placeholder-slate-400"
                  placeholder="First Name"
                  type="text"
                  value={firstname}
                  onChange={e => setFirstname(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  Last name
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  className="text-neutral-900  focus:text-neutral-200  mt-1 block w-full  text-sm shadow-sm placeholder-slate-400"
                  placeholder="Last Name"
                  type="text"
                  value={lastname}
                  onChange={e => setLastname(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  Work email
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  className="text-neutral-900  focus:text-neutral-200  mt-1 block w-full  text-sm shadow-sm placeholder-slate-400"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  Company name
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  className="text-neutral-900  focus:text-neutral-200  mt-1 block w-full  text-sm shadow-sm placeholder-slate-400"
                  placeholder="Company"
                  type="text"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  Phone Number
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <input
                  required
                  className="text-neutral-900  focus:text-neutral-200  mt-1 block w-full  text-sm shadow-sm placeholder-slate-400"
                  placeholder="Phone"
                  type="text"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  Topic
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <select
                  required
                  value={topic}
                  onChange={e => setTopic(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="seo">SEO Services</option>
                  <option value="web-design">Web Design</option>
                  <option value="pricing">Pricing</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
            <div className="col-span-6">
              <label className="flex flex-1 flex-col gap-0.5">
                <span className="text-white text-sm font-medium">
                  Questions/Comments
                  <span className="font-normal text-red-600 pl-1">*</span>
                </span>
                <textarea
                  required
                  className="text-neutral-900  focus:text-neutral-200  mt-1 block w-full  text-sm shadow-sm placeholder-slate-400"
                  maxLength={1500}
                  placeholder="Some details about your request"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
                <span className="text-right text-xs text-secondary">
                  0/1500
                </span>
              </label>
            </div>
            <button
              className="bg-slate-900/50 mt-2 hover:bg-slate-700/50 focus:outline-none ring-1  hover:ring-green-400 text-white font-semibold h-10 w-full px-6 rounded-lg flex items-center justify-center"
              type="submit"
              onClick={() => refetch()}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </FormContainer>
  )
}
export default DevopsForm
