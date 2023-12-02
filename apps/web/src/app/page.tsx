import { ChevronRight } from 'lucide-react'
import { ProgressCircle } from '../components/progress-circle'

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-amulet-600 to-amulet-500 px-6 py-5 flex flex-col gap-8">
        <img
          src="https://github.com/diego3g.png"
          alt=""
          className="rounded-full h-16 w-16 self-end"
        />
        <span className="text-2xl font-bold leading-heading text-amulet-50">
          Dashboard
        </span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <span className="text-lg font-bold leading-heading text-amulet-800">
          Collections
        </span>

        <div className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-amulet-100 shadow-lg">
          <span className="font-bold text-sm text-blue-bayoux-500 leading-heading">
            JAVASCRIPT
          </span>

          <div className="space-y-2">
            <h2 className="font-bold text-blue-bayoux-950 leading-heading">
              Fundamentals of JavaScript
            </h2>
            <p className="text-shark-800 text-sm leading-base">
              Practice your knowledge of data structures and algorithms using
              JavaScript.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="py-3 px-5 flex items-center gap-2 font-bold text-sm bg-amulet-500 rounded-md text-amulet-50"
            >
              Access collection
              <ChevronRight className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6">
                <ProgressCircle progress={50} />
              </div>
              <span className="text-blue-bayoux-400 text-sm leading-base">
                8/16
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
