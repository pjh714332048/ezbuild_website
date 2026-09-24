import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import ContactLabel from './ContactLabel';
import ContactRow from './ContactRow';
import ContactValue from './ContactValue';
import ExternalLink from './ExternalLink';

type ContactRowData = {
  label: string;
  value: string;
  external?: boolean;
};

const contactRows: ContactRowData[] = [
  { label: '邮箱', value: 'mkt@ezbuild.design' },
  { label: '电话', value: '+86 15800877849' },
  { label: 'WHATSAPP', value: '+86 15800877849', external: true },
  { label: '办公室', value: '上海市长宁区通协路399弄虹桥上城8号楼215室' },
];

const ContactUsInfo: React.FC = () => (
  <>
    <Grid container sx={{ mt: 3, width: '100%' }}>
      {contactRows.map(row => (
        <Grid key={row.label} size={12}>
          <ContactRow label={row.label} value={row.value} external={row.external} />
        </Grid>
      ))}
      <Grid size={12}>
        <Grid container sx={{ alignItems: 'stretch', px: 2.5, py: 1.5 }}>
          <Grid container size='grow' sx={{ alignItems: 'flex-start', gap: 2 }}>
            <Grid size='auto'>
              <ContactLabel>INSTAGRAM</ContactLabel>
            </Grid>
            <Grid size='grow'>
              <ContactValue>
                ezBuild
                <ExternalLink />
              </ContactValue>
            </Grid>
          </Grid>

          <Grid
            container
            size='grow'
            sx={{
              alignItems: 'flex-start',
              gap: 2,
              borderLeft: { xs: 'none', sm: '1px solid #FFFFFF33' },
              pl: { xs: 0, sm: 2 },
              pt: { xs: 1.5, sm: 0 },
            }}
          >
            <Grid size='auto'>
              <ContactLabel>小红书</ContactLabel>
            </Grid>
            <Grid size='grow'>
              <ContactValue>EZBUILD</ContactValue>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Divider sx={{ borderColor: '#FFFFFF33' }} />
  </>
);

export default ContactUsInfo;
