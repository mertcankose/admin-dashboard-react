import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Button from '../components/button/button'
import NavigationButton from '../components/navigation/navigation-button'
import Navigation from '../components/navigation/navigation'
import { Dashboardİcon } from '../components/icons'
import NavigationRight from '../components/navigationRight/navigation-right-first'
import ThemeButton from '../components/themeButton/theme-button'
import Stack from '../components/stack/stack'


export default {
  title: 'Buttons',
  decorators: [withKnobs]
}

export const Normal = () => <Button>Save</Button>

export const Theme = () => (
  <div>
    <Stack column gap={20}>
      <ThemeButton>Create</ThemeButton>
      <ThemeButton full>Create Full</ThemeButton>
      <ThemeButton full big>
        Create Event
      </ThemeButton>
    </Stack>
    <p>next to</p>
    <Stack gap={40}>
      <ThemeButton>Create</ThemeButton>
      <ThemeButton full>Create Full</ThemeButton>
      <ThemeButton full big>
        Create Event
      </ThemeButton>
    </Stack>
  </div>
)

export const NavButton = () => (
  <NavigationButton>
    <Dashboardİcon />
  </NavigationButton>
)

export const Nav = () => {
  const flat = boolean("Flat",false)
  return <Navigation flat = {flat} selectedKey="files" />
}

export const NavRight = () => <NavigationRight />

