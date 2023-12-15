import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {cn} from "@/lib/utils";
import { UserButton } from '@clerk/nextjs';

const state = true;

export default function Home() {
  return (
     <div className="h-screen">
       <UserButton afterSignOutUrl="/"
      />
     </div>
  )
}
