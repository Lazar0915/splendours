// Import necessary dependencies
import React from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';

// Define the component's props with TypeScript types
interface CustomButtonProps {
    label: string;
    iconSrc: string;
    onClick?: () => void;
}

const WhiteCustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
    return (
        <Button
            variant="outlined"
            endIcon={
                <Image
                    src={iconSrc}
                    alt="Logo"
                    width={31.67}
                    height={31.67}
                    style={{ filter: 'invert(9%) sepia(15%) saturate(260%) hue-rotate(40deg) brightness(100%) contrast(85%)' }}

                />
            }
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width:'180px',
                height:'45px',
                borderRadius: '1.5rem',
                color: '#DBC6BC',              // Inverted font color to light beige
                fontSize: '15px',
                fontWeight: 400,
                fontFamily: 'Montserrat',
                fontSynthesisWeight: 600,
                backgroundColor: '#283C28',    // Inverted background color to dark green
                borderColor: 'transparent',   // Border color
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#DBC6BC', // Inverted hover background color (light beige)
                    color: '#283C28',           // Inverted hover font color (dark green)
                    borderColor: '#DBC6BC',    // Inverted hover border (matches hover background)
                },
            }}
        >
            {label}
        </Button>



    );
};

export default WhiteCustomButton;
