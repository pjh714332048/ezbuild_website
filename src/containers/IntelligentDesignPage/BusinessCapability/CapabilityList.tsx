import List from '@mui/material/List';
import { useTranslation } from 'providers/useTranslation';

import CapabilityListItem from './CapabilityListItem';

const capabilityKeys = ['cap1', 'cap2', 'cap3', 'cap4'] as const;

const CapabilityList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <List sx={{ my: 2, py: 4 }}>
      {capabilityKeys.map((key, index) => (
        <CapabilityListItem
          key={key}
          index={index}
          title={t(`intelligentDesign.${key}Title`)}
          description={t(`intelligentDesign.${key}Description`)}
          isLastItem={index === capabilityKeys.length - 1}
        />
      ))}
    </List>
  );
};

export default CapabilityList;
