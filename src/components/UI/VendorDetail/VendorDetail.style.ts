import styled from "@emotion/styled";
import Image from "next/image";
import { VendorDetailMoreProps } from "@src/types";

export const SLayout = styled.div`
  position: relative;
  margin-top: 50px;
`;

export const STab = styled.ul`
  padding: 0;
  border-top: 2px solid #555;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  list-style-type: none;
  font-size: 0;
  position: absolute;
  top: 0;
  width: 100%;

  > li {
    display: inline-block;
    padding: 15px 20px 14px;
    width: 25%;
    border-right: 1px solid #ccc;
    background-color: #fafafa;
    text-align: center;
    color: #555;
    font-weight: bold;
    font-size: 16px;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

export const SDetail = styled.div`
  padding-top: 50px;
`;

export const SEssential = styled.div<VendorDetailMoreProps>`
  margin-bottom: 30px;

  > div {
    height: ${(props) => (props.essentialMore ? "auto" : "200px")};
    overflow: hidden;
  }
`;

export const SEssentialTitle = styled.p`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const SEssentialSimple = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
  font-size: 1em;

  border-top: 1px solid #eee;
`;

export const SEssentialInfo = styled.div`
  display: flex;
  width: 50%;

  color: #333;
  font-size: 12px;
  word-break: keep-all;
  border-bottom: 1px solid #eee;

  > div {
    padding: 12px 16px;
    line-height: 17px;

    &:nth-of-type(1) {
      min-width: 170px;
    }

    &:nth-of-type(2) {
      min-width: 320px;
    }
  }
`;

export const SEssentialMore = styled.p<VendorDetailMoreProps>`
  width: 100%;
  padding: 12px 0;
  text-align: center;
  border-bottom: 1px solid #eee;

  display: ${(props) => (props.essentialMore ? "none" : "block")};

  > button {
    display: inline-block;
    height: 17px;

    font-size: 14px;
    font-weight: 700;
    color: #346aff;
  }
`;

export const SContent = styled.div<VendorDetailMoreProps>`
  > div {
    overflow: hidden;
    height: ${(props) => (props.contentMore ? "auto" : "150vh")};

    span > span {
      padding: 0 !important;
    }
  }
`;

export const SContentMore = styled.p<VendorDetailMoreProps>`
  width: 100%;
  padding: 12px 0;
  text-align: center;
  border-bottom: 1px solid #eee;

  display: ${(props) => (props.contentMore ? "none" : "block")};
`;

export const SImage = styled(Image)`
  position: relative !important;
  height: 100% !important;
`;
