import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio!
        </SectionTitle>
        <SectionText>
        Disini saya akan menjelaskan mengenai saya Itou Billy Liando dan keluarga saya dan saya akan memperlihatkan mengenai kehidupan kampus saya bersama teman-teman saya.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;