"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import MessageBox from "../messageBox/MessageBox";
import Skeleton from "@mui/material/Skeleton";

const ConversationCards = ({ loading }) => {
  const [text, settext] = useState("");

  const changeSelectedText = (markup) => {
    const textarea = document.getElementById("textAreaConversationCard");
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const textFull = textarea.value;
    let selectedText = textFull.substring(selectionStart, selectionEnd);

    let newText;
    switch (markup) {
      case "bold":
        if (selectedText === "") selectedText = "text";

        newText = "**" + selectedText + "**";
        break;
      case "italic":
        if (selectedText === "") selectedText = "text";

        newText = "*" + selectedText + "*";
        break;
      case "strikethrough":
        if (selectedText === "") selectedText = "text";

        newText = "~~" + selectedText + "~~";
        break;
      case "link":
        if (selectedText === "") selectedText = "text";

        newText = "[" + selectedText + "](https://)";
        break;
      case "ordered list":
        const linesOl = selectedText.split("\n");
        let lineCount = 0;

        newText = linesOl
          .map((line) => {
            if (line !== "") {
              lineCount++;
              return lineCount + "." + line;
            }
          })
          .join("\n");
        if (newText === "") newText = "\n1.Item List";
        break;
      case "unordered list":
        const linesul = selectedText.split("\n");

        newText = linesul
          .map((line) => {
            if (line !== "") {
              return "*" + line;
            }
          })
          .join("\n");
        if (newText === "") newText = "\n*Item List";

        break;
      case "code":
        if (selectedText === "") selectedText = "your code here";

        newText = "`" + selectedText + "`";
        break;
      default:
        newText = selectedText;
    }
    const changedText =
      textFull.substring(0, selectionStart) +
      newText +
      textFull.substring(selectionEnd);

    settext(changedText);
  };

  const adjustTextareaHeights = () => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  };
  useEffect(() => {
    adjustTextareaHeights();
  });

  return (
    <div
      className="h-[calc(100vh_-_48px)] grow rounded-[10px] border-[6px] border-white bg-white m-auto flex flex-col w-full 
      justify-between overflow-hidden"
    >
      <div
        className="max-[732px]:p-[12px_12px_8px_12px] bg-[#F6EFFF] pt-[20px] px-[24px] pb-[16px]
        max-[732px]:gap-[.75rem] gap-[1.3rem] flex flex-col"
      >
        <div className="flex-wrap justify-between gap-y-[1rem] flex items-center">
          <div className="max-w-[480px]  h-[18px] flex items-center gap-2">
            {!loading ? (
              <p className="font-bold max-[732px]:text-[1rem]	text-[1.25rem]">
                #design-hive
              </p>
            ) : (
              <Skeleton
                variant="text"
                width={130}
                sx={{
                  fontSize: "1rem",
                  maxW: "max-content",
                  "@media (max-width: 732px)": {
                    fontSize: "1rem",
                  },
                  "@media (min-width: 732px)": {
                    fontSize: "1.25rem",
                  },
                }}
              />
            )}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.46967 6.71967C2.76256 6.42678 3.23744 6.42678 3.53033 6.71967L9.00001 12.1893L14.4697 6.71967C14.7626 6.42678 15.2374 6.42678 15.5303 6.71967C15.8232 7.01256 15.8232 7.48744 15.5303 7.78033L10.0607 13.25C9.47489 13.8358 8.52514 13.8358 7.93935 13.25L2.46967 7.78033C2.17678 7.48744 2.17678 7.01256 2.46967 6.71967Z"
                fill="#272727"
              />
            </svg>
          </div>
          <div className="h-[39px] max-[732px]:h-[28px] max-[732px]:gap-[.5rem] gap-[1rem] flex">
            {!loading ? (
              <>
                <div
                  className="h-full bg-white
              max-[732px]:p-[4px]  rounded-[8px] flex justify-center items-center gap-[3px] p-[6px]"
                >
                  <Image
                    className="rounded-[4px] w-auto h-full"
                    alt="maria"
                    src="/image 12.png"
                    height={28}
                    width={28}
                  />
                  <Image
                    className="rounded-[4px] w-auto h-full"
                    alt="julia"
                    src="/image 13.png"
                    height={28}
                    width={28}
                  />
                  <Image
                    className="rounded-[4px] w-auto h-full"
                    alt="katherine"
                    src="/image 14.png"
                    height={28}
                    width={28}
                  />
                  <p className="ml-[2px] text-[#60605F] font-[600]">4</p>
                </div>
                <div
                  className="h-full max-[732px]:px-[4px] bg-white rounded-[8px]
            flex  items-center gap-[4px] px-[6px] py-[6px]"
                >
                  <svg
                    className="h-[30px]  max-[732px]:h-[22px] w-auto"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5061 20.195C27.5061 17.3433 24.2072 18.0212 21.4292 18.0212V28.4387C22.9027 28.4387 24.8368 28.5479 25.8788 27.5059C26.9207 26.464 27.5061 25.0508 27.5061 23.5772V20.195Z"
                      stroke="#60605F"
                      strokeWidth="2.08351"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.844 20.195C6.844 17.3433 10.1429 18.0212 12.9209 18.0212V28.4387C11.4473 28.4387 9.51328 28.5479 8.47132 27.5059C7.42936 26.464 6.844 25.0508 6.844 23.5772V20.195Z"
                      stroke="#60605F"
                      strokeWidth="2.08351"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.32373 23.2292V14.2007C6.32373 11.9904 7.88606 10.7285 9.44899 9.16555C11.0119 7.60261 15.0518 6.04028 17.2622 6.04028C19.4725 6.04028 23.5124 7.60261 25.0753 9.16555C26.3675 10.4578 27.6797 11.9904 27.6797 14.2007V23.2292"
                      stroke="#60605F"
                      strokeWidth="2.08351"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <hr className="h-full border-r-[1px] border-[#CCCCCC]" />
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.20215 0.895386L5.36917 5.0624L9.53619 0.895386"
                      stroke="#60605F"
                      strokeWidth="2.08351"
                    />
                  </svg>
                </div>
                <div className="bg-white h-full rounded-[8px] flex justify-between items-center p-[8px]">
                  <svg
                    className="h-full w-auto"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91456 18.124C2.62287 18.124 2.39369 17.8844 2.39369 17.5927C2.39369 15.5092 5.61271 13.4361 9.16509 13.4361C9.71722 13.4361 10.2589 13.4882 10.7902 13.582C10.9152 13.0298 11.1965 12.5506 11.5195 12.1548C13.2175 11.0088 14.3739 8.75865 14.3739 6.66473C14.3739 3.34153 12.4049 0.935075 9.16509 0.935075C5.92524 0.935075 3.95632 3.34153 3.95632 6.66473C3.95632 8.73782 5.09183 10.9776 6.76906 12.1339C3.34168 12.884 0.831055 15.1863 0.831055 17.5927C0.831055 18.7491 1.75822 19.6867 2.91456 19.6867H13.5925C14.0197 19.6867 14.3739 19.3325 14.3739 18.9053C14.3739 18.4782 14.0197 18.124 13.5925 18.124H2.91456ZM5.51895 6.66473C5.51895 4.07076 6.9149 2.49771 9.16509 2.49771C11.4153 2.49771 12.8112 4.07076 12.8112 6.66473C12.8112 9.01909 10.9569 11.3526 9.16509 11.3526C7.37327 11.3526 5.51895 9.01909 5.51895 6.66473ZM18.02 13.4361V10.5713C18.02 10.1442 17.6658 9.78999 17.2387 9.78999C16.8116 9.78999 16.4574 10.1442 16.4574 10.5713V13.4361H13.5925C13.1654 13.4361 12.8112 13.7903 12.8112 14.2174C12.8112 14.6446 13.1654 14.9988 13.5925 14.9988H16.4574V17.8636C16.4574 18.2907 16.8116 18.6449 17.2387 18.6449C17.6658 18.6449 18.02 18.2907 18.02 17.8636V14.9988H20.8848C21.312 14.9988 21.6661 14.6446 21.6661 14.2174C21.6661 13.7903 21.312 13.4361 20.8848 13.4361H18.02Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <Skeleton variant="rounded" width={116} height={39} />{" "}
                <Skeleton height={39} width={62} variant="rounded" />
                <Skeleton variant="rounded" width={39} height={39} />
              </>
            )}
          </div>
        </div>
        <hr className="border-[#CCCCCC]" />
        <div className="gap-[1rem] max-[732px]:text-[.75rem] flex">
          {loading ? (
            <>
              <Skeleton variant="rounded" width={107} height={18} />{" "}
              <Skeleton variant="rounded" width={130} height={18} />
            </>
          ) : (
            <>
              <div className="flex items-center px-[4px] gap-[4px] bg-[#F4F4F4] rounded-[8px]">
                <svg
                  className="max-[732px]:h-[12px] w-auto"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00016 10.7725H3.3335V9.61542C3.3335 9.28911 3.46312 8.97617 3.69386 8.74543C4.53027 7.90902 5.00016 6.7746 5.00016 5.59173V4.10579C5.00016 3.36941 5.59712 2.77246 6.3335 2.77246H9.66683C10.4032 2.77246 11.0002 3.36941 11.0002 4.10579V5.59173C11.0002 6.7746 11.4701 7.90902 12.3065 8.74543C12.5372 8.97617 12.6668 9.28911 12.6668 9.61542V10.7725H8.00016ZM8.00016 10.7725V14.7725"
                    stroke="#272727"
                    strokeOpacity="0.7"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="max-[732px]:text-[.75rem] text-[.875rem] text-[#272727B2] font-[500]">
                  5 Pinned
                </p>
                <svg
                  className="max-[732px]:h-[12px] w-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.46967 6.71967C2.76256 6.42678 3.23744 6.42678 3.53033 6.71967L9.00001 12.1893L14.4697 6.71967C14.7626 6.42678 15.2374 6.42678 15.5303 6.71967C15.8232 7.01256 15.8232 7.48744 15.5303 7.78033L10.0607 13.25C9.47489 13.8358 8.52514 13.8358 7.93935 13.25L2.46967 7.78033C2.17678 7.48744 2.17678 7.01256 2.46967 6.71967Z"
                    fill="#272727B2"
                  />
                </svg>
              </div>
              <div className="flex items-center px-[4px] gap-[4px] text-[500]">
                <svg
                  className="max-[732px]:h-[14px] w-auto"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6667 8.77239L5.33333 8.77254M8 11.4391V6.10588M14 8.77246C14 12.0862 11.3137 14.7725 8 14.7725C4.68629 14.7725 2 12.0862 2 8.77246C2 5.45875 4.68629 2.77246 8 2.77246C11.3137 2.77246 14 5.45875 14 8.77246Z"
                    stroke="#272727"
                    strokeOpacity="0.7"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="max-[732px]:text-[.75rem] text-[.875rem] text-[#272727B2] font-[500]">
                  Add a bookmark
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={`${styles.scrollBar} overflow-y-scroll`}>
        {/* Message Component */}
        {loading ? (
          <>
            <MessageBox loading={loading} /> <MessageBox loading={loading} />
          </>
        ) : (
          <>
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <MessageBox loading={loading} />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="w-[95%] m-auto mb-[16px]">
        <div
          className={`${styles.markup} mx-[5px] bg-[#f8f8f8] rounded-t-[8px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
            min-h-[48px] px-[18px] py-[14px] flex items-center flex-wrap gap-[1.5rem]`}
        >
          <div className="items-center flex gap-[1.5rem] h-[24px] border-r-[#CCCCCC] border-r-[1px]">
            <svg
              onClick={() => changeSelectedText("bold")}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.54248 2.78834H9.38853C9.80202 2.78742 10.2116 2.86818 10.5938 3.02599C10.976 3.18381 11.3233 3.41556 11.6157 3.70795C11.9081 4.00034 12.1398 4.3476 12.2976 4.7298C12.4554 5.112 12.5362 5.5216 12.5353 5.9351C12.5362 6.3486 12.4554 6.75821 12.2976 7.14041C12.1398 7.52261 11.9081 7.86987 11.6157 8.16226C11.3233 8.45465 10.976 8.6864 10.5938 8.84421C10.2116 9.00203 9.80202 9.08279 9.38853 9.08187H5.54248"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.38853 9.08186H10.7871C11.2006 9.08093 11.6102 9.1617 11.9924 9.31951C12.3746 9.47732 12.7219 9.70908 13.0142 10.0015C13.3066 10.2939 13.5384 10.6411 13.6962 11.0233C13.854 11.4055 13.9348 11.8151 13.9339 12.2286C13.9348 12.6421 13.854 13.0517 13.6962 13.4339C13.5384 13.8161 13.3066 14.1634 13.0142 14.4558C12.7219 14.7482 12.3746 14.9799 11.9924 15.1377C11.6102 15.2955 11.2006 15.3763 10.7871 15.3754H5.54248"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.54248 15.3754V2.78833"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={() => changeSelectedText("italic")}
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8835 2.78833H8.49903M10.8067 2.78833L8.49903 15.3754M11.5759 2.78833L9.26824 15.3754M11.5759 15.3754H6.19141"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              onClick={() => changeSelectedText("strikethrough")}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4187 5.9351C13.4196 5.52161 13.3389 5.112 13.1811 4.7298C13.0233 4.3476 12.7915 4.00034 12.4991 3.70795C12.2067 3.41556 11.8595 3.18381 11.4773 3.02599C11.0951 2.86818 10.6855 2.78742 10.272 2.78834H7.87343C7.1186 2.78834 6.39469 3.08819 5.86095 3.62193C5.3272 4.15568 5.02735 4.87959 5.02735 5.63441C5.02843 6.23111 5.21656 6.81245 5.56528 7.29665C5.914 7.78084 6.40575 8.14351 6.97135 8.33364L11.4747 9.8301C12.0403 10.0202 12.5321 10.3829 12.8808 10.8671C13.2295 11.3513 13.4177 11.9326 13.4187 12.5293C13.4187 13.2842 13.1189 14.0081 12.5851 14.5418C12.0514 15.0755 11.3275 15.3754 10.5727 15.3754H8.17412C7.76062 15.3763 7.35101 15.2956 6.96881 15.1377C6.58661 14.9799 6.23935 14.7482 5.94696 14.4558C5.65457 14.1634 5.42282 13.8161 5.26501 13.4339C5.10719 13.0517 5.02643 12.6421 5.02735 12.2286"
                stroke="#C8C9CA"
                strokeWidth="1.39856"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.9292 9.08185H15.5163"
                stroke="#C8C9CA"
                strokeWidth="1.39856"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div></div>
          </div>
          <svg
            onClick={() => changeSelectedText("link")}
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.51601 8.00209C8.94322 7.42954 8.1665 7.10791 7.35663 7.10791C6.54675 7.10791 5.77003 7.42954 5.19725 8.00209L3.03717 10.1615C2.46437 10.7343 2.14258 11.5111 2.14258 12.3212C2.14258 13.1313 2.46437 13.9081 3.03717 14.4809C3.60996 15.0537 4.38684 15.3755 5.1969 15.3755C6.00695 15.3755 6.78383 15.0537 7.35663 14.4809L8.43632 13.4012"
              stroke="#C8C9CA"
              strokeWidth="1.86475"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.35645 10.1615C7.92923 10.734 8.70595 11.0556 9.51582 11.0556C10.3257 11.0556 11.1024 10.734 11.6752 10.1615L13.8353 8.00207C14.4081 7.42928 14.7299 6.6524 14.7299 5.84234C14.7299 5.03229 14.4081 4.25541 13.8353 3.68261C13.2625 3.10982 12.4856 2.78802 11.6756 2.78802C10.8655 2.78802 10.0886 3.10982 9.51582 3.68261L8.43614 4.7623"
              stroke="#C8C9CA"
              strokeWidth="1.86475"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="items-center flex gap-[1.5rem] h-[24px] border-x-[#CCCCCC] border-x-[1px]">
            <div></div>
            <svg
              onClick={() => changeSelectedText("ordered list")}
              width="17"
              height="21"
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.38574 5.02136H16.1757"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
              />
              <path
                d="M6.38574 10.6157H16.1757"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
              />
              <path
                d="M6.38574 17.1423H16.1757"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
              />
              <path
                d="M3.12497 2.40096V7.82568H1.97804V3.48961H1.94626L0.703973 4.26836V3.25122L2.04691 2.40096H3.12497Z"
                fill="#C8C9CA"
              />
              <path
                d="M0.764895 18.0818V17.2554L2.69586 15.4675C2.86009 15.3086 2.99783 15.1655 3.10908 15.0384C3.22209 14.9112 3.30774 14.7868 3.36601 14.6649C3.42428 14.5413 3.45342 14.408 3.45342 14.2649C3.45342 14.106 3.41722 13.9692 3.34482 13.8544C3.27242 13.7378 3.17353 13.6487 3.04815 13.5868C2.92278 13.5233 2.78063 13.4915 2.6217 13.4915C2.45571 13.4915 2.31091 13.525 2.1873 13.5921C2.06369 13.6592 1.96833 13.7555 1.90123 13.8809C1.83412 14.0062 1.80057 14.1555 1.80057 14.3285H0.711919C0.711919 13.9736 0.792266 13.6654 0.952959 13.4041C1.11365 13.1427 1.3388 12.9405 1.6284 12.7975C1.918 12.6545 2.25175 12.583 2.62964 12.583C3.01813 12.583 3.3563 12.6518 3.64413 12.7896C3.93373 12.9255 4.15888 13.1145 4.31957 13.3564C4.48027 13.5983 4.56061 13.8756 4.56061 14.1881C4.56061 14.393 4.52 14.5952 4.43877 14.7947C4.35931 14.9942 4.21715 15.2159 4.01231 15.4595C3.80747 15.7015 3.51876 15.992 3.14616 16.331L2.35417 17.1071V17.1442H4.63213V18.0818H0.764895Z"
                fill="#C8C9CA"
              />
            </svg>
            <svg
              onClick={() => changeSelectedText("unordered list")}
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.23877 6.32208H4.34414"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.23877 12.6157H4.34414"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.23877 18.9092H4.34414"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0605 6.32208H22.6476M10.0605 12.6156H22.6476M10.0605 18.9091H22.6476"
                stroke="#C8C9CA"
                strokeWidth="1.86475"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div></div>
          </div>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.09668 1.08905V14.1423M5.29237 1.08905H12.7514M5.29237 7.61567H15.0823M5.29237 13.2099H11.819"
              stroke="#C8C9CA"
              strokeWidth="1.86475"
            />
          </svg>
          <div className="items-center flex gap-[1.5rem] h-[24px] border-l-[#CCCCCC] border-l-[1px]">
            <div></div>
            <svg
              onClick={() => changeSelectedText("code")}
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7685 0.622803L7.50514 14.1422M5.1742 2.95374L0.978516 7.14943L5.1742 11.3451"
                stroke="#C8C9CA"
                strokeWidth="0.932375"
              />
              <path
                d="M13.0997 11.3451L17.2954 7.14941L13.0997 2.95372"
                stroke="#C8C9CA"
                strokeWidth="0.932375"
              />
            </svg>
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.39428 6.2171L12.1914 3.88617L9.39428 1.55523"
                stroke="#C8C9CA"
                strokeWidth="0.932375"
              />
              <path
                d="M3.80005 1.55524L1.00293 3.88617L3.80005 6.21711"
                stroke="#C8C9CA"
                strokeWidth="0.932375"
              />
              <path
                d="M7.52943 0.156677L5.19849 7.14949M2.40137 9.94661V14.6085H16.8532V1.55524H13.1237"
                stroke="#C8C9CA"
                strokeWidth="0.932375"
              />
            </svg>
          </div>
        </div>
        <div className="drop-shadow-[0_0_2px_rgba(0,0,0,0.4)] bg-white rounded-[8px] justify-between flex flex-col">
          <textarea
            value={text}
            id="textAreaConversationCard"
            onChange={(e) => {
              settext(e.target.value);
              adjustTextareaHeights();
            }}
            placeholder="Message #design-hive"
            className="text-[black] outline-none rounded-t-[8px] font-[500] 
            text-[0.938rem] text-[#27272766] p-[10px] resize-none min-h-[65px] max-h-[155px]"
          ></textarea>
          <div className="flex justify-between p-[8px]">
            <div className="flex flex-wrap gap-[8px]  flex-row items-center">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.772461"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#571F6A"
                />
                <path
                  d="M14.9998 10.4391V15.7725M14.9998 15.7725V21.1058M14.9998 15.7725H9.6665M14.9998 15.7725H20.3332"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                />
              </svg>
              <hr className="h-[18px] border-r-[1px] border-[#CCCCCC]" />
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 6.60581C2.5 5.68534 3.24619 4.93915 4.16667 4.93915H10.8333C11.7538 4.93915 12.5 5.68534 12.5 6.60581V14.9391C12.5 15.8596 11.7538 16.6058 10.8333 16.6058H4.16667C3.24619 16.6058 2.5 15.8596 2.5 14.9391V6.60581Z"
                  stroke="#272727"
                  strokeOpacity="0.5"
                  strokeWidth="1.66667"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9607 8.87549L16.294 7.20882C16.8481 6.93178 17.5 7.33469 17.5 7.95418V13.5908C17.5 14.2103 16.8481 14.6132 16.294 14.3361L12.9607 12.6695C12.6783 12.5283 12.5 12.2398 12.5 11.9241V9.62084C12.5 9.3052 12.6783 9.01665 12.9607 8.87549Z"
                  stroke="#272727"
                  strokeOpacity="0.5"
                  strokeWidth="1.66667"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0001 16.6058V18.2725M10.0001 16.6058C6.93492 16.6058 5.12245 14.7267 4.17871 13.2725M10.0001 16.6058C13.0653 16.6058 14.8778 14.7267 15.8215 13.2725M13.3334 6.60579V9.93913C13.3334 11.7801 11.8411 13.2725 10.0001 13.2725C8.15915 13.2725 6.66677 11.7801 6.66677 9.93913V6.60579C6.66677 4.76484 8.15915 3.27246 10.0001 3.27246C11.8411 3.27246 13.3334 4.76485 13.3334 6.60579Z"
                  stroke="#272727"
                  strokeOpacity="0.5"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <hr className="h-[18px] border-r-[1px] border-[#CCCCCC]" />
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.7139 6.05843C12.1104 3.45494 7.88929 3.45494 5.28579 6.05844C2.6823 8.66192 2.68229 12.883 5.28579 15.4865C7.88927 18.09 12.1104 18.09 14.7139 15.4865C17.3174 12.883 17.3174 8.66193 14.7139 6.05843ZM4.10728 4.87992C7.36165 1.62556 12.638 1.62555 15.8924 4.87993C19.1467 8.13429 19.1467 13.4107 15.8924 16.665C12.638 19.9194 7.36163 19.9194 4.10728 16.665C0.852912 13.4107 0.852911 8.13428 4.10728 4.87992ZM7.05381 12.5402C7.37925 12.2148 7.90689 12.2148 8.23232 12.5403C9.20863 13.5166 10.7915 13.5166 11.7679 12.5403C12.0933 12.2148 12.6209 12.2148 12.9464 12.5403C13.2718 12.8657 13.2718 13.3933 12.9464 13.7188C11.3192 15.3459 8.68099 15.346 7.05381 13.7188C6.72837 13.3933 6.72837 12.8657 7.05381 12.5402Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
                <path
                  d="M8.74984 8.68915C8.74984 9.3795 8.28347 9.93915 7.70817 9.93915C7.13287 9.93915 6.6665 9.3795 6.6665 8.68915C6.6665 7.99879 7.13287 7.43915 7.70817 7.43915C8.28347 7.43915 8.74984 7.99879 8.74984 8.68915Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
                <path
                  d="M13.3332 8.68915C13.3332 9.3795 12.8668 9.93915 12.2915 9.93915C11.7162 9.93915 11.2498 9.3795 11.2498 8.68915C11.2498 7.99879 11.7162 7.43915 12.2915 7.43915C12.8668 7.43915 13.3332 7.99879 13.3332 8.68915Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
              </svg>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 3.77246C5.68629 3.77246 3 6.45875 3 9.77246C3 13.0862 5.68629 15.7725 9 15.7725C10.1599 15.7725 11.2407 15.4441 12.1573 14.8756C12.5094 14.6573 12.9717 14.7657 13.19 15.1177C13.4083 15.4697 13.2999 15.9321 12.9479 16.1504C11.8008 16.8618 10.4472 17.2725 9 17.2725C4.85786 17.2725 1.5 13.9146 1.5 9.77246C1.5 5.63033 4.85786 2.27246 9 2.27246C13.1421 2.27246 16.5 5.63033 16.5 9.77246C16.5 10.6008 16.297 11.5051 15.7882 12.2046C15.2511 12.9431 14.4015 13.4048 13.2897 13.3037C12.3872 13.2217 11.6111 12.77 11.0927 12.1145C10.3872 13.0217 9.30127 13.5691 8.10377 13.4008C6.20669 13.1342 5.07401 11.2181 5.34248 9.30778C5.61096 7.39747 7.22792 5.86779 9.125 6.1344C9.80428 6.22987 10.3856 6.53683 10.8396 6.97927C10.9259 6.60226 11.2889 6.34868 11.6783 6.40525C12.0882 6.46479 12.3723 6.84535 12.3127 7.25526L11.9265 9.91446C11.9265 9.91475 11.9264 9.91504 11.9264 9.91533C11.792 10.8594 12.4757 11.7235 13.4255 11.8099C13.9881 11.861 14.3347 11.6529 14.5752 11.3223C14.844 10.9527 15 10.3888 15 9.77246C15 6.45875 12.3137 3.77246 9 3.77246ZM8.91624 7.61981C8.01964 7.4938 7.00812 8.23408 6.82789 9.51654C6.64765 10.799 7.41593 11.7894 8.31253 11.9154C9.20913 12.0414 10.2206 11.3012 10.4009 10.0187C10.5811 8.73623 9.81284 7.74581 8.91624 7.61981Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
              </svg>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.67347 16.3114C2.10846 16.3114 2.35595 16.1014 2.51345 15.6139L3.33092 13.289H7.47081L8.29578 15.6214C8.44578 16.1014 8.69327 16.3114 9.14326 16.3114C9.63074 16.3114 9.98324 15.9889 9.98324 15.5464C9.98324 15.4039 9.95324 15.2614 9.87824 15.0514L6.57833 6.11918C6.35334 5.5192 5.99335 5.24921 5.40837 5.24921C4.81588 5.24921 4.44839 5.5267 4.2309 6.12668L0.938493 15.0514C0.863495 15.2539 0.833496 15.4189 0.833496 15.5464C0.833496 16.0039 1.17099 16.3114 1.67347 16.3114ZM3.75841 11.9165L5.37087 7.16915H5.41587L7.04332 11.9165H3.75841Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
                <path
                  d="M14.2536 16.3264C15.2811 16.3264 16.2861 15.7714 16.7435 14.8939H16.781V15.5614C16.796 16.0414 17.1035 16.3339 17.5535 16.3339C18.011 16.3339 18.3335 16.0264 18.3335 15.5164V10.754C18.3335 9.17159 17.111 8.15912 15.1986 8.15912C13.7811 8.15912 12.5887 8.72911 12.1762 9.62158C12.0787 9.80158 12.0337 9.98157 12.0337 10.1466C12.0337 10.5516 12.3262 10.8215 12.7312 10.8215C13.0161 10.8215 13.2261 10.7166 13.3911 10.4766C13.8411 9.75658 14.3586 9.47909 15.1386 9.47909C16.1286 9.47909 16.721 10.0041 16.721 10.8815V11.489L14.5536 11.6165C12.6862 11.7215 11.6212 12.569 11.6212 13.949C11.6212 15.3664 12.7087 16.3264 14.2536 16.3264ZM14.6961 15.0439C13.8336 15.0439 13.2561 14.5939 13.2561 13.904C13.2561 13.229 13.8036 12.8015 14.7711 12.734L16.721 12.614V13.2365C16.721 14.2639 15.8286 15.0439 14.6961 15.0439Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
              </svg>
              <hr className="h-[18px] border-r-[1px] border-[#CCCCCC]" />
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.9998 7.85577V9.52244M9.99807 17.8856L12.2814 15.9939C12.4309 15.87 12.6189 15.8022 12.8131 15.8022L14.1683 15.8022C15.549 15.8022 16.6683 14.6829 16.6683 13.3022V6.60577C16.6683 5.22506 15.549 4.10577 14.1683 4.10577L5.83496 4.10579C4.45425 4.10579 3.33496 5.22508 3.33496 6.60579V13.3022C3.33496 14.683 4.45425 15.8022 5.83496 15.8022H7.20964C7.40542 15.8022 7.59494 15.8712 7.74498 15.9969L9.99807 17.8856Z"
                  stroke="#272727"
                  strokeOpacity="0.5"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.9585 12.0224C8.9585 11.4471 9.42487 10.9808 10.0002 10.9808C10.5755 10.9808 11.0418 11.4471 11.0418 12.0224C11.0418 12.5977 10.5755 13.0641 10.0002 13.0641C9.42487 13.0641 8.9585 12.5977 8.9585 12.0224Z"
                  fill="#272727"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            <div className="flex items-center gap-[4px]">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.3852 4.83548C2.07798 3.79094 3.16026 2.88026 4.13692 3.36151L16.9015 9.65132C17.8315 10.1096 17.8315 11.4356 16.9015 11.8939L4.13691 18.1837C3.16026 18.6649 2.07798 17.7542 2.3852 16.7097L3.88635 11.6058H7.50004C7.96028 11.6058 8.33337 11.2327 8.33337 10.7724C8.33337 10.3122 7.96028 9.93911 7.50004 9.93911H3.88627L2.3852 4.83548Z"
                  fill="#272727"
                  fillOpacity="0.4"
                />
              </svg>
              <hr className="h-[18px] border-r-[1px] border-[#CCCCCC]" />
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.46967 6.71967C2.76256 6.42678 3.23744 6.42678 3.53033 6.71967L9.00001 12.1893L14.4697 6.71967C14.7626 6.42678 15.2374 6.42678 15.5303 6.71967C15.8232 7.01256 15.8232 7.48744 15.5303 7.78033L10.0607 13.25C9.47489 13.8358 8.52514 13.8358 7.93935 13.25L2.46967 7.78033C2.17678 7.48744 2.17678 7.01256 2.46967 6.71967Z"
                  fill="#27272766"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConversationCards;
