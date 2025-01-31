import Image from "next/image";
import Button from "./Button";

const CategoryCard = ({ title, description, image, className }) => (
  <div 
    className={`rounded-[32px] p-[20px] flex flex-col items-center text-center ${className}`}
    style={{ background: 'radial-gradient(circle, #3A3456, #211E2E)' }} // Radial gradient added here
  >
    <div>
      <Image
        width={219}
        height={219}
        src={image}
        alt={title}
      />
    </div>

    <h3 className="text-white text-h3 font-bold tracking-[0px] pb-[17px] mb-[17px] border-b border-[#C0B7E8] border-opacity-30">
      {title}
    </h3>
    <p className="text-white mb-[35px] text-[12px] tracking-[0px] text-start">
      {description}
    </p>
    <Button
      width="w-[214px]"
      height="h-[48px]"
      color="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]"
      hoverColor="hover:bg-purple-600"
      className="rounded-[150px] font-bold text-[12px]"
      textColor="text-black"
    >
      TRY IT NOW
    </Button>
  </div>
);

export default CategoryCard;