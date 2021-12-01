import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2016, text: 'Pemeran utama Pria Lomba Teater Tingkat Nasional di Semarang'},
  { number: 2016, text: 'Juara 1 Lomba teater tingkat kabupaten', },
  { number: 2017, text: 'Juara 2 Lomba Monolog tingkat kabupaten', },
  { number: 2018, text: 'Juara 1 lomba teater tingkat kabupaten', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
