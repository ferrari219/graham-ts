import React from 'react';
import me from 'assets/img/me.png';
import styled from 'styled-components';

const Wrap = styled.div`
  padding: 0 3rem;
  color: ${({ theme }) => theme.colors.gray3};
`;
const NameBox = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  p {
    flex: 0 6rem;

    img {
      display: block;
      width: 100%;
      border-radius: 50%;
    }
  }
  dl {
    flex: 1;
    width: 100%;
    padding: 0 2rem 0.5rem 2rem;
    /* border: 1px solid red; */
    dt {
      font-weight: ${({ theme }) => theme.fonts.weight.bold};
      font-size: ${({ theme }) => theme.fonts.size.xl};
      color: ${({ theme }) => theme.colors.gray3};
      letter-spacing: 0;
    }
    dd {
      font-size: ${({ theme }) => theme.fonts.size.sm};
      color: ${({ theme }) => theme.colors.gray9};
      letter-spacing: 0;
    }
  }
`;
const GreetingBox = styled.section`
  margin: 2rem 0;
  padding: 2rem;
  /* border: 1px solid #fff; */
  background-color: #4dbfc0;
  border-radius: 1rem;
  word-break: keep-all;
  dt {
    padding-bottom: 0.5rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: ${({ theme }) => theme.fonts.size.lg};
    color: ${({ theme }) => theme.colors.grayF};
  }
  dd {
    font-size: ${({ theme }) => theme.fonts.size.sm};
    color: ${({ theme }) => theme.colors.grayF};
    opacity: 0.8;
  }
`;
const ContactBox = styled.section`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grayC};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  color: ${({ theme }) => theme.colors.gray6};
  letter-spacing: 0;
`;
interface IprofileProps {
  myname?: string | null;
  job?: string | null;
  iam?: string | null;
  comment?: string | null;
  birth?: string | null;
  FrontendSkill?: object | null;
  DesignSkill?: object | null;
  BackendSkill?: object | null;
  EtcSkill?: object | null;
  email?: string | null;
  github?: string | null;
  homepage?: string | null;
}

const Profile: React.FunctionComponent<IprofileProps> = ({
  myname,
  job,
  iam,
  comment,
  birth,
  FrontendSkill,
  DesignSkill,
  BackendSkill,
  EtcSkill,
  email,
  github,
  homepage,
}) => {
  return (
    <Wrap>
      {myname && (
        <NameBox>
          <p>
            <img src={me} alt="My Profile img" />
          </p>
          <dl>
            <dt>{myname}</dt>
            <dd>{job}</dd>
          </dl>
        </NameBox>
      )}

      {iam && (
        <GreetingBox>
          <dl>
            <dt>{iam}</dt>
            <dd>{comment}</dd>
          </dl>
        </GreetingBox>
      )}
      {github && (
        <ContactBox>
          <ul>
            <li>{github}</li>
            <li>{email}</li>
          </ul>
        </ContactBox>
      )}
      {FrontendSkill && <div>{FrontendSkill}</div>}
    </Wrap>
  );
};

export default Profile;
