import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import styled from 'styled-components';
import PortfolioItems from 'components/PortfolioItems';

const Main = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayF};
  color: ${({ theme }) => theme.colors.gray3};
`;
interface IportfolioProps {
  livart: object | null;
  jobKorea: object | null;
  loading: boolean;
  error: string | null;
}

const PortfolioPresenter: React.FunctionComponent<IportfolioProps> = ({
  livart,
  jobKorea,
  loading,
  error,
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Main>
          <Headers current="Portfolio" />
          <PortfolioItems {...livart} />
          <PortfolioItems {...jobKorea} />
          {error && <Error error={error} />}
        </Main>
      )}
    </>
  );
};

export default PortfolioPresenter;
