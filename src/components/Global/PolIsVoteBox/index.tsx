import React, { useEffect } from 'react';

import { initializePolis } from 'resources/js/polis.embed.js';
import { StyledPolIsVoteBox } from './styles';

export interface PolIsVoteBoxTypes {
  className?: string;
  pageId: string;
  siteId: string;
}

const PolIsVoteBox: React.FC<PolIsVoteBoxTypes> = ({
  className,
  pageId,
  siteId,
}: PolIsVoteBoxTypes) => {
  useEffect(() => {
    initializePolis();
  }, []);

  return (
    <>
      <StyledPolIsVoteBox
        className={`${className} polis`}
        data-page_id={pageId}
        data-site_id={`polis_site_id_${siteId}`}
      />
    </>
  );
};

export default PolIsVoteBox;
