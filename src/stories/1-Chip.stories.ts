import { NizChip } from '@notiz/ngx-design';
import { withA11y } from '@storybook/addon-a11y';
import { RouterModule } from '@angular/router';

export default {
  title: 'Chip',
  component: NizChip,
  decorators: [withA11y],
};

export const withText = () => ({
  moduleMetadata: {
    declarations: [NizChip], // Not needed when not using template
    imports: [RouterModule],
  },
  template: '<niz-chip>Hello</niz-chip>',
});
