import React, {Suspense} from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"

import {HOME_CLASSES_PAGE_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE, THEME_LIGHT} from '@/constants'

import Loader from '@/components/Loader'
import GlobalStyles from "@/globalStyles"
import {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux"

import {ThemeLight, ThemeDark} from '@/components/theme'
import { Settings } from "@/pages/Settings"
import { Home } from "@/pages/HomeFunctions"
import { HomeClasses } from "@/pages/HomeClasses"

export const App = () => {
  const theme = useSelector(state => state.theme.theme)
  return (
    <ThemeProvider theme={theme === THEME_LIGHT ? ThemeLight : ThemeDark}>
      <Suspense fallback={<Loader/>}>
        <HashRouter>
         <Routes>
           <Route
             path={HOME_PAGE_ROUTE}
             element={<Home />}
           />
           <Route
             path={HOME_CLASSES_PAGE_ROUTE}
             element={<HomeClasses />}
           />
           <Route
             path={SETTINGS_PAGE_ROUTE}
             element={<Settings />}
           />
         </Routes>
        </HashRouter>
      </Suspense>
      <GlobalStyles/>
    </ThemeProvider>
  )
}
