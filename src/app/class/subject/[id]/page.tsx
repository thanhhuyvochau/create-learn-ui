'use client';

import {
  CardLoadingSkeleton,
  ClassCardWrapper,
  ClassHeaderPage,
  PaginationBar,
} from '@/components';
import { useClassPublicQuery } from '@/hooks';
import { subjectApiClient } from '@/api';

import { Alert, Center, Container, Flex, Text } from '@mantine/core';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Subject } from '@/types';

const SubjectClassPage = () => {
  const [page, setPage] = useState(0);
  const params = useParams();
  const [subject, setSubject] = useState<Subject | null>(null);

  const subjectId = params.id as string;

  const { classes, totalPages, isLoading, error } = useClassPublicQuery({
    page,
    size: 10,
    subjectId: Number(subjectId),
  });

  useEffect(() => {
    subjectApiClient.getById(subjectId).then((response) => {
      if (response) {
        setSubject(response.data);
      }
    });
  }, [subjectId]);

  if (isLoading) {
    return (
      <Center>
        <CardLoadingSkeleton />
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Alert color="red" title="Error" variant="light">
          <Text>Something wrong, please try again?</Text>
        </Alert>
      </Center>
    );
  }

  return (
    <Container fluid>
      <ClassHeaderPage
        image="/images/back-ground-class.png"
        title={subject?.name || 'Chương Trình Quốc Tế Tại AlgoCore Education'}
        description={
          subject?.description ||
          'Học theo nhóm nhỏ tinh gọn, lộ trình cá nhân hoá và chiến lược làm bài bám sát syllabus. Tập trung cải thiện điểm số qua luyện past papers/FRQ, feedback chi tiết và theo sát tiến độ.'
        }
        desktopOnly
      />

      <ClassHeaderPage
        image="/images/back-ground-class.png"
        title={subject?.name || 'Chương Trình Quốc Tế Tại AlgoCore Education'}
        description={
          subject?.description ||
          'Nhóm nhỏ • cá nhân hoá lộ trình • luyện thi theo syllabus. Rèn kỹ năng làm bài và nâng điểm bằng đề thi chuẩn quốc tế, có theo dõi tiến độ và phản hồi rõ ràng.'
        }
        mobileOnly
      />
      <Center my={56}>
        <Flex wrap="wrap" gap={56} maw={1200} justify="center">
          {classes.map((classItem) => (
            <ClassCardWrapper classItem={classItem} key={classItem.id} />
          ))}
        </Flex>
      </Center>

      <PaginationBar
        totalPages={totalPages}
        pageZeroBased={page}
        onChangeZeroBased={setPage}
      />
    </Container>
  );
};
export default SubjectClassPage;
