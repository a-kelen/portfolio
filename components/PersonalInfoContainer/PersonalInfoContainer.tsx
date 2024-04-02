import { Stack, Image, Text, AspectRatio, Group } from "@mantine/core";
import { Contacts } from "../Contacts/Contacts";
import { LanguageMarker } from "../LanguageMarker/LanguageMarker";
import { BsCalendar3 } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { bio } from '../../data';
import moment from 'moment';

export function PersonalInfoContainer() {

  return (
    <Stack m={10} gap={0}>
        <AspectRatio ratio={1}>
            <Image
                mb={10}
                fit="contain"
                src="me.jpg"
                alt=""
            />
        </AspectRatio>
        <Stack gap={5}>
            <Text
                fz={27}
                fw={900}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 90 }}
            >
                {bio.firstName} {bio.lastName}
            </Text>
            <Text fw={600} c="indigo"><BsCalendar3 /> {moment(bio.birthday).format('LL')}</Text>
            <Text fw={600} c="indigo"><HiOutlineLocationMarker /> {bio.country}, {bio.city}</Text>
            <Group my={8}>
                {bio.languages.map(l => 
                    (<LanguageMarker key={l.shortName} name={l.shortName} description={l.description} />)
                )}
            </Group>
            <Contacts />
        </Stack>
    </Stack>
  );
}
