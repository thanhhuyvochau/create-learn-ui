'use client';

import {
  Button,
  Grid,
  Stack,
  Text,
  Title,
  Image,
  BackgroundImage,
  Flex,
  Box,
  Container,
} from '@mantine/core';
import { ExpertIcons } from '@/components';
import classes from './HeroSection.module.css';

const HERO_CONTENT = {
  mainTitle: 'Chinh Phục Chương Trình',
  subtitlePrefix: 'Quốc Tế Cùng',
  brandName: 'AlgoCore',
  description:
    'Đồng hành cùng học sinh IGCSE, AS/A Level, IB và AP với lộ trình cá nhân hóa, tập trung tối đa vào điểm số và chiến lược thi.',
  ctaText: 'Đăng ký tư vấn ngay',
  expertsText: 'Được thiết kế bởi các chuyên gia hàng đầu:',
  bannerText: 'Special Congressional App Challenge events',
  bannerCtaText: 'Learn More',
} as const;

const handleScrollToFreeClasses = () => {
  const element = document.getElementById('free-classes-section');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const RESPONSIVE_STYLES = {
  titleSize: { sm: '2.57rem', md: '2.78rem', xl: '2.99rem' },
  subtitleSize: { sm: '1.8rem', md: '2.02rem', xl: '2.02rem' },
  leftPadding: { base: '5rem', xxl: '20rem', xl: '25rem' },
} as const;

const Subtitle = (props: { variant: 'desktop' | 'mobile' }) => {
  const isMobile = props.variant === 'mobile';

  return (
    <Title
      fz={isMobile ? '2.02rem' : RESPONSIVE_STYLES.subtitleSize}
      ta={isMobile ? 'center' : undefined}
      c={isMobile ? 'white' : 'brand-navy.6'}
    >
      {HERO_CONTENT.subtitlePrefix}{' '}
      <Text span inherit fw={800} c="brand-teal.6">
        {HERO_CONTENT.brandName}
      </Text>
    </Title>
  );
};

const HeroContent = () => {
  return (
    <>
      <Title fz={RESPONSIVE_STYLES.titleSize} c="brand-navy.6">
        {HERO_CONTENT.mainTitle}
      </Title>

      <Subtitle variant="desktop" />

      <Text fw={500} c="slate.6">
        {HERO_CONTENT.description}
      </Text>

      <Button
        w="fit-content"
        color="brand-teal"
        onClick={handleScrollToFreeClasses}
      >
        {HERO_CONTENT.ctaText}
      </Button>
    </>
  );
};

const DesktopHero = () => (
  <Box className={classes.heroBg}>
    <Grid visibleFrom="smmd" className={classes.heroContent}>
      <Grid.Col span={5}>
        <Stack h="100%" justify="center" pl={RESPONSIVE_STYLES.leftPadding}>
          <HeroContent />
        </Stack>
      </Grid.Col>

      <Grid.Col span={7}>
        <Image
          src="/images/class-banner.png"
          alt="Kids learning coding"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 30% 100%)' }}
          h={540}
        />
      </Grid.Col>
    </Grid>
  </Box>
);

const MobileHero = () => {
  return (
    <BackgroundImage
      src="/images/class-banner.png"
      hiddenFrom="smmd"
      h={540}
      pos="relative"
    >
      {/* overlay */}
      <Box pos="absolute" inset={0} bg="rgba(0,0,0,0.55)" />

      <Flex
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        align="center"
        justify="center"
        px={20}
      >
        <Stack align="center" gap="sm">
          <Title size="2.78rem" ta="center" c="white">
            {HERO_CONTENT.mainTitle}
          </Title>

          <Subtitle variant="mobile" />

          <Text c="slate.0" ta="center" size="lg">
            {HERO_CONTENT.description}
          </Text>

          <Button
            size="sm"
            color="brand-teal"
            onClick={handleScrollToFreeClasses}
          >
            {HERO_CONTENT.ctaText}
          </Button>
        </Stack>
      </Flex>
    </BackgroundImage>
  );
};

const HeroSection = () => {
  return (
    <Container maw="100%" px={0}>
      <Box>
        <DesktopHero />
        <MobileHero />
      </Box>
      <ExpertIcons />
    </Container>
  );
};

export default HeroSection;
