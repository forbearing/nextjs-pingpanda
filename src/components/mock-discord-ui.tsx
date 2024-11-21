import { ReactNode } from 'react'
import { Icons } from './icons'
import {
  LucideCog,
  LucideGift,
  LucideHelpCircle,
  LucideInbox,
  LucideMenu,
  LucideMic,
  LucidePhone,
  LucidePin,
  LucidePlusCircle,
  LucideSearch,
  LucideSmile,
  LucideSticker,
  LucideUserCircle,
  LucideVideo,
} from 'lucide-react'
import Image from 'next/image'

interface props {
  children: ReactNode
}

export const MockDiscordUI = ({ children }: props) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] overflow-hidden rounded-lg bg-discord-background text-white shadow-xl">
      {/* server list section */}
      <div className="hidden w-[72px] flex-col items-center bg-[#202225] py-3 sm:flex">
        {/* section1: logo icon */}
        <div className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-discord-brand-color transition-all duration-200 hover:rounded-xl">
          <Icons.discord className="size-3/5 text-white" />
        </div>
        {/* section2: divider */}
        <div className="my-2 h-[2px] w-8 rounded-full bg-discord-background" />
        {/* section3: channel */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="mb-3 flex size-12 cursor-not-allowed items-center justify-center rounded-3xl bg-discord-background transition-all duration-200 hover:rounded-xl hover:bg-discord-brand-color"
          >
            <span className="text-lg font-semibold text-gray-400">{String.fromCharCode(65 + i)}</span>
          </div>
        ))}
        {/* section4: add button */}
        <div className="group mb-3 mt-auto flex size-12 cursor-not-allowed items-center justify-center rounded-3xl bg-discord-background transition-all duration-200 hover:rounded-xl hover:bg-[#3ba55c]">
          <LucidePlusCircle className="text-[#3ba55c] group-hover:text-white" />
        </div>
      </div>

      {/* dm list section*/}
      <div className="hidden w-60 flex-col bg-[#2f3136] md:flex">
        {/* section1: search-bar */}
        <div className="flex h-16 items-center border-b border-[#202225] px-4 shadow-sm">
          <div className="flex h-8 w-full cursor-not-allowed items-center justify-center rounded bg-[#202225] px-2 text-sm text-gray-500">
            Find or start a conversation
          </div>
        </div>
        {/* section2: list */}
        <div className="flex-1 overflow-y-auto pt-4">
          <div className="mb-4 px-2">
            <div className="flex cursor-not-allowed items-center rounded px-2 py-1.5 text-sm text-[#dcddde] hover:bg-[#393c43]">
              <LucideUserCircle className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="text-sm font-medium">Friends</span>
            </div>
            <div className="flex cursor-not-allowed items-center rounded px-2 py-1.5 text-sm text-[#dcddde] hover:bg-[#393c43]">
              <LucideInbox className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="text-sm font-medium">Nitro</span>
            </div>
          </div>
          <div className="mb-4 px-2">
            <h3 className="mb-2 text-xs font-semibold uppercase text-[#8e9297]">Direct Messages</h3>
            <div className="flex cursor-pointer items-center rounded bg-[#393c43] px-2 py-1.5 text-white">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingPanda Avatar"
                width={32}
                height={32}
                className="mr-3 rounded-full object-cover"
              />
              <span className="font-medium">PingPanda</span>
            </div>
            <div className="my-1 space-y-px">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex cursor-not-allowed items-center rounded px-2 py-1.5 text-gray-600">
                  <div className="mr-3 size-8 rounded-full bg-discord-background" />
                  <span className="font-medium">User{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* section3: you */}
        <div className="flex items-center bg-[#292b2f] px-2">
          <div className="mr-2 size-8 rounded-full bg-brand-700" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#b9bbbe]">@your_account</p>
          </div>
          <div className="flex items-center space-x-2">
            <LucideMic className="size-5 cursor-pointer text-[#b9bbbe] hover:text-white" />
            <LucidePhone className="size-5 cursor-pointer text-[#b9bbbe] hover:text-white" />
            <LucideCog className="size-5 cursor-pointer text-[#b9bbbe] hover:text-white" />
          </div>
        </div>
      </div>

      {/* main content section */}
      <div className="flex flex-1 flex-col">
        {/* dm header */}
        <div className="flex h-16 items-center border-b border-[#202225] bg-[#36393f] px-4 shadow-sm">
          <div className="mr-4 md:hidden">
            <LucideMenu className="size-6 cursor-pointer text-[#b9bbbe] hover:text-white" />
          </div>
          <div className="flex items-center">
            <div className="relative">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingPanda Avatar"
                width={40}
                height={40}
                className="mr-3 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-3 size-3 rounded-full border-2 border-[#36393f] bg-green-300" />
            </div>
            <p className="font-semibold text-white">PingPanda</p>
          </div>
          <div className="ml-auto flex items-center space-x-4 text-[#b9bbbe]">
            <LucidePhone className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            <LucideVideo className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            <LucidePin className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            <LucideUserCircle className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            <LucideSearch className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            <LucideInbox className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            <LucideHelpCircle className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
          </div>
        </div>

        {/* message history */}
        <div className="flex flex-1 flex-col-reverse overflow-y-auto bg-discord-background p-4">{children}</div>

        {/* message input */}
        <div className="p-4">
          <div className="flex items-center rounded-lg bg-[#40444b] p-1">
            <LucidePlusCircle className="mx-3 cursor-not-allowed text-[#b9bbbe] hover:text-white" />
            <input
              type="text"
              readOnly
              placeholder="Message @PingPanda"
              className="flex-1 cursor-not-allowed bg-transparent px-1 py-2.5 text-white placeholder-[#72767d] focus:outline-none"
            />
            <div className="mx-3 flex items-center space-x-3 text-[#b9bbbe]">
              <LucideGift className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
              <LucideSticker className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
              <LucideSmile className="hidden size-5 cursor-not-allowed hover:text-white sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
