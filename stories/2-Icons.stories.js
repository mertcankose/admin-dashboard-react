import React from 'react'
import * as Icons from '../components//icons'
import Photo from '../components/photo/photo'
import Stack from '../components/stack/stack'
import ProfileBox from "../components/profileBox/profileBox"
import Search from "../components/search/searchSection"

export default {
  title: 'Icons'
}

export const Icon = () => (
  <div className="icons">
    <Icons.Tickİcon />
    <Icons.Tableİcon />
    <Icons.Shape />
    <Icons.Settingsİcon />
    <Icons.Sessionsİcon />
    <Icons.Searchİcon />
    <Icons.PaperPlaneİcon />
    <Icons.Notificationİcon />
    <Icons.Meetingsİcon />
    <Icons.Logo />
    <Icons.Fill2 />
    <Icons.FilesBoardİcon />
    <Icons.Dashboardİcon />
    <Icons.Conversationsİcon />
    <Icons.Cardsİcon />
    <Icons.Calendarİcon />
    <Icons.BaseNotify />
  </div>
)

export const Profile = () => (
  <Stack gap={80}>
    <Photo alt='me'/>
     <Icons.ProfilePhoto/>
  </Stack>
)

export const ProfileSection = () => (
  <ProfileBox/>
)

export const SearchSection = () => (
  <Search/>
)