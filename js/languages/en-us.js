if (!LANGUAGES)
{
  var LANGUAGES = {}
}

LANGUAGES["en-us"] = {
  meta: {
    code: "en-us",
    name: "English (United States)",
    iconURL: "https://lipis.github.io/flag-icon-css/flags/4x3/us.svg"
  },

  title: "What the CLI?",
  about: "Brief summary based on",
  languageBrowserTitle: "Language",
  languageBrowserHelp: "Language selection",
  increaseFontSizeHelp: "Increase font size",
  decreaseFontSizeHelp: "Decrease font size",
  darkModeTogglerHelp: "Light/dark mode",
  credits: "Made with these awesome tools:",

  specificationsTitle: "Specifications",
  implementationsTitle: "Implementations",

  cliTitle: "CLI",
  cliExpansion: "Common Language Infrastructure",
  cliDescription: "A specification for the format of executable code, and the run-time environment that can execute that code",

  dotNetTitle: ".NET",
  dotNetDescription: "Formerly .NET Core. Open-source, cross-platform successor to .NET Framework",

  dotNetFrameworkTitle: ".NET Framework",
  dotNetFrameworkDescription: "CLI implementation by Microsoft for Windows operating system",

  dotNetCompactTitle: ".NET Compact Framework",
  dotNetCompactDescription: ".NET Framework version for mobile devices",

  dotNetMicroTitle: ".NET Micro Framework",
  dotNetMicroDescription: ".NET Framework version for embedded systems",

  monoTitle: "Mono",
  monoDescription: "Open-source, cross-platform CLI implementation by Ximian",

  portableDotNetTitle: "Portable.NET",
  portableDotNetDescription: "Open-source, cross-platform CLI implementation by Free Software Foundation",

  vesTitle: "VES",
  vesExpansion: "Virtual Execution System",
  vesDescription: "This system implements and enforces the CTS model. The VES is responsible for loading and running programs written for the CLI. It provides the services needed to execute managed code and data using the metadata to connect separately generated modules together at runtime. The VES is also known as the Execution Engine",

  coreClrTitle: "CoreCLR",
  coreClrDescription: "Successor to CLR",

  clrTitle: "CLR",
  clrExpansion: "Common Language Runtime",
  clrDescription: "Execution engine by Microsoft. Supports just-in-time (JIT) and ahead-of-time (AOT) compilation strategies",

  specialClrTitle: "Special CLR versions",
  specialClrDescription: "Lightweight CLR versions, optimized for resource-constrained devices",

  monoRuntimeTitle: "Mono Runtime",
  monoRuntimeDescription: "Own execution engine",

  ilrunTitle: "ilrun",
  ilrunDescription: "Own execution engine. Converts intermediate language (IL) code into Converted Virtual Machine (CVM) code and interpretes it",

  cilTitle: "CIL",
  cilExpansion: "Common Intermediate Language",
  cilDescription: "The instruction set understood by the VES",

  msilTitle: "MSIL",
  msilExpansion: "Microsoft Intermediate Language",
  msilDescription: "CIL implementation by Microsoft",

  ownIlTitle: "Own intermediate languages",
  ownIlDescription: "Own CIL implementations",

  standardLibrariesTitle: "Standard Libraries",
  standardLibrariesDescription: "",

  runtimeInfrastructureLibTitle: "Runtime infrastructure library",
  bclTitle: "Base Class Library (BCL)",
  networkLibTitle: "Network library",
  reflectionLibTitle: "Reflection library",
  xmlLibTitle: "XML library",
  xNumericsLibTitle: "Extended numerics library",
  xArrayLibTitle: "Extended array library",
  varargLibTitle: "Vararg library",
  parallelLibTitle: "Parallel library",

  coreFxTitle: "CoreFX",
  coreFxDescription: "Successor to FCL",

  fclTitle: "FCL",
  fclExpansion: "Framework Class Library",
  fclDescription: "Implementation of the Standard Libraries by Microsoft. Contains BCL implementation and other reusable types",

  specialFclTitle: "Special FCL versions",
  specialFclDescription: "Lightweight FCL versions, optimized for resource-constrained devices",

  ownClassLibrariesTitle: "Own class libraries",
  ownClassLibrariesDescription: "Own standard libraries implementations",

  ctsTitle: "CTS",
  ctsExpansion: "Common Type System",
  ctsDescription: "A unified type system that is shared by compilers, tools, and the CLI itself. It is the model that defines the rules the CLI follows when declaring, using, and managing types. The CTS establishes a framework that enables cross-language integration, type safety, and high performance code execution",

  clsTitle: "CLS",
  clsExpansion: "Common Language Specification",
  clsDescription: "An agreement between language designers and framework (class library) designers. It specifies a subset of the CTS and a set of usage conventions",

  ctsImplementationTitle: "Any VES implementation",
  ctsImplementationDescription: "CTS describes what types VES must support and how exactly it must handle them. It means that any VES implementation implements CTS as well",

  clsImplementationTitle: "Any CLI-compatible programming language",
  clsImplementationDescription: "Programming language must be CLS-compliant to be compatible with the CLI. It means that any CLI-compatible programming language implements CLS",
}
