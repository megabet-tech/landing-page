import * as React from "react";
import { Element, Link } from "react-scroll";
import MobilePage from "./mobile";
import toast from "react-hot-toast";
import { BsDot } from "react-icons/bs";
import { Box } from "@chakra-ui/react";

export default function LandingPage() {
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return isMobile ? (
    <MobilePage />
  ) : (
    <div className="bg-slate-900 flex flex-col">
      <div className="self-center flex w-full flex-col max-md:max-w-full">
        <div className="flex-col self-center relative flex min-h-[800px] w-full  pb-10 max-md:max-w-full">
          <img
            loading="lazy"
            src="/images/bg-1.png"
            alt="gambling"
            className="absolute h-full w-full object-cover object-center"
          />
          <div className="relative self-center flex ml-0 w-full max-w-[1288px] flex-col mb-14 max-md:max-w-full pt-5">
            <div className="self-center flex w-full max-w-[1255px] items-start justify-between gap-5 -ml-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="/images/logo.png"
                alt="gambling"
                className="aspect-[1.67] object-cover object-center w-[130px] shrink-0"
              />
              <div className="items-start flex w-[611px] max-w-full justify-between gap-5 mt-2.5 max-md:flex-wrap max-md:justify-center">
                <div className="text-white text-center text-base font-semibold self-stretch">
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </Link>
                </div>
                <div className="text-white text-center text-base font-semibold self-stretch">
                  <Link
                    activeClass="active"
                    to="howplay"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    How to play
                  </Link>
                </div>
                <div className="text-white text-center text-base font-semibold self-stretch">
                  <Link
                    activeClass="active"
                    to="whyus"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Why us
                  </Link>
                </div>
                <div className="text-white text-center text-base font-semibold self-stretch">
                  <Link
                    activeClass="active"
                    to="token"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Tokenomics
                  </Link>
                </div>
                <div className="text-white text-center text-base font-semibold self-stretch">
                  <Link
                    activeClass="active"
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    offset={-180}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Roadmap
                  </Link>
                </div>
                <div className="text-white text-center text-base font-semibold self-stretch">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="items-start flex gap-2.5 max-md:justify-center">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0dc68354-20ea-4565-9025-11bddae27de2?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                  className="aspect-square object-cover object-center w-10 shrink-0"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://t.me/megabet_tech", "_blank")
                  }
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d1097ed-e661-4042-92bb-6789e1106b42?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                  className="aspect-square object-cover object-center w-10 shrink-0"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open("https://twitter.com/Megabet_tech", "_blank")
                  }
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0808709-04d4-4db4-b9ff-2122b302d6bc?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                  className="aspect-square object-cover object-center w-10 shrink-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("mailto:support@megabet.tech")}
                />
              </div>
            </div>
            <Element name="home" className="element">
              <div className="self-center w-full max-w-[1273px] ml-2 mt-4 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[31%] max-md:w-full">
                    <div className="z-[1] flex mr-0 flex-col my-auto max-md:mt-12">
                      <div className="text-white text-7xl font-bold leading-[80px] uppercase w-[393px] max-w-full max-md:text-4xl">
                        What is <br />
                        megabet
                      </div>
                      <div className="text-white text-lg font-medium leading-7 mt-8">
                        MegaBet is a multi-chain online gaming and betting
                        platform running on zkSync, Linea, Base and Ton
                        Blockchains.
                        <br />
                      </div>
                      <div
                        className="justify-center items-center bg-white flex w-[171px] max-w-full grow flex-col mt-12 px-5 py-2.5 rounded-md"
                        style={{ cursor: "pointer" }}
                        onClick={() => toast.success("Coming soon!")}
                      >
                        <div className="text-slate-900 text-base font-semibold leading-7 tracking-wide uppercase self-center">
                          Play Now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full">
                    <img
                      loading="lazy"
                      src="/images/main-img-1.png"
                      alt="Lottery"
                      className="aspect-[1.5] object-cover object-center w-full grow my-auto max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </Element>
          </div>
        </div>
        <div className="self-center relative flex">
          <Element name="howplay" className="element">
            <div className="self-center ml-0 w-full w-[1291px] mt-24 px-5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[57%] max-md:w-full">
                  <div className="flex grow flex-col max-md:max-w-full max-md:mt-12">
                    <div className="flex-col self-center relative flex min-h-[576px] w-full px-5 py-10 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="/images/main-img-2.png"
                        alt="play-win"
                        className="absolute h-full object-contain object-center"
                      />

                      <div className="relative self-center w-[524px] max-w-full ml-3">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[24%] max-md:w-full">
                            <div className="relative flex flex-col my-auto max-md:mt-12">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7932811e-df09-4cf0-8836-be91c8942069?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                                className="aspect-[0.96] object-cover object-center w-12 self-center shrink-0"
                              />
                              <div className="justify-center items-center shadow-[0px_14px_34px_0px_rgba(0,0,0,0.25)] bg-white self-center flex w-[90px] max-w-full grow flex-col mt-20 px-3.5 py-2.5 rounded-[30px]">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94c023ba-8594-4065-b42e-133173695946?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                                  className="aspect-[5.17] object-cover object-center w-[62px] shrink-0"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full">
                            <div className="relative flex flex-col max-md:mt-1">
                              <div className="flex w-[215px] max-w-full items-start justify-between gap-5">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eed5a564-1687-4cbe-8ede-7904e6961939?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                                  className="aspect-[1.4] object-cover object-center w-[59px] self-center shrink-0 my-auto"
                                />
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b1c79893-1e31-48af-a2b1-d8c980362109?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                                  className="aspect-[2.15] object-cover object-center w-[71px] self-center shrink-0 my-auto"
                                />
                              </div>
                              <div className="justify-center items-center shadow-[0px_14px_34px_0px_rgba(0,0,0,0.25)] bg-white flex w-[93px] max-w-full grow flex-col mt-7 px-3.5 py-2.5 rounded-[30px]">
                                <img
                                  loading="lazy"
                                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9fb6b02-b74f-4a9c-bf56-41eea0410333?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                                  className="aspect-[5.42] object-cover object-center w-[65px] shrink-0 -mt-px"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full">
                            <div className="justify-center items-center shadow-[0px_14px_34px_0px_rgba(0,0,0,0.25)] bg-white relative flex w-[92px] max-w-full grow flex-col mt-52 mx-auto px-3.5 py-2.5 rounded-[30px] max-md:mt-52">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c6b4a42-1580-4952-b587-c9e958803d9a?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                                className="aspect-[5.33] object-cover object-center w-16 shrink-0 -mt-px"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        className="aspect-square object-cover object-center w-8 bg-zinc-300 self-center shrink-0 ml-32 mt-24 mb-24"
                      />
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c455c545-9ba6-4253-b221-8c0d886eceed?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                      className="aspect-[5.7] object-cover object-center w-[211px] self-center shrink-0 mt-14"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full">
                  <div className="flex flex-col mt-px max-md:max-w-full max-md:mt-12">
                    <div className="text-white text-5xl font-bold uppercase max-w-xs max-md:text-4xl">
                      EASY PLAY, <br />
                      EASY WIN
                    </div>
                    <div className="items-start flex w-[530px] max-w-full grow flex-col mt-14">
                      <div className="self-stretch max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7524ee0d-d5ae-4162-95ac-9135e703a5cf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                              className="aspect-square object-cover object-center w-[60px] shrink-0 rounded-none max-md:mt-5"
                            />
                          </div>
                          <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-5">
                              <div className="text-white text-xl font-bold leading-8 uppercase">
                                Provably Fair
                              </div>
                              <div className="text-white text-base font-medium leading-7 mt-2 max-md:max-w-full">
                                Our game runs on Smart Contract and <br />
                                random numbers are generated using ChainLink
                                Verifiable Random Function (VRF)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch mt-10 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                          <div className="flex flex-col items-stretch w-[12%] max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66cfbde7-4e9c-4a35-a87d-f557eccaf386?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                              className="aspect-square object-cover object-center w-[60px] shrink-0 rounded-none max-md:mt-5"
                            />
                          </div>
                          <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full">
                            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-5">
                              <div className="text-white text-xl font-bold leading-8 uppercase">
                                Rules
                              </div>
                              <div className="text-white text-base font-medium leading-7 mt-2 max-md:max-w-full">
                                Every day a total of 27 lottery draws of 2-digit
                                number are generated using ChainLink VRF. The
                                last draw is Special Draw. Players bet to win
                                native $ETH $TON
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-stretch flex grow flex-col mt-10 px-5 py-6 rounded-xl border-2 border-solid border-white border-opacity-40 max-md:max-w-full">
                        <div className="items-start flex w-[420px] max-w-full flex-col ml-1.5 -mt-px">
                          <div className="items-start flex w-[391px] max-w-full gap-3">
                            <div className="text-center text-purple-600 text-base font-medium leading-7 self-center justify-center items-center bg-white w-[93px] max-w-full my-auto px-3.5 py-2.5 rounded-[30px]">
                              S-Mode
                            </div>
                            <div className="text-white text-base font-medium leading-7 self-center grow shrink-0 basis-auto my-auto">
                              win x70 if bet matches Special Draw
                            </div>
                          </div>
                          <div className="items-start flex w-full gap-3 mt-5">
                            <div className=" text-center text-lime-600 text-base font-medium leading-7 self-center justify-center items-center bg-white w-[95px] max-w-full my-auto px-3.5 py-2.5 rounded-[30px]">
                              G-Mode
                            </div>
                            <div className="text-white text-base font-medium leading-7 self-center grow shrink-0 basis-auto my-auto">
                              win x3.4 if bet matches any of 27 draws
                            </div>
                          </div>
                          <div className="items-start flex w-[375px] max-w-full gap-3 mt-5">
                            <div className="text-center text-fuchsia-600 text-base font-medium leading-7 justify-center items-center bg-white w-[95px] max-w-full px-3.5 py-2.5 rounded-[30px]">
                              Skewers
                            </div>
                            <div className="text-white text-base font-medium leading-7 max-w-[268px] grow shrink-0 basis-auto">
                              wins x10-x20-x30 if bet matches <br />
                              2-3-4 out of 27 draws
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1168px] flex-col -ml-9 mt-44 max-md:max-w-full">
        <Element name="whyus" className="element">
          <div className="self-center w-full -ml-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[37%] max-md:w-full">
                <div className="flex grow flex-col mt-12 max-md:mt-12">
                  <div className="text-white text-5xl font-bold uppercase max-md:text-4xl">
                    WHY US?
                  </div>
                  <div className="items-start flex w-[391px] max-w-full grow flex-col mt-14">
                    <div className="items-start flex w-[386px] max-w-full gap-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/466e2716-b603-43cb-888a-bbf6869fbcfb?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                        className="aspect-square object-cover object-center w-[60px] shrink-0 rounded-none"
                      />
                      <div className="items-start flex flex-col grow shrink-0 basis-auto w-[85%]">
                        <div className="text-white text-xl font-bold leading-8 uppercase ">
                          Multichain
                        </div>
                        <div className="text-white text-base font-medium leading-7 mt-2">
                          We support zkSync, Linea, Base, Ton Blockchains, and
                          more chains will be added in the future.Each
                          blockchain has its own MEBET tokens
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="items-start flex w-[390px] max-w-full gap-5 mt-10">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddaa9a67-4fea-4e04-85af-15212b86a0bf?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                        className="aspect-square object-cover object-center w-[60px] shrink-0 rounded-none"
                      />
                      <div className="items-start flex flex-col grow shrink-0 basis-auto w-[85%]">
                        <div className="text-white text-xl font-bold leading-8 uppercase ">
                          Revenue Share
                        </div>
                        <div className="text-white text-base font-medium leading-7 mt-2">
                          30% of platform revenue are shared to MEBET stakers
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="items-start flex w-full gap-5 mt-10">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d5ce28-6db1-49e3-899b-3c2bd02cd262?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                        className="aspect-square object-cover object-center w-[60px] shrink-0 rounded-none"
                      />
                      <div className="items-start flex flex-col grow shrink-0 basis-auto w-[85%]">
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
              </div>
              <div className="flex flex-col items-stretch w-[63%] ml-5 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c119590-1c12-4f37-8237-14a2012148d8?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                  className="aspect-[1.33] object-cover object-center w-full max-md:max-w-full max-md:mt-12"
                />
              </div>
            </div>
          </div>
          <div className="text-white text-xl font-medium leading-7 text-right mr-20 max-md:mr-2.5">
            Investment in Megabet $MEBET tokens
          </div>
        </Element>
      </div>
      <div className="self-center flex w-full max-w-[1439px] flex-col mt-40 px-5 max-md:max-w-full">
        <div className="self-center flex w-full flex-col -ml-5 pl-5 pr-3 py-10 max-md:max-w-full">
          <Element name="token" className="element">
            <div className="self-center flex w-full max-w-[1263px] flex-col ml-14 mt-28 mb-8 max-md:max-w-full">
              <div className="self-center w-full ml-3 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[43%] px-[40px] max-md:w-full relative">
                    <img
                      loading="lazy"
                      src="/images/chart.png"
                      alt="chart-tokenomic"
                      className="aspect-square object-cover w-full object-center m-auto max-md:mt-52"
                    />
                    <div className="flex absolute max-w-full grow bg-[#22013C] rounded-full  flex-col left-[28%] top-[32%] h-[240px] w-[240px]">
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
                  <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full">
                    <div className="flex grow flex-col my-auto max-md:max-w-full max-md:mt-5">
                      <div className="text-white text-5xl font-bold uppercase max-md:text-4xl">
                        tokenomics
                      </div>
                      <div className="text-white text-base font-bold leading-7 max-w-[605px] mr-3.5 mt-20 max-md:max-w-full max-md:mr-2.5">
                        <span className="font-medium">
                          Each blockchain has its own MEBET tokens: sMEBET for
                          zkSync; lMEBET for Linea; bMEBET for Base and tMEBET
                          for Ton
                          <br />
                          <br />
                        </span>
                        <span className="font-bold">Core Pool: </span>
                        <span className="font-medium">
                          Prior to launch, users will be able to acquire MEBET
                          tokens at a rate of 1 native token per certain amount
                          of MEBET tokens, and there will be a maximum of 100
                          million tokens available for acquisition per
                          blockchain. Unsold tokens will be kept in Reserved
                          Pools. All money raised during the contribution
                          program stays in the Core Pool.
                        </span>
                      </div>
                      <div className="bg-[rgba(0,0,0,0.00)] flex w-[605px] max-w-full grow flex-col mt-12 px-5 py-3.5 rounded-xl border-2 border-solid border-neutral-700">
                        <div className="flex w-[218px] max-w-full items-start justify-between gap-5">
                          <div className="text-violet-500 text-base font-semibold leading-6 self-stretch">
                            Blockchain
                          </div>
                          <div className="text-violet-500 text-base font-semibold leading-6 self-stretch">
                            Price
                          </div>
                        </div>
                        <div className="w-[404px] max-w-full mt-8 -mb-px">
                          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[26%] max-md:w-full">
                              <div className="flex grow flex-col max-md:mt-12">
                                <div className="text-white text-base font-medium leading-6">
                                  zkSync
                                </div>
                                <div className="text-white text-base font-medium leading-6 mt-5">
                                  Linea
                                </div>
                                <div className="text-white text-base font-medium leading-6 mt-6">
                                  Base
                                </div>
                                <div className="text-white text-base font-medium leading-6 mt-6">
                                  Ton
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[74%] ml-5 max-md:w-full">
                              <div className="flex grow flex-col max-md:mt-12">
                                <div className="text-white text-base font-medium leading-6">
                                  0,0000625 ETH per sMEBET
                                </div>
                                <div className="text-white text-base font-medium leading-6 mt-5">
                                  0,0000625 ETH per lMEBET
                                </div>
                                <div className="text-white text-base font-medium leading-6 mt-5">
                                  0,0000625 ETH per bMEBET
                                </div>
                                <div className="text-white text-base font-medium leading-6 mt-6">
                                  0.042 TON per tMEBET
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-center w-full mt-1.5 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[43%] max-md:w-full">
                    <div className="flex flex-col max-md:max-w-full max-md:mt-8">
                      <div className="items-start flex w-[469px] max-w-full justify-between gap-5 max-md:flex-wrap">
                        <div className="items-start flex flex-col">
                          <div className="items-start flex w-[162px] max-w-full gap-2">
                            <div className="bg-violet-700 self-center flex w-4 h-4 flex-col my-auto rounded" />
                            <div className="text-white text-center text-base font-semibold self-center my-auto">
                              Core Pool 50.0 %
                            </div>
                          </div>
                          <div className="items-start flex w-[178px] max-w-full gap-2 mt-3">
                            <div className="bg-fuchsia-500 self-center flex w-4 h-4 flex-col my-auto rounded" />
                            <div className="text-white text-center text-base font-semibold self-center my-auto">
                              Reward Pool 27.5%
                            </div>
                          </div>
                          <div className="items-start flex w-[181px] max-w-full gap-2 mt-3">
                            <div className="bg-green-400 self-center flex w-4 h-4 flex-col my-auto rounded" />
                            <div className="text-white text-center text-base font-semibold self-center my-auto">
                              Development 10.0%
                            </div>
                          </div>
                        </div>
                        <div className="items-start flex flex-col">
                          <div className="items-start flex w-[111px] max-w-full gap-2">
                            <div className="bg-yellow-300 self-center flex w-4 h-4 flex-col my-auto rounded" />
                            <div className="text-white text-center text-base font-semibold self-center my-auto">
                              Team 5.0%
                            </div>
                          </div>
                          <div className="items-start flex w-[230px] max-w-full gap-2 mt-3">
                            <div className="bg-purple-500 self-center flex w-4 h-4 flex-col my-auto rounded" />
                            <div className="text-white text-center text-base font-semibold self-center my-auto">
                              Airdrop & Marketing 2.5%
                            </div>
                          </div>
                          <div className="items-start flex w-[230px] max-w-full gap-2 mt-3">
                            <div className="bg-purple-500 self-center flex w-4 h-4 flex-col my-auto rounded" />
                            <div className="text-white text-center text-base font-semibold self-center my-auto">
                              Private Invesment 5.0%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-base font-medium leading-7 max-w-[391px] mt-8">
                        <ul>
                          <li>Token Name: MegaBet Token</li>
                          <li>
                            Token Symbol: sMEBET for zkSync; lMEBET for Linea;
                            bMEBET for Base and tMEBET for Ton
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full">
                    <div className="flex grow flex-col mt-8 max-md:max-w-full max-md:mt-12">
                      <div className="text-white text-base font-medium leading-7 w-[520px] max-w-full">
                        <ul>
                          <li>
                            Reward Pool: 55 million tokens will be used to
                            reward players for using the platform
                          </li>
                          <li>
                            Airdrop &amp; Marketing: 10 million tokens&nbsp;
                          </li>
                          <li>Development: 20 million tokens&nbsp;</li>
                          <li>Core Team: 15 million tokens</li>
                        </ul>
                      </div>
                      <div className="items-start flex w-[458px] max-w-full justify-between gap-5 mt-16 max-md:flex-wrap">
                        <div
                          className="justify-center items-center bg-white self-center flex w-[177px] max-w-full flex-col my-auto px-5 py-2.5 rounded-md"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            window.open("https://docs.megabet.tech/", "_blank")
                          }
                        >
                          <div className="text-slate-900 text-base font-semibold leading-7 tracking-wide uppercase self-center">
                            View more
                          </div>
                        </div>
                        <div className="text-white text-base font-bold uppercase self-center items-start grow basis-auto my-auto">
                          Join Contribution Program
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
        <div className="text-white text-center text-5xl font-bold uppercase self-center mt-24 max-md:text-4xl">
          Roadmap
        </div>
        <div className="self-center w-full max-w-[1154px] -ml-5 mt-20 max-md:max-w-full">
          <Element name="roadmap" className="element">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full">
                <div className="items-center flex flex-col max-md:mt-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2ed54b2e-0ec5-47ad-87a2-7f4fe02888c7?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                    className="aspect-square object-cover object-center w-10 self-center shrink-0"
                  />
                  <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-center flex w-[330px] max-w-full grow flex-col mt-8 pr-5 pt-8 pb-10 rounded-xl border-2 border-solid border-white border-opacity-40">
                    <div className="items-start flex max-w-full flex-col">
                      <div className="px-5 text-white text-3xl font-bold leading-8 uppercase">
                        Q1/2024
                      </div>
                      <div className="items-start flex w-full grow flex-col mt-6">
                        <div className="items-start flex max-w-full">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 self-center my-auto">
                            Code Audit
                          </div>
                        </div>
                        <div className="items-start flex w-full mt-3">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 self-center my-auto">
                            Pre-Launch Airdrop campaigns
                          </div>
                        </div>
                        <div className="items-start flex max-w-full mt-3">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 self-center my-auto">
                            Mainnet launch
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
                <div className="items-center flex flex-col max-md:mt-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4ff8b1b4-2125-4901-adc7-945789ca0552?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                    className="aspect-square object-cover object-center w-10 self-center shrink-0"
                  />
                  <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-center flex w-[330px] max-w-full grow flex-col mt-8 py-8 rounded-xl border-2 border-solid border-white border-opacity-40">
                    <div className="items-start self-stretch flex flex-col -mt-0.5 mb-0.5 pr-3">
                      <div className="px-5 text-white text-3xl font-bold leading-8 uppercase">
                        Q2/2024
                      </div>
                      <div className="items-start flex w-[281px] max-w-full grow flex-col mt-8">
                        <div className="flex w-[275px] max-w-full items-start">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 max-w-[266px] grow shrink-0 basis-auto">
                            Support more blockchains including Arbitrum,
                            Polygon, BSC
                          </div>
                        </div>
                        <div className="items-start flex w-full mt-4">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 self-center grow shrink-0 basis-auto my-auto">
                            Bring more games to the platform
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full">
                <div className="items-center flex grow flex-col max-md:mt-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34fc3d98-f473-4b76-b930-bcfe40fb7cf9?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                    className="aspect-square object-cover object-center w-10 self-center shrink-0"
                  />
                  <div className="backdrop-blur-[70px] bg-white bg-opacity-10 self-center flex w-[330px] max-w-full grow flex-col mt-8 py-8 rounded-xl border-2 border-solid border-white border-opacity-40">
                    <div className="items-start self-stretch flex mt-0 flex-col mb-0.5 pr-5">
                      <div className="px-5 text-white text-3xl font-bold leading-8 uppercase">
                        Q4/2023
                      </div>
                      <div className="items-start flex w-[270px] max-w-full grow flex-col mt-8">
                        <div className="flex w-full items-start">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 max-w-[266px] grow shrink-0 basis-auto">
                            Testnet launch on zkSync, Linea, Base, Ton
                            Blockchains
                          </div>
                        </div>
                        <div className="items-start flex max-w-full mt-5">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 self-center my-auto">
                            Airdrop Campaigns
                          </div>
                        </div>
                        <div className="items-start flex max-w-full mt-3">
                          <Box px="8px">
                            <BsDot color="#FFF" size="32px" />
                          </Box>
                          <div className="text-white text-base font-medium leading-7 self-center my-auto">
                            Early Contributor Program
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
      <div className="flex-col self-center relative flex min-h-[837px] w-full mt-32 py-10 max-md:max-w-full">
        <img
          loading="lazy"
          alt="contact"
          src="/images/bg-contact.png"
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="relative self-center ml-0 max-w-full mt-24 mb-4">
          <Element name="contact" className="element">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch ml-5 max-md:w-full">
                <div className="relative flex grow flex-col my-auto max-md:max-w-full max-md:mt-12">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a90e3e0d-a5f2-41e3-9320-f615a5ace931?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
                    className="aspect-[1.21] object-cover object-center w-[46px] shrink-0"
                  />
                  <div className="flex max-w-full flex-col mt-20">
                    <div className="items-center self-center flex w-full flex-col max-md:max-w-full">
                      <SubscribeMailForm />
                    </div>
                    <div className="items-start self-center flex ml-0 w-[220px] max-w-full gap-5 mt-11 max-md:justify-center">
                      <ContactPlatform />
                    </div>
                  </div>
                  <div className="self-center flex ml-0 w-[323px] max-w-full grow flex-col mt-36">
                    <div className="items-start self-center flex w-full justify-between gap-5 py-0.5">
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
                    <div className="text-neutral-400 text-base font-medium leading-7 self-center mt-6">
                      © Copyright 2023 MegaBet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
    </div>
  );
}

