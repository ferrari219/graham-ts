import React from 'react';
// import { Link } from 'react-router-dom';
import { SrOnly } from 'components/styles/globalStyle';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: -2rem;
  /* background: red; */
`;
const Sronly = styled.h3`
  ${SrOnly}
`;

interface IportfolioitemsProps {
  company?: string | null;
  date?: string | null;
  job?: string | null;
  project?: Array<{
    id: number;
    name: string;
    detail: string;
    lnk: string;
  }> | null;
}

const PortfolioItems: React.FunctionComponent<IportfolioitemsProps> = ({
  company,
  date,
  job,
  project,
}) => {
  return (
    <Section>
      <Sronly>Career</Sronly>
      <div>
        {project &&
          [...project].map((item) => (
            <div>
              <p>사진</p>
              <dl>
                <dt>{item.name}</dt>
                <dd>{item.detail}</dd>
              </dl>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default PortfolioItems;
