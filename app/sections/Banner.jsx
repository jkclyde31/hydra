import Button from "@/components/Button"
import Image from "next/image"

const Banner = () => {
    return (
      <div>
          <div className="inner-row flex items-center justify-between mt-[50px] md:mt-[190px]">
              {/* Text */}
              <div>
                  <h1 className="text-h1 max-w-[543px] font-bold">
                      Dive Into The Depths Of Virtual Reality
                  </h1>
                  <p className="text-p max-w-[456px] pt-[15px] md:pt-[36px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore 
                      nisl tincidunt eget. Lectus mauris eros in vitae .
                  </p>

                  <div className="flex max-w-[325px] justify-between gap-5 items-center mt-[66px]">
                    <Button
                        width="w-[214px]"
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
                      className="object-contain"
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