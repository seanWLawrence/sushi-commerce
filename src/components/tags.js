// @flow
import * as React from 'react';

type Props = {
  tags: string[],
};

let Tag = ({ tag }: { tag: string }) => {
  let tagStyles = { textTransform: 'capitalize' };

  return (
    <span style={tagStyles} className="tag is-info" key={tag}>
      {tag}
    </span>
  );
};
export default class Tags extends React.Component<Props> {
  displayTags(tags: string[]) {
    return tags.map((tag) => {
      return <Tag tag={tag} key={tag} />;
    });
  }

  render() {
    let { tags } = this.props;

    return (
      <section className="tags is-rounded">{this.displayTags(tags)}</section>
    );
  }
}
