import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { FaTimes } from "react-icons/fa";

export default function NftModal({ open, onClose, children }) {
  function escHandler({ key }) {
    if (key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', escHandler);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', escHandler);
      }
    };
  }, []);


  if (typeof document !== 'undefined') {
    return createPortal((
      <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
        {/* backdrop */}
        <div
          className={`fixed flex align-middle inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'} transition-opacity duration-300 ease-in-out`}
          onClick={onClose}
        />

        {/* content */}
        <div className={`absolute m-auto right-0 left-0 top-0 bottom-0 h-[200px] bg-black shadow-lg w-full max-w-screen-sm ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-300 ease-in-out`}>
          <div className="absolute right-5 top-5">
            <button className="text-white" onClick={onClose}><FaTimes /></button>
          </div>
          { children }
        </div>
      </div>
    ), document.body)
  } else {
    return null
  }
}