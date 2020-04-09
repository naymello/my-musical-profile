import { showImages, showText, showTheme } from './functions.js'
import './picture.scss'

const url = window.location

const type = new URLSearchParams(url.search).get('type')
const timeRange = new URLSearchParams(url.search).get('time_range')
const theme = new URLSearchParams(url.search).get('theme')

const makeImage = async () => {
  const topMusicRes = await fetch(`/topmusic?type=${type}&time_range=${timeRange}`)
  const userTopMusic = await topMusicRes.json()

  const firstNameRes = await fetch('/name')
  const userFirstName = await firstNameRes.json()

  showImages(type, userTopMusic)
  showText(type, timeRange, userFirstName, userTopMusic)
  showTheme(theme)
}

makeImage()