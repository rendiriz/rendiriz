import Image from 'next/image';

export default function PostImage(props: any) {
  return (
    <Image
      {...props}
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-auto"
    />
  );
}
