import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowRight } from "lucide-react";

export default function AboutCardDetail() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        
      </DrawerTrigger>
      <DrawerContent className="fixed inset-y-0 right-0 z-50 flex h-full w-200 flex-col border-l-2 border-black bg-slate-50 p-6">
        <DrawerTitle>Details</DrawerTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          doloremque! Molestias, voluptate. Doloribus, voluptate. Molestias,
          voluptate. Doloribus, voluptate. Molestias, voluptate. Doloribus,
          voluptate. Molestias, voluptate. Doloribus, voluptate. Molestias,
          voluptate. Doloribus, voluptate. Molestias, voluptate. Doloribus,
          voluptate. Molestias, voluptate. Doloribus, voluptate. Molestias,
          voluptate. Doloribus, voluptate. Molestias, voluptate.
        </p>
      </DrawerContent>
    </Drawer>
  );
}
