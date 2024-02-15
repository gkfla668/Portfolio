import styled from "styled-components";

export const Title = styled.div`
  font-weight: 900;
  color: White;
  font-size: 3.6rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SubTitle = styled.div`
  font-weight: 900;
  color: White;
  opacity: 0.6;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  gap: 1rem;

  margin-top: 1.4rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
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
    font-size: 1.1rem;
  }
`;

export const Link = styled.a`
  cursor: pointer;

  border-radius: 2.4rem;

  color: #42d17d;
  background-color: #42d17e29;
  font-size: 1.4rem;
  font-weight: 900;
  white-space: nowrap;

  &:hover {
    color: #363636;
    background-color: #42d17d;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const OverViewText = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

export const SubText = styled.div`
  color: white;
  font-size: 2.6rem;
  font-weight: 900;

  padding: 1.2rem 0rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0.6rem 0rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  width: 100%;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const InfoTitle = styled.div`
  border-radius: 2.4rem;
  width: 14rem;
  white-space: nowrap;
  padding: 0.8rem 1rem;

  color: #42d17d;
  font-weight: 900;
  background-color: #42d17e29;
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.6rem 0rem;
  }
`;

export const InfoText = styled.div`
  color: white;
  font-size: 1.4rem;

  display: flex;
  width: 100%;
  gap: 0.4rem;

  white-space: nowrap;
`;
