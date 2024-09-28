
import React from 'react'
import Faq from './Faq/Faq'
const FaqsList = () => {
    return (
        <div>
            <div className="w-full my-[6rem]">
                <div className="w-10/12 lg:item-center lg:flex lg:flex-row lg:justify-between flex flex-col mx-auto">
                    {/* left side  */}
                    <div className="lg:w-3/12">
                        <p className=" font-text font-semibold text-center">STILL HAVE QUESTION?</p>
                        <h1 className=" text-center font-heading font-bold text-[3rem]">FAQ</h1>
                    </div>

                    {/* Right side  */}
                    <div className=" space-y-8  lg:w-7/12">
                        <Faq
                        title='What are the top attractions included in your tours?'
                        desc='Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures'
                        />
                        <Faq
                        title='Do I need to make a reservation?'
                        desc='Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures'
                        />
                        <Faq
                        title='Are children allowed on the tour?'
                        desc='Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures'
                        />
                        <Faq
                        title='What safety measures are in place for tours?'
                        desc='Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures'
                        />
                        <Faq
                        title='Do you offer group or private tours?'
                        desc='Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FaqsList
