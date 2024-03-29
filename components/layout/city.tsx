import Image from "next/image";

type CityProps = {
  src: string;
  alt: string;
};

export default function City({ src, alt }: CityProps) {
  return <Image src={src} alt={alt} width={100} height={100}></Image>;
}
