import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from "../components/navigation"
import { Dashboardİcon } from '../components/icons'
import NavigationRight from "../components/navigation-right";

export default {
  title: 'Buttons'
}

export const Normal = () => <Button>Save</Button>

export const NavButton = () => <NavigationButton>
  <Dashboardİcon />
</NavigationButton>

export const Nav = () => <Navigation selectedKey="files"/>

export const NavRight = () => <NavigationRight/>



 
