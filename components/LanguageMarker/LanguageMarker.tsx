import { HoverCard, HoverCardTarget, HoverCardDropdown, Text, Badge } from "@mantine/core";
import classes from './LanguageMarker.module.css';

export interface LanguageMarkerProps {
  name: string,
  description: string,
} 

export function LanguageMarker({ name, description } : LanguageMarkerProps) {

  return (
    <HoverCard width={280} shadow="md">
        <HoverCardTarget>
            <Badge 
                className={classes.badge} 
                size="lg" 
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 90 }}
            >
                {name}
            </Badge>
        </HoverCardTarget>
        <HoverCardDropdown>
          <Text size="sm">{description}</Text>
        </HoverCardDropdown>
      </HoverCard>
  );
}
