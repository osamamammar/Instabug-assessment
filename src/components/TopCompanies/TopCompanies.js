import React from "react";
import {
  AsanaCompany,
  BuzzfeedCompany,
  HousePartyCompany,
  LyftCompany,
  OneplusCompany,
} from "../../assets";
import "./TopCompanies.scss";

const TopCompanies = () => {
  return (
    <div className="top-companies-container">
      <p className="top-companies-container__title">
        Trusted by the top companies.
      </p>

      <ul className="top-companies-container__logos">
        <li>
          <LyftCompany color="#999" width={29.5} height={21.19} />
        </li>
        <li>
          <BuzzfeedCompany color="#999" width={80} height={14} />
        </li>
        <li>
          <AsanaCompany color="#999" width={83} height={20}></AsanaCompany>
        </li>
        <li>
          <OneplusCompany color="#999" width={91} height={29}></OneplusCompany>
        </li>

        <li>
          <HousePartyCompany
            color="#999"
            width={110}
            height={17}
          ></HousePartyCompany>
        </li>
      </ul>
    </div>
  );
};

export default TopCompanies;
