const DEFAULT_LANGUAGE_CODE = "en-us"
const LANGUAGE_CODE_STORAGE = "language"
const DEFAULT_DARK_MODE = false
const DARK_MODE_STORAGE = "darkMode"

const app = new Vue({
  el: "#app",
  data: {
    navBarActive: false,
    languageBrowserActive: false,
    darkModeActive: null,
    languages: LANGUAGES,
    currentLanguageCode: null,
  },
  computed: {
    currentLanguage() {
      return this.languages[this.currentLanguageCode]
    }
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
    }
  },
  created() {
    this.loadLanguage()
    this.loadDarkMode()
  }
})
