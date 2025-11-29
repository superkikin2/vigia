import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {Card, Typography, Chip} from '@mui/material';
import { HiSparkles } from "react-icons/hi";

export default function BasicTimeline() {

  return (
    <Timeline
      sx={{
        ml: 0,
        pl: 0,
        '& .MuiTimelineItem-root:before': {
          display: 'none',
        },
      }}
    >
      <Typography variant="body2" gutterBottom fontWeight="bold">
        Hoy
      </Typography>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "var(--primary-blue)" }}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="caption" gutterBottom fontWeight="bold">
            08:30
          </Typography>
          <Card variant="outlined" className="p-3">
            <Typography variant="body1" gutterBottom fontWeight="bold">
              Seguimiento semanal F110
            </Typography>
            <Chip 
              label={
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <HiSparkles />
                  Resumen de la reunión disponible
                </span>
              }
              variant="outlined"
              sx={{ 
                  backgroundColor: "var(--primary-blue-hover)",
                  color: "var(--primary-blue)",              
                  borderColor: "var(--primary-blue-hover)",
                  fontWeight: 'bold', 
              }}
            />
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Typography>
            <Chip 
              label="Ver resumen"
              variant="outlined"
              sx={{ 
                  backgroundColor: "var(--background-blue)",
                  color: "#fff",              
                  borderColor: "var(--background-blue)",
                  fontWeight: 'bold',  
              }}
            />
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "var(--primary-blue)" }}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="caption" gutterBottom fontWeight="bold">
            08:30
          </Typography>
          <Card variant="outlined" className="p-3">
            <Typography variant="body1" gutterBottom fontWeight="bold">
              Punto de control
            </Typography>
            <Chip 
              label="Pendiente"
              variant="outlined"
              sx={{ 
                  backgroundColor: "var(--background-orange)",
                  color: "var(--text-orange)",               
                  borderColor: "var(--background-orange)",
                  fontWeight: 'bold',  
              }}
            />
            <Typography variant="body2" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Typography>
            <Chip 
              label="Conectarse"
              variant="outlined"
              sx={{ 
                  backgroundColor: "var(--background-blue)",
                  color: "#fff",               
                  borderColor: "var(--background-blue)",
                  fontWeight: 'bold',  
              }}
            />
          </Card>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "var(--primary-blue)" }}/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="caption" gutterBottom fontWeight="bold">
            13:00
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}