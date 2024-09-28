// app/api/package/route.ts

import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';


export async function POST(req: Request){

    try{
       const {userId, packageId, amountPaid, orderId, persons, startDate, endDate} = await req.json(); 
        
        if(!userId || !packageId || !amountPaid  || !orderId || !persons){
            return NextResponse.json({msg: "missing required fields"}, {status: 404});
        }

        const user = await prisma.user.findUnique({
            where: {
                userId
            }
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 401 });
        }

        const trip_package = await prisma.package.findUnique(
            {
                 where: { id: packageId }, 
                });
        if (!trip_package) {
          return NextResponse.json({ error: 'Package not found' }, { status: 404 });
        }

        // checking for package availability 

        // const bookingDate = new Date(date);
        // // Check if the booking date is in the available dates
        // const isDateAvailable = trip_package.dates.some(availableDate => 
        //     availableDate.toISOString().split('T')[0] === bookingDate.toISOString().split('T')[0]
        // );
    
        // if (!isDateAvailable) {
        //     return NextResponse.json(
        //     { error: "Package not available on the selected date" },
        //     { status: 400 }
        //     );
        // }

        // checking for existing booking for same date : 

        // const existingBooking = await prisma.packageBooking.findFirst({
        //     where: {
        //       userId: userId,
        //       bookingDate: {
        //         gte: new Date(bookingDate.toISOString().split('T')[0]),
        //         lt: new Date(new Date(bookingDate).setDate(bookingDate.getDate() + 1))
        //       }
        //     }
        //   });
          
        //   if (existingBooking) {
        //     return NextResponse.json(
        //       { error: "You already have a booking for this date" },
        //       { status: 400 }
        //     );
        //   }


       // Create the booking
        const booking = await prisma.packageBooking.create({
            data: {
                userId,
                packageId,
                amountPaid,
                orderId,
                persons,
                startDate,
                endDate,
            }
        });

        return NextResponse.json(booking, { status: 200 });

    }
    catch(err){
        console.error("Error Creating package booking ", err); 
        return NextResponse.json(
            {
                error: err
            }, 
            {
                status: 500
            }
        )
    }

}