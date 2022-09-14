
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
export default function Menu()  {
    return ( 
        <div>
            <Menu>
                <div>
                   <Menu.button>
                    Options
                    <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
                     />

                    </Menu.button> 
                    
                </div>
                <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95" >

        </Transition>
                
            </Menu>
        </div>
     );
}
 
export default Menu;
