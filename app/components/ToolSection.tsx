'use client'

import { GeneratorProvider } from '@/app/context/GeneratorContext'
import GeneratorTool from '@/app/components/GeneratorTool'
import LivePreview from '@/app/components/LivePreview'

export default function ToolSection() {
  return (
    <GeneratorProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1270px] mx-auto">
        <div className="flex justify-center">
          <GeneratorTool />
        </div>
        <div className="flex justify-center">
          <LivePreview />
        </div>
      </div>
    </GeneratorProvider>
  )
}
