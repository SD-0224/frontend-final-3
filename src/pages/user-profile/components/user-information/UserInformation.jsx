import { BorderedBottomTitle } from '../bordered-title'
import { CustomInput } from '../../../../components/custom-input';
import { Box } from '@mui/material';
import { CustomButton } from '../../../../components/custom-button';
import Avatar from '@mui/material/Avatar';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { UploadButton } from '../upload-button';
import { useDataContext } from '../../../../contexts';

export const UserInformation = () => {
    const { user } = useDataContext();

    const styles = {
        marginBlock: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        alignItems: "end", gap: "8px",
        '@media (max-width: 768px)': {
            "&": {
                gridTemplateColumns: "1fr"
            },
            '&>div': {
                gridColumn: "span 1 !important",
            }
        },
    };

    const personalInputsList = [
        {
            label: "First Name",
            placeholder: "John",
            type: "text",
            span: 1,
            required: true,
            value: user.firstName,
        },
        {
            label: "Last Name",
            placeholder: "Doe",
            type: "text",
            span: 1,
            required: true,
            value: user.lastName,
        },
        {
            label: "Email",
            placeholder: "Johndoe@johndoe.com",
            type: "email",
            span: 2,
            required: true,
            value: user.email,
        },
        {
            label: "Mobile Number",
            placeholder: "+11",
            type: "text",
            span: 1,
            required: false,
            value: "+11",
        },
        {
            label: null,
            placeholder: "202-555-0114",
            type: "number",
            span: 1,
            required: false,
            value: user.mobile,
        },
        {
            label: "Date of birth",
            placeholder: "DD/MM/YYYY",
            type: "date",
            span: 1,
            required: false,
        },
    ];

    const passwordInputsList = [
        {
            label: "Current Password",
            placeholder: "***",
            type: "password",
            span: 1,
        },
        {
            label: "New Password",
            placeholder: "***",
            type: "password",
            span: 1,
        },
        {
            label: "Confirm Password",
            placeholder: "***",
            type: "password",
            span: 1,
        },
    ];

    return (
        <form method='post'>
            <BorderedBottomTitle title={"Personal Information"} />

            <Box sx={{
                display: "flex", alignItems: "end", gap: "16px", marginTop: "36px",
                '@media (max-width: 600px)': {
                    '&': { flexDirection: "column", alignItems: "center" }
                }
            }}>
                <Avatar alt="Remy Sharp" src="/logo.png" sx={{ width: "80px", height: "80px" }} />
                <Box sx={{ display: "flex", alignItems: "end", gap: "16px" }}>
                    <UploadButton style={{ width: "120px" }} label={"Upload"} />
                    <CustomButton style={{ width: "120px" }} startIcon={<DeleteOutlineOutlinedIcon />} label={"Delete"} color={'#B00020'} variant='outlined' />
                </Box>
            </Box>

            <Box sx={styles}>
                {
                    personalInputsList?.map((input) => (
                        <CustomInput key={input.label} {...input} style={{ gridColumn: `span ${input.span}` }} />
                    ))
                }
            </Box>

            <BorderedBottomTitle title={"Change Password"} />

            <Box sx={styles}>
                {
                    passwordInputsList?.map((input) => (
                        <CustomInput key={input.label} {...input} style={{ gridColumn: input.span }} />
                    ))
                }
            </Box>

            <CustomButton variant='contained' label={"Save Changes"} type="submit" style={{ width: "fit-content", display: "block", marginInlineStart: "auto" }} />
        </form>
    )
}