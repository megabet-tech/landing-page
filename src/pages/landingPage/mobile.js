import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import * as React from "react";
import { MobileView } from "react-device-detect";
import toast from "react-hot-toast";
import { BsDot } from "react-icons/bs";
import { Element, Link } from "react-scroll";
import { ContactPlatform, SubscribeMailForm } from ".";

export default function MobilePage() {
  return (
    <MobileView>
      <div className="bg-slate-900 flex flex-col">
        <div className="flex-col self-stretch relative flex aspect-[0.5357142857142857] w-full pb-10">
          <div className="relative flex max-w-full items-start justify-between gap-5 ml-4 px-5 max-md:ml-2.5 pt-5">
            <Menu cl>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                backgroundColor={"transparent"}
                icon={
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0be8c98-d4ff-4df7-8083-589fbee7eb19?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                    className="aspect-square object-cover object-center w-6 shrink-0"
                  />
                }
              />
              <MenuList zIndex={99}>
                <MenuItem>
                  {" "}
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    activeClass="active"
                    to="howplay"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    How to play
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    activeClass="active"
                    to="whyus"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Why us
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    activeClass="active"
                    to="token"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Tokenomics
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    activeClass="active"
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    offset={-180}
                    duration={500}
                  >
                    Roadmap
                  </Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/715cab65-9dd5-438d-9e9d-a4159d57159d?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
              className="aspect-[1.64] pr-[20px] object-cover object-center w-[90px] shrink-0"
            />
            <div></div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f07b94b3-f13e-49f6-8111-25d0cfa78c1b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
            className="aspect-[1.33] object-cover object-center w-full self-stretch mt-4 z-10"
          />
          <div className="relative items-center self-center flex w-[343px] max-w-full flex-col mt-6 mb-2">
            <Element name="home" className="element">
              <div className="items-center self-stretch flex flex-col px-5">
                <div className="text-white text-center text-4xl font-bold uppercase self-center w-[212px]">
                  What is <br />
                  megabet
                </div>
                <div className="text-white text-center text-base font-medium leading-7 self-stretch -mr-5 mt-3">
                  MegaBet is a multi-chain online gaming and betting platform
                  running on zkSync, Linea, Base and Ton Blockchains.
                  <br />
                </div>
              </div>
            </Element>
            <div
              className="justify-center items-center bg-white self-center flex w-[151px] max-w-full grow flex-col mt-5 px-5 py-2.5"
              style={{ cursor: "pointer" }}
              onClick={() => toast.success("Coming soon!")}
            >
              <div className="text-slate-900 text-base font-semibold leading-7 tracking-wide uppercase self-center">
                Play Now
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/055f1989-1c62-4462-ae78-67a28455877a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
          className="aspect-[1.03] object-cover object-center w-[353px] self-center max-w-full mt-5"
        />
        <div className="justify-center items-center self-center flex w-[343px] max-w-full flex-col mt-14 px-5">
          <Element name="howplay" className="element">
            <div className="text-white text-center text-3xl font-bold uppercase self-center w-[201px]">
              easy play,
              <br />
              easy win
            </div>
          </Element>
          <div className="items-start self-stretch flex grow flex-col -mr-5 mt-6">
            <div className="items-start self-stretch flex justify-between gap-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d186810-00d3-468b-a57e-ec8445ac7d53?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                className="aspect-square object-cover object-center w-[50px] shrink-0 rounded-none"
              />
              <div className="items-start flex flex-col grow shrink-0 basis-auto w-[70%]">
                <div className="text-white text-xl font-bold leading-8 uppercase">
                  Provably Fair
                </div>
                <div className="text-white text-base font-medium leading-7 mt-2">
                  Our game runs on Smart Contract and random numbers are
                  generated using ChainLink Verifiable Random Function (VRF)
                </div>
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-5 mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ae34bdb-0cc9-4680-a897-313b3b1df13b?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                className="aspect-square object-cover object-center w-[50px] shrink-0 rounded-none"
              />
              <div className="items-start flex flex-col grow shrink-0 basis-auto w-[70%]">
                <div className="text-white text-xl font-bold leading-8 uppercase">
                  Rules
                </div>
                <div className="text-white text-base font-medium leading-7 mt-2">
                  Every day a total of 27 lottery draws of 2-digit number are
                  generated using ChainLink VRF. The last draw is Special Draw.
                  Players bet to win native $ETH $TON
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-stretch flex w-full grow flex-col mt-6 pl-4 pr-3.5 py-6 rounded-xl border-2 border-solid border-white border-opacity-40">
              <div className="items-start self-stretch flex flex-col mt-px -mb-0.5">
                <div className="justify-center items-start flex w-[286px] max-w-full flex-col">
                  <div className="text-purple-600 text-base font-medium leading-7 justify-center items-center bg-white w-[93px] max-w-full px-3.5 py-2.5 rounded-[30px]">
                    S-Mode
                  </div>
                  <div className="text-white text-base font-medium leading-7 mt-1.5">
                    win x70 if bet matches Special Draw
                  </div>
                </div>
                <div className="justify-center items-start flex w-[313px] max-w-full flex-col mt-5">
                  <div className="text-lime-600 text-base font-medium leading-7 justify-center items-center bg-white w-[95px] max-w-full px-3.5 py-2.5 rounded-[30px]">
                    G-Mode
                  </div>
                  <div className="text-white text-base font-medium leading-7 mt-1.5">
                    win x3.4 if bet matches any of 27 draws
                  </div>
                </div>
                <div className="items-start flex w-[303px] max-w-full grow flex-col mt-5">
                  <div className="text-fuchsia-600 text-base font-medium leading-7 justify-center items-center bg-white w-[95px] max-w-full px-3.5 py-2.5 rounded-[30px]">
                    Skewers
                  </div>
                  <div className="text-white text-base font-medium leading-7 w-full mt-3">
                    wins x10-x20-x30 if bet matches <br />
                    2-3-4 out of 27 draws
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f202f889-3357-4023-a1e3-14aa0906b04e?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
          className="aspect-[1.32] object-cover object-center w-[334px] max-w-full ml-2 mt-24"
        />
        <div className="text-white text-base font-medium leading-7 self-center mt-5">
          <Element name="whyus" className="element">
            Investment in Megabet $MEBET tokens
          </Element>
        </div>
        <div className="justify-center items-center self-center flex w-[343px] max-w-full flex-col mt-14 px-5">
          <div className="text-white text-3xl font-bold uppercase self-center">
            Why us?
          </div>
          <div className="items-start self-stretch flex grow flex-col -mr-5 mt-6">
            <div className="items-start self-stretch flex justify-between gap-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e43e8701-1bd2-482c-bb63-5a4614cbec5f?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                className="aspect-square object-cover object-center w-[50px] shrink-0 rounded-none"
              />
              <div className="items-start flex flex-col grow shrink-0 basis-auto w-[70%]">
                <div className="text-white text-xl font-bold leading-8 uppercase">
                  Multichain
                </div>
                <div className="text-white text-base font-medium leading-7 mt-2">
                  We support zkSync, Linea, Base, Ton Blockchains, and more
                  chains will be added in the future.Each blockchain has its own
                  MEBET tokens
                  <br />
                </div>
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-5 mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6f80544-3ca3-4488-bd39-969bd58bc232?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                className="aspect-square object-cover object-center w-[50px] shrink-0 rounded-none"
              />
              <div className="items-start flex flex-col grow shrink-0 basis-auto w-[70%]">
                <div className="text-white text-xl font-bold leading-8 uppercase">
                  Revenue Share
                </div>
                <div className="text-white text-base font-medium leading-7 mt-2">
                  30% of platform revenue are shared to MEBET stakers
                  <br />
                </div>
              </div>
            </div>
            <div className="items-start self-stretch flex justify-between gap-5 mt-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15206dba-5d5a-492d-a91a-222321c1eb51?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                className="aspect-square object-cover object-center w-[50px] shrink-0 rounded-none"
              />
              <div className="items-start flex flex-col grow shrink-0 basis-auto w-[70%]">
                <div className="text-white text-xl font-bold leading-8 uppercase">
                  DAO
                </div>
                <div className="text-white text-base font-medium leading-7 mt-2">
                  MEBET owners get to make key decisions for Megabet
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex w-full flex-col mt-20 pl-6 pt-px pb-8">
          <div className="flex w-[300px] max-w-full items-start gap-0">
            <Element name="token" className="element">
              <div className="text-white text-3xl font-bold uppercase mr-0 w-[243px] mt-16">
                tokenomics
              </div>
            </Element>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8817909b-6397-4597-86d7-e5bcba9f4569?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
              className="aspect-[0.94] object-cover object-center w-[83px] shrink-0"
            />
          </div>
          <div className="flex flex-col items-stretch w-[43%] px-[20px] max-md:w-full relative">
            <img
              loading="lazy"
              src="/images/chart.png"
              alt="chart-tokenomic"
              className="aspect-square object-cover w-full object-center m-auto max-md:mt-12"
            />
            <div className="flex absolute max-w-full grow bg-[#22013C] rounded-full  flex-col left-[22%] top-[30%] h-[200px] w-[200px]">
              <div className="text-white text-center text-sm font-bold uppercase self-center mt-[48px]">
                Initial Token Supply
              </div>
              <div className="text-white text-center text-6xl font-semibold self-stretch w-full mt-3 max-md:text-4xl">
                200M
              </div>
              <div className="text-white text-center text-base font-semibold self-center w-32 mt-5">
                per blockchain; <br />
                No Cap
              </div>
            </div>
          </div>
          <div className="items-start flex w-[230px] max-w-full flex-col ml-px mt-24">
            <div className="items-start flex w-[162px] max-w-full gap-2">
              <div className="bg-violet-700 self-center flex w-4 h-4 flex-col my-auto rounded" />
              <div className="text-white text-center text-base font-semibold self-stretch">
                Core Pool 50.0 %
              </div>
            </div>
            <div className="items-start flex w-[178px] max-w-full gap-2 mt-3">
              <div className="bg-fuchsia-500 self-center flex w-4 h-4 flex-col my-auto rounded" />
              <div className="text-white text-center text-base font-semibold self-stretch">
                Reward Pool 27.5%
              </div>
            </div>
            <div className="items-start flex w-[181px] max-w-full gap-2 mt-3">
              <div className="bg-green-400 self-center flex w-4 h-4 flex-col my-auto rounded" />
              <div className="text-white text-center text-base font-semibold self-stretch">
                Development 10.0%
              </div>
            </div>
            <div className="items-start flex w-[111px] max-w-full gap-2 mt-3">
              <div className="bg-yellow-300 self-center flex w-4 h-4 flex-col my-auto rounded" />
              <div className="text-white text-center text-base font-semibold self-stretch">
                Team 5.0%
              </div>
            </div>
            <div className="items-start flex w-full gap-2 mt-3">
              <div className="bg-purple-500 self-center flex w-4 h-4 flex-col my-auto rounded" />
              <div className="text-white text-center text-base font-semibold self-stretch">
                Airdrop & Marketing 2.5%
              </div>
            </div>
            <div className="items-start flex w-full gap-2 mt-3">
              <div className="bg-purple-500 self-center flex w-4 h-4 flex-col my-auto rounded" />
              <div className="text-white text-center text-base font-semibold self-stretch">
                Private Invesment 5.0%
              </div>
            </div>
          </div>
          <div className="text-white text-base font-medium leading-7 max-w-[343px] ml-px mt-4 pl-4">
            <ul>
              <li>Token Name: MegaBet Token</li>
              <li>
                Token Symbol: sMEBET for zkSync; lMEBET for Linea; bMEBET for
                Base and tMEBET for Ton
              </li>
            </ul>
          </div>
          <div className="items-start flex w-[345px] max-w-full flex-col mt-10 pr-0.5">
            <div className="text-white text-base font-bold leading-7 self-stretch max-w-[343px]">
              <span className="font-medium">
                Each blockchain has its own MEBET tokens: sMEBET for zkSync;
                lMEBET for Linea; bMEBET for Base and tMEBET for Ton
                <br />
                <br />
              </span>
              <span className="font-bold">Core Pool: </span>
              <span className="font-medium">
                Prior to launch, users will be able to acquire MEBET tokens at a
                rate of 1 native token per certain amount of MEBET tokens, and
                there will be a maximum of 100 million tokens available for
                acquisition per blockchain. Unsold tokens will be kept in
                Reserved Pools. All money raised during the contribution program
                stays in the Core Pool.
              </span>
            </div>
            <div className="bg-[rgba(0,0,0,0.00)] self-stretch flex w-full flex-col mt-6 pl-5 pr-5 py-3.5 rounded-xl border-2 border-solid border-neutral-700">
              <div className="flex w-[141px] max-w-full items-start justify-between gap-5">
                <div className="text-violet-500 text-sm font-semibold leading-6 self-stretch">
                  Blockchain
                </div>
                <div className="text-violet-500 text-sm font-semibold leading-6 self-stretch">
                  Price
                </div>
              </div>
              <div className="flex w-[302px] max-w-full items-start justify-between gap-5 mt-5">
                <div className="text-white text-sm font-medium leading-6 self-stretch">
                  zkSync
                </div>
                <div className="text-white text-sm font-medium leading-6 self-stretch">
                  0,0000625 ETH per sMEBET
                </div>
              </div>
              <div className="flex w-[304px] max-w-full items-start justify-between gap-5 mt-7 -mb-px">
                <div className="flex flex-col">
                  <div className="text-white text-sm font-medium leading-6">
                    Linea
                  </div>
                  <div className="text-white text-sm font-medium leading-6 mt-6">
                    Base
                  </div>
                  <div className="text-white text-sm font-medium leading-6 mt-6">
                    Ton
                  </div>
                </div>
                <div className="flex flex-col mt-px">
                  <div className="text-white text-sm font-medium leading-6">
                    0,0000625 ETH per lMEBET
                  </div>
                  <div className="text-white text-sm font-medium leading-6 mt-5">
                    0,0000625 ETH per bMEBET
                  </div>
                  <div className="text-white text-sm font-medium leading-6 mt-5">
                    0.042 TON per tMEBET
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white text-base font-medium leading-7 self-stretch w-full mt-6 pl-4">
              <ul>
                <li>
                  Reward Pool: 55 million tokens will be used to reward players
                  for using the platform
                </li>
                <li>Airdrop &amp; Marketing: 10 million tokens&nbsp;</li>
                <li>Development: 20 million tokens&nbsp;</li>
                <li>Core Team: 15 million tokens</li>
              </ul>
            </div>
          </div>
          <div className="justify-center items-center self-center flex w-[260px] max-w-full flex-col mt-10 py-0.5">
            <div
              className="justify-center items-center bg-white self-center flex w-[177px] max-w-full flex-col -mt-0.5 px-5 py-2.5 rounded-md"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://docs.megabet.tech/", "_blank")
              }
            >
              <div className="text-slate-900 text-base font-semibold leading-7 tracking-wide uppercase self-center">
                View more
              </div>
            </div>
            <div className="text-white text-base font-bold uppercase self-stretch items-start mt-5 mb-0.5">
              Join Contribution Program
            </div>
          </div>
        </div>
        <div className="text-white text-3xl font-bold uppercase self-center mt-12">
          <Element name="roadmap" className="element">
            Roadmap
          </Element>
        </div>
        <div className="items-start self-center flex w-[330px] max-w-full flex-col mt-12">
          <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-stretch flex w-full flex-col pr-5 py-7 rounded-xl border-2 border-solid border-white border-opacity-40">
            <div className="items-start flex max-w-full flex-col">
              <div className="pl-5 text-white text-xl font-bold leading-8 uppercase">
                Q1/2024
              </div>
              <div className="items-start flex w-full grow flex-col mt-3">
                <div className="items-start flex max-w-full">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 self-stretch">
                    Code Audit
                  </div>
                </div>
                <div className="items-start flex w-full mt-3">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 self-stretch">
                    Pre-Launch Airdrop campaigns
                  </div>
                </div>
                <div className="items-start flex max-w-full mt-3">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 self-stretch">
                    Mainnet launch
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-stretch flex w-full flex-col mt-3 py-9 rounded-xl border-2 border-solid border-white border-opacity-40">
            <div className="items-start self-stretch flex flex-col -mb-px pr-3">
              <div className="px-5 text-white text-xl font-bold leading-8 uppercase">
                Q2/2024
              </div>
              <div className="items-start flex w-[281px] max-w-full grow flex-col mt-5">
                <div className="flex w-[275px] max-w-full items-start">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 max-w-[266px] grow shrink-0 basis-auto">
                    Support more blockchains including Arbitrum, Polygon, BSC
                  </div>
                </div>
                <div className="items-start flex w-full mt-4">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 self-stretch grow shrink-0 basis-auto">
                    Bring more games to the platform
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-stretch flex w-full grow flex-col mt-3 py-8 rounded-xl border-2 border-solid border-white border-opacity-40">
            <div className="items-start self-stretch flex flex-col -mt-px pr-5">
              <div className="px-5 text-white text-xl font-bold leading-8 uppercase">
                Q4/2023
              </div>
              <div className="items-start flex max-w-full grow flex-col mt-5">
                <div className="flex w-full items-start gap-2">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 max-w-[266px] grow shrink-0 basis-auto">
                    Testnet launch on zkSync, Linea, Base, Ton Blockchains
                  </div>
                </div>
                <div className="items-start flex max-w-full mt-5">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 self-stretch">
                    Airdrop Campaigns
                  </div>
                </div>
                <div className="items-start flex max-w-full mt-3">
                  <Box px="8px">
                    <BsDot color="#FFF" size="32px" />
                  </Box>
                  <div className="text-white text-base font-medium leading-7 self-stretch">
                    Early Contributor Program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col self-stretch relative flex aspect-[0.5514705882352942] grow w-full mt-16 py-10">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/153c6bd3-d0e7-408e-84fc-afac98224e67?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
            className="absolute h-full w-full object-cover object-center"
          />
          <div className="relative items-center self-stretch flex flex-col w-full mt-32 px-4">
            <SubscribeMailForm />
          </div>
          <div className="relative items-start self-center flex w-[190px] max-w-full gap-5 mt-7 max-md:justify-center">
            <ContactPlatform />
          </div>
          <div className="relative items-start self-center flex w-[323px] max-w-full justify-between gap-5 mt-20 py-0.5">
            <div
              className="text-white text-base font-bold uppercase items-start -mt-0.5"
              style={{ cursor: "pointer" }}
            >
              privacy policy
            </div>
            <div
              className="text-white text-base font-bold uppercase items-start -mt-0.5"
              style={{ cursor: "pointer" }}
            >
              terms of service
            </div>
          </div>
          <div className="relative text-neutral-400 text-base font-medium leading-7 self-center mt-6 mb-0.5">
            © Copyright 2023 MegaBet
          </div>
        </div>
      </div>
    </MobileView>
  );
}
