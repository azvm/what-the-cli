const DEFAULT_LANGUAGE_CODE = "en-us"
const LANGUAGE_CODE_STORAGE = "language"

const DEFAULT_FONT_SIZE = 16
const FONT_SIZE_STORAGE = "fontSize"

const DEFAULT_DARK_MODE = false
const DARK_MODE_STORAGE = "darkMode"

const MIN_FONT_SIZE = 10
const MAX_FONT_SIZE = 20

const app = new Vue({
  el: "#app",

  data: {
    navBarActive: false,
    languageBrowserActive: false,

    languages: LANGUAGES,

    currentLanguageCode: null,
    currentFontSize: null,
    darkModeActive: null,
  },

  computed: {
    currentLanguage() {
      return this.languages[this.currentLanguageCode]
    },

    canIncreaseFontSize() {
      return this.currentFontSize < MAX_FONT_SIZE
    },
    canDecreaseFontSize() {
      return this.currentFontSize > MIN_FONT_SIZE
    },
  },

  methods: {
    setLanguage(languageCode) {
      this.currentLanguageCode = languageCode

      this.saveLanguage()

      document.documentElement.lang = this.currentLanguageCode
      document.title = this.currentLanguage.title
    },
    resetLanguage() {
      this.setLanguage(DEFAULT_LANGUAGE_CODE)
    },
    saveLanguage() {
      localStorage.setItem(LANGUAGE_CODE_STORAGE, this.currentLanguageCode)
    },
    loadLanguage() {
      if (!localStorage.hasOwnProperty(LANGUAGE_CODE_STORAGE)) {
        this.resetLanguage()
      }
      else {
        try {
          this.setLanguage(localStorage.getItem(LANGUAGE_CODE_STORAGE))
        } catch {
          this.resetLanguage()
          console.error("Could not load language, reset to default")
        }
      }
    },

    setFontSize(fontSize) {
      if (fontSize < MIN_FONT_SIZE || fontSize > MAX_FONT_SIZE) {
        return
      }

      this.currentFontSize = fontSize

      this.saveFontSize()

      document.documentElement.style.fontSize = `${this.currentFontSize}px`
    },
    resetFontSize() {
      this.setFontSize(DEFAULT_FONT_SIZE)
    },
    saveFontSize() {
      localStorage.setItem(FONT_SIZE_STORAGE, this.currentFontSize)
    },
    loadFontSize() {
      if (!localStorage.hasOwnProperty(FONT_SIZE_STORAGE)) {
        this.resetFontSize()
      }
      else {
        try {
          this.setFontSize(JSON.parse(localStorage.getItem(FONT_SIZE_STORAGE)))
        } catch {
          this.resetFontSize()
          console.error("Could not load font size, reset to default")
        }
      }
    },

    setDarkMode(darkModeActive) {
      this.darkModeActive = darkModeActive

      this.saveDarkMode()
    },
    resetDarkMode() {
      this.setDarkMode(DEFAULT_DARK_MODE)
    },
    saveDarkMode() {
      localStorage.setItem(DARK_MODE_STORAGE, this.darkModeActive)
    },
    loadDarkMode() {
      if (!localStorage.hasOwnProperty(DARK_MODE_STORAGE)) {
        this.resetDarkMode()
      }
      else {
        try {
          this.setDarkMode(JSON.parse(localStorage.getItem(DARK_MODE_STORAGE)))
        } catch {
          this.resetDarkMode()
          console.error("Could not load dark mode, reset to default")
        }
      }
    },
  },

  created() {
    this.loadLanguage()
    this.loadFontSize()
    this.loadDarkMode()
  },
})