export const ContactPlatform = () => {
  return (
    <>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac597eb2-0728-4b22-a108-f688807070ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
        className="aspect-square object-cover object-center w-[60px] shrink-0"
        style={{ cursor: "pointer" }}
        alt="telegram"
        onClick={() => window.open("https://t.me/megabet_tech", "_blank")}
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a28d584-34ea-4938-bfc5-d4a23f2083ea?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
        className="aspect-square object-cover object-center w-[60px] shrink-0"
        style={{ cursor: "pointer" }}
        alt="twitter"
        onClick={() =>
          window.open("https://twitter.com/Megabet_tech", "_blank")
        }
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4862ec2-c8e7-4b7a-ac01-7a3a166af773?apiKey=f88f520e4665438a8824ff8ae8aca9ec&"
        className="aspect-square object-cover object-center w-[60px] shrink-0"
        style={{ cursor: "pointer" }}
        alt="mailbox"
        onClick={() => window.open("mailto:support@megabet.tech")}
      />
    </>
  );
};

export const SubscribeMailForm = () => {
  return (
    <>
      <script
        src="https://s.pageclip.co/v1/pageclip.js"
        charset="utf-8"
      ></script>
      <style></style>
      <div className="text-white text-center text-5xl font-bold uppercase self-center max-md:max-w-full max-md:text-4xl">
        Discover more with
        <br />
        Megabet Community
      </div>
      <form
        class="pageclip-form"
        // method="post"action="https://send.pageclip.co/ABvHFOqM39xUvpVl3nd7NLXpFtsBrAaE"
        className="justify-between items-start bg-white self-center flex w-[500px] max-w-full gap-5 mt-8 px-5 py-3.5 rounded-md max-md:flex-wrap"
        style={{ alignItems: "center" }}
        onSubmit={(event) => {
          event.preventDefault(); // Prevents the default form submission
          const formData = new FormData(event.target);
          const data = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });
          (async () => {
            const response = await fetch(
              "https://send.pageclip.co/s9CeIO35hnhw44MWEAb3yBtMVExz84xu/contactform",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                  "x-reqmethod": "form-v1",
                },
                body: JSON.stringify({ email: data?.email, name: data?.email }),
              }
            );
            if (response?.ok) {
              toast.success(
                "Subscribed your email! Thank you for reaching us."
              );
              document.getElementById("email-input").value = "";
            } else {
              toast.error("Subscribe fail! Unknown error occurred.");
            }
          })();
        }}
      >
        <input
          id="email-input"
          type="email"
          placeholder="Enter your email"
          name="email"
          className="text-stone-500 text-base font-medium leading-7 self-stretch"
          style={{
            width: "100%",
            outline: "none",
            border: "1px solid transparent",
          }}
        />
        <button
          className="text-slate-900 text-base font-semibold leading-7 tracking-wide uppercase self-stretch"
          type="submit"
          class="pageclip-form__submit"
        >
          <span
            style={{
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            SUBSCRIBE
          </span>
        </button>
      </form>
    </>
  );
};
