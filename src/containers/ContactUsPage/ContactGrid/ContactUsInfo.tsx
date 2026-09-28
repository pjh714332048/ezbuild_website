import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useTranslation } from 'providers/useTranslation';

import ContactLabel from './ContactLabel';
import ContactRow from './ContactRow';
import ContactValue from './ContactValue';
import ExternalLink from './ExternalLink';

type ContactRowData = {
  labelKey: string;
  value: string;
  external?: boolean;
};

type SocialRowData = {
  label: string;
  value: string;
  external?: boolean;
  /** 跳转链接，待补充 */
  href?: string;
};

const ContactUsInfo: React.FC = () => {
  const { t } = useTranslation();

  const contactRows: ContactRowData[] = [
    { labelKey: 'contactUs.info.email', value: 'mkt@ezbuild.design' },
    { labelKey: 'contactUs.info.phone', value: '+86 15800877849' },
    { labelKey: 'WHATSAPP', value: '+86 15800877849', external: true },
    { labelKey: 'contactUs.info.office', value: t('contactUs.info.officeAddress') },
  ];

  const socialRows: SocialRowData[] = [
    {
      label: 'INSTAGRAM',
      value: 'EZBUILD',
      external: true,
      href: 'https://www.instagram.com/ezbuild_ai_house?stkn=MTduOW1ndTA3aWtrYg%3D%3D&utm_source=qr',
    },
    { label: 'X', value: 'EZBUILD', external: true, href: 'https://x.com/ezBuild_aihouse' },
    {
      label: 'YOUTUBE',
      value: 'EZBUILD',
      external: true,
      href: 'https://www.youtube.com/@ezBuild-ai-house',
    },
    {
      label: t('contactUs.info.xiaohongshu'),
      value: 'EZBUILD',
      external: true,
      href: 'https://www.xiaohongshu.com/user/profile/65e4b8b9000000000500a54d?xsec_token=YBieW-Zv6JsKniSf6jty87y30MYBM1USQjqaEaMyIrW9E=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODtHNEU9RkI2NzUyOTgwNjY4OTdFOjpN&apptime=1790217538&share_id=48c222fa0eca4e5eb8f0a1f659bfc872',
    },
  ];

  return (
    <>
      <Grid container sx={{ mt: 3, width: '100%' }}>
        {contactRows.map(row => (
          <Grid key={row.labelKey} size={12}>
            <ContactRow
              label={
                row.labelKey.startsWith('contactUs.')
                  ? t(row.labelKey as 'contactUs.info.email')
                  : row.labelKey
              }
              value={row.value}
              external={row.external}
            />
          </Grid>
        ))}
        <Grid size={12}>
          <Grid container sx={{ px: 2.5, py: 1.5, rowGap: { xs: 1.5, sm: 0 } }}>
            {socialRows.map((row, index) => (
              <Grid
                key={`${row.label}-${index}`}
                size={{ xs: 12, sm: 6 }}
                sx={{
                  borderLeft: { xs: 'none', sm: index % 2 === 1 ? '1px solid #FFFFFF33' : 'none' },
                  pl: { xs: 0, sm: index % 2 === 1 ? 2 : 0 },
                  borderBottom: { xs: 'none', sm: index < 2 ? '1px solid #FFFFFF33' : 'none' },
                  pb: { xs: 0, sm: index < 2 ? 1.5 : 0 },
                  pt: { xs: 0, sm: index < 2 ? 0 : 1.5 },
                }}
              >
                <Link
                  href={row.href || undefined}
                  target='_blank'
                  rel='noopener noreferrer'
                  underline='none'
                  sx={{
                    display: 'block',
                    px: 1.5,
                    py: 1,
                    borderRadius: 1,
                    color: 'inherit',
                    transition: 'background-color 0.2s ease',
                    ['&:hover']: {
                      cursor: 'pointer',
                      backgroundColor: '#FFFFFF1A',
                    },
                  }}
                >
                  <Grid container sx={{ alignItems: 'flex-start', gap: 2 }}>
                    <Grid size='auto'>
                      <ContactLabel>{row.label}</ContactLabel>
                    </Grid>
                    <Grid size='grow'>
                      <ContactValue>
                        {row.value}
                        {row.external && <ExternalLink />}
                      </ContactValue>
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: '#FFFFFF33' }} />
    </>
  );
};

export default ContactUsInfo;
