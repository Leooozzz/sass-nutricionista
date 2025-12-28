import Image from "next/image";

type Props = {
  description: string;
};
export const IconRight = ({ description }: Props) => {
  return (
    <div className="flex mt-1 gap-3">
      <Image
        src={"/images/lista-de-controle.png"}
        alt={""}
        height={24}
        width={24}
      />
      <p className="font-semibold">{description}</p>
    </div>
  );
};
