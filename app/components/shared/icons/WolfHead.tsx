import { getWolfColors } from "../../../theme/wolf";

type Props = {
  variant: string | null;
  width?: string;
};

export default function WolfHead({ variant, width }: Props): JSX.Element {
  const {
    chin,
    ear,
    earFill,
    eye,
    face,
    head,
    innerEye,
    mouth,
    noseOpacity,
    strokeOpacity,
  } = getWolfColors(variant);

  return (
    <svg
      width={width || "32px"}
      viewBox="0 0 25 25"
      fill="none"
      //  goose the wolf head since svg slightly off center
      style={{ marginRight: "2px" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.6512 3.23973C22.5776 2.36113 21.4857 2.00074 20.9036 2.66294L17.3034 6.75867H8.4719L5.32736 3.18129L4.87173 2.66294C4.28965 2.00074 3.19768 2.36113 3.12413 3.23973L2.98634 4.88568L2.58422 9.6891L1.28815 18.0752C1.17929 18.7795 1.45101 19.4862 2.03272 19.898C3.96492 21.2658 8.63081 24.2052 13.0454 24.2052C17.4596 24.2052 21.9394 21.2662 23.7855 19.8982C24.3434 19.4848 24.5984 18.795 24.4923 18.1088L23.1911 9.6891L22.6512 3.23973Z"
        fill={head}
      />
      <mask
        id="wolf-head-mask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width="24"
        height="25"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.4551 0.897827L17.3034 6.75867H12.8877H8.4719L5.32736 3.18129L3.32018 0.897827L2.98634 4.88568L2.58422 9.6891L1.1123 19.213C1.1123 19.213 7.29226 24.2052 13.0454 24.2052C18.7985 24.2052 24.663 19.213 24.663 19.213L23.1911 9.6891L22.4551 0.897827Z"
          fill="white"
        />
      </mask>
      <g mask="url(#wolf-head-mask)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.05371 19.9446V18.4794L6.26159 13.3512H19.5089L22.4527 18.4794V19.9446H4.05371Z"
          fill={face}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.41636 11.1541C3.28011 13.3519 4.06417 18.4801 4.06417 18.4801L12.9954 13.6122L22.0773 18.4801C22.0773 18.4801 22.0773 13.3519 19.1334 11.1541C16.8225 9.42875 14.0579 11.7667 12.9761 12.8516C11.8236 11.7667 8.87838 9.42875 6.41636 11.1541Z"
          fill={face}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1567 17.6313C15.6721 17.6313 14.4687 16.4312 14.4687 14.9507C14.4687 13.4703 15.6721 12.2701 17.1567 12.2701C18.6413 12.2701 19.8447 13.4703 19.8447 14.9507C19.8447 16.4312 18.6413 17.6313 17.1567 17.6313Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.6313 17.6313C7.14674 17.6313 5.94327 16.4312 5.94327 14.9507C5.94327 13.4703 7.14674 12.2701 8.6313 12.2701C10.1159 12.2701 11.3193 13.4703 11.3193 14.9507C11.3193 16.4312 10.1159 17.6313 8.6313 17.6313Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.153 16.0993C17.7892 16.0993 18.305 15.5849 18.305 14.9505C18.305 14.316 17.7892 13.8016 17.153 13.8016C16.5168 13.8016 16.001 14.316 16.001 14.9505C16.001 15.5849 16.5168 16.0993 17.153 16.0993Z"
          fill={innerEye || "#114B5F"}
        />
        <path
          d="M17.153 16.5993C18.0641 16.5993 18.805 15.8624 18.805 14.9505C18.805 14.0385 18.0641 13.3016 17.153 13.3016C16.2419 13.3016 15.501 14.0385 15.501 14.9505C15.501 15.8624 16.2419 16.5993 17.153 16.5993Z"
          stroke={eye}
          strokeOpacity={strokeOpacity}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.63346 16.1C9.2697 16.1 9.78547 15.5857 9.78547 14.9512C9.78547 14.3167 9.2697 13.8024 8.63346 13.8024C7.99722 13.8024 7.48145 14.3167 7.48145 14.9512C7.48145 15.5857 7.99722 16.1 8.63346 16.1Z"
          fill={innerEye || "#114B5F"}
        />
        <path
          d="M8.63346 16.6C9.54453 16.6 10.2855 15.8631 10.2855 14.9512C10.2855 14.0393 9.54453 13.3024 8.63346 13.3024C7.72239 13.3024 6.98145 14.0393 6.98145 14.9512C6.98145 15.8631 7.72239 16.6 8.63346 16.6Z"
          stroke={eye}
          strokeOpacity={strokeOpacity}
        />
        <ellipse
          cx="18.2365"
          cy="14.7127"
          rx="0.384005"
          ry="0.382941"
          fill="white"
        />
        <ellipse
          cx="9.66428"
          cy="14.7127"
          rx="0.384005"
          ry="0.382941"
          fill="white"
        />
        <rect
          width="9.51941"
          height="2.36978"
          rx="1.18489"
          transform="matrix(0.987295 0.158898 -0.159759 0.987156 4.21191 14.8849)"
          fill={face}
        />
        <rect
          width="8.79655"
          height="2.36978"
          rx="1.18489"
          transform="matrix(0.987622 -0.156854 0.157705 0.987486 12.8486 16.2567)"
          fill={face}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.27051 19.1365L12.8987 16.8463L24.2934 19.2418C24.2934 19.2418 18.7066 30.5957 12.9141 30.5692C7.12164 30.5427 1.27051 19.1365 1.27051 19.1365Z"
          fill={chin}
        />
        <path
          d="M14.5068 17.5982C14.5068 17.7978 14.345 17.9596 14.1455 17.9596H11.9244C11.7248 17.9596 11.563 17.7978 11.563 17.5982C11.563 16.9886 12.0572 16.4944 12.6668 16.4944H13.403C14.0126 16.4944 14.5068 16.9886 14.5068 17.5982Z"
          fill={mouth}
        />
        <path
          opacity={noseOpacity || "0.277972"}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1405 17.2264H11.9293C11.8288 17.2264 11.7377 17.1859 11.6715 17.1204C11.8496 16.75 12.2284 16.4944 12.6668 16.4944H13.403C13.8414 16.4944 14.2201 16.75 14.3983 17.1203C14.3321 17.1859 14.241 17.2264 14.1405 17.2264Z"
          fill="white"
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.802 7.59089L21.5333 4.46319L21.8927 9.57894L18.802 7.59089Z"
          fill={ear}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.0586 7.74331L20.448 6.15224L20.6308 8.75464L19.0586 7.74331Z"
          fill={earFill}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7252 8.18055L20.9415 6.78776L21.1015 9.06584L19.7252 8.18055Z"
          fill={earFill}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3664 8.59929L21.46 7.34699L21.6039 9.39528L20.3664 8.59929Z"
          fill={earFill}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.73831 7.7272L5.34888 6.13612L5.16607 8.73853L6.73831 7.7272Z"
          fill={earFill}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.07164 8.16443L4.85536 6.77164L4.69534 9.04973L6.07164 8.16443Z"
          fill={earFill}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.43047 8.58317L4.33688 7.33087L4.193 9.37917L5.43047 8.58317Z"
          fill={earFill}
        />
        <path
          opacity="0.32373"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.97141 7.59089L4.24009 4.46319L3.88073 9.57894L6.97141 7.59089Z"
          fill={ear}
        />
      </g>
      <path
        d="M9.71387 18.4159C9.71387 18.4159 11.0198 20.214 13.0574 20.161C15.095 20.1079 16.305 18.2442 16.305 18.2442"
        stroke={mouth}
        strokeWidth="0.954545"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.76663 18.2497C9.76663 18.2497 11.2541 20.4107 12.9605 20.4107C14.6668 20.4107 16.2358 18.0834 16.2358 18.0834C16.2358 18.0834 15.4573 19.4012 12.9605 19.4012C10.4637 19.4012 9.76663 18.2497 9.76663 18.2497Z"
        fill={mouth}
      />
      <mask
        id="wolf-head-mask-2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="10"
        y="18"
        width="6"
        height="3"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2002 18.793C10.2002 18.793 10.8714 20.4338 13.0675 20.4338C15.2915 20.3082 15.7199 18.6627 15.7199 18.6627C15.7199 18.6627 14.2667 19.7363 12.9556 19.7363C11.6445 19.7363 10.2002 18.793 10.2002 18.793Z"
          fill="white"
        />
      </mask>
      <g mask="url(#wolf-head-mask-2)">
        <rect
          x="11.1201"
          y="17.7457"
          width="3.6798"
          height="7.32606"
          fill="#F9719F"
        />
        <path
          d="M10.874 18.3763H15.1846V20.5033C15.1846 20.5033 14.4973 20.1355 13.0354 20.0624C11.5735 19.9892 10.874 20.5033 10.874 20.5033V18.3763Z"
          fill={mouth}
        />
      </g>
      <path
        d="M11.126 20.6112C11.126 20.0589 11.5737 19.6112 12.126 19.6112H13.8058C14.3581 19.6112 14.8058 20.0589 14.8058 20.6112V23.0575C14.8058 24.0737 13.982 24.8974 12.9659 24.8974C11.9497 24.8974 11.126 24.0737 11.126 23.0575V20.6112Z"
        fill="#F9719F"
      />
      <mask
        id="wolf-head-tongue"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="11"
        y="19"
        width="4"
        height="6"
      >
        <path
          d="M11.126 20.6112C11.126 20.0589 11.5737 19.6112 12.126 19.6112H13.8058C14.3581 19.6112 14.8058 20.0589 14.8058 20.6112V23.0575C14.8058 24.0737 13.982 24.8974 12.9659 24.8974C11.9497 24.8974 11.126 24.0737 11.126 23.0575V20.6112Z"
          fill="#F9719F"
        />
      </mask>
      <g mask="url(#wolf-head-tongue)">
        <rect
          opacity="0.14"
          x="11.46"
          y="20.0419"
          width="1.16821"
          height="3.78957"
          rx="0.584105"
          fill="white"
        />
      </g>
      <path
        d="M14.8018 20.3269C14.8018 20.5487 13.9781 20.3269 12.9619 20.3269C11.9458 20.3269 11.122 20.5487 11.122 20.3269C11.122 19.1693 10.7377 19.5424 12.9619 19.5424C15.0941 19.5424 14.8018 19.0508 14.8018 20.3269Z"
        fill={mouth}
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.53714 18.9129C2.04764 19.0106 1.73296 18.4095 2.09208 18.0629L3.74908 16.4634C3.92577 16.2928 4.20016 16.2758 4.39655 16.4233L5.73199 17.4259C6.07761 17.6854 5.95343 18.2316 5.52958 18.3161L2.53714 18.9129Z"
        fill={face}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.227 19.0604C23.7117 19.172 24.0443 18.5845 23.6992 18.2263L22.095 16.5611C21.8913 16.3496 21.5499 16.3584 21.3574 16.5802L20.4196 17.6604C20.1724 17.9453 20.3175 18.3909 20.6851 18.4755L23.227 19.0604Z"
        fill={face}
      />
    </svg>
  );
}
