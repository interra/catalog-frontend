import styled from 'styled-components';

const StyledA = styled.a`
  list-style-type: none;
  width: 100%;
  padding: 6px 20px 6px 10px;
  position: relative;
  display: block;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  &:hover {
    text-decoration: none;
    background: rgba(0, 0, 0, 0.03);
  }
  &:hover:after {
    content: "\\f055";
    color: #5cb85c;
    font-family: "Font Awesome 5 Free";
    position: absolute;
    top: 6px;
    right: 6px;
  }
  &.active {
    background-color: #eaeaea;
  }
  &.active:after {
    content: "\\f00d";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    top: 6px;
    right: 6px;
  }
`;

export default StyledA;
