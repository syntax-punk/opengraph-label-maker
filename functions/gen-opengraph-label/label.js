'use strict';

var react = require('@emotion/react');
var Textfit = require('react-textfit');

/** @jsx jsx */
function App() {
  return react.jsx("div", {
    css: {
      width: 1200,
      height: 630,
      backgroundImage: "linear-gradient(135deg, rgba(29, 29, 29, 0.05) 0%, rgba(29, 29, 29, 0.05) 17%,rgba(27, 27, 27, 0.05) 17%, rgba(27, 27, 27, 0.05) 34%,rgba(31, 31, 31, 0.05) 34%, rgba(31, 31, 31, 0.05) 93%,rgba(242, 242, 242, 0.05) 93%, rgba(242, 242, 242, 0.05) 100%),linear-gradient(135deg, rgba(129, 129, 129, 0.05) 0%, rgba(129, 129, 129, 0.05) 66%,rgba(117, 117, 117, 0.05) 66%, rgba(117, 117, 117, 0.05) 91%,rgba(199, 199, 199, 0.05) 91%, rgba(199, 199, 199, 0.05) 100%),linear-gradient(135deg, rgba(31, 31, 31, 0.07) 0%, rgba(31, 31, 31, 0.07) 15%,rgba(139, 139, 139, 0.07) 15%, rgba(139, 139, 139, 0.07) 23%,rgba(200, 200, 200, 0.07) 23%, rgba(200, 200, 200, 0.07) 29%,rgba(102, 102, 102, 0.07) 29%, rgba(102, 102, 102, 0.07) 100%),linear-gradient(90deg, rgb(19, 196, 228),rgb(126, 8, 222));",
      position: "absolute",
      display: "flex",
      overflow: "hidden"
    }
  }, react.jsx(react.Global, {
    styles: {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        fontFamily: "system-ui"
      }
    }
  }), react.jsx("div", {
    css: {
      background: "#130722",
      margin: "40px",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "15px",
      padding: "2rem",
      boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),\n                      6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),\n                      12.5px 12.5px 10px rgba(0, 0, 0, 0.035),\n                      22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),\n                      41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),\n                      100px 100px 80px rgba(0, 0, 0, 0.07)"
    }
  }, react.jsx("h1", {
    css: {
      color: "#F1E9FB",
      height: "100%"
    }
  }, react.jsx(Textfit, {
    max: 256,
    min: 24,
    style: {
      minHeight: "80%",
      maxHeight: "80%",
      lineHeight: 1
    }
  }, "How to make that the yack is shaved by itself or maybe not bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.")), react.jsx("div", {
    css: {
      color: "#F1E9FB",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 24
    }
  }, react.jsx("ul", {
    css: {
      listStyleType: "none",
      display: "flex",
      "& li": {
        marginRight: ".5rem",
        "&:not(:last-child):after": {
          content: "'·'",
          fontWeight: "600",
          marginLeft: ".5rem"
        }
      }
    }
  }, react.jsx("li", null, "image"), react.jsx("li", null, "yack")), react.jsx("span", null, "@theVoogie"))));
}

module.exports = App;