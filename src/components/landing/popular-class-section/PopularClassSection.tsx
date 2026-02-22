'use client';

import React from 'react';
import { Alert, Center, Container, Flex, Loader, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import ClassCard from '../../class-card/ClassCard';
import { useClassPublicQuery } from '@/hooks/useClassPublicQuery';

const POPULAR_CLASSES_BUTTON_TEXT = 'Learn More';
const MAX_ITEMS = 8;

// ✅ 1 flag duy nhất — trước deploy đổi thành false
const UI_DEMO_FALLBACK = true;

type DemoClass = { id: string; image: string; brief: string };

const DEMO_CLASSES: DemoClass[] = [
  { id: 'demo-ibdp', image: 'images/Demo-mode.png', brief: 'IBDP (SL/HL) – Lộ trình aim 6–7, luyện IA + past papers.' },
  { id: 'demo-ap', image: 'images/Demo-mode.png', brief: 'AP – Ôn sát syllabus, chiến lược làm MCQ/FRQ để aim 4–5.' },
  { id: 'demo-alevel', image: 'images/Demo-mode.png', brief: 'AS & A Level – Củng cố nền tảng + luyện đề theo command terms.' },
  { id: 'demo-igcse', image: 'images/Demo-mode.png', brief: 'IGCSE – Học chắc core concepts, tăng tốc bằng exam-style practice.' },
];

const PopularClassSection = () => {
  const { classes, isLoading, error } = useClassPublicQuery({ page: 0, pageSize: 100 });
  const router = useRouter();

  const apiClasses = classes ?? [];

  const useDemo =
    UI_DEMO_FALLBACK && (isLoading || !!error || apiClasses.length === 0);

  const list = useDemo ? DEMO_CLASSES : apiClasses;

  // Nếu không demo thì giữ nguyên loader như cũ
  if (!useDemo && isLoading) {
    return (
      <Container fluid py={48}>
        <Center>
          <Loader size="lg" />
        </Center>
      </Container>
    );
  }

  return (
    <Stack py={48}>
      <Text fz={{ base: '1.82rem', md: '2.25rem' }} ta="center">
        Lớp Học Mũi Nhọn Tại AlgoCore
      </Text>
      <Text fz="1rem" fw={400} c="rgba(0, 0, 0, 0.6)" ta="center">
        Những chương trình được đầu tư chuyên sâu, học theo nhóm nhỏ tinh gọn, định hướng chiến lược và cá nhân hóa lộ trình để đạt thành tích cao trong các kỳ thi quốc tế.
      </Text>
      {useDemo && (
        <Text fz="0.9rem" c="dimmed" ta="center">
          (Demo data – UI test)
        </Text>
      )}

      {list.length > 0 ? (
        <Flex w="100%" wrap="wrap" justify="center" gap={40}>
          {list.slice(0, MAX_ITEMS).map((classItem: any) => (
            <ClassCard
              key={classItem.id}
              imageUrl={classItem.image}
              title={classItem.brief}
              description={classItem.brief}
              titleButton={POPULAR_CLASSES_BUTTON_TEXT}
              onButtonClick={() => router.push(`/class/${classItem.id}`)}
            />
          ))}
        </Flex>
      ) : (
        <Alert color="red" variant="light">
          <Text>No classes found. Please try again later.</Text>
        </Alert>
      )}
    </Stack>
  );
};

export default PopularClassSection;