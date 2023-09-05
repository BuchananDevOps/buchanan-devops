import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

const HUBSPOT_API_KEY = process.env.NEXT_PUBLIC_HUBSPOT_TOKEN
const HUBSPOT_PORTAL_ID = "43763570"
const HUBSPOT_FORM_GUID = "8ed355f5-0029-4eec-8b21-2c98ff0e7cf2"

type Response = {
  success: boolean
  firstname?: string
  lastname?: string
  email?: string
  company?: string
  phone?: string
  topic?: string
  message?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const {
    firstname,
    lastname,
    email,
    company,
    phone,
    topic,
    message,
    pageUri,
  } = req.body

  if (
    !firstname ||
    !lastname ||
    !email ||
    !company ||
    !phone ||
    !topic ||
    !message
  ) {
    res.status(400).json({
      success: false,
    })
    return
  }

  try {
    const response = await axios({
      method: "POST",
      url: `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      data: {
        fields: [
          {
            name: "firstname",
            value: firstname,
          },
          {
            name: "lastname",
            value: lastname,
          },
          {
            name: "email",
            value: email,
          },
          {
            name: "company",
            value: company,
          },
          {
            name: "phone",
            value: phone,
          },
          {
            name: "topic",
            value: topic,
          },
          {
            name: "message",
            value: message,
          },
        ],
        context: { pageUri },
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "86400",
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
      },
    })
  } catch (error) {
    return res.status(500).json({ success: false })
  }
  res.status(200).json({
    success: true,
    firstname,
    lastname,
    email,
    company,
    phone,
    topic,
    message,
  })
}
