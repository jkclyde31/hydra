import Image from "next/image"
import Button from "@/components/Button"
import CategoryCard from "@/components/categoryCard";

const WhyBuildSection = () => {
    const categories = [
        {
          title: "SIMULATION",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item1.png"
        },
        {
          title: "EDUCATION",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item2.png"
        },
        {
          title: "SELF-CARE",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item3.png"
        },
        {
          title: "OUTDOOR",
          description: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
          image: "/whybuild/item4.png"
        }
      ]; 


  return (
    <>
        <div className="inner-row mt-[60px]  md:mt-[111px] text-center md:text-left">
            {/* Top */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-[50px] md:mb-[101px] mt-[60px]">
              {/* left */}
              <div>
                <h2 className="text-[26px] md:text-h2 font-bold tracking-[0px] mb-[16px] md:mb-0">WHY BUILD</h2>
                <h2 className="text-[26px] md:text-h2 font-light tracking-[0px] -mt-[10px] mb-[26px] md:mb-0">WITH HYDRA?</h2>
              </div>
              {/* Right */}
              <p className="text-left text-p max-w-[650px]">
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
             </p>
            </div>

            {/* Bottom */}
            <div className="inner-row">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px]">
                {categories.map((category, index) => (
                    <CategoryCard
                    key={index}
                    title={category.title}
                    description={category.description}
                    image={category.image}
                    />
                ))}
                </div>
            
  
          
             </div>

        </div>

    </>
  )
}

export default WhyBuildSection