const DEFAULT_LANGUAGE_CODE = "en_us"
const LANGUAGE_CODE_STORAGE = "language"
const DEFAULT_DARK_MODE = false
const DARK_MODE_STORAGE = "darkMode"

const app = new Vue({
  el: "#app",
  data: {
    navBarActive: false,
    languageBrowserActive: false,
    darkModeActive: DEFAULT_DARK_MODE,
    languages: LANGUAGES,
    currentLanguageCode: DEFAULT_LANGUAGE_CODE,
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
    saveLanguage() {
      window.localStorage.setItem(LANGUAGE_CODE_STORAGE, this.currentLanguageCode)
    },
    loadLanguage() {
      if (!window.localStorage.hasOwnProperty(LANGUAGE_CODE_STORAGE)) {
        this.setLanguage(DEFAULT_LANGUAGE_CODE)
      }
      else {
        this.setLanguage(window.localStorage.getItem(LANGUAGE_CODE_STORAGE))
      }
    },

    setDarkMode(darkModeActive) {
      this.darkModeActive = darkModeActive
      this.saveDarkMode()
    },
    saveDarkMode() {
      window.localStorage.setItem(DARK_MODE_STORAGE, this.darkModeActive)
    },
    loadDarkMode() {
      if (!window.localStorage.hasOwnProperty(DARK_MODE_STORAGE)) {
        this.setDarkMode(DEFAULT_DARK_MODE)
      }
      else {
        this.setDarkMode(JSON.parse(window.localStorage.getItem(DARK_MODE_STORAGE)))
      }
    }
  },
  mounted() {
    this.loadLanguage()
    this.loadDarkMode()
  }
})
