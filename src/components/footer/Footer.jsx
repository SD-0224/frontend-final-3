import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';

export const Footer = () => {
    const [smallScreen, setSmallScreen] = useState(true);

    useEffect(() => {
        // Function to update window width
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setSmallScreen(false);
            } else {
                setSmallScreen(true);
            }
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <Accordion defaultExpanded>
            {
                smallScreen &&
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    More about CORA’L
                </AccordionSummary>
            }
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    );
}
