import Image from "next/image"
import Button from "@/components/Button"

const Introduction = () => {
  return (
    <>
        <div className="inner-row text-center md:text-left ">
            {/* Top */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-[15px] md:mb-[101px]">
              {/* left */}
              <div className="animate-on-scroll-right">
                <h2 className="text-h3 md:text-h2 font-bold tracking-[0px] mb-[5px] md:mb-0">INTRODUCTION</h2>
                <h2 className="text-h3 md:text-h2 font-light tracking-[0px] -mt-[10px] ">TO HYDRA VR </h2>
              </div>
              {/* Right */}
              <p className="text-p max-w-[650px] hidden md:block animate-on-scroll-left">
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                n tempor.
             </p>
            </div>

            {/* Bottom */}
            <div className="inner-row flex flex-col md:flex-row  items-center justify-between ">
             {/* Image */}
              <div className="flex-shrink-0 animate-on-scroll-right">
                  <Image
                      src="/introduction.png"
                      width={524}
                      height={558}
                      alt="Banner Image"
                      className="object-contain"
                  />
              </div>
            

              {/* Text */}
              <div className="max-w-[650px] w-full animate-on-scroll-left">
                <h2 className="text-h2 font-bold tracking-[0px] hidden md:block"> ABOUT</h2>
                <h2 className="text-h2 font-light tracking-[0px] -mt-[10px] hidden md:block">HYDRA VR</h2>
                  <p className="text-p max-w-full text-left md:max-w-[640px]  pt-[15px] md:pt-[36px]">
                  Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                  urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                  dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                  Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                  sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                  etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                  cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                  retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                  n tempor.
                  </p>

                  <div className="flexmax-w-[325px] justify-between gap-5 items-center mt-[15px] md:mt-[66px]  mx-auto md:mx-0">
                    <Button
                        width="w-[90%] md:w-[214px]"
                        height="h-[48px]"
                        color="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
                        hoverColor="hover:bg-purple-600"
                        className="rounded-[150px] font-bold text-[12px] "
                        textColor="text-black"
                    >
                        LET’S GET IN TOUCH
                    </Button> 

                  </div>
  
                
              </div>
  
          
          </div>

        </div>

    </>
  )
}

export default Introduction