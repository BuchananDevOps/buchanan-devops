import type { NextApiRequest, NextApiResponse } from "next"

import axios from "axios"

const HUBSPOT_API_KEY = process.env.NEXT_PUBLIC_HUBSPOT_TOKEN
const HUBSPOT_PORTAL_ID = "39910446"
const HUBSPOT_FORM_GUID = "9b37a985-c808-453f-920d-a7f47159cb43"

type Response = {
  success: boolean
  domain?: string
  email?: string
}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { domain, email, pageUri } = req.body

  if (!domain || !email) {
    res.status(400).json({
      success: false,
    })
    return
  }

  try {
    await axios({
      method: "POST",
      url: `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      data: {
        fields: [
          {
            name: "domain",
            value: domain,
          },
          {
            name: "email",
            value: email,
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
    domain,
    email,
  })
}
