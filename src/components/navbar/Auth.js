import { Menu } from '@headlessui/react'
import {Icon} from "../../Icons";

function Auth() {

    const user = {
        name: 'Ahmet Can Ekinci',
        avatar: 'https://i.scdn.co/image/ab6775700000ee853e8d9410bd724348aa71096d',
    }

    return(
        <Menu as="nav" className={"relative"}>
       {({ open }) => (
           <>
           <Menu.Button className={`flex rounded-3xl items-center h-8 ${ open ? 'bg-active' : 'bg-black'} pr-2 hover-bg-active`}>
          <img alt='' src={user.avatar} className="w-8 h-8 rounded-full p-0.5 mr-2" />
          <span className='text-sm font-semibold mr-2 sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>{user.name}</span>
          <span className={open && 'rotate-180'}> 
          <Icon size={16} name="downDir"  />
          </span>
      </Menu.Button>
      <Menu.Items className={"absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2 z-50"}>
        <Menu.Item  >
          {({ active }) => (
            <a className={`h-10 flex justify-between items-center px-2 text-sm rounded  ${active && 'bg-white bg-opacity-10'}`} href="/home">
              Hesap
              <Icon size={16} name="external" />
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`h-10 flex items-center px-2 text-sm rounded  ${active && 'bg-white bg-opacity-10'}`} href="/home">
              Profil
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`h-10 flex justify-between items-center px-2 text-sm rounded  ${active && 'bg-white bg-opacity-10'}`} href="/home">
              Premium'a Yükselt
              <Icon size={16} name="external" />
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a className={`h-10 flex items-center px-2 text-sm rounded  ${active && 'bg-white bg-opacity-10'}`} href="/home">
              Oturumu Kapat
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
           </>
       )}
    </Menu>
    )
}

export default Auth