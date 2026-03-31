const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://heronetwork.io'

const faqData = [
  {
    question: 'What is a filming guide?',
    answer:
      'A filming guide (also called a video brief or filming brief) is a single-page document you send to clients before a video shoot. It covers essentials like lighting, camera stability, shot duration, and angles so you receive consistent, high-quality footage every time.',
  },
  {
    question: 'How do I send filming instructions to my clients?',
    answer:
      'Use our free filming guide generator to create a branded PDF with your logo and colors. Enter your email, and we\'ll deliver the finished guide straight to your inbox — ready to forward to any client.',
  },
  {
    question: 'Can I customize the guide with my own branding?',
    answer:
      'Yes. Upload your logo, choose primary and secondary brand colors, pick from 16 professional fonts, and select one of three layout styles — Modern, Bold, or Classic. The live preview updates instantly so you can see exactly what your client will receive.',
  },
  {
    question: 'What format is the filming guide in?',
    answer:
      'The guide is delivered as a single-page, print-ready PDF in A4 format. It\'s designed to be easy to read on any device and can be printed or shared digitally.',
  },
  {
    question: 'Is this filming guide generator free?',
    answer:
      'Yes, the filming guide generator is completely free. Just enter your company details, customize the design, and provide your email to receive the finished PDF — no account or credit card required.',
  },
  {
    question: 'Do I need design experience to create a guide?',
    answer:
      'Not at all. The generator uses professionally designed templates. You simply fill in your details, pick your colors and style, and the tool handles the layout and typography for you.',
  },
]

export default function JsonLd() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Free Filming Guide Generator',
    description:
      'Create a custom-branded, one-page filming guide PDF for your clients. Choose your colors, upload your logo, and download a professional video brief in seconds.',
    url: siteUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: 'Hero Network',
      url: 'https://heronetwork.io',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export { faqData }
