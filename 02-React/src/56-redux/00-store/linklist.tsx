import * as React from "react";
import { connect } from "react-redux";

interface Ilinks {
    title: string;
    url: string;
}

interface ILinkListProps {
  links:Ilinks[]
}
interface IRootState {
  links:Ilinks[]
}

const PureLinkList = (props: ILinkListProps) => {
  return (
    <div>
      {props.links.map(l => (
        <div>{l.title} - {l.url}</div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    links: state.links
  }
}

const LinkList = connect(mapStateToProps)(PureLinkList)

export default LinkList