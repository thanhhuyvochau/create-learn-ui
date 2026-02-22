'use client';

import {
  Alert,
  Container,
  Text,
  Flex,
  Center,
} from '@mantine/core';
import { useState } from 'react';
import { useClassPublicQuery } from '@/hooks';
import { ClassCardWrapper, ClassHeaderPage, PaginationBar, CardLoadingSkeleton } from '@/components';

const PAGE_SIZE = 10;

const AllClasses = () => {
  const [page, setPage] = useState(0);

  const { classes, totalPages, isLoading, error } = useClassPublicQuery({
    page,
    size: PAGE_SIZE,
  });

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
        title="Chinh phục chương trình quốc tế cùng AlgoCore"
        description="Lớp nhóm nhỏ/1-1 theo lộ trình IGCSE • AS/A Level • IBDP • AP. Học bám syllabus, luyện exam-style, theo dõi tiến độ và mục tiêu điểm số rõ ràng."
        desktopOnly
      />

      <ClassHeaderPage
        image="/images/back-ground-class.png"
        title="Học đúng lộ trình – Thi đúng trọng tâm"
        description="AlgoCore thiết kế lộ trình cá nhân hoá theo năng lực. Tăng điểm bằng hệ thống bài tập, mock test, feedback chi tiết và hỗ trợ sát sao theo từng buổi học."
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

export default AllClasses;
