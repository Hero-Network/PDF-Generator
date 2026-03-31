import ToolSection from '@/app/components/ToolSection'
import JsonLd, { faqData } from '@/app/components/JsonLd'

export default function Home() {
  return (
    <>
      <JsonLd />

      <main className="min-h-screen bg-[#111827]">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[#D4FB5D] text-sm font-semibold tracking-wide uppercase mb-4">
              Free Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Free Filming Guide Generator
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create a custom-branded, one-page filming brief your clients will
              actually use. Pick your colors, upload your logo, and download a
              professional video brief PDF in seconds.
            </p>
            <a
              href="#generator"
              className="inline-block bg-[#D4FB5D] text-gray-900 font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            >
              Create Your Guide
            </a>
          </div>
        </section>

        {/* Tool Section */}
        <section id="generator" className="bg-[#A6A6A6] py-12 px-4">
          <div className="container mx-auto">
            <ToolSection />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Customize',
                  description:
                    'Enter your company name, upload your logo, and choose your brand colors, font, and layout style.',
                },
                {
                  step: '2',
                  title: 'Preview',
                  description:
                    'Watch your filming guide update in real-time as you tweak colors, fonts, and styles until it looks perfect.',
                },
                {
                  step: '3',
                  title: 'Download',
                  description:
                    'Hit generate and get a professional, print-ready PDF delivered straight to your inbox — ready to send to clients.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-[#D4FB5D] text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Why Use a Filming Guide?
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Social media managers and content creators use video briefs to set
              clear expectations and get usable footage on the first take.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Stop Getting Bad Footage',
                  description:
                    'A one-page filming guide tells clients exactly what you need — lighting, angles, duration — so every clip is usable.',
                },
                {
                  title: 'Professional in Under 60 Seconds',
                  description:
                    'Choose a template, add your brand, and generate. No design tools, no back-and-forth with a designer.',
                },
                {
                  title: 'Branded to Your Business',
                  description:
                    'Your logo, your colors, your fonts. Every guide looks like it came from your team, because it did.',
                },
                {
                  title: 'Free — No Account Required',
                  description:
                    'Just enter your details and an email address. The finished PDF lands in your inbox, no signup or credit card needed.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#1e293b] border border-gray-700 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map((item) => (
                <div
                  key={item.question}
                  className="border border-gray-700 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-[#0f172a] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Filming Guide?
            </h2>
            <p className="text-gray-400 mb-8">
              It takes less than a minute. Customize your brand, generate a PDF,
              and start sending professional video briefs to every client.
            </p>
            <a
              href="#generator"
              className="inline-block bg-[#D4FB5D] text-gray-900 font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started — It&apos;s Free
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
