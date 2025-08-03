import React, {type ReactNode} from 'react';
import DocItem from '@theme/DocItem';
import type Props from '@theme/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';

import GiscusWrapper from '../../components/GiscusWrapper';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  const {frontMatter} = props.content;
  const showComments = frontMatter.comments ?? true;

  return (
    <>
      <DocItem {...props} />
      
      {/* Conditionally render GiscusWrapper based on frontmatter */}
      {showComments && <GiscusWrapper />}
    </>
  );
}