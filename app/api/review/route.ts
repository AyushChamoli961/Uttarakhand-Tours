
import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import next from 'next/types';


// to crate a review on a package 
export async function POST(req: Request){

    try {
   
        const { userId, packageId, reviewText, accomodations, meal, service } = await req.json();

        // Validate input
        if (!userId || !packageId || !reviewText || !accomodations || !meal || !service) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validating types
        if (typeof accomodations !== 'number' || typeof meal !== 'number' || typeof service !== 'number' ||
            accomodations < 1 || accomodations > 5 || meal < 1 || meal > 5 || service < 1 || service > 5) {
            return NextResponse.json(
                { message: "Invalid rating values. Must be numbers between 1 and 5." },
                { status: 400 }
            );
        }

        // Check if user and package exist
        const [user, pack] = await Promise.all([
            prisma.user.findUnique({ where: { userId: userId } }),
            prisma.package.findUnique({ where: { id: packageId } })
        ]);

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        console.log("the user is " , user)

        if (!pack) {
            return NextResponse.json({ message: 'Package not found' }, { status: 404 });
        }

        // Create review
        const review = await prisma.review.create({
            data: {
                userId,
                packageId,
                reviewText,
                accomodations,
                meal,
                service
            }
        });

        return NextResponse.json({ review, user }, { status: 201 });

    } catch (error) {
            return NextResponse.json({
                message: `The Error is  :  ${error}`
            })
    }

}


// endpoint to get all reviews 
export async function GET(req: Request){

    try {
        const url = new URL(req.url);
        
        const packageId = parseInt(url.searchParams.get('id') || '');
        
        if(!packageId ) {
            return  NextResponse.json(
                {
                    message: "not package found"
                }
            )
        }

        const rev = await prisma.package.findMany({
            where: {
                id: packageId
            }, 
            select : {
                reviews : true,
            }
        })

        return NextResponse.json(
            {
                rev
            }, 
            {
                status : 200
            }
        )

    } catch (error) {
        return NextResponse.json({
            message: `The Error is  :  ${error}`
        })
    }
}

// endpoint to delete a review 
export async function DELETE (req: Request){

    try {
        
    const { userId, reviewId } = await req.json();

    if (!userId || !reviewId) {
        return NextResponse.json(
            {
                message: "Missing userId or reviewId"
            },
            {
                status: 400
            }
        );
    }

    const user = await prisma.user.findUnique({
        where: {
            userId
        }
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }


    const existingReview = await prisma.review.findUnique({
        where: {
            id: reviewId
        }
    });

    if (!existingReview) {
        return NextResponse.json(
            {
                message: "Review not found"
            },
            {
                status: 404
            }
        );
    }

    if (existingReview.userId !== userId) {
        return NextResponse.json(
            {
                message: "You are not authorized to delete this review", 
                existingReview, 
                userid : userId
            },
            {
                status: 403
            }
        );
    }

    // deleted review 
    const review = await prisma.review.delete({
        where: {
            id: reviewId
        }
    });

    return NextResponse.json(
        {
            message: "Review deleted successfully",
            
        },
        {
            status: 200
        }
    );
    } catch (error) {
        return NextResponse.json({
            message: `An error occurred: ${error}`
        }, {
            status: 500
        });
    }

    
}

