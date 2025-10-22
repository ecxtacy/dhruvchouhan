import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface IconProps {
  sizeClass?: string,
  iconName: string,
  link?: string,
};

const Icon:React.FC<IconProps> = ({ sizeClass, iconName, link }) => {
  const appliedClass = (sizeClass ?? `w-6 transition-all hover:scale-125`);
  return (
    <Link href={link ?? "#"}>
      <Image width={200} height={200} alt={iconName} src={`/assets/icons/${iconName}.svg`} className={appliedClass}/>
    </Link>
  )
}

export default Icon