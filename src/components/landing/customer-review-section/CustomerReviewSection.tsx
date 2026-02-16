'use client';

import React, { useMemo } from 'react';
import { Card, Text, Group, Rating, Stack } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import GradientBox from '@/components/gradient-box/GradientBox';
import { format } from 'date-fns';

import classes from './CustomerReviewSection.module.css';

type ReviewCardProps = {
  review: string;
  rating: number; // 1-5
  name: string;
  date: string;
};

const ReviewCard: React.FC<ReviewCardProps> = React.memo(
  ({ review, rating, name, date }) => {
    return (
      <Card radius="md" h={213} p="md">
        <Stack h="100%" justify="space-between">
          <Text fw={400} fz="1rem" lineClamp={4}>
            <Text
              component="span"
              fw={900}
              fz="1.2rem"
              style={{ lineHeight: 1 }}
            >
              &#34;
            </Text>
            {` ${review} `}
            <Text
              component="span"
              fw={900}
              fz="1.2rem"
              style={{ lineHeight: 1 }}
            >
              &#34;
            </Text>
          </Text>

          <Group justify="space-between" align="center">
            <Rating value={rating} readOnly />
            <Stack gap={0} align="flex-end">
              <Text fw={600} fz="0.8rem">
                - {name}
              </Text>
              <Text fw={600} fz="0.8rem">
                {format(new Date(date), 'yyyy-MMM-dd')}
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Card>
    );
  }
);

ReviewCard.displayName = 'ReviewCard';

// ✅ Nội dung review demo (sau này bạn có thể thay bằng data thật)
const REVIEW_DATA = [
  {
    review:
      'Lộ trình học rõ ràng, tập trung đúng mục tiêu IB/AP. Con cải thiện kỹ năng làm bài chỉ sau vài buổi.',
    rating: 5,
    name: 'Phụ huynh bạn Minh',
    date: '2024-01-15',
  },
  {
    review:
      'Giáo viên hướng dẫn rất chiến lược, sửa bài chi tiết. Học nhóm nhỏ nên con được theo sát liên tục.',
    rating: 5,
    name: 'Phụ huynh bạn An',
    date: '2024-01-12',
  },
  {
    review:
      'Nội dung bám sát syllabus Cambridge, luyện đề đúng dạng, giúp con tự tin hơn khi vào kỳ thi.',
    rating: 5,
    name: 'Bạn Khánh (AS Level)',
    date: '2024-01-10',
  },
  {
    review:
      'Tư vấn học thuật rất kỹ, chỉ ra đúng lỗ hổng và đưa kế hoạch học phù hợp. Tiến bộ thấy rõ.',
    rating: 4,
    name: 'Phụ huynh bạn Vy',
    date: '2024-01-08',
  },
  {
    review:
      'Môi trường học nghiêm túc và chất lượng. Con học được tư duy giải bài thay vì học mẹo.',
    rating: 5,
    name: 'Bạn Nam (IBDP)',
    date: '2024-01-05',
  },
  {
    review:
      'Thầy cô theo sát mục tiêu điểm số, feedback nhanh. Mình thấy đúng định vị “premium” của AlgoCore.',
    rating: 5,
    name: 'Bạn Linh (AP)',
    date: '2024-01-03',
  },
  {
    review:
      'Lớp học có cấu trúc rõ ràng: lý thuyết ngắn gọn, luyện tập trọng tâm, chấm chữa theo rubric.',
    rating: 5,
    name: 'Phụ huynh bạn Huy',
    date: '2023-12-28',
  },
  {
    review:
      'Chương trình phù hợp với học sinh cần tăng tốc. Giáo viên hướng dẫn cách học và tự luyện ở nhà.',
    rating: 4,
    name: 'Bạn Trang (IGCSE)',
    date: '2023-12-25',
  },
  {
    review:
      'Đội ngũ support tốt, tư vấn rõ ràng và chuyên nghiệp. Con thích học vì được giải đáp nhanh.',
    rating: 5,
    name: 'Phụ huynh bạn Phúc',
    date: '2023-12-22',
  },
  {
    review:
      'Mình đánh giá cao cách AlgoCore tập trung vào kết quả và chiến lược làm bài, không lan man.',
    rating: 5,
    name: 'Bạn Quân (A Level)',
    date: '2023-12-20',
  },
];

const CustomerReviewSection: React.FC = () => {
  const slides = useMemo(
    () =>
      REVIEW_DATA.map((review, index) => (
        <Carousel.Slide key={`${review.name}-${index}`}>
          <ReviewCard {...review} />
        </Carousel.Slide>
      )),
    []
  );

  return (
    <GradientBox
      py={48}
      direction="column"
      bgColor="var(--mantine-color-brand-navy-6)"
    >
      <Text
        fz={{ base: '1.82rem', sm: '2.03rem' }}
        fw={500}
        ta="center"
        c="white"
      >
        Phụ huynh & học sinh tin tưởng AlgoCore
      </Text>

      <Text fz="1rem" fw={400} ta="center" c="white" mb="2.5rem">
        Định hướng học thuật rõ ràng • Nhóm nhỏ tinh gọn • Tập trung kết quả IB, AP
        & Cambridge
      </Text>

      <Carousel
        maw={{ base: '90%', sm: '70%', md: '90%', xl: '70%' }}
        withIndicators
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%', xl: '25%' }}
        slideGap={{ base: 'xs', sm: 'md' }}
        emblaOptions={{ loop: true, align: 'start' }}
        classNames={{ control: classes.control }}
      >
        {slides}
      </Carousel>
    </GradientBox>
  );
};

export default CustomerReviewSection;
