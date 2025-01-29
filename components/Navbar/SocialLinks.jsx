import { siteInfo } from '@/config/siteInfo';

import Button from '../Button';

const SocialLinks = ({mobile=false}) => {
  return (
    <div className={`${mobile === true ? 'flex' : 'hidden'} md:flex items-center justify-between text-white w-[100%] max-w-[350px] gap-3` }>
      

     <Button
      width="w-[154px]"
      height="h-[48px]"
      color="bg-transparent"
      hoverColor="hover:bg-purple-600"
      className="border border-current rounded-[150px]"

    >
      Contact Us
    </Button> 

    <Button
      width="w-[154px]"
      height="h-[48px]"
      color="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
      hoverColor="hover:bg-purple-600"
      textColor='text-black'
      className=" rounded-[150px] "

    >
      Contact Us
    </Button> 
    
    
    
     </div>

    
  )
}

export default SocialLinks