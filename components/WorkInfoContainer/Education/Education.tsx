import { Timeline, TimelineItem, Text, Stack } from '@mantine/core';
import { education } from '../../../data';
import moment from 'moment';

export function Education() {
  return (
    <Stack mt="lg">
        <Text fz={23} tt="uppercase" fw={900} c="indigo">Education</Text>
        <Timeline active={1} bulletSize={24} lineWidth={3}>
            {education.map(e => (
                <TimelineItem key={e.title} title={e.title}>
                    <Text c="dimmed" size="sm">{e.location}</Text>
                    <Text size="xs" mt={4}>
                        {moment(e.from).format('MMMM YYYY')} - {!!e.to ? moment(e.to).format('MMMM YYYY') : 'Present'}
                    </Text>
                </TimelineItem>
            ))}
        </Timeline>
    </Stack>
  );
}