import {OrganizationSwitcher, SignedIn, SignOutButton} from '@clerk/nextjs'
import {dark} from '@clerk/themes'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={110} height={110} />
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {/* <SignedIn> */}
          <SignOutButton redirectUrl="/sign-in">
            <div className="flex cursor-pointer">
              <Image
                src="/images/static/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
            </div>
          </SignOutButton>
          {/* </SignedIn> */}
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
