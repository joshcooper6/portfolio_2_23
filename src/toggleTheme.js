function toggleTheme(custombg, customtxt) {
    if (custombg && customtxt) {
      setTheme({
        bg: custombg,
        txt: customtxt,
      });
    }

    if (theme.bg === custombg && theme.txt === customtxt) {
      setTheme(darkMode);
    }

    if (custombg == undefined && customtxt == undefined) {
      setTheme((prev) => {
        if (prev.bg === darkMode.bg || prev.txt === darkMode.txt) {
          return lightMode;
        }

        return darkMode;
      });
    }};