import Image from "next/image"

const CTA = () => {
    return (
      <div>
          <div className="inner-row flex items-center justify-between mt-[25px] md:mt-[103px] mb-[25px] md:mb-[90px]">
              <div className="w-full bg-[#211E2E] rounded-[100px] py-[56px] px-[40px]">
                  <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-[40px] gap-8">
                      {/* Location Section */}
                      <div className="flex items-center gap-4 w-full md:w-1/3">
                          <div className="w-[70px]">
                              <Image
                                  src="/location.png"
                                  width={70}
                                  height={70}
                                  alt="Location icon"
                              />
                          </div>
                          <div>
                              <h3 className="text-white font-bold text-[24px] mb-[2px] tracking-[0px]">Pay Us a Visit</h3>
                              <p className="text-white/80 text-[14px]">Union St, Seattle, WA 98101, United States</p>
                          </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden md:block w-[1px] h-[116px] bg-gradient-to-b from-[#343045] to-[#C0B7E8] self-center"></div>
  
                      {/* Call Section */}
                      <div className="flex items-center gap-4 w-full md:w-1/3">
                          <div className="w-[70px]">
                              <Image
                                  src="/phone.png"
                                  width={70}
                                  height={70}
                                  alt="Phone icon"
                              />
                          </div>
                          <div>
                              <h3 className="text-white font-bold text-[24px] mb-[2px] tracking-[0px]">Give Us a Call</h3>
                              <p className="text-white/80 text-[14px]">(110) 111-1010</p>
                          </div>
                      </div>

                      {/* Divider */}
                      <div className="hidden md:block w-[1px] h-[116px] bg-gradient-to-b from-[#343045] to-[#C0B7E8] self-center"></div>
  
                      {/* Message Section */}
                      <div className="flex items-center gap-4 w-full md:w-1/3">
                          <div className="w-[70px]">
                              <Image
                                  src="/mail.png"
                                  width={70}
                                  height={70}
                                  alt="Email icon"
                              />
                          </div>
                          <div>
                              <h3 className="text-white font-bold text-[24px] mb-[2px] tracking-[0px]">Send Us a Message</h3>
                              <p className="text-white/80 text-[14px]">Contact@HydraVTech.com</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default CTA