import Image from 'next/image';
// import img1 from '@/assets/WhyChooseUsImages/services1.png';
// import img2 from '@/assets/WhyChooseUsImages/services2.png';
// import expLogo from '@/assets/WhyChooseUsImages/experience-logo.png';
// import diverse from '@/assets/WhyChooseUsImages/diverse.png';
// import money from '@/assets/WhyChooseUsImages/money.png';
// import visa from '@/assets/WhyChooseUsImages/visa.png';

export default function WhyChooseUs() {
  return (
    <div className="w-full overflow-x-hidden bg-slate pt-[8rem]">
      {/* for computer */}
      <div className="w-10/12 hidden lg:flex flex-col mx-auto items-center">
        <h4 className="font-text font-semibold">WHAT MAKES US DIFFERENT</h4>
        <h1 className="text-[3rem] font-heading font-semibold">
          Why Book with Us
        </h1>

        {/* services section */}
        <div className="flex flex-col items-center my-[3rem]">
          {/* first section */}
          <div className="flex justify-between items-center">
            {/* card */}
            <div className="w-3/12 flex flex-col gap-3 item-center justify-center text-center">
              <Image src={'/experience-logo.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
              <h1 className="font-heading font-semibold">
                Unforgettable experiences
              </h1>
              <p className="font-text">
                Crafting personalized itineraries that cater to your unique preferences.
              </p>
            </div>
            {/* Image-Section */}
            <div className="w-[27.333%] relative">
              {/* <Image
                src={'/services1.png'}
                alt="img1"
                width={50} height={50}
                className="w-[19.75rem] h-[27.8rem]"
              />
              <Image
                src={'/services2.png'}
                alt="img2"
                width={60} height={60}
                className="absolute w-[14.25rem] h-[21.25] top-[6rem] left-[13rem]"
              /> */}
              <Image
                src="/services1.png"
                alt="img1"
                width={300} // (19.75rem * 16)
                height={390} // (27.8rem * 16)
                layout="responsive"
                objectFit="cover"
                className="w-[19.75rem] h-[21.8rem]"
              />
              <Image
                src="/services2.png"
                alt="img2"
                width={228} // (14.25rem * 16)
                height={340} // (21.25rem * 16)
                layout="fixed"
                objectFit="cover"
                className="absolute w-[14.25rem] h-[21.25rem] top-[6rem] left-[13rem]"
              />
            </div>
            {/* information */}
            <div className="w-3/12 space-y-4">
              <p className="font-text">
                Tailored for Indian Travelers: We understand the preferences and needs of Indian travelers, ensuring a comfortable and enjoyable experience.
              </p>
              <p className="font-text">
                Expert Guides: Our knowledgeable guides provide insights into the rich history and culture of Scotland
              </p>
              <p className="font-text">
                Hassle-Free Booking: Easy and convenient booking process with dedicated customer support.
              </p>
            </div>
          </div>

          {/* second section */}
          <div className="flex justify-between mt-[3rem]">
            {/* Card-1 */}
            <div className="w-2/12 flex flex-col gap-3 item-center justify-center text-center relative top-[-5rem]">
              <Image src={'/diverse.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
              <h1 className="font-heading font-semibold">Diverse Destinations</h1>
              <p className="font-text">
                Curating exclusive destinations and activities across Incredible India for The Elite Community
              </p>
            </div>

            {/* Card-2 */}
            <div className="w-2/12 flex flex-col gap-3 item-center justify-center text-center">
              <Image src={'/money.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
              <h1 className="font-heading font-semibold">Value for Money</h1>
              <p className="font-text">
                Access exclusive deals, discounts, and perks that maximize the value of your budget.
              </p>
            </div>

            {/* Card-3 */}
            <div className="w-2/12 relative top-[-5rem] flex flex-col gap-3 item-center justify-center text-center">
              <Image src={'/visa.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
              <h1 className="font-heading font-semibold">Visa Assistance</h1>
              <p className="font-text">
                Access hassle-free visa assistance tailored to Indian travelers. Our expert team ensures a smooth application process, guiding you through every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="lg:hidden w-10/12 mx-auto flex flex-col gap-4 item-center justify-center">
        <h4 className="font-text text-center font-semibold">
          WHAT MAKES US DIFFERENT
        </h4>
        <h1 className="text-center text-[2rem] font-heading font-semibold">
          Why Book with Us
        </h1>
        {/* Card-1 */}
        <div className="flex flex-col gap-3 item-center justify-center text-center mt-3">
          <Image src={'/experience-logo.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
          <h1 className="font-heading font-semibold">Unforgettable experiences</h1>
          <p className="font-text">
            Crafting personalized itineraries that cater to your unique preferences.
          </p>
        </div>

        {/* Card-2 */}
        <div className="flex flex-col gap-3 item-center justify-center text-center mt-3">
          <Image src={'/diverse.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
          <h1 className="font-heading font-semibold">Diverse Destinations</h1>
          <p className="font-text">
            Curating exclusive destinations and activities across Incredible India for The Elite Community
          </p>
        </div>

        {/* Card-3 */}
        <div className="flex flex-col gap-3 item-center justify-center text-center">
          <Image src={'/money.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
          <h1 className="font-heading font-semibold">Value for Money</h1>
          <p className="font-text">
            Access exclusive deals, discounts, and perks that maximize the value of your budget.
          </p>
        </div>

        {/* Card-4 */}
        <div className="mt-3 flex flex-col gap-3 item-center justify-center text-center">
          <Image src={'/visa.png'} width={60} height={60} alt="logo" className="size-[60px] mx-auto" />
          <h1 className="font-heading font-semibold">Visa Assistance</h1>
          <p className="font-text">
            Access hassle-free visa assistance tailored to Indian travelers. Our expert team ensures a smooth application process, guiding you through every step.
          </p>
        </div>

        {/* image */}
        <div className="items-center mx-auto w-[74.333%] relative mt-3">
          {/* <Image src={'/services1.png'} width={60} height={60} alt="" className="w-[15.75rem] h-[20.8rem]" /> */}
          <Image
                src="/services1.png"
                alt="img1"
                width={300} // (19.75rem * 16)
                height={390} // (27.8rem * 16)
                layout="responsive"
                objectFit="cover"
              />
        </div>

        <div className="text-center mt-3 space-y-4">
          <p className="font-text">
            Tailored for Indian Travelers: We understand the preferences and needs of Indian travelers, ensuring a comfortable and enjoyable experience.
          </p>
          <p className="font-text">
            Expert Guides: Our knowledgeable guides provide insights into the rich history and culture of Scotland
          </p>
          <p className="font-text">
            Hassle-Free Booking: Easy and convenient booking process with dedicated customer support.
          </p>
        </div>
      </div>
    </div>
  );
}
