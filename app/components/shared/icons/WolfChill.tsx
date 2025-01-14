import { getWolfColors } from "../../../theme/wolf";

type Props = {
  variant: string | null;
};

export default function WolfChill({ variant }: Props): JSX.Element {
  const {
    backLeg,
    belly,
    chin,
    ear,
    earFill,
    eye,
    face,
    head,
    innerEye,
    mouth,
    noseOpacity,
    paw,
    pawOutline,
    strokeOpacity,
    tail,
    tailOutline,
  } = getWolfColors(variant);

  return (
    <svg
      id="wolf-chill"
      width="96"
      viewBox="0 0 85 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.8935 84.7172C42.7737 91.853 37.688 92.0882 37.688 92.0882L37.5134 92.0191C39.3968 87.4138 39.2898 82.6265 37.3911 79.1992C42.1702 81.3242 46.1993 71.6305 46.1993 71.6305C47.5995 73.553 48.4109 75.815 48.5342 78.1395C48.6575 80.4639 48.0873 82.7499 46.8935 84.7172V84.7172Z"
        fill={tail || head}
      />
      <path
        d="M46.9016 84.7219C48.0954 82.7546 48.6656 80.4686 48.5423 78.1442C48.419 75.8197 47.6075 73.5577 46.2073 71.6352C45.4245 73.4277 44.4271 75.1168 43.2355 76.6683C43.8831 78.3486 44.1413 80.1373 43.9909 81.9018C43.8405 83.6663 43.2854 85.3612 42.3667 86.8609C41.2635 88.8589 39.7787 90.6221 37.99 92.0581C39.1167 91.8872 43.3613 90.854 46.9016 84.7219Z"
        fill={tailOutline || face}
      />
      <rect
        x="18"
        y="67.1058"
        width="12"
        height="26"
        rx="6"
        transform="rotate(-15 18 67.1058)"
        fill={backLeg || head}
      />
      <rect
        x="31.0214"
        y="79.4728"
        width="9"
        height="16"
        rx="4.5"
        transform="rotate(39.76 31.0214 79.4728)"
        fill={backLeg || head}
      />
      <rect
        width="9"
        height="16"
        rx="4.5"
        transform="matrix(-0.768731 0.639573 0.639573 0.768731 54.1499 80.4728)"
        fill={backLeg || head}
      />
      <rect
        x="56.2117"
        y="64"
        width="12"
        height="26"
        rx="6"
        transform="rotate(15 56.2117 64)"
        fill={backLeg || head}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.3438 50.08L32.2812 58.08C33.5079 58.08 34.6843 58.5673 35.5516 59.4347C36.419 60.302 36.9062 61.4784 36.9062 62.705V67.3301C36.9062 66.1034 36.419 64.927 35.5516 64.0597C34.6843 63.1923 33.5079 62.705 32.2812 62.705H25.3438C23.0509 62.705 20.4725 61.0401 18.5219 58.6385C18.4537 57.1134 18.4062 47.5375 18.4062 45.8829C20.3719 48.3572 23.0081 50.08 25.3438 50.08ZM60.0312 62.705H53.0938C51.8671 62.705 50.6907 63.1923 49.8234 64.0597C48.956 64.927 48.4688 66.1034 48.4688 67.3301V62.705C48.4688 61.4784 48.956 60.302 49.8234 59.4347C50.6907 58.5673 51.8671 58.08 53.0938 58.08L60.0312 50.08C62.3669 50.08 65.0031 48.3572 66.9676 45.8829C66.9676 47.3629 66.9329 56.7966 66.8751 58.1726C66.8717 58.2669 66.867 58.358 66.8624 58.4495C66.8592 58.5127 66.856 58.5761 66.8531 58.6408C64.9014 61.0412 62.3229 62.705 60.0312 62.705Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 81C54.3208 81 64.4732 71.7158 65.8428 59.7618C66.1938 59.4108 66.532 59.0358 66.8531 58.6408C66.8545 58.61 66.8559 58.5794 66.8574 58.549C66.859 58.5157 66.8607 58.4826 66.8624 58.4495L66.8624 58.449C66.8671 58.3577 66.8717 58.2667 66.8751 58.1726C66.9329 56.7966 66.9676 47.3629 66.9676 45.8829C66.198 46.8522 65.3253 47.7062 64.408 48.3865C60.9463 39.3868 52.219 33 42 33C32.1064 33 23.6111 38.9865 19.9387 47.5347C19.3977 47.0373 18.8823 46.4821 18.4062 45.8829C18.4062 46.7197 18.4184 49.583 18.4392 52.4061C18.151 53.893 18 55.4289 18 57C18 70.2548 28.7452 81 42 81Z"
        fill={head}
      />
      <ellipse cx="43" cy="68.5" rx="16" ry="12.5" fill={belly || face} />
      <path
        d="M26.5938 56.8848L26.5938 49.9473C26.5938 47.6117 28.3167 44.9754 30.791 43.0098C24.3261 42.91 17.872 43.5736 11.5627 44.987C3.93145 46.8717 0.000216266 49.9473 0.000216115 53.416L0.000215862 59.1973C-0.00752031 59.801 0.224118 60.3832 0.644473 60.8165C1.06483 61.2499 1.63969 61.4991 2.24333 61.5098L21.9689 61.5098C23.1955 61.5098 24.3719 61.0225 25.2392 60.1552C26.1066 59.2878 26.5938 58.1114 26.5938 56.8848Z"
        fill={paw || head}
      />
      <path
        d="M26.0358 43.1215C26.7827 43.0906 27.5428 43.0652 28.3159 43.0452C22.6778 43.0813 17.0605 43.7311 11.563 44.983C3.93178 46.8677 0.000536607 49.9434 0.000536455 53.4121L0.000536303 56.8809C0.000536455 53.4121 3.93178 50.3365 11.563 48.4518C15.29 47.5678 19.0854 47.0027 22.9081 46.7625C23.7121 45.3627 24.7732 44.1273 26.0358 43.1215V43.1215Z"
        fill={pawOutline || chin}
      />
      <path
        d="M58.1972 56.8848L58.1972 49.9473C58.1972 47.6117 56.4744 44.9754 54 43.0098C60.4649 42.91 66.919 43.5736 73.2284 44.987C80.8596 46.8717 84.7908 49.9473 84.7908 53.416L84.7908 59.1973C84.7985 59.801 84.5669 60.3832 84.1465 60.8165C83.7262 61.2499 83.1513 61.4991 82.5477 61.5098L62.8221 61.5098C61.5955 61.5098 60.4191 61.0225 59.5518 60.1552C58.6844 59.2878 58.1972 58.1114 58.1972 56.8848Z"
        fill={paw || head}
      />
      <path
        d="M58.7552 43.1215C58.0083 43.0906 57.2482 43.0652 56.4751 43.0452C62.1132 43.0813 67.7306 43.7311 73.228 44.983C80.8592 46.8677 84.7905 49.9434 84.7905 53.4121L84.7905 56.8809C84.7905 53.4121 80.8592 50.3365 73.228 48.4518C69.5011 47.5678 65.7057 47.0027 61.8829 46.7625C61.079 45.3627 60.0178 44.1273 58.7552 43.1215V43.1215Z"
        fill={pawOutline || chin}
      />
      <g id="wolf-chill-head">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.6138 2.34717C68.5404 1.46779 67.4469 1.10761 66.8652 1.77119L55.0021 15.3048H32.0036L23.8148 5.96296L20.1404 1.77119C19.5588 1.10761 18.4653 1.46779 18.3919 2.34717L17.7185 10.4138L16.6713 22.9572L13.0133 46.692C12.9049 47.3952 13.1693 48.0949 13.7377 48.5228C17.3235 51.2228 31.0295 60.864 43.9135 60.864C56.7969 60.864 69.8948 51.2238 73.3113 48.5232C73.855 48.0934 74.1032 47.4106 73.9976 46.7256L70.3344 22.9572L68.6138 2.34717Z"
          fill={head}
        />
        <mask
          id="wolf-chill-mask"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="12"
          y="0"
          width="63"
          height="61"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.4178 0L55.0021 15.3048H43.5028H32.0036L23.8148 5.96296L18.5879 0L17.7185 10.4138L16.6713 22.9572L12.8383 47.8276C12.8383 47.8276 28.9317 60.864 43.9135 60.864C58.8954 60.864 74.1674 47.8276 74.1674 47.8276L70.3344 22.9572L68.4178 0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#wolf-chill-mask)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.8228 40.2232C66.0215 35.8691 64.1456 30.0707 59.7543 26.7831C53.7388 22.2795 46.5432 28.3776 43.7235 31.2124C40.7194 28.3776 33.0535 22.2795 26.6448 26.7831C22.0235 30.0306 20.6708 35.7282 20.3674 40.0634C20.3055 40.0869 20.2474 40.1231 20.1973 40.1716L13.4207 46.7312C13.0623 47.0782 13.3773 47.6786 13.8666 47.5808L26.1046 45.1331C26.1957 45.1149 26.273 45.0754 26.3347 45.0219L43.8169 41.6877L65.3159 46.2492L73.0618 48.0367C73.5462 48.1485 73.8792 47.5616 73.5348 47.2031L66.874 40.2697C66.8578 40.2528 66.8407 40.2373 66.8228 40.2232Z"
            fill={face}
          />
          <g
            className="wolf-chill-eye"
            style={{ transformOrigin: "50%", transition: "transform 0.48s" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6108 43.698C50.7448 43.698 47.6108 40.564 47.6108 36.698C47.6108 32.832 50.7448 29.698 54.6108 29.698C58.4768 29.698 61.6108 32.832 61.6108 36.698C61.6108 40.564 58.4768 43.698 54.6108 43.698Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6108 39.698C56.2677 39.698 57.6108 38.3549 57.6108 36.698C57.6108 35.0411 56.2677 33.698 54.6108 33.698C52.954 33.698 51.6108 35.0411 51.6108 36.698C51.6108 38.3549 52.954 39.698 54.6108 39.698Z"
              fill={innerEye || "#114B5F"}
            />
            <path
              d="M54.6108 40.698C56.82 40.698 58.6108 38.9071 58.6108 36.698C58.6108 34.4889 56.82 32.698 54.6108 32.698C52.4017 32.698 50.6108 34.4889 50.6108 36.698C50.6108 38.9071 52.4017 40.698 54.6108 40.698Z"
              stroke={eye}
              strokeOpacity={strokeOpacity}
              strokeWidth="2"
            />
            <circle cx="57.4185" cy="36.0743" r="1" fill="white" />
          </g>
          <g
            className="wolf-chill-eye"
            style={{
              transformOrigin: "50%",
              transition: "transform 0.48s",
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.4084 43.698C28.5425 43.698 25.4084 40.564 25.4084 36.698C25.4084 32.832 28.5425 29.698 32.4084 29.698C36.2744 29.698 39.4084 32.832 39.4084 36.698C39.4084 40.564 36.2744 43.698 32.4084 43.698Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.4084 39.698C34.0653 39.698 35.4084 38.3549 35.4084 36.698C35.4084 35.0411 34.0653 33.698 32.4084 33.698C30.7516 33.698 29.4084 35.0411 29.4084 36.698C29.4084 38.3549 30.7516 39.698 32.4084 39.698Z"
              fill={innerEye || "#114B5F"}
            />
            <path
              d="M32.4084 40.698C34.6176 40.698 36.4084 38.9071 36.4084 36.698C36.4084 34.4889 34.6176 32.698 32.4084 32.698C30.1993 32.698 28.4084 34.4889 28.4084 36.698C28.4084 38.9071 30.1993 40.698 32.4084 40.698Z"
              stroke={eye}
              strokeOpacity={strokeOpacity}
              strokeWidth="2"
            />
            <circle cx="35.0985" cy="36.0743" r="1" fill="white" />
          </g>
          <path
            d="M42.3331 39.9825L23.9671 37.0185C22.2802 36.7462 20.692 37.893 20.4197 39.5799C20.1475 41.2669 21.3131 45.7277 23 46L41.3472 46.0914C43.0342 46.3637 44.6224 45.2169 44.8946 43.5299C45.1669 41.843 44.0201 40.2548 42.3331 39.9825Z"
            fill={face}
          />
          <path
            d="M62.9677 36.9913L46.4548 39.6212C44.7673 39.8899 43.6172 41.4758 43.8859 43.1632C44.1547 44.8507 45.7405 46.0008 47.428 45.7321L64 46.5C65.6875 46.2312 66.7785 41.2476 66.5098 39.5601C66.241 37.8727 64.6552 36.7226 62.9677 36.9913Z"
            fill={face}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2472 47.6273L43.5285 41.6467L73.2019 47.9021C73.2019 47.9021 58.6531 60.9405 43.5687 60.8713C28.4843 60.8022 13.2472 47.6273 13.2472 47.6273Z"
            fill="#EBEEF8"
          />
          <g style={{ mixBlendMode: "darken" }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2472 47.6273L43.5285 41.6467L73.2019 47.9021C73.2019 47.9021 58.6531 60.9405 43.5687 60.8713C28.4843 60.8022 13.2472 47.6273 13.2472 47.6273Z"
              fill={chin}
            />
          </g>
          <path
            d="M47.7369 44.0547C47.7369 44.3308 47.5131 44.5547 47.2369 44.5547H40.5708C40.2946 44.5547 40.0708 44.3308 40.0708 44.0547V42.2557C40.0708 41.4122 40.7546 40.7285 41.5981 40.7285H46.2097C47.0532 40.7285 47.7369 41.4122 47.7369 42.2557V44.0547Z"
            fill={mouth}
          />
          <path
            opacity={noseOpacity || "0.277972"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.7803 42.6402H41.0273C40.5863 42.6402 40.215 42.3418 40.1043 41.9359C40.2514 41.246 40.8643 40.7285 41.5981 40.7285H46.2097C46.9434 40.7285 47.5563 41.2459 47.7033 41.9357C47.5927 42.3417 47.2214 42.6402 46.7803 42.6402Z"
            fill="white"
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.9077 17.4784L66.0204 9.31081L66.9562 22.6699L58.9077 17.4784Z"
            fill={ear}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M59.5759 17.8762L63.1941 13.7213L63.6702 20.5172L59.5759 17.8762Z"
            fill={earFill}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.3084 19.019L64.4758 15.3819L64.8925 21.3309L61.3084 19.019Z"
            fill={earFill}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M62.9857 20.1115L65.8336 16.8413L66.2083 22.1901L62.9857 20.1115Z"
            fill={earFill}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.0921 17.4784L20.9794 9.31081L20.0435 22.6699L28.0921 17.4784Z"
            fill={ear}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.4889 17.8337L23.8707 13.6788L23.3946 20.4746L27.4889 17.8337Z"
            fill={earFill}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.7564 18.9765L22.589 15.3394L22.1723 21.2883L25.7564 18.9765Z"
            fill={earFill}
          />
          <path
            opacity="0.32373"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0791 20.069L21.2312 16.7988L20.8565 22.1476L24.0791 20.069Z"
            fill={earFill}
          />
        </g>
        <path
          d="M35.2485 45.748C35.2485 45.748 38.6493 50.4435 43.9555 50.305C49.2616 50.1664 52.4127 45.2997 52.4127 45.2997"
          stroke={mouth}
          strokeWidth="0.954545"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.38 45.3133C35.38 45.3133 39.2535 50.9562 43.6971 50.9562C48.1407 50.9562 52.2265 44.8788 52.2265 44.8788C52.2265 44.8788 50.1991 48.3201 43.6971 48.3201C37.1951 48.3201 35.38 45.3133 35.38 45.3133Z"
          fill={mouth}
        />
        <mask
          id="wolf-chill-mask-1"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="36"
          y="46"
          width="15"
          height="6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.5101 46.731C36.5101 46.731 38.2581 51.0156 43.977 51.0156C49.7687 50.6878 50.8842 46.3907 50.8842 46.3907C50.8842 46.3907 47.0998 49.1943 43.6856 49.1943C40.2713 49.1943 36.5101 46.731 36.5101 46.731Z"
            fill="white"
          />
        </mask>
        <g mask="url(#wolf-chill-mask-1)">
          <rect
            x="38.9137"
            y="43.9976"
            width="9.58269"
            height="19.131"
            fill="#F9719F"
          />
          <path
            d="M38.2771 45.6444H49.5024V51.1986C49.5024 51.1986 47.7125 50.2382 43.9056 50.0472C40.0987 49.8561 38.2771 51.1986 38.2771 51.1986V45.6444Z"
            fill={mouth}
          />
        </g>
        <g id="wolf-chill-tongue">
          <path
            d="M36.549 48.8269C36.692 48.2935 37.2403 47.9769 37.7738 48.1198L45.0981 50.0824C45.6316 50.2253 45.9481 50.7736 45.8052 51.3071L43.5265 59.8114C42.9547 61.9453 40.7614 63.2116 38.6275 62.6398L37.0988 62.2302C34.9649 61.6584 33.6986 59.4651 34.2703 57.3312L36.549 48.8269Z"
            fill="#F9719F"
          />
          <g mask="url(#wolf-chill-mask-2)">
            <rect
              opacity="0.14"
              x="37.3533"
              y="49.1724"
              width="3.04218"
              height="9.89596"
              rx="1.52109"
              transform="rotate(15 37.3533 49.1724)"
              fill="white"
            />
          </g>
        </g>
        <mask
          id="wolf-chill-mask-2"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="33"
          y="47"
          width="14"
          height="17"
        >
          <path
            d="M36.549 48.8269C36.692 48.2935 37.2403 47.9769 37.7738 48.1198L45.0981 50.0824C45.6316 50.2253 45.9481 50.7736 45.8052 51.3071L43.5265 59.8114C42.9547 61.9453 40.7614 63.2116 38.6275 62.6398L37.0988 62.2302C34.9649 61.6584 33.6986 59.4651 34.2703 57.3312L36.549 48.8269Z"
            fill="#F9719F"
          />
        </mask>

        <path
          d="M45.5805 52.1457C45.4306 52.7051 43.5084 51.5905 40.9524 50.9056C38.3964 50.2207 36.1744 50.2249 36.3243 49.6655C37.1067 46.7457 35.8877 47.4278 41.4826 48.9269C46.8457 50.364 46.4429 48.927 45.5805 52.1457Z"
          fill={mouth}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}
