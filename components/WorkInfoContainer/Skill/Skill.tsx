import { Group, Paper, Text } from '@mantine/core';
import React from 'react';

export interface SkillProps {
    skill: String,
    icon: React.ReactNode,
} 

export function Skill({ skill, icon } : SkillProps) {
  return (
    <Paper radius={5} py={5} px={10} c="white" bg="cyan">
        <Group>{icon}<Text lh="lg">{skill}</Text></Group>
    </Paper>
  );
}