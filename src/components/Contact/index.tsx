import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

import './index.css'

function ContactComponent(): JSX.Element {
    return (
        <div id="contact" className="contact toast">
          <div className="card w-96 bg-base-100/50 backdrop-blur-3xl shadow-xl">
          <div className="card-body">
            <div className="flex">
              <h2 className="card-title">Contact us!</h2>
              <a className="btn btn-circle btn-outline btn-sm ml-auto absolute -top-3.5 -right-3.5" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </a>
            </div>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <input placeholder="Email" className="input input-bordered" type="email" />
                <label className="label cursor-pointer">
                  Accept terms of use
                  <input type="checkbox" className="toggle" />
                </label>
                <label className="label cursor-pointer">
                  Submit to newsletter
                  <input type="checkbox" className="toggle" />
                </label>
                <button className="btn btn-secondary btn-wide">
                  <span className="flex items-center">
                    Send <PaperAirplaneIcon className="h-6 w-6 ml-4 -rotate-45" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default ContactComponent