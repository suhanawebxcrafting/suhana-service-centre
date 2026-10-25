import { NextResponse } from 'next/server'

const HOST = 'suhanaservicecentre.in'
const INDEXNOW_KEY = 'f6c91a340b1e4fa8b29c54641e7d8901'
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}))
    const urls = Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls
      : body.url
        ? [body.url]
        : [`https://${HOST}/`]

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls.slice(0, 10000), // IndexNow max limit per request
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    const isSuccess = response.status === 200 || response.status === 202

    return NextResponse.json({
      success: isSuccess,
      status: response.status,
      submittedCount: urls.length,
      message: isSuccess ? 'URLs submitted to IndexNow successfully' : 'IndexNow submission failed',
    })
  } catch (error) {
    console.error('IndexNow Error:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Quick ping for top site sections
    const defaultUrls = [
      `https://${HOST}/`,
      `https://${HOST}/services`,
      `https://${HOST}/xerox-delivery`,
      `https://${HOST}/contact`,
      `https://${HOST}/sitemap`,
      `https://${HOST}/blog`,
    ]

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: defaultUrls,
      }),
    })

    return NextResponse.json({
      success: response.status === 200 || response.status === 202,
      status: response.status,
      submittedCount: defaultUrls.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
