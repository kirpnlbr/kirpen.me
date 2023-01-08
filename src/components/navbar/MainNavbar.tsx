// ANCHOR: Solid-Js
import { JSX } from 'solid-js';

// ANCHOR: Images
import defaultLogo from '/favicon.svg';

export default function Header() {
  return (
    <div class="mx-auto max-w-7xl">
        <div class="relative flex items-center py-6">
            <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
            <div class="items-center ml-4 xl:ml-0">
                <img
                    class="w-28"
                    src={defaultLogo}
                    alt="Placeholder Logo"
                />
            </div>  
        </div>
    </div>
  )
}
