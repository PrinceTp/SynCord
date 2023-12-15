import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {cn} from "@/lib/utils";

const state = true;

export default function Home() {
  return (
    <div>
    <p className="text-3xl font-bold text-indigo-500">
      SynCord,
      Hello.
    </p>
    <Button>
      Click me
    </Button>
    </div>
  )
}
