

const HeroBanner=()=>{

    return(
        <>
            <div className="relative ">

                {/* Background Image */}
                <img 
                    src="/banner.png"
                    alt="Banner Image"
                    className=""
                />

                {/* Logo  */}
                <img 
                    src="/odriyo.svg"
                    alt="odriyo logo"
                    className="absolute top-2 right-2 w-[8vw]"
                />

                {/* Banner Text */}
                <div className=" absolute top-[40%] left-[68%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-start">
                    <div className=" text-[4vw] font-bold text-[#CA2531]">
                    Partner With Us
                    </div>
                    <div className=" text-[1.2vw] text-[#000000] font-semibold">
                    Be our partner in just few steps and start Increasing your reach by gaining new customers. 
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroBanner;