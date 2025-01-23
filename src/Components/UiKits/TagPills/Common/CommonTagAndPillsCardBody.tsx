import { Href } from "@/Constant";
import { CommonTagCardBodyType } from "@/Types/UikitsType";
import Link from "next/link";
import { Badge, CardBody } from "reactstrap";

const CommomTagAndPillsCardBody: React.FC<CommonTagCardBodyType> = ({ data, number, pill }) => {
  return (
    <CardBody>
      <div className='badge-spacing'>
        <>
          {data &&
            data.map(({ className, text, badgeClass }, index) => (
              <Badge pill={pill} color={text} className={`text-capitalize ${badgeClass ? badgeClass : className}`} key={index}>
                {text}
              </Badge>
            ))}
          {number &&
            number.map(({ className, text, icon }, index) => (
              <Link href={Href} className={`badge ${className}`} key={index}>
                {text && text} {icon && icon}
              </Link>
            ))}
        </>
      </div>
    </CardBody>
  );
};

export default CommomTagAndPillsCardBody;
