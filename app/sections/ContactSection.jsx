import Button from "@/components/Button";

const ContactSection = () => {
    return (
      <div className="inner-row mt-[60px] md:mt-[111px] text-center mb-[60px] md:mb-[111px] animate-on-scroll-up">
        <div className="bg-[#211E2E] rounded-[40px] px-[15px] md:px-[110px] w-full mx-auto pt-[25px] md:pt-[90px] pb-[25px] md:pb-[84px]" style={{ background: 'radial-gradient(circle, #3A3456, #211E2E)' }} >
          <h2 className="text-h3 md:text-h2 font-bold mb-[30px]">JOIN HYDRA</h2>
          <p className="text-h3 md:text-h2 font-light mb-[25px] md:mb-[65px]">Let's Build Your VR Experience</p>
          
          <form className="max-w-[1058px] mx-auto">
            {/* Name Fields Row */}
            <div className="flex flex-col md:flex-row gap-4  mb-[22px] md:mb-[39px]">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 bg-transparent border border-[#FFFFFF] rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#8176AF]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 bg-transparent border border-[#FFFFFF] rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#8176AF]"
              />
            </div>
  
            {/* Email and Phone Row */}
            <div className="flex flex-col md:flex-row gap-4 mb-[22px] md:mb-[39px]">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border border-[#FFFFFF] rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#8176AF]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 bg-transparent border border-[#FFFFFF] rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#8176AF]"
              />
            </div>
  
            {/* Subject Field */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border border-[#FFFFFF] rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#8176AF] mb-[22px] md:mb-[39px]"
            />
  
            {/* Message Field */}
            <textarea
              placeholder="Tell Us Something..."
              rows={6}
              className="w-full bg-transparent border border-[#FFFFFF] rounded-[40px] py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-[#8176AF] mb-[22px] md:mb-[51px] resize-none"
            />
  
            {/* Submit Button */}
            <Button
                        width="w-[90%] md:w-[214px] "
                        height="h-[48px]"
                        color="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
                        hoverColor="hover:bg-purple-600"
                        className="rounded-[150px] font-bold text-[12px] "
                        textColor="text-black"
                    >
                        BUILD YOUR HYDRA
                    </Button> 

          </form>
        </div>
      </div>
    );
  };
  
  export default ContactSection;