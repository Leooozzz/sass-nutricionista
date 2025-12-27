import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/layout/card"
import Image from "next/image"

type Props ={
    title:string
    description:string
}


export const CardAbout = ({title,description}:Props) => {

  return (
    <div>
      <Card className="mb-2 hover:scale-102">
        <CardHeader className="flex gap-5 items-center ">
          <Image src={"/images/amor-verde.png"} alt={""} height={34} width={34}/>
          <div className="flex flex-col">
        <CardTitle>{title}</CardTitle>
          <CardDescription >{description}</CardDescription>
          </div>
        </CardHeader>
        
      </Card>
    </div>
  );
};
