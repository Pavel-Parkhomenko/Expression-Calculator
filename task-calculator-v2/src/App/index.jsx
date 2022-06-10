import React, {Suspense} from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"
import {
  DARK_COLORS,
  HOME_CLASSES_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LIGHT_COLORS,
  SETTINGS_PAGE_ROUTE,
  THEME_LIGHT,
} from '@/constants'
import Loader from '@/components/Loader'
import GlobalStyles from "@/globalStyles"
import {ThemeProvider} from "styled-components"
import {useSelector} from "react-redux"
import { Settings } from "@/pages/Settings"
import { Home } from "@/pages/HomeFunctions"
import { HomeClasses } from "@/pages/HomeClasses"
import theme from "@/theme"

export const App = () => {
  const myTheme = useSelector(state => state.theme.theme)
  console.log(myTheme === THEME_LIGHT)

  return (
    <ThemeProvider theme={myTheme === THEME_LIGHT
      ? {...theme, ...LIGHT_COLORS}
      : {...theme, ...DARK_COLORS}}>

      <GlobalStyles />
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
    </ThemeProvider>
  )
}
