import TourDetails from "@/components/Tour-Details/Grand-Goa/Grandgoa";
import { prisma } from "@/lib/db";
import { parse } from "path";
import { currentProfile } from "@/lib/current-profile";
const Page = async ({ params }: { params: { tourID: string } }) => {
  const user = await currentProfile();
  console.log("the user is ", user);
  const tour = await prisma.package.findUnique({
    where: {
      id: parseInt(params.tourID),
    },
    include: {
      availability: true,
      images: true,
      reviews: {
        include: {
          user: true,
        },
      },
    },
  });

  console.log("the tour is ", tour);

  if (!tour) {
    return <div>No tour found for given ID</div>;
  }
  //@ts-ignore
  return <TourDetails tour={tour} activeuser={user}   />;
};

export default Page;
