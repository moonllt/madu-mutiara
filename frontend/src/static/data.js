// navigation Data
export const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Best Selling",
      url: "/best-selling",
    },
    {
      title: "Shop",
      url: "/products",
    },
    // {
    //   title: "Events",
    //   url: "/events",
    // },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];
  
  // branding data
  export const brandingData = [
    {
      id: 1,
      title: "Teruji BPOM",

      icon: (
        <svg width="115" height="108" viewBox="0 0 115 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.6984 52.6166C44.018 59.389 53.338 65.6337 64.0699 56.3489C74.8021 47.0637 81.9393 29.1159 83.5509 15.0273L92.6746 9.16232C92.6746 9.16232 93.4144 38.7536 84.044 63.28C74.6736 87.8065 62.5906 91.2721 62.5906 91.2721C50.29 81.4221 40.5695 66.5184 36.6984 52.6166Z" fill="#3C2B99"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M101.33 3.51461C101.13 8.70429 99.6901 34.4515 90.3376 56.4132C87.3025 63.541 84.1164 68.9133 81.124 72.954C82.8091 69.8611 84.4874 66.2628 86.0887 62.0713C94.4188 40.2674 95.0888 14.6299 95.1052 7.52643L101.33 3.51461Z" fill="#00A759"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M106.784 0C106.338 6.96575 104.147 31.7585 94.7201 53.0631C91.5 60.3405 88.1564 65.8262 85.032 69.9514C85.3608 69.366 85.6902 68.7616 86.0186 68.1399C88.9702 63.8787 92.0469 58.2392 94.8913 50.7936C101.617 33.1904 103.498 13.1651 104.006 1.79008L106.784 0Z" fill="#3C2B99"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 92.9715H5.4643C6.54579 92.9715 7.35463 93.0197 7.88584 93.1191C8.41744 93.2155 8.89145 93.4188 9.31207 93.7288C9.73193 94.038 10.0786 94.4474 10.3589 94.964C10.6388 95.4764 10.7787 96.0544 10.7787 96.6906C10.7787 97.3824 10.6067 98.0185 10.2635 98.5969C9.9165 99.1749 9.44859 99.6082 8.8598 99.8976C9.69037 100.159 10.3333 100.606 10.7787 101.236C11.2276 101.869 11.4503 102.612 11.4503 103.465C11.4503 104.137 11.3069 104.79 11.0178 105.427C10.728 106.06 10.3333 106.569 9.83375 106.947C9.33381 107.326 8.71641 107.56 7.98156 107.649C7.52318 107.701 6.41232 107.735 4.65279 107.749H0V92.9715ZM2.76208 95.4315V98.848H4.57004C5.64582 98.848 6.31394 98.8307 6.57478 98.7965C7.04574 98.7379 7.41793 98.5627 7.68869 98.27C7.95906 97.9777 8.09291 97.5922 8.09291 97.114C8.09291 96.6564 7.97813 96.2845 7.74589 95.9988C7.5106 95.7135 7.16357 95.5412 6.7052 95.483C6.43177 95.4484 5.64582 95.4315 4.34696 95.4315H2.76208ZM2.76208 101.308V105.258H5.31443C6.3105 105.258 6.94087 105.23 7.20819 105.168C7.6189 105.089 7.95296 104.889 8.21075 104.58C8.46816 104.267 8.59858 103.848 8.59858 103.324C8.59858 102.88 8.49714 102.505 8.29998 102.196C8.09901 101.886 7.813 101.659 7.43738 101.518C7.06175 101.376 6.24377 101.308 4.9899 101.308H2.76208ZM26.1092 107.749H23.1046L21.9113 104.391H16.4467L15.3206 107.749H12.3926L17.7165 92.9715H20.6354L26.1092 107.749ZM21.0262 101.903L19.1424 96.4189L17.2967 101.903H21.0262ZM27.5636 92.9715H32.6077C33.7437 92.9715 34.6094 93.0642 35.2077 93.2535C36.0101 93.5082 36.6972 93.9622 37.2666 94.616C37.8398 95.2666 38.2756 96.0647 38.5746 97.0076C38.8705 97.9534 39.0204 99.1164 39.0204 100.503C39.0204 101.717 38.8804 102.767 38.6005 103.648C38.26 104.721 37.773 105.592 37.1366 106.255C36.6591 106.762 36.0127 107.154 35.1986 107.436C34.5903 107.645 33.7754 107.749 32.7541 107.749H27.5636V92.9715ZM30.3227 95.4727V105.258H32.3816C33.1523 105.258 33.7086 105.213 34.053 105.117C34.498 104.996 34.8702 104.793 35.1661 104.504C35.4628 104.215 35.7012 103.737 35.8888 103.076C36.0734 102.416 36.1691 101.511 36.1691 100.369C36.1691 99.2265 36.0734 98.3524 35.8888 97.7402C35.7012 97.1276 35.4403 96.6493 35.1059 96.3088C34.7688 95.9646 34.3421 95.7341 33.8265 95.6141C33.4413 95.5177 32.6874 95.4727 31.5605 95.4727H30.3227ZM53.6885 107.749H50.6842L49.491 104.391H44.0267L42.8998 107.749H39.9722L45.2966 92.9715H48.215L53.6885 107.749ZM48.6059 101.903L46.7221 96.4189L44.8763 101.903H48.6059ZM55.178 107.749V92.9715H57.8638L63.4589 102.839V92.9715H66.0242V107.749H63.2522L57.7429 98.1117V107.749H55.178Z" fill="#3C2B99"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M74.2475 107.749V92.9715H78.6745C80.3517 92.9715 81.4465 93.0469 81.9556 93.1953C82.7385 93.4155 83.3971 93.897 83.9257 94.6403C84.4534 95.3832 84.7177 96.343 84.7177 97.5168C84.7177 98.4246 84.5652 99.1885 84.2597 99.8045C83.9543 100.424 83.5687 100.909 83.0981 101.263C82.6302 101.614 82.1532 101.848 81.6689 101.962C81.0107 102.102 80.0558 102.175 78.805 102.175H77.0069V107.749H74.2475ZM77.0069 95.4727V99.6635H78.5151C79.6035 99.6635 80.3326 99.5876 80.6983 99.433C81.064 99.278 81.3508 99.0372 81.5606 98.707C81.768 98.3768 81.8729 97.995 81.8729 97.558C81.8729 97.0212 81.7264 96.5772 81.4336 96.2259C81.1441 95.8788 80.7716 95.6586 80.3258 95.5725C79.9951 95.5036 79.3335 95.4727 78.3401 95.4727H77.0069ZM86.4239 100.451C86.4239 98.9445 86.6305 97.6817 87.0481 96.6596C87.3597 95.9097 87.783 95.2319 88.3207 94.6333C88.8587 94.038 89.4472 93.5944 90.0867 93.3054C90.9401 92.9129 91.9202 92.72 93.0341 92.72C95.0484 92.72 96.6584 93.3944 97.868 94.7467C99.0777 96.0952 99.6825 97.9744 99.6825 100.379C99.6825 102.767 99.0807 104.632 97.881 105.981C96.6809 107.326 95.077 108 93.0722 108C91.0385 108 89.422 107.329 88.2223 105.991C87.0222 104.649 86.4239 102.802 86.4239 100.451ZM89.266 100.352C89.266 102.023 89.6256 103.293 90.3384 104.156C91.0541 105.021 91.9614 105.451 93.0623 105.451C94.1606 105.451 95.0644 105.024 95.771 104.163C96.4742 103.307 96.8273 102.023 96.8273 100.31C96.8273 98.6175 96.4837 97.3547 95.7996 96.5186C95.112 95.6863 94.1987 95.2699 93.0623 95.2699C91.9232 95.2699 91.0069 95.6929 90.3094 96.536C89.6161 97.3786 89.266 98.648 89.266 100.352ZM101.799 107.749V92.9715H105.93L108.409 103.052L110.859 92.9715H115V107.749H112.438V96.1159L109.723 107.749H107.066L104.361 96.1159V107.749H101.799Z" fill="#00A759"/>
</svg>

      ),
    },
    {
      id: 2,
      title: "Bersertifikasi Halal",
   
      icon: (
        <svg width="167" height="137" viewBox="0 0 167 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M93.1416 11.7841L89.8147 15.2841L89.7625 93.8985C89.7625 94.1447 89.5146 94.3588 89.2015 94.3588L61.0855 94.4337C61.0855 94.4337 60.12 93.8985 60.12 92.7961C60.12 91.6937 60.0287 90.709 60.0287 90.6983L54.275 90.5806C54.275 90.5806 52.9312 97.955 59.6764 98.7042C59.6764 98.7042 59.6764 98.7042 59.6895 98.7042H113.182C113.247 98.7042 113.351 98.6828 113.416 98.6721C114.291 98.5651 115.256 98.244 116.339 97.2807C117.8 95.9856 117.944 94.9046 118.009 93.8664C117.983 90.6769 117.696 87.4338 117.813 84.0624C117.826 83.6984 118.1 83.2168 118.426 82.9813L118.609 82.8529C118.622 82.8422 118.635 82.8315 118.648 82.8315C119.079 82.5746 125.628 78.6145 128.068 69.9235C130.769 60.3228 124.467 51.4713 121.766 47.7788C110.337 32.1415 101.974 21.5775 101.974 21.5775V84.6938H107.819V37.8141C107.819 37.8141 112.764 43.3477 119.966 54.7893C120.384 55.4422 124.911 62.5384 121.766 70.662C120.214 74.6757 114.565 79.5242 114.565 79.5242C114.565 79.5242 112.764 80.6266 112.764 82.8422V92.4322C112.764 92.4536 113.208 94.2731 110.964 94.2731H95.6727V15.1663L93.1416 11.7841Z" fill="#652672"/>
<path d="M45.3509 130.835H43.5505V125.665H45.3509V130.835Z" fill="#652672"/>
<path d="M56.6495 130.835H54.9143L52.8659 128.341C52.7746 128.234 52.6833 128.116 52.5919 128.02C52.5919 128.17 52.5919 128.33 52.5919 128.491V130.835H50.7915V125.665H52.4876L54.549 127.977C54.6273 128.074 54.7186 128.17 54.7969 128.266C54.8099 128.106 54.823 127.956 54.8491 127.785V125.665H56.6495V130.835Z" fill="#652672"/>
<path d="M63.8905 130.931C63.3556 130.931 62.8598 130.91 62.4293 130.878L62.0248 130.846V125.815L62.4162 125.772C62.9903 125.708 63.5644 125.676 64.1384 125.676C65.3518 125.676 66.239 125.89 66.8652 126.318C67.5306 126.768 67.8829 127.399 67.8829 128.202C67.8829 129.026 67.5306 129.722 66.8652 130.204C66.1998 130.674 65.1822 130.931 63.8905 130.931ZM63.8253 129.722C63.9688 129.722 64.0993 129.722 64.1645 129.722C65.5736 129.722 66.2781 129.208 66.2781 128.202C66.2781 127.806 66.1477 127.485 65.8867 127.271C65.5605 127.003 65.0126 126.853 64.295 126.853C64.1123 126.853 63.9558 126.864 63.8384 126.864V129.722H63.8253Z" fill="#652672"/>
<path d="M75.985 131.006C74.1193 131.006 72.8277 129.925 72.8277 128.384C72.8277 126.789 74.1584 125.676 76.0763 125.676C77.942 125.676 79.2337 126.757 79.2337 128.298C79.2337 129.915 77.929 131.006 75.985 131.006ZM76.0372 126.875C74.9412 126.875 74.5498 127.678 74.5498 128.363C74.5498 129.048 75.0065 129.797 76.0241 129.797C77.0548 129.797 77.5115 129.058 77.5115 128.32C77.5115 127.624 77.0418 126.875 76.0372 126.875Z" fill="#652672"/>
<path d="M90.0887 130.835H88.6274L86.5791 128.341C86.5269 128.277 86.4747 128.213 86.4225 128.149C86.4356 128.234 86.4616 128.32 86.4877 128.416L86.5008 128.491V130.835H84.7003V125.665H86.2138L88.2752 127.977C88.3013 128.009 88.3273 128.031 88.3404 128.063C88.3273 128.009 88.3143 127.945 88.3013 127.892L88.2882 127.817V125.676H90.0887V130.835Z" fill="#652672"/>
<path d="M100.07 130.835H96.025V125.676H100.07V126.779H97.3688V127.517H100.07V128.63H97.3688V129.444H100.07V130.835Z" fill="#652672"/>
<path d="M107.611 130.996C106.958 130.996 106.254 130.856 105.836 130.664L105.523 130.514L106.006 129.326L106.476 129.54C106.815 129.69 107.258 129.786 107.65 129.786C107.845 129.786 108.459 129.754 108.459 129.401C108.459 129.272 108.459 129.101 107.624 128.866C107.167 128.748 105.732 128.373 105.732 127.26C105.732 126.35 106.736 125.687 108.133 125.687C108.928 125.687 109.437 125.847 109.672 125.944L110.024 126.093L109.489 127.249L109.046 127.067C108.889 127.003 108.55 126.896 108.093 126.896C107.624 126.896 107.402 127.046 107.402 127.196C107.402 127.314 107.402 127.453 108.302 127.71C109.163 127.956 110.142 128.363 110.142 129.369C110.168 130.171 109.372 130.996 107.611 130.996Z" fill="#652672"/>
<path d="M117.083 130.835H115.282V125.665H117.083V130.835Z" fill="#652672"/>
<path d="M127.912 130.835H126.215L125.537 129.358H123.906L123.241 130.835H121.571L123.958 125.665H125.511L127.912 130.835ZM124.311 128.491H125.146L124.728 127.581L124.311 128.491Z" fill="#652672"/>
<path d="M127.377 120.774V121.052C127.037 121.052 126.881 120.956 126.724 120.828H116.039H114.917C114.917 120.078 115.595 120.367 116.039 119.062V108.423C115.595 107.117 114.904 107.406 114.917 106.657H121.205C121.205 107.481 120.383 107.053 119.953 108.861V117.788L126.398 117.734C127.716 117.542 127.638 116.525 128.368 116.643L127.377 120.774Z" fill="#652672"/>
<path d="M93.1286 120.774V121.052C92.7894 121.052 92.6328 120.956 92.4762 120.828H81.7909H80.6688C80.6688 120.078 81.3473 120.367 81.7909 119.062V108.423C81.3473 107.117 80.6558 107.406 80.6688 106.657H86.9705C86.9705 107.481 86.1485 107.053 85.718 108.861V117.788L92.1631 117.734C93.4809 117.542 93.4026 116.525 94.1332 116.643L93.1286 120.774Z" fill="#652672"/>
<path d="M59.5981 120.624H53.2965C53.2965 119.843 54.0663 120.207 54.4968 118.601V114.855L48.1821 115.39L48.156 118.687C48.5866 120.196 49.3433 119.854 49.3433 120.624H43.0416C43.0416 119.821 43.8505 120.228 44.268 118.494V108.765C43.8505 107.031 43.0286 107.427 43.0416 106.635H49.3433C49.3433 107.395 48.5996 107.063 48.1691 108.551L48.1821 112.618L54.549 112.062L54.5098 108.658C54.0793 107.042 53.2965 107.417 53.3095 106.635H59.6112C59.6112 107.427 58.8023 107.031 58.3848 108.744V118.505C58.8023 120.228 59.6112 119.832 59.5981 120.624Z" fill="#652672"/>
<path d="M113.038 120.207L106.084 106.635L103.71 106.646V106.635H102.34C100.604 106.635 102.353 107.01 102.301 107.77L96.6382 119.961C95.8945 120.731 95.5684 120.26 95.5684 120.849H96.1946H100.148H100.944C100.944 120.485 100.435 120.624 100.657 119.896L101.57 118.13L107.637 117.841L108.485 119.961C108.746 120.753 108.146 120.303 108.119 120.86H108.941H112.36H113.051H113.704C113.769 120.528 113.338 120.432 113.038 120.207ZM102.77 115.626L104.532 112.158L106.306 115.39L102.77 115.626Z" fill="#652672"/>
<path d="M78.5683 120.207L71.6143 106.635L69.2398 106.646V106.635H67.8698C66.1346 106.635 67.8829 107.01 67.8307 107.77L62.1684 119.961C61.4247 120.731 61.0985 120.26 61.0985 120.849H61.7248H65.678H66.4738C66.4738 120.485 65.965 120.624 66.1868 119.896L67.1001 118.13L73.1669 117.841L74.0149 119.961C74.2759 120.753 73.6757 120.303 73.6496 120.86H74.4716H77.8898H78.5813H79.2337C79.2859 120.528 78.8684 120.432 78.5683 120.207ZM68.3004 115.626L70.0617 112.158L71.8361 115.39L68.3004 115.626Z" fill="#652672"/>
<path d="M82.2866 25.3985L76.3242 32.5696V84.9614H82.2866V25.3985Z" fill="#652672"/>
<path d="M89.1884 7.21391C82.8998 14.9309 76.5982 22.6478 70.3096 30.3648C70.3096 48.5173 70.3096 66.6805 70.3096 84.833C65.9259 84.9079 61.5552 84.9721 57.1714 85.047C56.4538 84.8009 55.5014 84.4263 54.4577 83.8911C54.1315 83.7198 52.5528 82.8957 50.7915 81.4508C49.1215 80.0701 48.1299 78.8178 47.8559 78.4539C47.034 77.3836 46.6165 76.5702 45.912 75.1895C44.7769 72.9632 44.3985 71.529 44.268 71.0152C43.9288 69.6238 43.8636 68.5963 43.7853 67.3013C43.6548 65.0322 43.8114 63.3518 43.8375 62.9772C43.8766 62.6133 44.0593 60.8366 44.6073 58.7602C45.5858 55.1104 47.2036 52.3383 48.5866 49.9943C50.5697 46.6549 52.4223 44.2895 54.5229 41.6352C56.493 39.1413 58.2673 37.1291 59.5329 35.727C59.5329 38.5098 59.5459 41.3034 59.5459 44.0862C58.463 45.2956 57.1845 46.8369 55.9189 48.7206C55.4231 49.4484 54.1054 51.4392 52.6963 54.3719C50.7784 58.3855 49.6955 60.6653 49.4216 63.9405C49.3041 65.3747 49.0954 68.393 50.648 71.9143C51.5873 74.0335 52.7746 75.4784 53.1791 75.9387C55.0187 78.0686 57.1192 79.3958 58.5022 80.145C60.5636 80.145 62.638 80.145 64.6995 80.145C64.6603 63.1484 64.6212 46.1626 64.582 29.166C74.9152 16.1938 82.5476 6.73227 83.3304 5.99375C83.9045 5.43719 84.5698 5.33016 84.5698 5.33016C85.0134 5.19102 85.457 5.29805 85.8354 5.38367C86.3312 5.50141 86.6704 5.70477 87.3488 6.07938C87.7794 6.32555 88.4709 6.71086 89.1884 7.21391Z" fill="#652672"/>
</svg>



      ),
    },
    {
      id: 4,
      title: "Perternakan sendiri",

      icon: (
        <svg width="122" height="129" viewBox="0 0 122 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.1101 0.378065C70.2149 0.856948 68.0218 2.09196 66.7223 3.37738C66.1808 3.93188 62.4445 9.67848 58.4375 16.156L51.1545 27.9264L35.6951 28.0021L20.2357 28.0777L18.178 29.0354C16.7972 29.6655 15.7142 30.3713 14.9291 31.203C13.6295 32.564 1.71682 51.6437 0.687999 54.013C-0.151305 55.9033 -0.232528 58.9026 0.498478 60.8433C1.03996 62.3556 5.29063 69.2868 6.04871 69.9169C6.6985 70.4714 8.35003 70.295 8.91859 69.6145C9.59545 68.7827 9.32471 67.9006 7.51073 64.9769C4.66792 60.4401 4.15351 59.2807 4.15351 57.6928C4.18059 56.9367 4.34303 55.9033 4.53255 55.4244C5.07404 53.9373 17.1221 34.7064 18.0426 33.7991C18.53 33.3202 19.3964 32.7153 19.992 32.4128C21.0479 31.8583 21.2916 31.8583 36.1283 31.7827L51.1816 31.7071L59.2227 44.6621L67.2367 57.6172L59.2768 70.4462L51.317 83.2752L43.8445 83.3508L36.372 83.4012V81.1833C36.372 77.9571 36.2907 78.0075 41.0287 77.8563C44.5755 77.7303 45.0357 77.6799 46.4707 77.0245C47.31 76.6213 48.393 75.8903 48.8532 75.3863C49.9091 74.2016 57.6794 61.7255 58.3292 60.1376C58.9249 58.7262 58.979 56.6342 58.4646 55.2732C58.0585 54.1642 50.0174 41.2091 48.9615 39.8985C48.5825 39.4448 47.5266 38.7391 46.579 38.3106L44.9004 37.5545L35.1536 37.4789L25.4069 37.4033L23.8636 38.109C22.9972 38.5123 21.8601 39.2936 21.2916 39.9237C20.723 40.5286 18.3405 44.1328 15.985 47.9387C11.2199 55.6512 10.8409 56.5838 11.4365 59.0286C11.6531 60.0116 13.1693 62.6833 16.7431 68.4803L21.7518 76.5457V79.9734V83.376L20.5335 82.998C18.8278 82.4435 17.5012 81.1328 15.6601 78.1083C13.9273 75.235 12.8985 74.0756 12.0321 74.0756C11.1658 74.0756 10.0286 75.1594 10.0286 75.9912C10.0286 76.9993 13.4129 82.4435 15.0645 84.0818C16.4994 85.4932 19.0173 86.829 20.6959 87.0811L21.6706 87.2323L21.806 88.921C22.1038 92.7521 25.0549 95.3733 29.0619 95.3481C31.1466 95.3229 32.392 94.8692 33.8811 93.6342C35.2348 92.4748 36.0741 90.8869 36.2907 88.9462L36.4532 87.4339L43.8715 87.4843L51.317 87.56L58.4375 99.0279C62.3362 105.329 65.9913 110.975 66.5328 111.555C68.455 113.621 71.731 115.159 74.1677 115.159C74.8716 115.159 75.3319 115.386 76.3066 116.318C78.0664 117.931 80.097 118.738 82.8044 118.889C83.9957 118.939 85.1057 119.091 85.2682 119.217C85.4306 119.343 85.6472 120.426 85.7014 121.661C85.8638 124.207 86.297 125.291 87.7049 126.753C91.1433 130.281 97.0184 129.55 99.3739 125.291L100.267 123.678V119.443V115.209L101.513 114.932C102.217 114.755 103.381 114.352 104.139 113.974C106.792 112.739 107.821 111.403 114.481 100.641C117.893 95.1213 120.979 89.904 121.331 89.0974C122.17 87.1567 122.225 84.1826 121.467 82.141C121.196 81.3849 117.757 75.6131 113.859 69.3372C109.96 63.0613 106.738 57.844 106.684 57.7432C106.657 57.6172 109.852 52.3243 113.805 45.9476C117.757 39.5961 121.196 33.7486 121.467 32.9925C122.062 31.3794 122.143 28.607 121.683 26.9435C121.304 25.6328 117.216 18.7772 116.322 17.9203C115.564 17.2146 114.644 17.2146 113.696 17.8951C112.532 18.752 112.749 19.5082 115.321 23.6669C117.514 27.1955 117.676 27.5484 117.812 29.1615C117.866 30.1696 117.812 31.2786 117.622 31.7575C117.46 32.2364 114.102 37.7813 110.204 44.0824L103.083 55.5504L98.8324 55.626L94.5547 55.7016L94.6359 52.8788L94.7171 50.0559L96.2062 49.7786C97.8307 49.4762 99.78 48.5184 100.728 47.5606C101.296 46.9809 108.498 35.513 109.852 33.0429C110.826 31.2534 111.016 29.4387 110.366 27.6996C109.635 25.6328 101.675 12.9046 100.376 11.6696C99.6988 11.0395 98.67 10.4094 97.7224 10.0817C96.2604 9.57766 95.7189 9.55245 86.8926 9.55245C76.2524 9.55245 75.9275 9.60286 73.7345 11.5436C72.7328 12.4258 71.4332 14.2657 68.428 19.1301C66.2349 22.6587 64.1502 26.1117 63.8253 26.8174C63.0402 28.3549 62.9589 30.8249 63.6629 32.3624C64.5834 34.404 72.5162 46.9053 73.4638 47.7623C74.7092 48.9469 76.1712 49.6274 77.8227 49.8038L79.1494 49.9551V52.2486C79.1494 53.5089 79.2306 54.7943 79.3118 55.0967L79.4743 55.6764H75.1965H70.8917L62.8506 42.6962L54.8096 29.7412L61.7947 18.4496C65.6664 12.2493 69.2402 6.67916 69.7817 6.09946C70.3232 5.54496 71.3249 4.78883 72.0288 4.46117L73.3284 3.88147H87.0009H100.673L102.054 4.56199C103.814 5.41894 104.572 6.27589 106.738 9.8297C107.686 11.3924 108.715 12.8794 108.985 13.1315C110.095 14.1649 112.18 13.2323 112.18 11.6948C112.18 10.9135 109.473 6.22548 107.875 4.25954C106.197 2.19278 103.922 0.80654 101.35 0.252044C100.592 0.075613 95.0149 -5.22514e-08 86.8656 -5.22514e-08C76.0629 -5.22514e-08 73.3284 0.075613 72.1101 0.378065ZM95.9625 13.5852C96.477 13.7364 97.1809 14.0892 97.4787 14.3917C97.8036 14.7193 99.9425 18.0463 102.271 21.8018C105.953 27.75 106.494 28.7582 106.494 29.7159C106.494 30.6485 106.088 31.4803 103.895 35.0593L101.296 39.2936L100.782 38.6887C100.484 38.361 99.6446 37.7813 98.8595 37.4285L97.4516 36.7732H87.1905C80.1782 36.7732 76.5773 36.874 75.8734 37.0756C75.2778 37.2268 74.3302 37.7309 73.7616 38.2098C73.166 38.6635 72.6515 39.0416 72.5703 39.0416C72.5162 39.0416 71.3249 37.2016 69.917 34.9333C67.724 31.4298 67.3721 30.6989 67.3721 29.7159C67.3721 28.7078 67.8594 27.8004 71.5144 21.953C73.7887 18.2984 75.7922 15.0974 75.9817 14.8202C76.1712 14.5429 76.7939 14.1144 77.3896 13.8372C78.3913 13.3583 79.0411 13.3331 86.7302 13.3331C91.3599 13.3331 95.4211 13.4339 95.9625 13.5852ZM97.2621 40.9571C97.6141 41.1839 98.0743 41.7636 98.2909 42.2425C98.6158 43.0239 98.6158 43.2003 98.1826 44.032C97.587 45.1914 96.1521 46.0988 94.9337 46.0988C93.5529 46.0988 92.3075 46.7037 91.4411 47.7623C90.683 48.6696 90.656 48.8461 90.5206 51.9966C90.4394 53.9878 90.2228 55.5252 90.0333 55.8781C89.1398 57.3399 86.7843 57.844 85.187 56.9367C83.8332 56.1805 83.6437 55.6008 83.4813 52.1478C83.3459 49.5014 83.2376 48.8461 82.7503 48.0899C82.0463 47.0313 80.3407 46.0988 79.1494 46.0988C76.5232 46.0988 74.628 43.7296 75.738 41.8392C76.469 40.6042 76.7398 40.579 87.0009 40.5538C95.4752 40.5538 96.6935 40.6042 97.2621 40.9571ZM44.9274 41.7888C45.8209 42.2929 46.1999 42.8474 51.696 51.7446C55.5406 57.97 55.5135 57.4155 51.9668 63.0361C50.5048 65.3801 49.2323 67.2704 49.124 67.2704C49.0157 67.2704 48.6366 66.9932 48.2847 66.6403C46.958 65.3297 45.7667 65.2289 34.4226 65.3045C23.1868 65.3801 23.268 65.3801 21.5623 66.842C21.2103 67.1192 20.8854 67.3209 20.8313 67.2452C20.8042 67.1948 19.613 65.3297 18.2322 63.1117C14.6042 57.2643 14.4959 58.2221 19.5859 49.9298C23.7012 43.2507 24.6488 41.9653 25.6776 41.562C25.9754 41.436 30.2532 41.3352 35.1536 41.3352C43.4925 41.31 44.1423 41.3352 44.9274 41.7888ZM82.8586 60.2132C85.4306 61.7003 88.1381 61.7003 91.0079 60.188L92.4158 59.4571L97.7224 59.5075L103.029 59.5831L110.068 70.9251C113.94 77.1506 117.297 82.6955 117.487 83.25C118.082 84.7623 117.974 86.8542 117.216 88.3161C115.916 90.8869 104.789 108.505 103.977 109.311C103.056 110.193 101.377 111.126 100.673 111.126C100.322 111.126 100.267 110.647 100.267 107.975C100.267 105.884 100.403 104.522 100.646 103.993C100.836 103.54 102.866 100.187 105.141 96.5075C107.415 92.8277 109.554 89.3243 109.906 88.6942C110.718 87.1567 110.962 85.468 110.556 83.9305C110.177 82.4183 101.838 68.8079 100.484 67.4973C99.9695 67.0184 98.9678 66.3379 98.2097 65.985L96.8831 65.3801H86.8656H76.8481L75.4944 66.0606C74.7633 66.4135 73.7616 67.094 73.3013 67.5729C72.462 68.3794 64.7458 80.6036 63.6899 82.7459C63.0943 83.9809 63.0131 86.451 63.5546 87.8372C63.7441 88.3917 66.0725 92.2732 68.6987 96.5075L73.4638 104.195V107.648C73.4638 110.269 73.3826 111.126 73.1389 111.126C72.4891 111.126 69.9983 109.639 69.4568 108.933C68.5363 107.723 54.972 85.8209 54.972 85.5184C54.972 85.2664 68.5904 63.1117 70.4044 60.3897L71.0271 59.4571H76.2795H81.559L82.8586 60.2132ZM45.9021 69.7153C46.8768 70.6478 46.7143 71.9333 45.496 72.9666L44.4943 73.8236H41.5702C36.5344 73.8236 34.7204 74.3781 33.1772 76.4448L32.4462 77.4278L32.3108 83.5525C32.1484 90.4837 32.0671 90.7861 29.9553 91.4162C28.5204 91.8447 27.1396 91.3658 26.3545 90.156C25.84 89.3747 25.813 88.8958 25.813 82.3175V75.2854L24.73 73.5715C23.268 71.2275 23.3492 69.9421 25.0278 69.312C25.4069 69.1608 29.5492 69.0852 35.4785 69.1104C45.2253 69.1608 45.3065 69.1608 45.9021 69.7153ZM96.7477 69.6901C97.5329 70.0933 98.4805 71.4544 102.081 77.2514C105.926 83.4012 106.467 84.4346 106.494 85.3924C106.494 86.6022 106.494 86.6022 102.65 92.8025L100.484 96.2807L99.3198 95.2725C97.3163 93.5586 96.504 93.4578 86.2699 93.5334C77.552 93.609 77.3625 93.609 76.1712 94.2139C75.4944 94.5416 74.6009 95.1213 74.1406 95.4993L73.3284 96.2303L70.3502 91.391C67.7511 87.1567 67.3721 86.4006 67.3721 85.4176C67.3991 84.4094 67.9135 83.4769 71.6498 77.453C73.9782 73.6976 76.2254 70.3706 76.6044 70.0177C77.552 69.186 78.9599 69.0852 88.2193 69.1356C95.3398 69.1608 95.8542 69.186 96.7477 69.6901ZM95.773 97.6165C97.6141 98.3222 98.0743 100.162 96.9643 102.128C96.3687 103.161 96.3416 103.414 96.2062 113.319L96.0708 123.476L95.2315 124.258C94.0673 125.316 92.6053 125.493 91.3328 124.686C90.1416 123.93 89.7354 122.871 89.7354 120.426C89.7084 118.788 89.6001 118.385 88.9232 117.377C87.8673 115.839 86.3512 115.159 83.9686 115.159C81.1258 115.159 79.4201 114.403 78.3913 112.689C77.931 111.882 77.8227 111.176 77.7415 107.723C77.6332 104.018 77.552 103.565 76.8751 102.078C75.7651 99.6833 76.3337 98.1206 78.4996 97.5157C78.9328 97.4149 82.8044 97.2888 87.0822 97.2888C93.1739 97.2636 95.0691 97.3393 95.773 97.6165Z" fill="#CF9443"/>
</svg>

      ),
    },
    
  ];
  
  // categories data
  export const categoriesData = [
    {
      id: 1,
      title: "Madu anak",
      subTitle: "",
      
    },
    {
      id: 2,
      title: "Madu dalam Sarang",
      subTitle: "",
    
    },
    {
      id: 3,
      title: "Madu Herbal Plus",
      subTitle: "",
   
    },
    {
      id: 4,
      title: "Madu Hidayah",
      subTitle: "",
    
    },
    {
      id: 5,
      title: "Madu Stick Premium",
      subTitle: "",

    },
    {
      id: 6,
      title: "Madu Hutan",
      subTitle: "",

    },
    {
      id: 7,
      title: "Madu Kaliandra",
      subTitle: "",
 
    },
    {
      id: 8,
      title: "Madu Kapuk Randu",
      subTitle: "",

    },
    {
      id: 9,
      title: "Madu Kopi",
      subTitle: "",

    },
    {
      id: 10,
      title: "Madu Mahoni",
      subTitle: "",
  
    },
    {
      id: 11,
      title: "Multiflora",
      subTitle: "",
      
    },
    {
      id: 12,
      title: "Madu Propolis",
      subTitle: "",

    },
    {
      id: 13,
      title: "Madu Rambutan",
      subTitle: "",
      
    },
    {
      id: 14,
      title: "Madu Super",
      subTitle: "",
    
    },
    {
      id: 15,
      title: "Madu Trigona",
      subTitle: "",
    },
    {
      id: 16,
      title: "Madu Tugu Sakti",
      subTitle: "",
    },
    {
      id: 17,
      title: "Permen Madu",
      subTitle: "",
    
    },
    {
      id: 18,
      title: "Souvenir & Hampers",
      subTitle: "",
      
    },
    {
      id: 19,
      title: "Alat Makan",
      subTitle: "",
    },
    {
      id: 20,
      title: "Kosmetik & Kecantikan",
      subTitle: "",
    },
    {
      id: 21,
      title: "Madu Kelengkeng",
      subTitle: "",
    },
    {
      id: 22,
      title: "Sabun & Shampo",
      subTitle: "",
    },
  ];
  
  // product Data
  export const productData = [
    {
      id: 1,
      category:"Computers and Laptops",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
    },
    {
      id: 2,
      category:"Mobile and Tablets",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10,
      category:"Mobile & Tablets"
    },
    {
      id: 1,
      category:"Computers and Laptop",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
        {
          public_id: "test",
          url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
        },
      ],
      shop: {
        name: "Apple inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 75,
      stock: 10,
      category:"Computers & Laptop"
    },
    {
      id: 4,
      category:"Others",
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      category:"Others"
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 12,
      stock: 10,
    },
    {
      id: 5,
      category:"Shoes",
      name: "New Trend shoes for gents with all sizes",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
        },
        {
          public_id: "test",
          url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
        },
      ],
      shop: {
        name: "Alisha Shoes Mart",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 120,
      discount_price: 89,
      rating: 5,
      total_sell: 49,
      stock: 10,
      category:"Shoes"
    },
    {
      id: 1,
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
      category:"Music and Gaming"
    },
    {
      id: 4,
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
        {
          public_id: "test",
          url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
        },
      ],
      shop: {
        name: "Shahriar Watch House",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 62,
      stock: 10,
    },
    {
      id: 1,
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
    {
      id: 2,
      category:"Mobile and Tablets",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
        {
          public_id: "test",
          url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 20,
      stock: 10,
    },
    {
      id: 1,
      category:"Music and Gaming",
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Asus Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
  ];
  
  export const footerProductLinks = [
    {
      name: "About us",
      link: "/about"
    },
    // {
    //   name: "Careers",
    //   link: "/carrers"
    // },
    {
      name: "Store Location",
    },
    // {
    //   name: "Our Blog",
    // },
    // {
    //   name: "Reviews",
    // },
  ];
  
  export const footercompanyLinks = [
    {
      name: "Category",
    },
    // {
    //   name: "Phone &Tablets",
    // },
    // {
    //   name: "Computers & Laptop",
    // },
    // {
    //   name: "Sport Watches",
    // },
    // {
    //   name: "Events",
    // },
  ];
  
  export const footerSupportLinks = [
    // {
    //   name: "FAQ",
    // },
    // {
    //   name: "Reviews",
    // },
    // {
    //   name: "Contact Us",
    // },
    // {
    //   name: "Shipping",
    // },
    {
      name: "Live chat",
    },
  ];
  