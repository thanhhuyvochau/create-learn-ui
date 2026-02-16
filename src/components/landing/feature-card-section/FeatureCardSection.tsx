'use client';

import React from 'react';
import {
  Stack,
  Text,
  Paper,
  Image,
  Flex,
  Title,
  Container,
} from '@mantine/core';
import GradientBox from '@/components/gradient-box/GradientBox';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FEATURE_CARDS_DATA = [
  {
    id: 'award-winning',
    icon: '/images/IBDP.png',
    title: 'IBDP (SL & HL)',
    description:
      'Luyện thi và đào sâu tư duy học thuật chuẩn IB. Hướng dẫn IA, rèn kỹ năng phân tích và chiến lược đạt Level 6–7.',
  },
  {
    id: 'small-groups',
    icon: '/images/AP.png',
    title: 'Advanced Placement (AP)',
    description:
      'Lộ trình chinh phục AP 4–5 điểm. Ôn tập bám sát syllabus, luyện MCQ & FRQ với chiến lược làm bài chuẩn College Board.',
  },
  {
    id: 'expert-teachers',
    icon: '/images/A-Level.png',
    title: 'AS & A Level (Cambridge)',
    description:
      'Nắm vững kiến thức chuyên sâu và kỹ năng làm bài nâng cao. Luyện past paper theo chuẩn Cambridge, tập trung vào command terms.',
  },
  {
    id: 'satisfaction-guarantee',
    icon: '/images/igcse2.webp',
    title: 'IGCSE',
    description:
      'Xây nền tảng học thuật vững chắc và tư duy giải đề. Luyện tập theo cấu trúc đề thi để sẵn sàng cho bậc học cao hơn.',
  },
] as const;

const CARD_STYLES = {
  dimensions: { width: { base: '80%', xssm: 252 }, height: 276 },
  iconContainer: { width: 96, height: 96, iconSize: 86 },
  spacing: { iconOffset: -48, padding: 20, contentPadding: 48 },
  typography: {
    titleSize: { base: '1.3rem', sm: '1.3rem', md: '1.49rem', xl: '1.49rem' },
    descriptionSize: '0.875rem',
  },
} as const;

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Paper
      shadow="xs"
      w={CARD_STYLES.dimensions.width}
      h={CARD_STYLES.dimensions.height}
      radius="md"
    >
      <Flex
        pos="relative"
        p={CARD_STYLES.spacing.padding}
        justify="center"
        align="center"
        h="100%"
      >
        {/* Floating Icon Container */}
        <Flex
          pos="absolute"
          top={CARD_STYLES.spacing.iconOffset}
          bg="white"
          w={CARD_STYLES.iconContainer.width}
          h={CARD_STYLES.iconContainer.height}
          style={{ borderRadius: '50%' }}
          align="center"
          justify="center"
        >
          <Image
            src={icon}
            alt={`${title} icon`}
            w={CARD_STYLES.iconContainer.iconSize}
          />
        </Flex>

        {/* Card Content */}
        <Stack
          align="center"
          gap="xs"
          py={CARD_STYLES.spacing.contentPadding}
          justify="center"
        >
          <Title
            c="brand-teal"
            fz={CARD_STYLES.typography.titleSize}
            ta="center"
            fw={600}
          >
            {title}
          </Title>
          <Text
            fz={CARD_STYLES.typography.descriptionSize}
            fw={500}
            ta="center"
            c="dimmed"
          >
            {description}
          </Text>
        </Stack>
      </Flex>
    </Paper>
  );
};

const FeatureCardSection: React.FC = () => {
  return (
    <GradientBox
      pt={100}
      pb={62}
      bgColor="var(--mantine-color-brand-navy-6)"
    >
      <Container size="xl">
        <Flex
          wrap="wrap"
          justify="center"
          columnGap={{ base: 60, sm: 30 }}
          rowGap={60}
        >
          {FEATURE_CARDS_DATA.map((cardData) => (
            <FeatureCard
              key={cardData.id}
              icon={cardData.icon}
              title={cardData.title}
              description={cardData.description}
            />
          ))}
        </Flex>
      </Container>
    </GradientBox>
  );
};

export default FeatureCardSection;
