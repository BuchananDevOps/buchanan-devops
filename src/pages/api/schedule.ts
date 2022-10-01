import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

const HUBSPOT_API_KEY = process.env.NEXT_PUBLIC_HUBSPOT_TOKEN;
const HUBSPOT_PORTAL_ID = '22662842';
const HUBSPOT_FORM_GUID = '76100779-4f01-44b4-b64e-c0b72cdeb8fb';

type Response = {
  success: boolean;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  company?: string;
  domain?: string;
  date?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { firstname, lastname, email, phone, company, domain, date, pageUri } =
    req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !company ||
    !domain ||
    !date
  ) {
    res.status(400).json({
      success: false,
    });
    return;
  }

  try {
    const response = await axios({
      method: 'POST',
      url: `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      data: {
        fields: [
          {
            name: 'firstname',
            value: firstname,
          },
          {
            name: 'lastname',
            value: lastname,
          },
          {
            name: 'email',
            value: email,
          },
          {
            name: 'phone',
            value: phone,
          },
          {
            name: 'company',
            value: company,
          },
          {
            name: 'domain',
            value: domain,
          },
          {
            name: 'date',
            value: date,
          },
        ],
        context: { pageUri },
      },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
        Authorization: `Bearer ${HUBSPOT_API_KEY}`,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
  res.status(200).json({
    success: true,
    firstname,
    lastname,
    email,
    phone,
    company,
    domain,
    date,
  });
};
