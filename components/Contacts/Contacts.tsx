"use client";

import { CopyButton, Stack, Tooltip, ActionIcon, Fieldset   , Anchor, Center, Title } from "@mantine/core";
import { IconType } from "react-icons/lib";
import { bio } from '../../data'

export function Contacts() {

  return (
    <Fieldset 
        legend={<Title order={4} c="indigo">Contacts</Title>} 
        p="xs" 
        bg="gray.0"
    >
        <Stack align="flex-start" gap={5}>        
            {bio.contacts.map(c => 
                <Contact key={c.title} Icon={c.icon} link={c.url} text={c.title} />
            )}
        </Stack>
    </Fieldset>
  );
}

interface ContactProps {
    Icon: IconType,
    link: string,
    text: string,
}

function Contact({ Icon, link, text }: ContactProps) {
    return (
        <Center>
            <CopyButton value={link} timeout={3000}>
                {({ copied, copy }) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy'} position="top">
                        <ActionIcon variant="subtle" onClick={copy}>
                        <Icon />
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
            <Anchor size="sm" ml={3} lh="xs" href={link} target="_blank">
                {text}
            </Anchor>
        </Center>
    );
}