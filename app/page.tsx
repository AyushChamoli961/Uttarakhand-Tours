import { InitialProfile } from "@/lib/initial-profile";
import { prisma } from "@/lib/db";
import HomePage from "@/components/Home-Page/HomePage";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Page = async () => {
  const user = await InitialProfile();

  const packages = await prisma.package.findMany({
    include: {
      images: true,
    },
  });

  
  return (
    <HomePage packages={packages} />
  );
}

export default Page;