const Page = async({ params }: { params: { bookingID: string } }) => {
    return ( 
        <div className="w-full h-auto pt-20 bg-[#f6f9f9]">
            <h1>booking successful with booking ID {params.bookingID}</h1>
        </div>
     );
}
 
export default Page;