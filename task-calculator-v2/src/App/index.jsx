import React, {lazy, Suspense} from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"

import {HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE, THEME_LIGHT} from '@/constants'

import Loader from '@/components/Loader'
import {SettingsWrapper} from "@/pages/Settings"
import GlobalStyles from "@/globalStyles"
import {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux"

import {ThemeLight, ThemeDark} from '@/components/theme'

const HomePage = lazy(() => import('@/pages/Home'))

export const App = () => {
  const theme = useSelector(state => state.theme.theme)
  return (
    <ThemeProvider theme={theme === THEME_LIGHT ? ThemeLight : ThemeDark}>
      <Suspense fallback={<Loader/>}>
         <HashRouter>
          <Routes>
            <Route
              path={HOME_PAGE_ROUTE}
              element={<HomePage />}
            />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={<SettingsWrapper />}
            />
          </Routes>
         </HashRouter>
      </Suspense>
      <GlobalStyles/>
    </ThemeProvider>
  )
}
