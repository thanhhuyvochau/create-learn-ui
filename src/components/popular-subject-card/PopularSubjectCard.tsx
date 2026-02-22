'use client';

import React from 'react';
import { Card, Flex, Image, Text, Box } from '@mantine/core';

interface PopularSubjectCardProps {
  name: string;
  imageSrc?: string;
  width?: number;
  height?: number;
  imageSize?: number;
  gap?: number;
  id?: number;
  fontSize?: string | number;
}

const PopularSubjectCard: React.FC<PopularSubjectCardProps> = ({
  name,
  imageSrc,
  width = 294,
  height = 96,
  imageSize = 96,
  gap = 16,
  fontSize = 16,
  id,
}) => {
  return (
    <Card
      id={id?.toString()}
      w={width}
      mih={height}
      withBorder
      radius="lg"
      shadow="sm"
      p="sm"
      style={{
        background: 'var(--mantine-color-surface-1)',
        borderColor: 'var(--mantine-color-surface-3)',
        transition:
          'transform 200ms var(--mantine-transition-easing), box-shadow 200ms var(--mantine-transition-easing), border-color 200ms var(--mantine-transition-easing)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = 'var(--mantine-shadow-md)';
        el.style.borderColor = 'var(--mantine-color-brand-teal-3)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0px)';
        el.style.boxShadow = 'var(--mantine-shadow-sm)';
        el.style.borderColor = 'var(--mantine-color-surface-3)';
      }}
    >
      <Flex align="center" gap={gap} wrap="nowrap">
        {/* Image wrapper to look cleaner on light surfaces */}
        <Box
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: 'var(--mantine-radius-md)',
            overflow: 'hidden',
            background: 'var(--mantine-color-surface-0)',
            border: '1px solid var(--mantine-color-surface-3)',
            flex: `0 0 ${imageSize}px`,
          }}
        >
          <Image
            w={imageSize}
            h={imageSize}
            src={imageSrc}
            alt={name}
            fit="cover"
            fallbackSrc="https://via.placeholder.com/96x96.png?text=Subject"
          />
        </Box>

        <Flex direction="column" gap={6} style={{ flex: 1, minWidth: 0 }}>
          <Text
            fw={700}
            fz={fontSize}
            c="brand-navy.6"
            lineClamp={2}
            style={{ letterSpacing: '0.2px' }}
          >
            {name}
          </Text>
          <Box
            style={{
              width: 42,
              height: 3,
              borderRadius: 99,
              background: 'var(--mantine-color-brand-teal-6)',
              marginTop: 2,
            }}
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default PopularSubjectCard;