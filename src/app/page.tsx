"use client";

import DropDownMenu from "@/UI's/DropDownMenu";
import {LIST_OF_SERVICES} from "@/constants/constants";
import NameCircle from "@/UI's/NameCircle";
import ButtonLink from "@/UI's/buttons/buttons-links/ButtonLink";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import ButtonSwitch from "@/UI's/buttons/buttons-switch/ButtonSwitch";
import CustomHeader from "@/hooks/CustomHeader";
import CustomImage from "@/hooks/CustomImage";
import BackgroundText from "@/hooks/BackgroundText";


/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  const test = () => {
    console.log("Hello");
  };

  return (
    <div className="flex m-10 justify-center flex-col items-center">
      <BackgroundText size="big" uniqueClassName="test">Background text</BackgroundText>
      <BackgroundText size="small" uniqueClassName="test">Background text</BackgroundText>
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
      <CustomImage uniqueClassName={"Відправляти сюди елемент styles.test"}
        src="/DSC07838.jpg" alt="" width={726} height={884}/>
      <ButtonScroll uniqueClassName="test" width={125} height={125} widthArrow={50}
        orientation={"downward"} star={false} widthStar={12} />
      <ButtonScroll uniqueClassName="test" width={125} height={125} widthArrow={45}
        orientation={"upward"} star={true} widthStar={12} />
      <ButtonScroll uniqueClassName="test" width={100} height={100} widthArrow={35}
        orientation={"upward"} star={true} widthStar={11} />
      <DropDownMenu text="Жанр"
        list={LIST_OF_SERVICES} func={() => {}} />
      <CustomHeader headerType="h4" duration={.7} delay={.0}
        isYmoves={true}>Оберiть свою</CustomHeader>
      <CustomHeader headerType="h4" duration={.7} delay={.0}
        isYmoves={false}>естетику</CustomHeader>
      <CustomHeader headerType="h4" duration={.7} delay={.0}
        isYmoves={true}>кадрiв</CustomHeader>
      <ButtonSwitch orientation="left" action={test} widthStar={12} />
      <ButtonSwitch orientation="right" action={test} widthStar={12} />
      <NameCircle text={new Date().getFullYear()} size={132} />
    </div>
  );
}
