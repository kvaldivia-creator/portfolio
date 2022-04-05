import React from 'react';
import styled from 'styled-components';
import { cursosPlatzi } from '../../data/dataCertifications';
import { device } from '../../utils/device';
import Certification from '../Certification/Certification';
import Container from '../Container/Container';
import Title from '../Title';
import Wrapper from '../Wrapper';
import logoPlatzi from '../../assets/logos/logo-platzi.png';

const ui = {
	Title: styled(Title)`
    padding-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;

    @media ${device.mobileL} {
      font-size: 24px;
    }
  `,
	CertificationsWrapper: styled.div`
		height: 100%;
		margin: 30px 0;
	`
};

const Certifications = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<ui.CertificationsWrapper>
					<ui.Title>Certificaciones</ui.Title>
					<Container>
						<Certification logo={logoPlatzi} data={cursosPlatzi} backgroundColor="#121f3d" />
					</Container>
				</ui.CertificationsWrapper>
			</Wrapper>
		</React.Fragment>
	);
};

export default Certifications;
