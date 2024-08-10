import React from "react";

export default function FlaskIcon({ height, width, color }) {
  return (
    <svg
      height={height || "329"}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 329"
      width={width || "256"}
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : isDarkMode ? "#ffffff" : "#000000"}
    >
      <g>
        <path d="m76.5010971 203.351341c-9.7493458-7.670244-20.1532236-15.020755-27.2610055-25.377761-14.9604917-18.263284-26.475902-39.404164-34.3486996-61.624771-4.7608412-14.449924-6.38963817-29.9410715-12.52985114-43.8302065-6.41474812-10.0908407 1.10483657-21.1140965 12.15655034-24.3197966 4.9165227-.9474811 13.5677279-5.5894687 3.1253483-2.268263-9.36432698 6.8667268-10.26661019-6.2389786-.6662499-7.0692801 6.5520156-.8688033 8.9642422-6.2306086 6.7210891-11.0567357-7.0358002-4.5900938 17.0546592-9.6254702 4.9315887-16.4721089-12.6202468-13.62129581 17.6606453-16.24277169 10.1879325-.7717116-1.7861525 11.8954071 21.1659904-2.18456327 15.8359909 11.5539122 5.4153732 6.5988875 20.2720772 1.5049213 19.8987763 10.7570906 7.8861896.5423743 10.5930392 7.1730678 17.9887483 7.6836362 7.6769406 3.4651693 21.5794666 6.1921068 24.1875506 14.836616-7.60998 6.0230333-25.2271014-12.4428034-26.0774908 4.2318589 2.3017429 24.6378556 1.7141707 50.0172905 10.7252848 73.4783285 4.261991 14.203846 14.600583 25.384457 23.93143 36.449563 8.932436 10.834094 21.030397 18.465837 33.362716 24.887281 10.815681 5.100662 22.475055 8.480457 34.265 10.606431 4.779255-3.656005 13.221211-17.250517 20.67551-11.522107.359909 6.448229-14.79644 13.470637-.711448 12.757515 8.277905-2.4976 14.013011 6.39466 20.82617-1.628797 6.27748 7.435885 26.090883-4.747449 21.624665 10.45075-6.041448 3.89706-14.850008 1.541749-20.898151 6.905228-9.971988-4.983482-17.911745 4.452826-28.955089 3.262616-12.260338 2.196281-24.738295 3.080151-37.167707 3.098564-20.395952-1.608709-41.222122-2.28835-60.623722-9.389436-10.9328598-3.177243-21.5978807-9.402829-31.2049369-15.628416zm17.2237326 7.467691c10.6717173 4.610182 21.1090743 9.474811 32.8069503 10.946252 18.557906 2.576278 37.723473 6.552016 56.346665 2.929491-8.428564-3.80499-17.145054 1.478137-25.541812-2.720242-10.069079 2.164476-20.878064-.555766-31.119564-1.896636-11.639286-5.184362-24.205965-8.748297-35.1070192-15.484452-13.6279918-4.975112 7.0424962 6.382942 10.7236112 7.305314 8.513937 4.831149-9.3643274-2.479187-11.8887116-4.486307-7.1328919-4.002521-8.0418711-3.165524-.7047518.895588 1.4764634.863781 2.9361869 1.77276 4.4846321 2.510992zm-20.3105791-14.352832c10.345288 3.831774-.0451978-7.271833-4.7792551-6.630693-2.0991895-3.642613-8.0234572-5.944356-3.8451661-7.899582-7.5128887 2.609758-7.8727976-9.920093-11.4032527-8.127244-7.9514753-2.510993-3.0935424-11.404927-12.568353-16.87052-.8637814-5.755194-9.4095249-10.743699-12.1297664-19.421688-1.2036023-4.44613-9.6589501-17.203645-4.4662182-5.329999 4.4193463 11.430036 12.1950522 21.226254 18.6683901 31.002384 5.0219845 9.310759 10.9596441 19.048386 20.1080257 24.855474 3.0868465 2.961297 6.0615352 7.492801 10.4155957 8.421868zm-29.7904116-32.71488c.3582349-1.563511 1.8899401 3.379795 0 0zm42.1829952 37.304974c2.2883509-1.026159-3.2960958-1.293998 0 0zm5.6095566 2.047296c-.5808762-2.825703-2.562886 1.581925 0 0zm7.0307783 2.929491c3.3412939-3.185612-5.1592521-2.008794 0 0zm12.0443929 6.714393c2.033903-3.001473-6.506818-1.129947 0 0zm-23.1279126-16.123918c5.1910579-3.361382-6.7160672-.046872 0 0zm5.2697357 2.628172c-.1506596-1.772761-1.8765482.796821 0 0zm26.3453299 16.445325c4.236881 2.675043 24.738296 5.858982 11.902104 1.09814-2.152758.451979-23.802533-6.126821-11.902104-1.09814zm-41.823086-32.577613c-.4118027-1.777783-6.5787996-1.968618 0 0zm12.260338 7.154654c3.1973301-2.229762-6.6239974-1.720867 0 0zm10.3185041 6.322678c4.5833979-1.725889-7.427515-1.732585 0 0zm-27.5757166-18.911119c4.9700906 3.811686 20.0494359.49048 7.6116544-2.274959-5.6564284-3.014865-18.4072469-5.080575-9.7158658 1.817958zm34.5663185 21.095682c2.072406-3.525433-8.6846847-2.01549 0 0zm-10.5026431-8.344864c12.1498541 3.433363-10.2197383-7.690332-2.9997987-1.268888l1.6020131.726514zm21.0571811 12.169942c11.508714.110484-10.397182-1.588621 0 0zm-49.5468988-31.578238c-.4519786-2.144387-2.8374212.177444 0 0zm69.0137838 42.497706c.306341-3.870276-3.75477 2.884294 0 0zm-49.3711286-30.471727c-.6997299-2.0406-3.5957409-.085374 0 0zm-18.5512105-13.371871c6.6055835-.39841-9.049616-2.909403 0 0zm-21.9778779-14.203846c-.8236055-3.170546-7.1864597-5.69493 0 0zm57.694231 36.613615c-1.208624-1.381046-.569158.299645 0 0zm35.905515 22.036468c-.110484-2.112582-1.955226.796821 0 0zm-39.082757-25.319172c.647836-2.720241-5.6363405-.825279 0 0zm-26.7521111-16.955893c4.9181968-.523961-7.8794936-3.32288 0 0zm45.2514281 28.118091c7.663548-3.034953-7.467691-1.478138 0 0zm-23.5346934-15.974933c8.8269744 1.136642-10.5076654-6.009641-1.941834-.64114zm30.6809774 18.864248c8.246098-4.923219 5.525856 11.542194 13.9879 1.392763 8.34319-6.093341-7.206547 7.532977 3.073455 1.086423 7.440907-4.976787 18.425661 2.360333 25.364369 4.747449 4.988505-.242729 9.841416 4.315559 14.960492 1.541749 9.848111-2.654955-19.262659-3.935561-11.63259-8.637813-9.011114 2.62315-15.666918-3.125348-20.10133-8.898956-10.109255-2.335223-21.793738-7.501171-26.842507-16.452021-2.059013-3.354686 2.969667.477088-1.777782-5.015289-6.088319-5.415373-9.128294-11.568978-13.216189-18.152799-4.884717-2.603062-5.460571-10.273307-5.951052-.254448.040176-6.324352-5.8974836-10.581321-7.3488371-8.815256-.0267839-6.088319 6.3561581-3.034953 1.8899402-7.539673-.9608731-6.31096-4.1263973-12.888086-5.0755523-20.015956-1.4764634-3.433363-.2092494-10.788897-5.0470944-3.014865-1.7593685 8.219315-.5825502-10.095862 2.1577793-4.061111 3.5957409-6.158627-1.2956719-5.433787-1.4915293-4.583398 2.3419187-5.197754 1.4848334-12.5750488-.6143561-9.7627376 1.2488001-5.5124649 1.9753138-20.2837951-1.8631563-17.6623192 2.3268528-5.7669121 4.4143244-26.3788103-5.6966043-18.5177306-4.0929173.0585898-11.1873073 1.4848334-14.535297 3.1521322 10.5076655 5.793696-1.0596387 2.0924935-5.3433914 1.1701224-.5557663 5.3618054-4.7926471 3.0466705-10.0891667 3.0985644 8.4620438 1.0462467-4.1197013 8.6512052-8.9642422 5.6966043-6.3042645 3.0081687 5.4337871 10.5277534.1238756 12.8546062.6545319 3.4986491-9.6522541-1.2672141-8.8470626 6.8282248-6.115103-2.577952-.8369974 9.5986861 2.2230651 5.478985 10.4038778 2.8190071 7.3237273 9.2337551 7.5848705 15.3337921-1.6940828 3.550543-8.3699741-8.349886-1.4848334-7.800815-5.4337872-8.8219531-6.0079674-3.190635-10.5210574.908979-1.0462467.294623 11.5087143 5.832198 3.6292208 8.565831 6.9320125 1.073031 7.1345658 7.141262 8.5474175 10.979732 4.1648991 4.340669 3.3078137-4.794321 8.2979923.425195-3.1588283-4.650358-16.7148382-13.09901-5.8003921-10.390486-.0585898-4.675467-1.9753138-8.448652 1.3726758-8.358256 3.3161837-5.996249-3.4718653 14.791418 3.9958256 7.168046 2.0657096-.902283 2.582974-6.002946 6.2975685.483784 5.3936113 5.309912 1.9485299 9.153404-5.6631245 4.288775 1.3592838 4.623574 10.1812365 6.270785 8.5206336 13.49742 1.7576946 6.356158 4.2167929 4.01424 6.3611803 3.647635 1.6806908 6.173693 2.6365418 1.635493 2.7152196-1.30739 7.6953541 1.648885 5.8907877 6.198803 8.3030143 9.377719 5.3032155 2.392138-7.5915665-16.224358 1.5116173-5.597839 9.5785983 8.651205 3.5957408 12.260338-5.0018965 10.87427 5.4404831-.438586 7.1914817 7.357208 13.9996186 7.082673 6.2054987 2.9546 10.4105737 14.294241-.2879271 9.571902-3.7078985-3.34799-16.8454098-7.474387-6.1134291-1.111533 9.9000053 4.590094 17.7728029 7.330424 27.3262909 13.092314 6.833247 4.878021 9.787848 10.467489 12.377518 11.574-5.746824 2.745351-17.314128-2.191259-8.723187-3.701203-5.361805-.974265-11.389861-3.68781-6.257393 2.988081 4.367453 3.649309 15.464365 3.262616 17.459766 3.674419-1.687386 3.714594-4.583397 4.009217.065286 4.297144-5.186036 2.76544 1.667299 3.19733 2.144388 4.77256zm-10.606432-29.954464c-3.158828-3.302791-3.975737-9.481506-.562462-4.107983 1.752673.706426 5.604535 10.104233.562462 4.107983zm34.546231 21.944398c1.968618-.130571.05859 1.496552 0 0zm-39.528039-30.039837c-.12555-4.990178 1.136642 3.850189 0 0zm-3.433364-4.616877c-3.975737-7.670244 5.001897 2.171171 0 0zm-41.6155105-28.719055c2.3352227-.622726 1.1517084 3.987455 0 0zm33.1216613 17.948572c1.4312652-5.381893 1.6806912 4.51309 0 0zm-23.3974255-16.269555c-1.6472109-2.967993 3.4467553 2.787201 0 0zm20.0745458 6.434836c-3.7597923-8.421868 2.6683477-4.603486.8369974 1.379371zm-34.6232347-23.089411c-1.6806908-2.765439-4.4595222-10.87427-3.5639349-13.351782.8035175 4.034327 8.5725274 17.354304 3.8049902 5.51916-5.2630397-9.9200928 6.2975685 3.215745 7.4877788 5.694931.5557662 2.459098-3.250898-.672946-.6746199 5.100662-4.7005775-6.572104-2.7721355 3.629221-7.0542142-2.962971zm-10.6985008-7.375621c.4385866-6.42814 2.4457064 4.407628 0 0zm4.8127351 1.660603c2.2950468-4.851237 3.8903639 6.761265 0 0zm-11.5806961-8.957546c-3.9824337-3.96402-6.8667268-7.6116547.1891614-2.4590987 2.7135456.1037877-6.0414473-8.2979923.6545319-2.6683477 7.0358002 1.28228 3.4718653 11.5421944-.8436933 5.1274464zm6.0816231-.157356c2.3151348-2.2950467 1.2287122 2.256545 0 0zm3.7464004 1.196906c-3.5120411-6.5721032 4.2569688 2.758744 0 0zm-7.4409069-7.1077815c-11.5806962-10.313482 14.5486889 5.3869155 1.8899401 1.9083541zm33.1852731 19.2760505c-5.0152885-3.001473-1.3341739-21.1525987.3799968-8.741601 4.8713249-1.576903-.2695131 6.414748 3.3597076 6.33607-.5674842 5.040399-2.1962812 6.853335-3.7397044 2.405531zm12.27373 7.258441c.4904804-5.472289 1.0328548 3.741379 0 0zm-2.1309954-2.112581c.5490703-2.333549.0518938 2.753721 0 0zm-41.0597448-27.810076c-7.4409069-10.2666102 21.624665 10.38379 4.7675372 2.6030619-1.7593685-.4636965-3.8836679-.627748-4.7675372-2.6030619zm23.6384808 12.529851c-.7047519-8.644509 1.5702071 1.431266 0 0zm17.9435503 11.513736c1.3860678-4.923218.1054617 3.257594 0 0zm-40.4370186-27.9607349c4.4210203-.947481 18.3218732 7.762314 5.5576628 2.4858823-1.4178737-1.5702071-4.4461303-.8570853-5.5576628-2.4858823zm37.9712243 18.9245109c.4720665-8.8403661 2.6432378-5.276431.0200879 1.268889zm-34.6818245-22.0029873c1.8045664-2.6432378-4.7876252-11.947301.947481-3.3362717 2.4791864 1.9686179 7.1730678 3.2960958 3.0282567 4.1263972 6.5185358 5.7484982-1.5886211 1.5568152-3.9757377-.7901255zm32.8052763 19.2442443c1.2437782-10.0707527 1.0998146 5.897484 0 0zm-36.5717646-28.5432855c1.3793717-.5892462.7315357 1.8363723 0 0zm8.5591354 5.0939662c2.2029772-4.6235737 4.0611114 5.152556 0 0zm24.1356572 13.4237644c-.0200879-1.7710865.4570006 2.582974 0 0zm-1.3994596-3.0918684c-3.3479897-8.2661864 3.1186523 4.3741484 0 0zm-2.0539917-5.4220692c-.5607882-3.4132754 1.9100281 4.2904487 0 0zm3.3479896-5.4404831c-2.3017428-4.0477195 2.904381-17.8514807 3.4869312-9.2906712-2.4272924 6.6691953-.6997298 10.3971817.985983 1.4513535 3.1270223-7.0358002-.6729459 13.8958309-4.4729142 7.8393177zm3.4400594-20.5248504c1.0010489-1.2303862.2226413 1.4831594 0 0zm-5.7468242 113.210595c-1.3609578-1.19021.1757695.751624 0 0zm11.8351433 5.982858c6.5838216 1.694082 6.5520157-1.021137.6009642-1.831351-3.1973301-2.974689-13.2998888-6.133517-4.2569689-.366605.5959422 1.518314 2.4858823 1.478138 3.6560047 2.197956zm-23.3706415-15.524628c3.6225247 2.708523 13.6597976 7.663548 5.1659479 1.034528 2.8642052-3.329575-5.480659-5.100662-2.7135456-7.330423-7.0424961-4.310536-5.5593367-3.923844-.621052-3.786576-8.4620438-3.786576 1.2220162-3.498649.7650156-5.440483-3.2626159-.64114-16.2109658-5.755194-8.5926154.418498-7.742226-3.943931-1.8447422 1.471442-4.184987.902284-7.9196694-2.15778 7.0491922 6.029729-1.2554961 3.995825 4.5381999 3.595741 12.2218361 9.220364 1.9150501 3.804991-1.3525878 1.955225 7.3772951 4.918196 9.5216825 6.401356zm12.3775176 7.114478c15.0475394 4.846215-7.3823171-5.930964 0 0zm63.3640514 38.384701c.195858-2.988081-2.053991 2.549494 0 0zm6.513514 2.740329c3.471865-3.361381.143964 5.361806 5.75352-.823605.05859-4.427717-.169073-7.042496-6.446554-1.662277-1.734258.962547-2.504296 5.035376.693034 2.485882zm-103.3825716-64.925889c-1.0663347-4.191683-7.4743868-4.173269 0 0zm6.9504265 4.556614c-2.582974-4.282078-9.2136675-3.876972 0 0zm39.5682154 23.861122c3.865254 3.433364 17.7409967 2.517689 4.6888594.425195-1.930116-2.857509-12.267034-2.171171-4.6888594-.425195zm54.3847437 33.592054c5.944355-4.990178-5.760216 2.223065 0 0zm12.365799 8.49385c.038502-1.602013-2.562886.69973 0 0zm.020088-2.243153c6.583822-6.970515-6.376246.411803 0 0zm-130.3958255-82.581512c-5.6095567-8.003369-3.4852572-11.600784-8.8989565-18.139408-1.0278328-5.001897-9.2856492-16.3415374-4.2703607-4.328951 4.5900937 7.029105 5.9510515 17.910071 13.1693172 22.468359zm128.3284425 80.365143c12.118048-7.8276-4.968417-3.40658 0 0zm9.247147 3.622524c6.068231-5.206123-3.83847-1.086422 0 0zm-122.5297242-78.515378c1.7342586-2.582974-4.4846321-.333125 0 0zm120.5996082 76.042888c5.872374-3.784902-1.352588-3.204026-1.064661.346517zm-79.697219-50.233236c-.2025533-2.562886-3.1052603.215945 0 0zm4.9232188 2.832399c-1.5685331-3.165524-2.4055306.497176 0 0zm84.1969172 49.958701c7.526281-5.428765-4.556614-1.041225-1.575229 1.032855zm-2.882619-1.392763c6.133517-5.134143-6.468316 2.274958 0 0zm14.724458 9.801239c4.114679-2.753721-5.001896-.888891 0 0zm-138.0911799-88.872384c5.5124649 1.235408 22.0431637 13.581119 12.2938179.857085-4.9952005-1.478137-2.0004238-13.686582-7.09439-11.528802 3.4199714 5.715018 2.8106373 8.140636-4.3691264 4.544896-9.0161361-4.407629-5.0671823 2.177867-3.3011178 3.995825-2.4072046.54907 3.1772421 2.085798 2.4708163 2.130996zm-25.1283361-19.845209c.985983-4.087895-9.0964878-22.4683583-4.7608412-9.213667 1.5618371 2.778831 1.3994596 8.041871 4.7608412 9.213667zm46.125253 28.437824c-2.8441171-2.373725-.1372675-.339821 0 0zm6.9906024 1.628797c0-4.328951-7.7288341-1.759369 0 0zm60.6170266 38.207257c-1.156731-2.956274-4.570006-.065285 0 0zm2.909402 2.1243c-.43189-1.653907-1.68069.321407 0 0zm24.025174 15.137935c2.308439-1.705801-2.884293-.220967 0 0zm-128.1191929-82.332087c6.6106055-2.557864-7.082672-1.824654 0 0zm95.8479209 60.380993c-.077004-4.277057-4.216793 1.066335 0 0zm-98.4576788-66.469312c4.2435769-1.431266-3.9305398-.940785 0 0zm12.3189278 5.969466c-.0719818-1.404482-1.3006939.537352 0 0zm150.301298 92.16848c5.458897-1.104837 17.903375 2.778831 19.910494-1.444658-6.630693-.164051-22.932054-4.682163-23.703766 1.071357l1.451353.229337zm-146.3841501-91.180824c.0987657-4.335646-3.3797955-.162377 0 0zm-32.3934736-22.4733799c-1.4714415-8.2594904-5.5978387-1.2504741 0 0zm7.722138 1.9418339c.0987657-2.6549557-7.06928-2.3871165 0 0zm4.4143244 2.171171c-1.2755841-1.034528-.994353 1.300694 0 0zm27.7832919 17.818001c1.3090639-1.203602-3.0985644-.888891 0 0zm-30.7194788-22.7094135c-.7516237-6.2389786-8.9525243-.9357631 0 0zm-15.8443609-10.2800021c-.2226413-2.8775971-1.54342324 1.0847486 0 0zm2.3603327-1.7777825c-.3850188-3.4149494-2.0272078.4302167 0 0zm13.0136356 7.7673359c5.505769-2.1577793-10.0255549-4.4729141-1.1249245-.4051067zm174.2260318 107.6194522c3.523759-3.229136-4.472914-.999375 0 0zm21.048811 10.90775c1.412852-4.171595-3.557239.549071 0 0zm-193.9423429-125.347057c.5825502-4.0410235-4.3674525.8035175 0 0zm-18.52442659-12.4109976c-.99435292-5.7016263-.85708535-15.7137893 8.65790119-12.3323197-12.69892467 2.5243841 8.7951687 15.790793 6.0816231 5.3149335 5.3417175.2628172 10.4490756-3.1571542 7.6434603 2.0272077 10.5277534-1.1567304 17.8196748-10.2850241 27.9875193-9.0027441 7.9179955-1.0529427 16.5758966-1.8447423 25.1099222-5.0353764 7.0157122-.5038724 13.7702813-8.056937 9.9267892-12.5365471-9.5668803-.8102135-19.5857393.3866928-30.1586905 2.4925782-11.7179637 2.4323145-22.3628967 7.0609102-34.1863221 9.049616-11.5288022 1.5501192 2.3151349 4.2636648-.9876569 4.8713249-6.0096414 2.0857975 7.1730678 3.4919532-.7784076 5.6949303-4.9098268-.9340891-10.0238809-2.6214758-7.9246914-7.8008158-11.03832182 1.4396356-20.74246975 6.0163374-12.01928278 17.2505166zm26.60814749-13.549314c2.582974-9.5334004 13.8623511 7.8476877 4.2368809 1.2688881-1.1450124-.8637813-3.0416486-1.5635112-4.2368809-1.2688881zm.5021985-4.6235736c3.7346824-2.7788314 1.9820098 1.5635111 0 0zm4.7407533.0786777c.3414949-4.3875404 10.8625523 2.3218308 1.7342586 1.5769031zm6.4867299-2.6080839c2.3737246-2.7738094.6880119 2.4574244 0 0zm1.6622768-1.1115326c3.9489538-4.7407533 22.3428088-3.0282566 8.8788685-.4653705-3.6091328-2.7202416-6.3745722 1.602013-8.8788685.4653705zm24.0101076-3.7012025c-.5942681-12.9550458 11.933909 4.5967898 0 0zm6.8148329-.0401759c2.4909043-6.5252317 9.670668-2.6214758 1.1567304-1.3140859.1824654.6997298-.2544472 3.3747736-1.1567304 1.3140859zm-54.9873816 34.6182127c7.440907-4.5582878-7.8995815-3.9556497 0 0zm5.505769 1.5233353c2.6097579-2.7721354-5.6765164-1.1249245 0 0zm-16.2159878-11.5020183c4.2502728-3.2693119-5.03537638-1.2421042 0 0zm219.7637124 137.4835197c.123876-3.793272-3.250897 1.705801 0 0zm-22.33109-15.243397c.634444-4.360756-2.870901.379997 0 0zm28.471303 16.714839c5.944356.020088 18.013859-1.851439 5.080575-1.844743-2.033904.314711-11.828448.249426-5.080575 1.844743zm-204.8484186-130.1279871c4.812735-.326429 7.5262806-5.3032155-.9357631-5.0219844-13.1107274-1.3525878 11.5673041 4.4930021-1.6806908 2.8190072-1.7777825 1.1768184 2.5109922 2.5310802 2.6164539 2.2029772zm4.2368808 2.1460614c-.5038724-3.0868465-1.4915294 1.6405149 0 0zm5.0286804-13.4053505c2.0857976-2.58967-2.890989-.6930338 0 0zm-16.0084123-26.7521111c8.5926153-2.9160989 20.3373629-6.1988028 24.3917784 1.4396356-4.1263973-4.9633946-1.6672989-9.8548075 2.229761-2.58967 5.512465 7.3438152 8.2712084-3.3412937 4.6871855-5.807088 4.0878953 5.0738783 8.729883 7.4743868 2.7336335.321407 6.5202098-7.8409917-13.0454415 1.0261588-17.4915717.9340891-2.1376914.960873-22.0883616 5.0872702-16.5507867 5.7016263zm5.0353763-9.6371881c4.8981089-3.6945066 16.9425015 2.2029772 9.2136675-3.6760926-.7583197-.6662499-16.9224136 4.4595222-9.2136675 3.6760926zm17.8581767.7382317c5.7284102.1439636-2.4708163-7.7037241 4.3557345-4.1464851-1.1182285-3.6610267-7.9514754-4.3473646-11.292769-5.81211-1.8899401 3.3479896 3.8434921 10.003793 6.9370345 9.9585951zm-14.7261324-16.2109657c1.9820099-2.6867617-3.4785612 1.3676537 0 0zm7.2986174 1.7459765c9.2387774-1.2220162-2.3553107-3.9757376-1.8648302-.0970917zm-13.6279917-10.65832492c-6.5068179-8.49384968 12.235228 1.42624362 5.6229485-7.46769086-5.5643587-4.42604228-10.9060762 4.99017854-5.6229485 7.46769086zm83.4704034 44.95680462c2.983059-5.2848016-12.312232-7.1278699-2.00712-1.8715262.947481.3147111.73321 2.2364571 2.00712 1.8715262z" />
        <g transform="translate(0 244)">
          <path d="m53.1076167 7.49458425c-.6591741 2.60663965-1.0685668 6.97936845-1.2219595 13.11714975 0 1.206413-.5430932 1.8096195-1.6313523 1.8096195-1.0892955 0-1.8469311-.5265101-2.2760162-1.5753846-1.1659919-2.8377652-2.270834-4.8173604-3.3238542-5.947077-1.2426883-1.3193846-2.8947692-2.1174413-4.9552065-2.3889878-2.2148664-.3513522-7.7328583-.5254737-16.5550121-.5254737-2.0200162 0-3.3435466.2145425-3.9633361.6436275-.3886639.2705102-.5824777.8540243-.5824777 1.7484697v26.4094575c0 .8944453.5627854 1.3193846 1.6873198 1.2831093 3.4617004-.0404211 8.473911-.2756923 15.0407774-.7006316 1.2831093-.1575385 2.1495708-.5741862 2.5952388-1.2551255.4498138-.6799028.8871903-2.436664 1.3121296-5.2754656.2705101-1.5546559 1.1856842-2.1578623 2.7403401-1.8054737 1.320421.2715466 1.8873522.8747531 1.692502 1.8054737-1.0892956 5.2879028-1.4416842 12.1667368-1.0530203 20.6396113.0414575 1.0084535-.5990607 1.5546559-1.922591 1.6323887-1.0892956.1171174-1.7691984-.4663968-2.040745-1.7495061-1.007417-4.8577814-2.8864777-7.4530202-5.6237085-7.7857166-2.7403401-.3275141-7.2022024-.4933441-13.3804048-.4933441-.6995952 0-1.0478381.2508178-1.0478381.7565992v26.235336c0 1.9433199.7161781 3.2668502 2.1537166 3.9633361 1.1297166.5835141 3.5580891 1.1089878 7.2871903 1.5753846 1.9070445.1938137 2.7403401 1.0322915 2.510251 2.5061052-.2352713 1.2831093-1.9433198 1.7888907-5.1334737 1.5173442-9.2108178-.7400162-16.8099757-.6995952-22.79332793.1181538-1.67280972.2300891-2.50610526-.4498138-2.50610526-2.0407449 0-1.0125992.83329554-1.595077 2.50610526-1.7495061 3.80890688-.429085 5.71180567-3.7726316 5.71180567-10.0275304v-49.9075627c0-2.5620729-.45706883-4.534413-1.36809717-5.9149474-.91517409-1.3805344-2.61596761-2.6356599-5.10134413-3.7612308-1.55465587-.6995951-2.1371336-1.6510445-1.74846963-2.85745745.19381376-.73690688.50578137-1.1462996.93072064-1.22299595.38866397-.11711741 1.42095547-.04042106 3.088583.23423482 2.45013765.38866396 8.22309315.58351417 17.31575705.58351417 10.7291984 0 19.9959838-.23527126 27.8107207-.70063158 2.6024939-.15753847 3.906332.05700405 3.906332.63948178 0 .1585749-.0196923.31196761-.0611498.46639676z" />
          <path d="m90.9152389 81.5023158c0 1.5546559-.8747531 2.2345587-2.6232227 2.0397085-5.3604534-.5057814-12.0081619-.429085-19.9358705.2311255-1.5950769.1575385-2.5745101.1171174-2.946591-.1129717-.3689717-.2352712-.5513847-.874753-.5513847-1.9277732 0-.9307207 1.057166-1.7163401 3.1746073-2.3599677 2.1215871-.6394817 3.1777166-2.5548178 3.1777166-5.7408259v-52.7608745c0-3.1497328-.4570688-5.4620242-1.3680971-6.9399838-.9151741-1.476923-2.5185425-2.6232226-4.8101053-3.4368259-1.206413-.429085-1.8096194-1.03229147-1.8096194-1.80961941 0-1.1659919.874753-2.04074494 2.6232226-2.62322267 2.6439515-.85506073 5.385328-2.17444534 8.2230932-3.96437247 2.3319838-1.40022672 3.8099433-2.09671255 4.4286963-2.09671255 1.4375385 0 2.1588988.9877247 2.1588988 2.97146559 0-.15339272-.0777328 1.78992712-.2352713 5.82995951-.1129716 3.8462186-.1533927 7.6354332-.1129716 11.3686802l.230089 52.0602429c0 2.3724048.5835142 4.0939271 1.7495061 5.1624939s3.1694251 1.7774899 6.004081 2.1257328c1.7484696.1938138 2.6232227.8540243 2.6232227 1.9837409z" />
          <path d="m143.643984 78.0644534c0 .817749-1.486251 2.0490365-4.457717 3.700081-2.975611 1.652081-5.356307 2.4781215-7.142089 2.4781215-1.51838 0-2.857457-.7369069-4.023449-2.2148664-1.165992-1.4769231-1.984778-2.21383-2.450138-2.21383-.348243 0-2.194138.7970203-5.538721 2.3879514-3.3394 1.595077-6.703676 2.3931336-10.084534 2.3931336-3.186008 0-5.850688-.9348664-7.987822-2.7973441-2.3319836-2.0614737-3.4979755-4.8588178-3.4979755-8.3972146 0-6.7244048 7.6965825-11.5428016 23.0887125-14.4572631 2.639806-.5057814 3.984065-1.5753846 4.02034-3.2067369l.118154-3.7322105c.234235-6.3730526-2.583838-9.5590607-8.454219-9.5590607-1.671773 0-3.254413 1.493506-4.753101 4.4857004-1.493506 2.9963401-3.643077 4.6069635-6.441457 4.8422348-3.186008.3078219-4.781085-1.0322915-4.781085-4.0244858 0-1.8666235 2.372404-4.0400324 7.113068-6.5305911 4.975936-2.602494 9.758057-3.906332 14.344292-3.906332 7.887287 0 11.793619 3.7529393 11.716923 11.2546721l-.235271 24.0163238c-.036276 2.5268341 1.033328 3.7892146 3.206737 3.7892146.429085 0 1.246834-.0963886 2.449101-.2912388 1.207449-.1938138 1.907044-.2912389 2.101895-.2912389 1.12557 0 1.688356.7607449 1.688356 2.2749797zm-17.955239-13.2912712c.040421-.9721782-.186559-1.6158057-.672648-1.9236275-.486089-.3109312-1.25098-.372081-2.299854-.1772308-9.368356 1.6717733-14.052016 4.724081-14.052016 9.1538138 0 4.4691174 2.428372 6.7036761 7.28719 6.7036761 1.94332 0 3.947789-.3679353 6.004081-1.1048421 2.412826-.8581701 3.615093-1.8863158 3.615093-3.0927288z" />
          <path d="m186.987789 71.3566316c0 4.1208745-1.587821 7.3970526-4.753101 9.8254251-3.166316 2.4294089-7.490332 3.6441133-12.972048 3.6441133-3.651369 0-7.307919-.3886639-10.959288-1.1659919-3.149733-.7006315-4.975935-1.3401133-5.481716-1.9236275-.311968-.5462024-.465361-3.2057004-.465361-7.9878219 0-2.0604372.465361-3.129004 1.400227-3.2057004.931757-.1181538 1.728777.388664 2.388988 1.5142349 2.914461 5.0930526 7.61885 7.6395789 14.10902 7.6395789 5.477571 0 8.218947-1.9070445 8.218947-5.7169878 0-1.6676276-.619789-3.0688907-1.866623-4.1944616-1.360842-1.2831093-3.999611-2.7807611-7.926672-4.4898461-5.676567-2.5257976-9.465781-4.740664-11.36868-6.6477085-2.061474-2.0200162-3.08962-4.740664-3.08962-8.1619434 0-4.1986073 1.61166-7.4613117 4.838089-9.7932955 2.992195-2.2552875 6.995952-3.3808583 12.008162-3.3808583 3.149733 0 6.02481.2508178 8.63145.7576356 2.79838.5057814 4.255611 1.1255709 4.372728 1.8655871.307822 2.1744453.95145 5.3241781 1.923628 9.446089.117117.5016357-.430121.9110284-1.632389 1.2219595-1.283109.2715466-2.137133.0570041-2.566218-.6394817-3.068891-5.0163563-6.955531-7.5224616-11.659919-7.5224616-5.324178 0-7.987822 1.709085-7.987822 5.1303644 0 1.9060081.720324 3.4202429 2.157862 4.5458138 1.28311.9721781 4.294996 2.4905587 9.036697 4.5509959 4.974898 2.1371336 8.355757 4.0607611 10.145684 5.7688097 2.331984 2.2148664 3.497975 5.1904778 3.497975 8.919579z" />
          <path d="m255.575061 81.5593198c0 1.3598057-.915174 2.081166-2.741377 2.1578624-2.720648.040421-6.279773.2342348-10.668048.5824777-2.177555.429085-3.732211.1585749-4.663968-.8136032-6.141927-6.6072875-11.352097-13.5265425-15.627401-20.7567288-.348243-.6197894-.793911-.931757-1.340113-.931757-.660211 0-1.805474.5835141-3.436826 1.749506-1.830348 1.0084535-2.741377 2.4491012-2.741377 4.311579 0 1.3235303.036276 3.2264291.117118 5.7169878.077733 2.4853765.696486 4.1167288 1.862478 4.8940567.817749.5472389 2.705101.9721781 5.655838 1.2841458 1.826202.2342348 2.741376.9141376 2.741376 2.0397085 0 .8954817-.146138 1.4499757-.437376 1.6603724-.291239.2145425-1.061312.2632551-2.304.1461377-3.88664-.3482429-10.453506-.1544292-19.703709.5824777-2.331984.1948502-3.595401-.0974251-3.790251-.874753-.076696-.2705101-.117117-.6591741-.117117-1.1659919 0-1.2022672 1.18672-2.1174413 3.559125-2.7361944 2.137134-.5472388 3.205701-3.0533441 3.205701-7.5224615v-50.9554008c0-3.1860081-.310932-5.4008745-.934867-6.6435628-.854024-1.5950769-2.643951-2.8388016-5.364599-3.7332469-1.278964-.4249393-1.922591-1.02814577-1.922591-1.80547371 0-1.1297166.915174-2.00446964 2.74034-2.62322267 2.915498-.97217814 5.692113-2.3122915 8.336065-4.02448583 2.13817-1.39711741 3.4617-2.09774899 3.963336-2.09774899 1.596113 0 2.393133 1.00845344 2.393133 3.03261538 0-.27465587-.019692 1.65208098-.061149 5.76984616-.036276 2.83776516-.055968 6.64770846-.055968 11.42879356l.117117 36.4939919c0 1.0115627.271547 1.5142348.813604 1.5142348.583514 0 1.477959-.5026721 2.684372-1.5142348 3.226429-2.526834 7.190802-5.8299596 11.891045-9.9114494.934866-.9711417 1.400226-1.7484697 1.400226-2.3319838 0-1.0478381-1.574348-1.7888907-4.719935-2.21383-1.360842-.1585749-2.004469-.9151741-1.927773-2.2760162.117117-1.3598057.798057-1.9433198 2.040745-1.7484696 2.80149.3886639 6.88298.6032065 12.242397.6436275 3.733247.0362753 7.445765.0570041 11.138591.0570041 1.202267.040421 1.805473.7565991 1.805473 2.1578623 0 1.3193846-.951449 2.0397085-2.854348 2.1578624-2.99634.1129716-5.814413.7928744-8.453182 2.0397085-3.692826 1.6686639-7.640615 4.6038542-11.838186 8.8024615-.307822.2342348-.466397.5254737-.466397.8737166 0 .5430931.660211 1.8469312 1.984777 3.9073684 4.857782 7.3846154 9.445053 12.9596113 13.756632 16.7322429 2.761069 2.3692956 5.34387 3.5549798 7.752551 3.5549798 1.789927 0 2.898914.1254089 3.323854.3803725.430121.2518542.644664.9234655.644664 2.0086153z" />
        </g>
      </g>
    </svg>
  );
}
