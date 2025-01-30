import Button from "@/components/Button"
import Image from "next/image"

const Banner = () => {
    return (
      <div>
          <div className="inner-row flex flex-col-reverse md:flex-row  items-center justify-between mt-[50px] md:mt-[190px]">
              {/* Text */}
              <div>
                  <h1 className="text-h3 md:text-h1 max-w-[543px] font-bold text-center md:text-left">
                      <span className="text-h2 md:text-h1 bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent">Dive </span> 
                                Into The Depths Of 
                        <span className="text-h2 md:text-h1 bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] bg-clip-text text-transparent"> Virtual Reality</span>
                 </h1>
                  <p className="hidden md:block text-p max-w-[456px] pt-[15px] md:pt-[36px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore 
                      nisl tincidunt eget. Lectus mauris eros in vitae .
                  </p>

                  <div className="flex max-w-[325px] justify-center md:justify-between gap-5 items-center  mt-[36px] md:mt-[66px] mb-[36px] md:mb-0 mx-auto">
                    <Button
                        width="w-[90%] md:w-[214px] "
                        height="h-[48px]"
                        color="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
                        hoverColor="hover:bg-purple-600"
                        className="rounded-[150px] font-bold text-[12px] "
                        textColor="text-black"
                    >
                        BUILD YOUR WORLD
                    </Button> 

                    <Image
                      src="/arrow-small-right.png"
                      width={100}
                      height={100}
                      alt="Banner Image"
                      className="object-contain hidden md:block"
                  />
                  </div>
  
                
              </div>
  
              {/* Image */}
              <div className="flex-shrink-0">
                  <Image
                      src="/banner-image.png"
                      width={426}
                      height={490}
                      alt="Banner Image"
                      className="object-contain"
                  />
              </div>
          </div>
      </div>
    )
  }

export default Banner