'use client';

import React from 'react';
import { Flex, Text, Container, Center, Loader } from '@mantine/core';
import { useSubjectQuery } from '@/hooks';
import { PopularSubjectCard } from '@/components';
import type { Subject, PopularSubjectCardProps } from '@/types';

const placeholderIcon = 'images/Demo-mode.png';

// ✅ 1 flag duy nhất — trước deploy đổi thành false
const UI_DEMO_FALLBACK = true;

const DEMO_SUBJECT_CARDS: PopularSubjectCardProps[] = [
  { id: 1, name: 'IBDP', imageSrc: placeholderIcon },
  { id: 2, name: 'AP', imageSrc: placeholderIcon },
  { id: 3, name: 'AS/A Level ', imageSrc: placeholderIcon },
  { id: 4, name: 'IGCSE', imageSrc: placeholderIcon },
];

const toCardProps = (s: Subject): PopularSubjectCardProps => ({
  id: s.id,
  name: s.name,
  imageSrc: s.iconBase64 ? `data:image/png;base64,${s.iconBase64}` : placeholderIcon,
});

const PopularSubjectSection: React.FC = () => {
  const { subjects, isLoading, error } = useSubjectQuery({ page: 0, pageSize: 100 });

  const apiCards = (subjects ?? []).map(toCardProps);

  const useDemo =
    UI_DEMO_FALLBACK && (isLoading || !!error || apiCards.length === 0);

  const cards = useDemo ? DEMO_SUBJECT_CARDS : apiCards;

  return (
    <Container fluid py={48}>
      <Text
        fz={{ base: '2.99rem', sm: '2.57rem', md: '2.78rem', lg: '2.99rem' }}
        ta="center"
        c="brand-teal"
      >
        Chương Trình Học Thuật Quốc Tế Nổi Bật
      </Text>
      <Container maw={976}>
        {useDemo && (
          <Text fz="0.9rem" c="dimmed" ta="center" mt={8}>
            (Demo data – UI test)
          </Text>
        )}
      </Container>

      <Center mt={48}>
        {!useDemo && isLoading && <Loader />}
        {!useDemo && !isLoading && error && <Text c="red">Failed to load subjects.</Text>}

        {(useDemo || (!isLoading && !error)) && (
          <Flex wrap="wrap" gap={30} maw={1352} justify="center">
            {cards.map((card) => (
              <PopularSubjectCard key={card.id} {...card} />
            ))}
          </Flex>
        )}
      </Center>
    </Container>
  );
};

export default PopularSubjectSection;