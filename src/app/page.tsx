"use client";

import NameCircle from "@/UI's/NameCircle";
import ButtonLink from "@/UI's/buttons/buttons-links/ButtonLink";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import ButtonSwitch from "@/UI's/buttons/buttons-switch/ButtonSwitch";


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
      <h1>
        аиикикик
      </h1>
      <p>додати на кнопки: mousedown, onhover</p>
      <ButtonRounded widthStar={14}
        type="big" text="TLGR" link="#fff" />
      <ButtonRounded widthStar={12}
        type="small" text="test" link="#fff" />
      <ButtonSquared type="none" text="портфолiо" link="#eeee" widthStar={12} />
      <ButtonLink type="none" text="portfolio" link="#eeee" widthStar={12} />
      <ButtonScroll width={125} height={125} widthArrow={50}
        orientation={"downward"} star={false} widthStar={12} />
      <ButtonScroll width={125} height={125} widthArrow={45}
        orientation={"upward"} star={true} widthStar={12} />
      <ButtonScroll width={100} height={100} widthArrow={35}
        orientation={"upward"} star={true} widthStar={11} />
      <ButtonSwitch orientation="left" action={test} widthStar={12} />
      <ButtonSwitch orientation="right" action={test} widthStar={12} />
      <NameCircle text={new Date().getFullYear()} width={132} height={132} />
    </div>
  );
}
