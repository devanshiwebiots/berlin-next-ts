import { ImagePath } from "@/Constant";
import { GroupingImageOne } from "@/Data/Uikits/avatars";
import Image from "next/image";

export const GroupingFirst = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image height={100} width={100} className="img-100 b-r-8" src={`${ImagePath}/avtar/4.jpg`} alt="image" unoptimized/>
        </li>
        {GroupingImageOne.map(({ className, src,height,width }, index) => (
          <li className="d-inline-block" key={index}>
            <Image height={height} width={width} className={`${className} h-auto`} src={`${ImagePath}${src}`} alt="image" unoptimized/>
          </li>
        ))}
      </ul>
    </div>
  );
};
