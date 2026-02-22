'use client';

import React from 'react';
import { Box, Group, Stack, Text, Anchor, Flex, Divider, Image } from '@mantine/core';
import { IconPhone, IconMapPin, IconMail, IconClock } from '@tabler/icons-react';

import classes from './Footer.module.css';

type LinkItem = { label: string; href: string };
type LinkColumn = { title: string; links: LinkItem[] };

const FOOTER_LINKS: LinkColumn[] = [
  {
    title: 'Chương trình học',
    links: [
      { label: 'IB Diploma Programme (SL & HL)', href: '#ibdp' },
      { label: 'Advanced Placement (AP)', href: '#ap' },
      { label: 'Cambridge AS & A Level', href: '#alevel' },
      { label: 'Cambridge IGCSE', href: '#igcse' },
      { label: 'Lộ trình cá nhân hóa', href: '#roadmap' },
    ],
  },
  {
    title: 'Về AlgoCore',
    links: [
      { label: 'Đội ngũ giáo viên', href: '#teachers' },
      { label: 'Phương pháp giảng dạy', href: '#method' },
      { label: 'Blog học thuật', href: '/news' },
      { label: 'Tuyển dụng', href: '#careers' },
      { label: 'Liên hệ tư vấn', href: '#contact' },
    ],
  },
];

const CONTACTS = [
  {
    icon: IconMapPin,
    label: 'Quận 2, TP. Hồ Chí Minh (Offline & Online toàn quốc)',
    href: '#location',
  },
  { icon: IconPhone, label: '0815 125 814', href: 'tel:+84815 125 814' },
  {
    icon: IconMail,
    label: 'algocore.edu@gmail.com',
    href: 'mailto:algocore.edu@gmail.com',
  },
  {
    icon: IconClock,
    label: '9:00 – 18:30 (Thứ 2 – Chủ nhật)',
    href: '#hours',
  },
];

export default function Footer() {
  return (
    <Box component="footer" className={classes.outer}>
      {/* Full width: no Container wrapper */}
      <Box className={classes.inner}>
        <Flex className={classes.layout} justify="space-between" gap={40}>
          {/* LEFT: Logo image + positioning */}
          <Stack gap={10} className={classes.brandCol}>
            <Anchor href="/" underline="never" className={classes.logoLink}>
              <Image
                src="/images/horizontal-logo.png"
                alt="AlgoCore Education"
                className={classes.logoImg}
                fit="contain"
              />
            </Anchor>

            <Text className={classes.desc}>
              Trung tâm luyện thi chương trình quốc tế:
              <br />
              <b>IBDP – AP – AS/A Level – IGCSE</b>.
              <br />
              Định hướng điểm cao, lộ trình rõ ràng và tư duy học thuật vững chắc.
            </Text>
          </Stack>

          {/* MIDDLE: Link columns */}
          <Group align="flex-start" gap={46} className={classes.linksWrap} wrap="wrap">
            {FOOTER_LINKS.map((col) => (
              <Stack key={col.title} gap={10} className={classes.linkCol}>
                <Text className={classes.linkTitle}>{col.title}</Text>

                <Stack gap={6}>
                  {col.links.map((l) => (
                    <Anchor
                      key={l.label}
                      href={l.href}
                      className={classes.link}
                      underline="never"
                    >
                      {l.label}
                    </Anchor>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Group>

          {/* RIGHT: Contacts */}
          <Stack gap={10} className={classes.contactCol}>
            <Text className={classes.linkTitle}>Liên hệ</Text>

            <Stack gap={10}>
              {CONTACTS.map((c) => {
                const Icon = c.icon;
                return (
                  <Group key={c.label} gap={10} className={classes.contactRow}>
                    <Icon size={16} className={classes.contactIcon} />
                    <Anchor
                      href={c.href}
                      className={classes.contactLink}
                      underline="never"
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    >
                      {c.label}
                    </Anchor>
                  </Group>
                );
              })}
            </Stack>
          </Stack>
        </Flex>

        <Divider className={classes.divider} />

        <Flex justify="space-between" align="center" className={classes.bottom}>
          <Text className={classes.copy}>
            © {new Date().getFullYear()} AlgoCore Education. All rights reserved.
          </Text>
          <Group gap={14}>
            <Anchor href="/privacy" className={classes.bottomLink} underline="never">
              Privacy Policy
            </Anchor>
            <Anchor href="/terms" className={classes.bottomLink} underline="never">
              Terms & Conditions
            </Anchor>
          </Group>
        </Flex>
      </Box>
    </Box>
  );
}