import { fadeIn } from "@/styles/animation";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 6s forwards;
  overflow: hidden;

  height: 36rem;

  @media (max-width: 768px) {
    height: 38rem;
    padding: 2.4rem 1.6rem;
  }
`;

export const ImageSection = styled.div`
  width: 120rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RightSection = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;

  width: 100%;

  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  gap: 5.2rem;
  overflow: hidden; /* 컨텐츠 넘침 방지 */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;

  @media (max-width: 768px) {
    line-height: 1rem;
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: NanumSquareExtrabold;
  font-size: 2.8rem;

  text-align: start;
  line-height: 3.6rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 2.8rem;
  }
`;

export const SubTitle = styled.h2`
  opacity: 0.4;
  color: white;
  font-weight: 900;
  font-size: 1.6rem;

  text-align: start;
  letter-spacing: 0rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const TagList = styled.ul`
  display: flex;
  gap: 1rem;

  margin-top: 1.6rem;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

export const TagItem = styled.li`
  border-radius: 2rem;
  border: 1px solid #42d17d;

  padding: 0.6rem 1.6rem;

  color: #42d17d;
  font-size: 1.2rem;
  font-weight: 600;

  letter-spacing: 0.1rem;

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 1.2rem;
  }
`;

export const DetailButton = styled.button`
  font-weight: 900;
  border-radius: 2.4rem;

  padding: 1rem 0;

  width: 16rem;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.6rem;

  &:hover {
    color: #272727;
    background-color: #42d17d;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3.6rem;

    padding: 1.2rem 0;
    font-size: 1.4rem;
  }
`;
