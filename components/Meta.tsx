import Head from 'next/head'
import { useRouter } from 'next/router'
import siteImg from '@/images/ogp.png'
import { SITE_META } from '@/constants/meta'

interface Props {
  pageTitle?: string
  pageDesc?: string
  pageImg?: string
  pageImgW?: number
  pageImgH?: number
}
const Meta: React.FC<Props> = ({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}) => {
  const router = useRouter()
  const url = `${SITE_META.siteUrl}${router.asPath}`

  const title = pageTitle
    ? `${pageTitle} | ${SITE_META.siteTitle}`
    : SITE_META.siteTitle
  const desc = pageDesc ?? SITE_META.siteDesc
  const img = pageImg || siteImg.src
  const imgW = (pageImgW || siteImg.width).toString()
  const imgH = (pageImgH || siteImg.height).toString()
  const imgUrl = img.startsWith('https') ? img : `${SITE_META.siteUrl}${img}`

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={SITE_META.siteTitle} />
      <meta property="og:type" content={SITE_META.siteType} />
      <meta property="og:locale" content={SITE_META.siteLocale} />

      <link rel="icon" href={SITE_META.siteIcon} />
      <link rel="apple-touch-icon" href={SITE_META.siteIcon} />

      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="theme-color" content="#BEFFFA" />
    </Head>
  )
}

export default Meta
