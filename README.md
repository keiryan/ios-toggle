A sleek toggle for a webpage. Done iOS style, and highly reusable. Careful detail was went into crafting this component including ensuring the cursor is a pointer when interacting with the toggle, and text selection is not triggered when interacting with the toggle. The toggle was designed to be highly reusable and customizable, and just all around over-engineered to be honest. 🤣

Here is a list of props that can be passed on the toggled to easily customize the toggle appearance:

```

const toggledSettings = {
    toggled: false, // The boolean value the toggle relies on.
    container: {
      outerHeight: 30, // Specifies the height dimensions of the outer container. This value measurement is **pixels**.
      outerWidth: 60 // Specifies the width dimensions of the outer container. This value measurement is **pixels**.
      toggledColor: 'blue', // Specifies the outer container background color when the toggle _is_ toggled.
      defaultColor: 'red', // Specifies the outer container background color when the toggle is _not_ toggled. 

    },
    inner: {
      toggledColor: 'blue', // Specifies the inner circle background color when the toggle _is_ toggled.
      defaultColor: 'red', // Specifies the inner circle background color when the toggle is _not_ toggled.
    }
  };

```

All color props support RGBA, RGB, HEX and colors names. If none of these props are passed, defaults are assumed. The defaults measurements are as follows:

```

const toggledSettings = {
    toggled: false, 
    container: {
      outerHeight: 30, 
      outerWidth: 60 
      toggledColor: ‘#30D158 ,
      defaultColor: '#39393D',  

    },
    inner: {
      toggledColor: ‘white’,
      defaultColor: ‘white’, 
    }
  };

```

Live demo here: https://ios-toggle.vercel.app/
Live code here: https://codesandbox.io/s/toggle-2-n0emum
