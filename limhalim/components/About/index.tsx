import { useEffect, useState } from "react";
import Image from "next/image";

import Title from "@/components/common/SectionTitle";
import HandleScroll from "@/utils/handleScroll";

import Profile from "/public/images/profile.jpg";

import * as S from "./styled";

const About = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 초기에도 isMobile 상태를 설정

    window.addEventListener("resize", handleResize); // 윈도우의 크기가 변경될 때마다 이를 업데이트
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const threshold = 200;
    const scrollHandler = () => HandleScroll({ threshold, setScroll });

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler); //clean up
    };
  }, []);

  return (
    <div
      id="About"
      className="flex min-h-screen w-full flex-col px-16 py-12 md:px-32 md:py-20"
    >
      {scroll && (
        <>
          <Title title="About" />

          <div className="flex w-full flex-1 flex-col items-center md:justify-center md:gap-8">
            {isMobile ? (
              <div className="flex w-full flex-col items-start">
                <S.Job>
                  <span>F</span>
                  <span>r</span>
                  <span>o</span>
                  <span>n</span>
                  <span>t</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d </span>
                  <span>D</span>
                  <span>e</span>
                  <span>v</span>
                  <span>e</span>
                  <span>l</span>
                  <span>o</span>
                  <span>p</span>
                  <span>e</span>
                  <span>r</span>
                </S.Job>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-10 py-8">
                <S.Job>
                  <span>F</span>
                  <span>r</span>
                  <span>o</span>
                  <span>n</span>
                  <span>t</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d </span>
                  <span>D</span>
                  <span>e</span>
                  <span>v</span>
                  <span>e</span>
                  <span>l</span>
                  <span>o</span>
                  <span>p</span>
                  <span>e</span>
                  <span>r</span>
                </S.Job>
                <S.Bar />
                <S.Birth>2000.08.31</S.Birth>
              </div>
            )}

            {isMobile ? (
              <div className="flex flex-col justify-center gap-12">
                <S.ProfileImageWrapper>
                  <Image
                    src={Profile}
                    alt="img"
                    width={200}
                    loading="eager"
                    className="rounded-md"
                  />
                </S.ProfileImageWrapper>
                <S.ActivitiesWrapper>
                  <S.Container>
                    <S.Date>2024.02-2024.08</S.Date>
                    <S.DetailText>
                      구름톤 유니브 2기, Web 파트 활동 중
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2023.08-2023.11</S.Date>
                    <S.DetailText>
                      경기청년갭이어 프로그램 2기 수료
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2023.07-2023.08</S.Date>
                    <S.DetailText>
                      (주)위드플러스 프론트엔드 직무 2개월 인턴 근무
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2023.03-2023.06</S.Date>
                    <S.DetailText>
                      UMC(University Makeus Challenge) 4기, Web 파트 스터디장
                      수료
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2019.03-2024.08</S.Date>
                    <S.DetailText>
                      아주대학교 디지털미디어학과 & 소프트웨어학과 재학 중
                    </S.DetailText>
                  </S.Container>
                </S.ActivitiesWrapper>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-20">
                <S.ProfileImageWrapper>
                  <Image
                    src={Profile}
                    alt="img"
                    width={300}
                    loading="eager"
                    className="rounded-xl"
                    unoptimized
                  />
                </S.ProfileImageWrapper>
                <S.ActivitiesWrapper>
                  <S.Container>
                    <S.Date>2024.02-2024.08</S.Date>
                    <S.DetailText>
                      <a
                        href="https://9oormthon.university/"
                        className="text-[#42d17d]"
                      >
                        구름톤 유니브
                      </a>
                      2기, Web 파트 활동 중
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2023.08-2023.11</S.Date>
                    <S.DetailText>
                      경기청년갭이어 프로그램 2기 수료
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2023.07-2023.08</S.Date>
                    <S.DetailText>
                      <a
                        href="https://withplus.plus/"
                        className="text-[#42d17d]"
                      >
                        (주)위드플러스
                      </a>
                      프론트엔드 직무 2개월 인턴 근무
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2023.03-2023.08</S.Date>
                    <S.DetailText>
                      <a
                        href="https://www.makeus.in/umc"
                        className="text-[#42d17d]"
                      >
                        UMC(University Makeus Challenge)
                      </a>
                      4기, Web 파트 수료
                    </S.DetailText>
                  </S.Container>
                  <S.Container>
                    <S.Date>2019.03-2024.08</S.Date>
                    <S.DetailText>
                      <a
                        href="https://www.ajou.ac.kr/kr/index.do"
                        className="text-[#42d17d]"
                      >
                        아주대학교
                      </a>
                      디지털미디어학과 & 소프트웨어학과 재학 중
                    </S.DetailText>
                  </S.Container>
                </S.ActivitiesWrapper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default About;
