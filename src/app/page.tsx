"use client";

import NameCircle from "@/UI's/NameCircle";
import ButtonLink from "@/UI's/buttons/buttons-links/ButtonLink";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import ButtonSwitch from "@/UI's/buttons/buttons-switch/ButtonSwitch";
import CustomHeader from "@/components/CustomHeader";
import CustomImage from "@/components/CustomImage";


/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  const test = () => {
    console.log("Hello");
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <p>для кожної зірки зробити випадковим значення delay в
        якомусь діапазоні, щоб всі зірки мали різний час початку анімації</p>
      <ButtonRounded widthStar={14}
        type="big" text="TLGR" link="#" />
      <ButtonRounded widthStar={12}
        type="small" text="test" link="#" />
      <ButtonSquared type="none" text="портфолiо" link="#" widthStar={12} />
      <ButtonLink type="none" text="portfolio" link="#" widthStar={12} />
      <h1>
        TEST
      </h1>
      <h2>
        test
      </h2>
      <h3>
        test
      </h3>
      <h4>
        test
      </h4>
      <CustomImage src="/DSC07838.jpg" alt="" width={700} height={450}/>
      <ButtonScroll width={125} height={125} widthArrow={50}
        orientation={"downward"} star={false} widthStar={12} />
      <ButtonScroll width={125} height={125} widthArrow={45}
        orientation={"upward"} star={true} widthStar={12} />
      <ButtonScroll width={100} height={100} widthArrow={35}
        orientation={"upward"} star={true} widthStar={11} />
      <CustomHeader duration={.7} delay={.0}
        isYmoves={true}>Оберiть свою</CustomHeader>
      <CustomHeader duration={.7} delay={.0}
        isYmoves={false}>естетику</CustomHeader>
      <CustomHeader duration={.7} delay={.0}
        isYmoves={true}>кадрiв</CustomHeader>
      <ButtonSwitch orientation="left" action={test} widthStar={12} />
      <ButtonSwitch orientation="right" action={test} widthStar={12} />
      <NameCircle text={new Date().getFullYear()} width={132} height={132} />
    </div >
  );
}
