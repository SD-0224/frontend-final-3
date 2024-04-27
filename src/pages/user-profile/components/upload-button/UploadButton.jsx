import { CustomButton } from "../../../../components/custom-button"
import { styled } from '@mui/material/styles';
export const UploadButton = ({ ...props }) => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <CustomButton {...props} component="label" role={undefined} variant="contained">
            <VisuallyHiddenInput type="file" />
        </CustomButton>
    )
}