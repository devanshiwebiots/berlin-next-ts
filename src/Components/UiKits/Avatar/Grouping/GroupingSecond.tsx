import { ImagePath } from "@/Constant";
import { GroupingImageTwo } from "@/Data/Uikits/avatars";
import Image from "next/image";

export const GroupingSecond = () => {
  return (
    <div className='customers d-inline-block avatar-group'>
      <ul>
        <li className='d-inline-block'>
          <Image height={60} width={60} className='img-60 rounded-circle' src={`${ImagePath}/avtar/16.jpg`} alt='image' />
        </li>
        {GroupingImageTwo.map(({ className1, className2, src, height, width }, index) => (
          <li className='d-inline-block' key={index}>
            <Image height={height} width={width} className={`${className1 && className1} ${className2 && className2} h-auto`} src={`${ImagePath}${src}`} alt='image' />
          </li>
        ))}
      </ul>
    </div>
  );
};
