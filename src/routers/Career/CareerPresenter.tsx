import React from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import CareerItems from 'components/CareerItems';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grayF};
  color: ${({ theme }) => theme.colors.gray3};
`;
interface IcareerProps {
  livart: object | null;
  jobKorea: object | null;
  pulip: object | null;
  him: object | null;
  p4line: object | null;
  loading: boolean;
  error: string | null;
}

const CareerPresenter: React.FunctionComponent<IcareerProps> = ({
  livart,
  jobKorea,
  pulip,
  him,
  p4line,
  loading,
  error,
}) => {
  // console.log(livart);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Main>
          <Headers current="Career" />
          <CareerItems {...livart} />
          {/* <CareerItems {...jobkorea}/>
					<CareerItems {...pulip}/>
					<CareerItems {...him}/>
					<CareerItems {...p4line}/> */}
          {error && <Error error={error} />}
        </Main>
      )}
    </>
  );
};

export default CareerPresenter;
