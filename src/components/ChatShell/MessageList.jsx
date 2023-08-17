import Loader from '../Loader'
import { useState } from 'react'

export default function MessageList() {
  const [loader, setLoader] = useState(false)
  return (
    <div className="flex flex-col-reverse overflow-auto max-h-77 px-5 scroll-smooth">
      <Loader />
      <div className="flex mb-5 justify-end">
        <div className="flex flex-col text-right">
          <div className="text-xl max-w-4xl p-2 px-4 bg-light text-primary rounded">
            Ok then
          </div>
          <div className="text-sm">Apr 16</div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col">
          <div className="max-w-4xl text-xl bg-pale-blue rounded p-2 px-4 text-black">
            Yeah I think it's best we do that. Otherwise things won't work well
            at all. I'm adding more text here to test the sizing of the speech
            bubble and the wrapping of it too.
          </div>
          <div className="text-sm">Apr 16</div>
        </div>
      </div>
      <div className="flex mb-5 justify-end">
        <div className="flex flex-col text-right">
          <div className="text-xl max-w-4xl p-2 px-4 bg-light text-primary rounded">
            Ok then
          </div>
          <div className="text-sm">Apr 16</div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col">
          <div className="max-w-4xl text-xl bg-pale-blue rounded p-2 px-4 text-black">
            Yeah I think it's best we do that. Otherwise things won't work well
            at all. I'm adding more text here to test the sizing of the speech
            bubble and the wrapping of it too.
          </div>
          <div className="text-sm">Apr 16</div>
        </div>
      </div>
      <div className="flex mb-5 justify-end">
        <div className="flex flex-col text-right">
          <div className="text-xl max-w-4xl p-2 px-4 bg-light text-primary rounded">
            Ok then
          </div>
          <div className="text-sm">Apr 16</div>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col">
          <div className="max-w-4xl text-xl bg-pale-blue rounded p-2 px-4 text-black">
            Yeah I think it's best we do that. Otherwise things won't work well
            at all. I'm adding more text here to test the sizing of the speech
            bubble and the wrapping of it too.
          </div>
          <div className="text-sm">Apr 16</div>
        </div>
      </div>
    </div>
  )
}
