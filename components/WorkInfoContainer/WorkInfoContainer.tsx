import { Stack, Blockquote, Paper, Text, Flex, Grid, GridCol, Group } from "@mantine/core";
import { BiLogoAdobe, BiSolidQuoteRight } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { Education } from "./Education/Education";
import { Skill } from "./Skill/Skill";
import { Project } from "../Project/Project";
import { career, projects, quotes, skills } from '../../data';
import moment from "moment";

export function WorkInfoContainer() {

  return (
    <Stack gap={24}>
        <Blockquote color="blue" cite="- Me" icon={<BiSolidQuoteRight />} mt="xs" radius="lg">
          {quotes.about}
        </Blockquote>
        <Blockquote color="yellow" icon={<BsStarFill />} mt="xs" radius="lg">
          {quotes.dream}
        </Blockquote>
        <Education />
        <Paper p="xl" pl={40} radius="lg" bg="indigo.1">
          <Text py={10} mt={-25} ml={-15} fz={23} tt="uppercase" fw={900} c="indigo">Employment history</Text>
          {career.map(c => (
            <div key={c.title}>
              <Text size="md" fw="bolder">{c.title}</Text>
              <Text size="xs" c="gray.7">
                {moment(c.from).format('MMMM YYYY')} - {!!c.to ? moment(c.to).format('MMMM YYYY') : 'Present'}
              </Text>
              <Text size="sm" mt="xs">
                {c.description}
              </Text>
            </div>
          ))}
        </Paper>
        <Stack gap={0}>
          <Text fz={23} tt="uppercase" fw={900} c="indigo">Skills</Text>
          <Flex gap="sm" wrap="wrap">
            {skills.map(s => <Skill key={s.name} icon={<s.icon />} skill={s.name} />)}
          </Flex>
        </Stack>
        <Stack gap={0}>
          <Text fz={23} tt="uppercase" fw={900} c="indigo">Projects</Text>
          <Grid >
           {projects.map(p => (
              <GridCol key={p.name} span={3}>
                <Project title={p.name} icon={<BiLogoAdobe />} />
              </GridCol>    
           ))}
           
          </Grid>
        </Stack>
    </Stack>
  );
}
