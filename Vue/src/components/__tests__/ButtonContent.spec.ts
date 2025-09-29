import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ButtonContent from '../ButtonContent.vue';

describe('ButtonContent', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonContent);
    expect(wrapper.find('#container')).toBeTruthy();
  });
});
