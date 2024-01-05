"use client"

import { Anchor, Drawer, Flex, Paper, ScrollArea, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import classes from './Project.module.css';
import { useDisclosure } from '@mantine/hooks';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Skill } from '../WorkInfoContainer/Skill/Skill';
import { SiNestjs } from 'react-icons/si';

export interface ProjectProps {
    icon: any,
    title: string,
} 

export function Project({ icon, title } : ProjectProps) {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <Paper className={classes.root} py="md" bg="gray.2" radius="lg" onClick={open}>
                <Flex direction="column" align="center" gap={10}>
                    {icon}
                    <Text fw="bolder">{title}</Text>
                </Flex>
            </Paper>
            <Drawer 
                position="right" 
                opened={opened} 
                onClose={close} 
                title={<Title c="indigo" order={3}>{title}</Title>}
                overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
            >
                <ScrollArea offsetScrollbars style={{
                    height: "calc(100vh - 80px)"
                }}>
                    <Carousel withIndicators height={200}>
                        <CarouselSlide>1</CarouselSlide>
                        <CarouselSlide>2</CarouselSlide>
                        <CarouselSlide>3</CarouselSlide>
                        <CarouselSlide>4</CarouselSlide>
                        <CarouselSlide>5</CarouselSlide>
                    </Carousel>
                    <Flex my={15} gap="sm" wrap="wrap">
                        <Skill icon={<SiNestjs />} skill="NestJS" />
                        <Skill icon={<SiNestjs />} skill="NestJS" />
                        <Skill icon={<SiNestjs />} skill="NestJS" />
                    </Flex>
                    <Text py={15}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain  this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</Text>
                    <Stack>
                        <Text fz={18} tt="uppercase" fw={900} c="indigo">Links</Text>
                        <Anchor href="https://mantine.dev/" target="_blank">
                            Github
                        </Anchor>
                        <Anchor href="https://mantine.dev/" target="_blank">
                            Github
                        </Anchor>
                    </Stack> 
                </ScrollArea>
        </Drawer>
        </div>
    );
}
