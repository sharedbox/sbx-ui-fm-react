import React from "react";
import { SbxNavbar } from '../../../src';
import { StoryObj, Meta } from '@storybook/react';


const meta : Meta<typeof SbxNavbar> = {
  title: 'UI/SbxNavbar',
  component: SbxNavbar
}

export default meta;
type Story = StoryObj<typeof SbxNavbar>;

export const Primary : Story = {
  args: {

  }
}

