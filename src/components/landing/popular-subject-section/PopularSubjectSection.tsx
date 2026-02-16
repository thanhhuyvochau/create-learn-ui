'use client';

import React from 'react';
import { Flex, Text, Container, Center, Loader } from '@mantine/core';
import { useSubjectQuery } from '@/hooks';
import { PopularSubjectCard } from '@/components';
import type { Subject ,PopularSubjectCardProps } from '@/types';

const placeholderIcon = 'https://via.placeholder.com/96x96.png?text=Subject';

const toCardProps = (s: Subject): PopularSubjectCardProps => ({
  id: s.id,
  name: s.name,
  imageSrc: s.iconBase64
    ? `data:image/png;base64,${s.iconBase64}`
    : placeholderIcon,
});

const PopularSubjectSection: React.FC = () => {
  const { subjects, isLoading, error } = useSubjectQuery({
    page: 0,
    pageSize: 100,
  });

  const cards = (subjects ?? []).map(toCardProps);

  return (
    <Container fluid py={48}>
      <Container maw={976}>
        <Text fz={{ base: '1.82rem', md: '2.25rem' }} ta="center">
          Lớp Học Mũi Nhọn Tại AlgoCore
        </Text>
        <Text fz="1rem" fw={400} c="rgba(0, 0, 0, 0.6)" ta="center">
          Những chương trình được đầu tư chuyên sâu, học theo nhóm nhỏ tinh gọn, định hướng chiến lược và cá nhân hóa lộ trình để đạt thành tích cao trong các kỳ thi quốc tế.
        </Text>
      </Container>
      <Center mt={48}>
        {isLoading && <Loader />}
        {!isLoading && error && <Text c="red">Failed to load subjects.</Text>}
        {!isLoading && !error && (
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
