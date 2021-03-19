if (!LANGUAGES)
{
  var LANGUAGES = {}
}

LANGUAGES["ru-ru"] = {
  meta: {
    code: "ru-ru",
    name: "Русский",
    iconURL: "https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg"
  },

  title: "Что за CLI?",
  about: "Краткая сводка на основе",
  languageBrowserTitle: "Язык",
  languageBrowserHelp: "Выбор языка",
  darkModeTogglerHelp: "Светлая/тёмная тема",
  credits: "Сделано с помощью этих замечательных инструментов:",

  specificationsTitle: "Спецификации",
  implementationsTitle: "Реализации",

  cliTitle: "CLI",
  cliExpansion: "Общеязыковая инфраструктура",
  cliDescription: "Спецификация формата исполняемого кода и среды, способной исполнять этот код",

  dotNetTitle: ".NET",
  dotNetDescription: "Ранее .NET Core. Кросс­платформенный потомок .NET Framework с открытым исходным кодом",

  dotNetFrameworkTitle: ".NET Framework",
  dotNetFrameworkDescription: "Реализация CLI от Microsoft для операционной системы Windows",

  dotNetCompactTitle: ".NET Compact Framework",
  dotNetCompactDescription: "Версия .NET Framework для мобильных устройств",

  dotNetMicroTitle: ".NET Micro Framework",
  dotNetMicroDescription: "Версия .NET Framework для встраиваемых систем",

  monoTitle: "Mono",
  monoDescription: "Кросс­платформенная реализация CLI от Ximian с открытым исходным кодом",

  portableDotNetTitle: "Portable.NET",
  portableDotNetDescription: "Кросс­платформенная реализация CLI от Free Software Foundation с открытым исходным кодом",

  vesTitle: "VES",
  vesExpansion: "Система виртуального исполнения",
  vesDescription: "Эта система реализует и обеспечивает соблюдение модели CTS. VES отвечает за загрузку и исполнение программ, написанных для CLI. Она обеспечивает исполнение управляемого кода, используя метаданные для связывания отдельных модулей. VES также называют движком исполнения",

  coreClrTitle: "CoreCLR",
  coreClrDescription: "Потомок CLR",

  clrTitle: "CLR",
  clrExpansion: "Общеязыковая среда исполнения",
  clrDescription: "Движок исполнения от Microsoft. Поддерживает just-in-time (JIT) и ahead-of-time (AOT) стратегии компиляции",

  specialClrTitle: "Специальные версии CLR",
  specialClrDescription: "Облегчённые версии CLR, оптимизированные для устройств с ограниченными ресурсами",

  monoRuntimeTitle: "Mono Runtime",
  monoRuntimeDescription: "Собственный движок исполнения",

  ilrunTitle: "ilrun",
  ilrunDescription: "Собственный движок исполнения. Преобразует код на промежуточном языке (IL) в код преобразованной виртуальной машины (CVM), который затем интерпретирует",

  cilTitle: "CIL",
  cilExpansion: "Общий промежуточный язык",
  cilDescription: "Набор инструкций, понятных для VES",

  msilTitle: "MSIL",
  msilExpansion: "Промежуточный язык Microsoft",
  msilDescription: "Реализация CIL от Microsoft",

  ownIlTitle: "Собственные промежуточные языки",
  ownIlDescription: "Собственные реализации CIL",

  standardLibrariesTitle: "Стандартные библиотеки",
  standardLibrariesDescription: "",

  runtimeInfrastructureLibTitle: "Библиотека инфраструктуры среды исполнения",
  bclTitle: "Библиотека базовых классов (BCL)",
  networkLibTitle: "Сетевая библиотека",
  reflectionLibTitle: "Библиотека рефлексии",
  xmlLibTitle: "Библиотека XML",
  xNumericsLibTitle: "Расширенная числовая библиотека",
  xArrayLibTitle: "Расширенная библиотека массивов",
  varargLibTitle: "Библиотека списков аргументов переменной длины",
  parallelLibTitle: "Библиотека параллелизма",

  coreFxTitle: "CoreFX",
  coreFxDescription: "Потомок FCL",

  fclTitle: "FCL",
  fclExpansion: "Библиотека каркасных классов",
  fclDescription: "Реализация стандартных библиотек от Microsoft. Содержит реализацию BCL и другие переиспользуемые типы",

  specialFclTitle: "Специальные версии FCL",
  specialFclDescription: "Облегчённые версии FCL, оптимизированные для устройств с ограниченными ресурсами",

  ownClassLibrariesTitle: "Собственные библиотеки классов",
  ownClassLibrariesDescription: "Собственные реализации стандартных библиотек",

  ctsTitle: "CTS",
  ctsExpansion: "Общая система типов",
  ctsDescription: "Унифицированная система типов, используемая компиляторами, утилитами и самой CLI. Это модель, определяющая правила, которыми руководствуется CLI во время объявления, использования и управления типами. CTS задаёт каркас, обеспечивающий межъязыковую интеграцию, типобезопасность и высокую производительность исполнения кода",

  clsTitle: "CLS",
  clsExpansion: "Общеязыковая спецификация",
  clsDescription: "Соглашение между проектировщиками языка и проектировщиками фреймворка (библиотеки классов). Определяет подмножество CTS и набор соглашений об использовании",

  ctsImplementationTitle: "Любая реализация VES",
  ctsImplementationDescription: "CTS описывает, какие типы должна поддерживать VES, и как именно она должна с ними работать",

  clsImplementationTitle: "Любой CLI-совместимый язык программирования",
  clsImplementationDescription: "Язык программирования должен удовлетворять CLS, чтобы быть совместимым с CLI",
}
