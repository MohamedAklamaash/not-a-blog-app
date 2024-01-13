import {usePathname,useRouter} from "next/navigation";

export default function useMenuActiveHook(route:string) {
  const router = useRouter();
  const pathName = usePathname();
  const isActive = (route === pathName);  
  return isActive;
}
