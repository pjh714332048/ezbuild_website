import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

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
    <Box sx={{ mt: 3, width: '100%' }}>
      {contactRows.map(row => (
        <ContactRow key={row.label} label={row.label} value={row.value} external={row.external} />
      ))}
      <Box sx={{ display: 'flex', alignItems: 'stretch', px: 2.5, py: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flex: 1 }}>
          <ContactLabel>INSTAGRAM</ContactLabel>
          <ContactValue>
            ezBuild
            <ExternalLink />
          </ContactValue>
        </Box>

        <Box
          sx={{
            borderLeft: '1px solid #FFFFFF33',
            pl: 2,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
            flex: 1,
          }}
        >
          <ContactLabel>小红书</ContactLabel>
          <ContactValue>EZBUILD</ContactValue>
        </Box>
      </Box>
    </Box>
    <Divider sx={{ borderColor: '#FFFFFF33' }} />
  </>
);

export default ContactUsInfo;
