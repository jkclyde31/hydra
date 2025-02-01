// components/CarouselNavigation.js
const CarouselNavigation = ({ onPrev, onNext }) => {
    return (
      <>
        <button
          onClick={(e) => e.stopPropagation() || onPrev?.()}
          className="md:hidden absolute -left-1 top-1/2 -translate-y-1/2 bg-[#433D60] border-[6px] border-black/[0.42] rounded-full p-3 shadow-md transition-all z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
  
        <button
          onClick={(e) => e.stopPropagation() || onNext?.()}
          className="md:hidden absolute -right-1 top-1/2 -translate-y-1/2 bg-[#433D60] border-[6px] border-black/[0.42] rounded-full p-3 shadow-md transition-all z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </>
    );
  };
  
  export default CarouselNavigation;




  // 1.add Below Comonent
  /*
  
   {loaded && instanceRef.current && (
                        <CarouselNavigation 
                            onPrev={() => instanceRef.current?.prev()}
                            onNext={() => instanceRef.current?.next()}
                        />
                    )}
  */
 
 // 2.Add on Top
 
/*
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
 const [sliderRef, instanceRef] = useKeenSlider({
  loop: true,
  mode: "free-snap",
  initial: 0,
  slides: {
    perView: 4,
    spacing: 15,
  },
  breakpoints: {
    "(max-width: 767px)": {
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
  },
  slideChanged(slider) {
    setCurrentSlide(slider.track.details.rel)
  },
  created() {
    setLoaded(true)
  },
});


*/ 

// 3.Add to slider div
// ref={sliderRef}