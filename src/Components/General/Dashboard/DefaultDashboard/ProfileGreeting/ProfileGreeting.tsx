import { ImagePath, NowLetGetStarted, WelcomeBack } from "@/Constant";
import DynamicNumber from "@/utils/DynamicNumber";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";

const ProfileGreeting = () => {
  return (
    <Col xxl={3} lg={4} md={5} sm={6} className='box-col-4'>
      <Card className='profile-greeting'>
        <CardBody>
          <div>
            <Image width={231} height={192} className='greeting-img' src={`${ImagePath}/dashboard/welcome.png`} alt='welcome' unoptimized/>
            <h1>{WelcomeBack}</h1>
            <p>{"Get to work on the project you were given."}</p>
            <Link className='btn btn-primary' href='/app/project/project_list'>
              {NowLetGetStarted}
            </Link>
          </div>
          {DynamicNumber(5).map((item, index) => (
            <Fragment key={index}>
              <picture><img className={`vector-${item ? item : ""}`} src={`${ImagePath}/dashboard/vector/${item}.png`} alt={'vector'}  /></picture>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProfileGreeting;
