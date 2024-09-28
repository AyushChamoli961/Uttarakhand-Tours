
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';


export async function POST(req: Request){

    try{
        const body = await req.json(); 
        
        const {userId, relatedId, inquiryType,  inquiryText} = body ; 

        if(!userId || !inquiryText ) {
            
            return NextResponse.json(
                {
                    message: "Missing req fields", 
                }, 
                {
                    status: 400
                }
            )
        }

        const user = await prisma.user.findUnique({
            where: {
                userId: userId
            }
        })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Finding the inquiry relations
    // let relatedEntity;
    // if (inquiryType !== 'GENERAL' && relatedId !== null) {
    //     let relatedModel;

    //     switch (inquiryType) {
    //         case 'VISACITY':
    //             relatedModel = prisma.visaCity;
    //             break;
    //         case 'FLIGHT':
    //             relatedModel = prisma.flight;
    //             break;
    //         case 'CRUISE':
    //             relatedModel = prisma.cruise;
    //             break;
    //         default:
    //             return NextResponse.json({ error: 'Invalid inquiry type' }, { status: 400 });
    //     }

    //     relatedEntity = await relatedModel.findUnique({
    //         where: {
    //             id: relatedId
    //         }
    //     });

    //     if (!relatedEntity) {
    //         return NextResponse.json({ error: `${inquiryType} not found` }, { status: 404 });
    //     }
    // }


    const inquiry = await prisma.inquiry.create({
        data: {
            userId : userId,
            relatedId,
            inquiryType,
            inquiryText
        }
    })

    return NextResponse.json(inquiry, { status: 201 });
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