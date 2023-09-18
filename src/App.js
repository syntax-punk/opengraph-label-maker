import React from "react";
import Textfit from "react-textfit";
import { parseParams } from "./utils";
import "./global.css"

function App() {
  
  const params = parseParams(window.location.search);
  const pattern = patterns[Math.round(Math.random() * (patterns.length - 1))]

  const title = params.title ? params.title : "No title";
  const handle = params.handle ? params.handle : "";
  const width = params.width ? params.width : 1200;
  const height = params.height ? params.height : 630;
  const tags = params.tags ? params.tags.split(',') : [];

  if (window.location.pathname.includes("/about")) {
    return (<h1>hello</h1>)
  }
  
  return (
    <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      backgroundImage: `${pattern.gradient}`,
      position: "absolute",
      display: "flex",
      overflow: "hidden"
    }}
    >
      <div style={{
          background: `${pattern.background}`,
          margin: "40px",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
          6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
          12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
          22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
          41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
          100px 100px 80px rgba(0, 0, 0, 0.07)`
        }}>
        {
          title.toLowerCase() !== keyWords.blank.toLowerCase() && 
            <React.Fragment>
              <h1 style={{ color: `${pattern.textColor}`, height: "100%" }}>
                <Textfit
                  max={256}
                  min={24}
                  style={{
                    minHeight: "80%",
                    maxHeight: "80%",
                    lineHeight: 1
                  }}
                >
                  {title}
                </Textfit>
              </h1><div
                style={{
                  color: `${pattern.textColor}`,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 24
                }}
              >
                  <ul
                    style={{
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
                    }}
                  >
                    {tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>
                  <span>{handle && `@${handle}`}</span>
                </div>
              </React.Fragment>
        }
      </div>
    </div>
  );
}

export default App;

const keyWords = {
  blank: "_BLANK"
}

const patterns = [
  {
    gradient: `linear-gradient(316deg, rgba(234, 234, 234, 0.02) 0%, rgba(234, 234, 234, 0.02) 16.667%,rgba(128, 128, 128, 0.02) 16.667%, rgba(128, 128, 128, 0.02) 33.334%,rgba(161, 161, 161, 0.02) 33.334%, rgba(161, 161, 161, 0.02) 50.001000000000005%,rgba(154, 154, 154, 0.02) 50.001%, rgba(154, 154, 154, 0.02) 66.668%,rgba(77, 77, 77, 0.02) 66.668%, rgba(77, 77, 77, 0.02) 83.33500000000001%,rgba(10, 10, 10, 0.02) 83.335%, rgba(10, 10, 10, 0.02) 100.002%),linear-gradient(75deg, rgba(39, 39, 39, 0.03) 0%, rgba(39, 39, 39, 0.03) 20%,rgba(232, 232, 232, 0.03) 20%, rgba(232, 232, 232, 0.03) 40%,rgba(33, 33, 33, 0.03) 40%, rgba(33, 33, 33, 0.03) 60%,rgba(84, 84, 84, 0.03) 60%, rgba(84, 84, 84, 0.03) 80%,rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%),linear-gradient(103deg, rgba(174, 174, 174, 0.03) 0%, rgba(174, 174, 174, 0.03) 12.5%,rgba(190, 190, 190, 0.03) 12.5%, rgba(190, 190, 190, 0.03) 25%,rgba(191, 191, 191, 0.03) 25%, rgba(191, 191, 191, 0.03) 37.5%,rgba(23, 23, 23, 0.03) 37.5%, rgba(23, 23, 23, 0.03) 50%,rgba(227, 227, 227, 0.03) 50%, rgba(227, 227, 227, 0.03) 62.5%,rgba(71, 71, 71, 0.03) 62.5%, rgba(71, 71, 71, 0.03) 75%,rgba(162, 162, 162, 0.03) 75%, rgba(162, 162, 162, 0.03) 87.5%,rgba(85, 85, 85, 0.03) 87.5%, rgba(85, 85, 85, 0.03) 100%),linear-gradient(355deg, rgba(38, 38, 38, 0.02) 0%, rgba(38, 38, 38, 0.02) 25%,rgba(106, 106, 106, 0.02) 25%, rgba(106, 106, 106, 0.02) 50%,rgba(28, 28, 28, 0.02) 50%, rgba(28, 28, 28, 0.02) 75%,rgba(66, 66, 66, 0.02) 75%, rgba(66, 66, 66, 0.02) 100%),linear-gradient(137deg, rgba(38, 38, 38, 0.03) 0%, rgba(38, 38, 38, 0.03) 25%,rgba(211, 211, 211, 0.03) 25%, rgba(211, 211, 211, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(24, 24, 24, 0.03) 75%, rgba(24, 24, 24, 0.03) 100%),linear-gradient(51deg, rgba(253, 253, 253, 0.03) 0%, rgba(253, 253, 253, 0.03) 14.286%,rgba(103, 103, 103, 0.03) 14.286%, rgba(103, 103, 103, 0.03) 28.572%,rgba(46, 46, 46, 0.03) 28.572%, rgba(46, 46, 46, 0.03) 42.858%,rgba(68, 68, 68, 0.03) 42.858%, rgba(68, 68, 68, 0.03) 57.144%,rgba(116, 116, 116, 0.03) 57.144%, rgba(116, 116, 116, 0.03) 71.42999999999999%,rgba(248, 248, 248, 0.03) 71.43%, rgba(248, 248, 248, 0.03) 85.71600000000001%,rgba(174, 174, 174, 0.03) 85.716%, rgba(174, 174, 174, 0.03) 100.002%),linear-gradient(283deg, rgba(20, 20, 20, 0.01) 0%, rgba(20, 20, 20, 0.01) 14.286%,rgba(23, 23, 23, 0.01) 14.286%, rgba(23, 23, 23, 0.01) 28.572%,rgba(19, 19, 19, 0.01) 28.572%, rgba(19, 19, 19, 0.01) 42.858%,rgba(134, 134, 134, 0.01) 42.858%, rgba(134, 134, 134, 0.01) 57.144%,rgba(4, 4, 4, 0.01) 57.144%, rgba(4, 4, 4, 0.01) 71.42999999999999%,rgba(254, 254, 254, 0.01) 71.43%, rgba(254, 254, 254, 0.01) 85.71600000000001%,rgba(87, 87, 87, 0.01) 85.716%, rgba(87, 87, 87, 0.01) 100.002%),linear-gradient(90deg, rgb(168, 1, 206),rgb(20, 120, 203))`,
    background: '#130722',
    textColor: '#F1E9FB'
  },
  {
    gradient: `linear-gradient(135deg, rgba(29, 29, 29, 0.05) 0%, rgba(29, 29, 29, 0.05) 17%,rgba(27, 27, 27, 0.05) 17%, rgba(27, 27, 27, 0.05) 34%,rgba(31, 31, 31, 0.05) 34%, rgba(31, 31, 31, 0.05) 93%,rgba(242, 242, 242, 0.05) 93%, rgba(242, 242, 242, 0.05) 100%),linear-gradient(135deg, rgba(129, 129, 129, 0.05) 0%, rgba(129, 129, 129, 0.05) 66%,rgba(117, 117, 117, 0.05) 66%, rgba(117, 117, 117, 0.05) 91%,rgba(199, 199, 199, 0.05) 91%, rgba(199, 199, 199, 0.05) 100%),linear-gradient(135deg, rgba(31, 31, 31, 0.07) 0%, rgba(31, 31, 31, 0.07) 15%,rgba(139, 139, 139, 0.07) 15%, rgba(139, 139, 139, 0.07) 23%,rgba(200, 200, 200, 0.07) 23%, rgba(200, 200, 200, 0.07) 29%,rgba(102, 102, 102, 0.07) 29%, rgba(102, 102, 102, 0.07) 100%),linear-gradient(90deg, rgb(19, 196, 228),rgb(126, 8, 222))`,
    background: '#130722',
    textColor: '#F1E9FB'
  },
  {
    gradient: `linear-gradient(0deg, rgba(120, 120, 120, 0.07) 0%, rgba(120, 120, 120, 0.07) 8%,rgba(73, 73, 73, 0.07) 8%, rgba(73, 73, 73, 0.07) 36%,rgba(252, 252, 252, 0.07) 36%, rgba(252, 252, 252, 0.07) 54%,rgba(158, 158, 158, 0.07) 54%, rgba(158, 158, 158, 0.07) 56%,rgba(142, 142, 142, 0.07) 56%, rgba(142, 142, 142, 0.07) 59%,rgba(92, 92, 92, 0.07) 59%, rgba(92, 92, 92, 0.07) 78%,rgba(29, 29, 29, 0.07) 78%, rgba(29, 29, 29, 0.07) 100%),linear-gradient(45deg, rgba(89, 89, 89, 0.08) 0%, rgba(89, 89, 89, 0.08) 5%,rgba(201, 201, 201, 0.08) 5%, rgba(201, 201, 201, 0.08) 17%,rgba(203, 203, 203, 0.08) 17%, rgba(203, 203, 203, 0.08) 28%,rgba(111, 111, 111, 0.08) 28%, rgba(111, 111, 111, 0.08) 59%,rgba(20, 20, 20, 0.08) 59%, rgba(20, 20, 20, 0.08) 60%,rgba(248, 248, 248, 0.08) 60%, rgba(248, 248, 248, 0.08) 67%,rgba(21, 21, 21, 0.08) 67%, rgba(21, 21, 21, 0.08) 100%),linear-gradient(90deg, rgba(130, 130, 130, 0.09) 0%, rgba(130, 130, 130, 0.09) 9%,rgba(133, 133, 133, 0.09) 9%, rgba(133, 133, 133, 0.09) 49%,rgba(151, 151, 151, 0.09) 49%, rgba(151, 151, 151, 0.09) 56%,rgba(194, 194, 194, 0.09) 56%, rgba(194, 194, 194, 0.09) 93%,rgba(126, 126, 126, 0.09) 93%, rgba(126, 126, 126, 0.09) 100%),linear-gradient(90deg, rgba(219, 219, 219, 0.03) 0%, rgba(219, 219, 219, 0.03) 7%,rgba(194, 194, 194, 0.03) 7%, rgba(194, 194, 194, 0.03) 37%,rgba(217, 217, 217, 0.03) 37%, rgba(217, 217, 217, 0.03) 39%,rgba(59, 59, 59, 0.03) 39%, rgba(59, 59, 59, 0.03) 50%,rgba(35, 35, 35, 0.03) 50%, rgba(35, 35, 35, 0.03) 61%,rgba(5, 5, 5, 0.03) 61%, rgba(5, 5, 5, 0.03) 85%,rgba(83, 83, 83, 0.03) 85%, rgba(83, 83, 83, 0.03) 93%,rgba(251, 251, 251, 0.03) 93%, rgba(251, 251, 251, 0.03) 100%),linear-gradient(0deg, rgba(110, 110, 110, 0.04) 0%, rgba(110, 110, 110, 0.04) 20%,rgba(21, 21, 21, 0.04) 20%, rgba(21, 21, 21, 0.04) 44%,rgba(134, 134, 134, 0.04) 44%, rgba(134, 134, 134, 0.04) 62%,rgba(217, 217, 217, 0.04) 62%, rgba(217, 217, 217, 0.04) 94%,rgba(191, 191, 191, 0.04) 94%, rgba(191, 191, 191, 0.04) 100%),linear-gradient(0deg, rgba(151, 151, 151, 0.04) 0%, rgba(151, 151, 151, 0.04) 23%,rgba(40, 40, 40, 0.04) 23%, rgba(40, 40, 40, 0.04) 41%,rgba(51, 51, 51, 0.04) 41%, rgba(51, 51, 51, 0.04) 47%,rgba(221, 221, 221, 0.04) 47%, rgba(221, 221, 221, 0.04) 65%,rgba(105, 105, 105, 0.04) 65%, rgba(105, 105, 105, 0.04) 67%,rgba(160, 160, 160, 0.04) 67%, rgba(160, 160, 160, 0.04) 86%,rgba(218, 218, 218, 0.04) 86%, rgba(218, 218, 218, 0.04) 100%),linear-gradient(90deg, rgba(148, 148, 148, 0.09) 0%, rgba(148, 148, 148, 0.09) 7%,rgba(159, 159, 159, 0.09) 7%, rgba(159, 159, 159, 0.09) 52%,rgba(18, 18, 18, 0.09) 52%, rgba(18, 18, 18, 0.09) 66%,rgba(126, 126, 126, 0.09) 66%, rgba(126, 126, 126, 0.09) 100%),linear-gradient(90deg, rgba(212, 212, 212, 0.06) 0%, rgba(212, 212, 212, 0.06) 12%,rgba(248, 248, 248, 0.06) 12%, rgba(248, 248, 248, 0.06) 17%,rgba(70, 70, 70, 0.06) 17%, rgba(70, 70, 70, 0.06) 33%,rgba(174, 174, 174, 0.06) 33%, rgba(174, 174, 174, 0.06) 36%,rgba(99, 99, 99, 0.06) 36%, rgba(99, 99, 99, 0.06) 37%,rgba(56, 56, 56, 0.06) 37%, rgba(56, 56, 56, 0.06) 73%,rgba(156, 156, 156, 0.06) 73%, rgba(156, 156, 156, 0.06) 84%,rgba(174, 174, 174, 0.06) 84%, rgba(174, 174, 174, 0.06) 100%),linear-gradient(90deg, rgb(11, 27, 163),rgb(74, 128, 152))`,
    background: '#130722',
    textColor: '#F1E9FB'
  },
  {
    gradient: `linear-gradient(45deg, rgba(194, 194, 194, 0.1) 0%, rgba(194, 194, 194, 0.1) 42%,rgba(230, 230, 230, 0.1) 42%, rgba(230, 230, 230, 0.1) 61%,rgba(55, 55, 55, 0.1) 61%, rgba(55, 55, 55, 0.1) 97%,rgba(221, 221, 221, 0.1) 97%, rgba(221, 221, 221, 0.1) 100%),linear-gradient(45deg, rgba(70, 70, 70, 0.03) 0%, rgba(70, 70, 70, 0.03) 33%,rgba(230, 230, 230, 0.03) 33%, rgba(230, 230, 230, 0.03) 45%,rgba(64, 64, 64, 0.03) 45%, rgba(64, 64, 64, 0.03) 46%,rgba(167, 167, 167, 0.03) 46%, rgba(167, 167, 167, 0.03) 48%,rgba(106, 106, 106, 0.03) 48%, rgba(106, 106, 106, 0.03) 74%,rgba(21, 21, 21, 0.03) 74%, rgba(21, 21, 21, 0.03) 94%,rgba(186, 186, 186, 0.03) 94%, rgba(186, 186, 186, 0.03) 96%,rgba(12, 12, 12, 0.03) 96%, rgba(12, 12, 12, 0.03) 100%),linear-gradient(135deg, rgba(31, 31, 31, 0.08) 0%, rgba(31, 31, 31, 0.08) 22%,rgba(201, 201, 201, 0.08) 22%, rgba(201, 201, 201, 0.08) 33%,rgba(93, 93, 93, 0.08) 33%, rgba(93, 93, 93, 0.08) 53%,rgba(240, 240, 240, 0.08) 53%, rgba(240, 240, 240, 0.08) 71%,rgba(136, 136, 136, 0.08) 71%, rgba(136, 136, 136, 0.08) 79%,rgba(5, 5, 5, 0.08) 79%, rgba(5, 5, 5, 0.08) 100%),linear-gradient(0deg, rgba(237, 237, 237, 0.04) 0%, rgba(237, 237, 237, 0.04) 9%,rgba(210, 210, 210, 0.04) 9%, rgba(210, 210, 210, 0.04) 49%,rgba(125, 125, 125, 0.04) 49%, rgba(125, 125, 125, 0.04) 76%,rgba(165, 165, 165, 0.04) 76%, rgba(165, 165, 165, 0.04) 78%,rgba(149, 149, 149, 0.04) 78%, rgba(149, 149, 149, 0.04) 81%,rgba(241, 241, 241, 0.04) 81%, rgba(241, 241, 241, 0.04) 85%,rgba(45, 45, 45, 0.04) 85%, rgba(45, 45, 45, 0.04) 100%),linear-gradient(90deg, rgb(114, 210, 86),rgb(12, 107, 39))`,
    background: '#001603',
    textColor: '#F1E9FB'
  },
  {
    gradient: `linear-gradient(45deg, rgba(50, 50, 50, 0.01) 0%, rgba(50, 50, 50, 0.01) 14.286%,rgba(236, 236, 236, 0.01) 14.286%, rgba(236, 236, 236, 0.01) 28.572%,rgba(108, 108, 108, 0.01) 28.572%, rgba(108, 108, 108, 0.01) 42.858%,rgba(160, 160, 160, 0.01) 42.858%, rgba(160, 160, 160, 0.01) 57.144%,rgba(105, 105, 105, 0.01) 57.144%, rgba(105, 105, 105, 0.01) 71.42999999999999%,rgba(151, 151, 151, 0.01) 71.43%, rgba(151, 151, 151, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(135deg, rgba(183, 183, 183, 0.1) 0%, rgba(183, 183, 183, 0.1) 20%,rgba(112, 112, 112, 0.1) 20%, rgba(112, 112, 112, 0.1) 40%,rgba(6, 6, 6, 0.1) 40%, rgba(6, 6, 6, 0.1) 60%,rgba(36, 36, 36, 0.1) 60%, rgba(36, 36, 36, 0.1) 80%,rgba(78, 78, 78, 0.1) 80%, rgba(78, 78, 78, 0.1) 100%),linear-gradient(0deg, rgba(69, 69, 69, 0.03) 0%, rgba(69, 69, 69, 0.03) 12.5%,rgba(248, 248, 248, 0.03) 12.5%, rgba(248, 248, 248, 0.03) 25%,rgba(9, 9, 9, 0.03) 25%, rgba(9, 9, 9, 0.03) 37.5%,rgba(170, 170, 170, 0.03) 37.5%, rgba(170, 170, 170, 0.03) 50%,rgba(171, 171, 171, 0.03) 50%, rgba(171, 171, 171, 0.03) 62.5%,rgba(42, 42, 42, 0.03) 62.5%, rgba(42, 42, 42, 0.03) 75%,rgba(182, 182, 182, 0.03) 75%, rgba(182, 182, 182, 0.03) 87.5%,rgba(169, 169, 169, 0.03) 87.5%, rgba(169, 169, 169, 0.03) 100%),linear-gradient(0deg, rgba(133, 133, 133, 0.09) 0%, rgba(133, 133, 133, 0.09) 16.667%,rgba(114, 114, 114, 0.09) 16.667%, rgba(114, 114, 114, 0.09) 33.334%,rgba(80, 80, 80, 0.09) 33.334%, rgba(80, 80, 80, 0.09) 50.001000000000005%,rgba(212, 212, 212, 0.09) 50.001%, rgba(212, 212, 212, 0.09) 66.668%,rgba(9, 9, 9, 0.09) 66.668%, rgba(9, 9, 9, 0.09) 83.33500000000001%,rgba(173, 173, 173, 0.09) 83.335%, rgba(173, 173, 173, 0.09) 100.002%),linear-gradient(90deg, rgb(171, 127, 207),rgb(76, 20, 168))`,
    background: '#15032f',
    textColor: '#F1E9FB'
  },
  {
    gradient: `linear-gradient(22.5deg, rgb(140, 15, 105) 0%, rgb(140, 15, 105) 1%,rgb(133, 14, 103) 1%, rgb(133, 14, 103) 23%,rgb(125, 12, 102) 23%, rgb(125, 12, 102) 39%,rgb(118, 11, 100) 39%, rgb(118, 11, 100) 45%,rgb(110, 9, 98) 45%, rgb(110, 9, 98) 47%,rgb(103, 8, 96) 47%, rgb(103, 8, 96) 52%,rgb(95, 6, 95) 52%, rgb(95, 6, 95) 70%,rgb(88, 5, 93) 70%, rgb(88, 5, 93) 100%),linear-gradient(67.5deg, rgb(140, 15, 105) 0%, rgb(140, 15, 105) 1%,rgb(133, 14, 103) 1%, rgb(133, 14, 103) 23%,rgb(125, 12, 102) 23%, rgb(125, 12, 102) 39%,rgb(118, 11, 100) 39%, rgb(118, 11, 100) 45%,rgb(110, 9, 98) 45%, rgb(110, 9, 98) 47%,rgb(103, 8, 96) 47%, rgb(103, 8, 96) 52%,rgb(95, 6, 95) 52%, rgb(95, 6, 95) 70%,rgb(88, 5, 93) 70%, rgb(88, 5, 93) 100%),linear-gradient(157.5deg, rgb(140, 15, 105) 0%, rgb(140, 15, 105) 1%,rgb(133, 14, 103) 1%, rgb(133, 14, 103) 23%,rgb(125, 12, 102) 23%, rgb(125, 12, 102) 39%,rgb(118, 11, 100) 39%, rgb(118, 11, 100) 45%,rgb(110, 9, 98) 45%, rgb(110, 9, 98) 47%,rgb(103, 8, 96) 47%, rgb(103, 8, 96) 52%,rgb(95, 6, 95) 52%, rgb(95, 6, 95) 70%,rgb(88, 5, 93) 70%, rgb(88, 5, 93) 100%),linear-gradient(90deg, rgb(184, 43, 117),rgb(202, 2, 218)); background-blend-mode:overlay,overlay,overlay,normal`,
    background: '#130722',
    textColor: '#F1E9FB'
  }
];