'use client';

import React from 'react';
import { Stack, Text, Paper, Image, Flex, Title, Container } from '@mantine/core';
import GradientBox from '@/components/gradient-box/GradientBox';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FEATURE_CARDS_DATA = [
  {
    id: 'academic-excellence',
    icon: '/images/react-icon.webp',
    title: 'Giáo dục\nhàng đầu',
    description:
      'Lộ trình quốc tế chuẩn hóa, được cập nhật liên tục.Tập trung đúng trọng tâm để tối ưu điểm số.',
  },
  {
    id: 'small-group',
    icon: '/images/people-icon.webp',
    title: 'Lớp học\nquy mô nhỏ',
    description:
      'Tối đa 3–5 học sinh/lớp để tăng tương tác. Theo sát tiến độ và phản hồi chi tiết từng buổi.',
  },
  {
    id: 'expert-teachers',
    icon: '/images/ideal-icon.webp',
    title: 'Giáo viên\ngiàu kinh nghiệm',
    description:
      'Giáo viên được tuyển chọn kỹ và đào tạo bài bản. Kinh nghiệm luyện thi IB/AP/IGCSE/A Level thực chiến.',
  },
  {
    id: 'result-oriented',
    icon: '/images/certificate.png',
    title: 'Cam kết\nđầu ra',
    description:
      'Cá nhân hóa theo mục tiêu và timeline của học viên. Chưa đạt mục tiêu sẽ được hỗ trợ bổ sung đến khi đạt.',
  },
] as const;

const CARD_STYLES = {
  dimensions: { width: { base: '80%', xssm: 252 }, height: 276 },
  iconContainer: { width: 96, height: 96, iconSize: 86 },
  spacing: { iconOffset: -48, padding: 20,   contentPaddingTop: 68,  contentPaddingBottom: 48 },
  typography: {
    titleSize: { base: '1.3rem', sm: '1.3rem', md: '1.49rem', xl: '1.49rem' },
    descriptionSize: '0.875rem',
  },
} as const;

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Paper shadow="xs" w={CARD_STYLES.dimensions.width} h={CARD_STYLES.dimensions.height} radius="md">
      <Flex pos="relative" p={CARD_STYLES.spacing.padding} justify="center" align="center" h="100%">
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
          <Image src={icon} alt={`${title} icon`} w={CARD_STYLES.iconContainer.iconSize} />
        </Flex>

        {/* Card Content */}
        <Stack align="center" gap="lg" py={CARD_STYLES.spacing.contentPaddingTop} pb={CARD_STYLES.spacing.contentPaddingBottom} justify="center">
          <Title
            c="brand-teal"
            fz={CARD_STYLES.typography.titleSize}
            ta="center"
            fw={600}
            style={{ whiteSpace: 'pre-line' }}   // ✅ thêm dòng này
          >
            {title}
          </Title>

          <Text
            fz={CARD_STYLES.typography.descriptionSize}
            fw={500}
            ta="center"
            c="dimmed"
            style={{ whiteSpace: 'pre-line' }}   // ✅ thêm dòng này
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
    <GradientBox pt={100} pb={62} bgColor="var(--mantine-color-brand-navy-6)">
      <Container size="xl">
        <Flex wrap="wrap" justify="center" columnGap={{ base: 60, sm: 30 }} rowGap={60}>
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