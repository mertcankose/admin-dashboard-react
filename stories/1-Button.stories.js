import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import { Dashboardİcon } from '../components/icons'
import NavigationRight from '../components/navigation-right'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

export default {
  title: 'Buttons'
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

export const Nav = () => <Navigation selectedKey="files" />

export const NavRight = () => <NavigationRight />
