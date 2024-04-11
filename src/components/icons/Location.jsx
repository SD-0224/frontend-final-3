export const Location = function ({
    width = 24,
    height = 24,
    borderColor = "#13101E",
    borderSize = 2,
    fillColor = "none",
    ...props
}) {
    return (
        <svg
            {...{ width, height }}
            {...props}
            viewBox={`0 0 ${width} ${height}`}
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_1_7071)">
                <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                    stroke={borderColor}
                    stroke-width={borderSize}
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                    stroke={borderColor}
                    stroke-width={borderSize}
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1_7071">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
